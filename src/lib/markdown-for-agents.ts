import { NodeHtmlMarkdown } from "node-html-markdown";

const markdownConverter = new NodeHtmlMarkdown({
  bulletMarker: "-",
  codeFence: "```",
  codeBlockStyle: "fenced",
  useLinkReferenceDefinitions: false,
});

function stripTag(html: string, tagName: string) {
  const pattern = new RegExp(
    `<${tagName}\\b[^>]*>[\\s\\S]*?<\\/${tagName}>`,
    "gi",
  );

  return html.replace(pattern, "");
}

function extractTagContent(html: string, tagName: string) {
  const match = html.match(new RegExp(`<${tagName}\\b[^>]*>([\\s\\S]*?)<\\/${tagName}>`, "i"));

  if (!match) {
    return "";
  }

  return match[1]
    .replace(/<[^>]+>/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/\s+/g, " ")
    .trim();
}

function extractMetaDescription(html: string) {
  const match = html.match(
    /<meta\s+name=["']description["']\s+content=["']([\s\S]*?)["'][^>]*>/i,
  );

  if (!match) {
    return "";
  }

  return match[1]
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .trim();
}

function extractPrimaryContent(html: string) {
  const mainMatch = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/i);
  const articleMatch = html.match(/<article\b[^>]*>([\s\S]*?)<\/article>/i);
  const bodyMatch = html.match(/<body\b[^>]*>([\s\S]*?)<\/body>/i);

  return mainMatch?.[1] ?? articleMatch?.[1] ?? bodyMatch?.[1] ?? html;
}

export function convertHtmlToMarkdown(html: string) {
  const title = extractTagContent(html, "title");
  const description = extractMetaDescription(html);

  let primaryContent = extractPrimaryContent(html);

  primaryContent = stripTag(primaryContent, "script");
  primaryContent = stripTag(primaryContent, "style");
  primaryContent = stripTag(primaryContent, "noscript");
  primaryContent = stripTag(primaryContent, "svg");

  const markdownBody = markdownConverter
    .translate(primaryContent)
    .replace(/\n{3,}/g, "\n\n")
    .trim();

  const sections = [
    title ? `# ${title}` : "",
    description,
    markdownBody,
  ].filter(Boolean);

  const markdown = `${sections.join("\n\n")}\n`;
  const estimatedTokens = Math.max(1, Math.ceil(markdown.length / 4));

  return {
    markdown,
    estimatedTokens,
  };
}
