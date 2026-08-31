/*
 * Generates documents/UMAI-Policy-Library-v1.1.docx from the single source of
 * truth in src/lib/policy-library-data.ts, so the Word document never drifts
 * from the /docs/policy-library pages on the site.
 *
 * Run:  node scripts/generate-policy-docx.js
 *
 * Requires the `docx` package. It is not a project dependency, so the script
 * resolves it from a global install if a local one is not present. If neither
 * is found, install it first:  npm i -g docx   (or add it as a devDependency).
 */
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const Module = require("module");

const PROJECT = path.resolve(__dirname, "..");

function requireDocx() {
  try {
    return require("docx");
  } catch {
    try {
      const globalRoot = execSync("npm root -g").toString().trim();
      return require(path.join(globalRoot, "docx"));
    } catch (err) {
      throw new Error(
        "Could not load 'docx'. Install it with `npm i -g docx` or add it as a devDependency.\n" +
          String(err),
      );
    }
  }
}

const ts = require(path.join(PROJECT, "node_modules/typescript"));
const {
  Document,
  Packer,
  Paragraph,
  TextRun,
  HeadingLevel,
  AlignmentType,
  TableOfContents,
  Table,
  TableRow,
  TableCell,
  WidthType,
  BorderStyle,
  ShadingType,
  ImageRun,
  PageBreak,
  Footer,
  PageNumber,
  LevelFormat,
} = requireDocx();

// ---- Load the TS data module (single source of truth) ----
function loadData() {
  const file = path.join(PROJECT, "src/lib/policy-library-data.ts");
  const source = fs.readFileSync(file, "utf8");
  const js = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2019,
    },
  }).outputText;
  const m = new Module(file);
  m.filename = file;
  m.paths = Module._nodeModulePaths(path.dirname(file));
  m._compile(js, file);
  return m.exports;
}

const { POLICY_FRAMEWORKS, POLICY_LIBRARY_TOTAL } = loadData();

// ---- Palette ----
const NAVY = "0B1B3A";
const BLUE = "0056F9";
const INK = "1A1A1A";
const GRAY = "5B6472";
const LIGHT = "EEF2FB";
const RULE = "D6DCEA";

// ---- Helpers ----
const DXA = (inches) => Math.round(inches * 1440);

function heading(text, level, opts = {}) {
  return new Paragraph({
    heading: level,
    spacing: { before: opts.before ?? 240, after: opts.after ?? 120 },
    children: [new TextRun({ text, color: opts.color })],
    ...(opts.pageBreakBefore ? { pageBreakBefore: true } : {}),
  });
}

function body(text, opts = {}) {
  return new Paragraph({
    spacing: { after: opts.after ?? 140, line: 276 },
    alignment: opts.align,
    children: [
      new TextRun({
        text,
        size: opts.size ?? 21,
        color: opts.color ?? INK,
        bold: opts.bold,
        italics: opts.italics,
      }),
    ],
  });
}

function bullet(text, opts = {}) {
  return new Paragraph({
    numbering: { reference: "bullets", level: 0 },
    spacing: { after: 80, line: 264 },
    children: [new TextRun({ text, size: 21, color: opts.color ?? INK })],
  });
}

function cell(children, { width, shade, bold, color, size, align } = {}) {
  const paras = (Array.isArray(children) ? children : [children]).map((t) =>
    typeof t === "string"
      ? new Paragraph({
          alignment: align,
          spacing: { after: 0, line: 252 },
          children: [
            new TextRun({ text: t, size: size ?? 19, bold, color: color ?? INK }),
          ],
        })
      : t,
  );
  return new TableCell({
    width: { size: width, type: WidthType.DXA },
    shading: shade
      ? { type: ShadingType.CLEAR, fill: shade, color: "auto" }
      : undefined,
    margins: { top: 60, bottom: 60, left: 110, right: 110 },
    children: paras,
  });
}

function noBorders() {
  const none = { style: BorderStyle.NONE, size: 0, color: "FFFFFF" };
  return {
    top: none,
    bottom: none,
    left: none,
    right: none,
    insideHorizontal: none,
    insideVertical: none,
  };
}

function thinBorders(color = RULE) {
  const b = { style: BorderStyle.SINGLE, size: 4, color };
  return {
    top: b,
    bottom: b,
    left: b,
    right: b,
    insideHorizontal: b,
    insideVertical: b,
  };
}

function metaTable(policy) {
  const total = DXA(6.5);
  const labelW = DXA(1.15);
  const valueW = total - labelW;
  const rows = [
    ["Type", policy.type],
    ["Phase", policy.phase],
    ["Action", policy.action],
    ["Basis", policy.basis],
  ].map(
    ([k, v]) =>
      new TableRow({
        children: [
          cell(k.toUpperCase(), {
            width: labelW,
            shade: LIGHT,
            bold: true,
            color: NAVY,
            size: 16,
          }),
          cell(v, { width: valueW, size: 19 }),
        ],
      }),
  );
  return new Table({
    columnWidths: [labelW, valueW],
    width: { size: total, type: WidthType.DXA },
    borders: thinBorders(),
    rows,
  });
}

// ---- Cover ----
const logo = fs.readFileSync(path.join(PROJECT, "public/assets/umailogo_dark.png"));
const logoW = 240;
const logoH = Math.round((logoW * 2283) / 10034);

const cover = [
  new Paragraph({
    spacing: { before: 1600, after: 0 },
    alignment: AlignmentType.LEFT,
    children: [
      new ImageRun({
        type: "png",
        data: logo,
        transformation: { width: logoW, height: logoH },
      }),
    ],
  }),
  new Paragraph({
    spacing: { before: 520, after: 0 },
    children: [
      new TextRun({
        text: "AI SECURITY GUARDRAIL",
        bold: true,
        size: 24,
        color: BLUE,
        allCaps: true,
      }),
    ],
  }),
  new Paragraph({
    spacing: { after: 60 },
    children: [
      new TextRun({ text: "Policy Library", bold: true, size: 68, color: NAVY }),
    ],
  }),
  new Paragraph({
    spacing: { after: 360 },
    children: [
      new TextRun({
        text: "Ready-made guardrail policy packages for enterprise AI governance",
        size: 26,
        color: GRAY,
      }),
    ],
  }),
  new Table({
    columnWidths: [DXA(6.5)],
    width: { size: DXA(6.5), type: WidthType.DXA },
    borders: {
      ...noBorders(),
      left: { style: BorderStyle.SINGLE, size: 24, color: BLUE },
    },
    rows: [
      new TableRow({
        children: [
          cell(
            [
              new Paragraph({
                spacing: { after: 60 },
                children: [
                  new TextRun({
                    text: `${POLICY_LIBRARY_TOTAL} runtime policies across 4 frameworks`,
                    bold: true,
                    size: 22,
                    color: INK,
                  }),
                ],
              }),
              new Paragraph({
                children: [
                  new TextRun({
                    text: POLICY_FRAMEWORKS.map(
                      (f) => `${f.name} (${f.policies.length})`,
                    ).join("   ·   "),
                    size: 20,
                    color: GRAY,
                  }),
                ],
              }),
            ],
            { width: DXA(6.5) },
          ),
        ],
      }),
    ],
  }),
  new Paragraph({
    spacing: { before: 900, after: 0 },
    children: [
      new TextRun({
        text: "Coverage",
        bold: true,
        size: 18,
        color: GRAY,
        allCaps: true,
      }),
    ],
  }),
  new Paragraph({
    children: [
      new TextRun({
        text: "KVKK  ·  GDPR  ·  EU AI Act  ·  OWASP LLM Top 10",
        size: 22,
        color: INK,
      }),
    ],
  }),
  new Paragraph({
    spacing: { before: 40 },
    children: [
      new TextRun({ text: "Version 1.1  ·  July 2026", size: 20, color: GRAY }),
    ],
  }),
  new Paragraph({
    spacing: { before: 40 },
    children: [
      new TextRun({
        text: "Prepared by UMAI  ·  umaisolutions.com",
        size: 20,
        color: GRAY,
      }),
    ],
  }),
  new Paragraph({ children: [new PageBreak()] }),
];

// ---- Table of Contents ----
const toc = [
  heading("Contents", HeadingLevel.HEADING_1, { color: NAVY }),
  new TableOfContents("Contents", { hyperlink: true, headingStyleRange: "1-1" }),
  new Paragraph({ children: [new PageBreak()] }),
];

// ---- Overview ----
const overview = [
  heading("Overview", HeadingLevel.HEADING_1, { color: NAVY }),
  body(
    "The UMAI Policy Library is a curated set of ready-made guardrail policy packages that map directly onto the regulatory and security frameworks enterprises are held to. Each package is a set of runtime guardrail policies that run on the UMAI AI Engine and can be deployed, customized, and versioned without changing application code.",
  ),
  body(
    `There are ${POLICY_LIBRARY_TOTAL} policies in total, organized into four packages: KVKK (${POLICY_FRAMEWORKS[0].policies.length}), GDPR (${POLICY_FRAMEWORKS[1].policies.length}), EU AI Act (${POLICY_FRAMEWORKS[2].policies.length}), and the OWASP Top 10 for LLM Applications (${POLICY_FRAMEWORKS[3].policies.length}).`,
  ),

  heading("How the policies work", HeadingLevel.HEADING_2, { color: NAVY }),
  body("Every policy is evaluated in one or both of two runtime phases:", {
    after: 80,
  }),
  bullet("PRE_LLM — the user input is evaluated before it ever reaches the model."),
  bullet("POST_LLM — the model output is evaluated before it returns to the user."),

  heading("Policy types", HeadingLevel.HEADING_2, { color: NAVY }),
  (() => {
    const c1 = DXA(1.8),
      c2 = DXA(2.0),
      c3 = DXA(2.7);
    return new Table({
      columnWidths: [c1, c2, c3],
      width: { size: c1 + c2 + c3, type: WidthType.DXA },
      borders: thinBorders(),
      rows: [
        new TableRow({
          tableHeader: true,
          children: [
            cell("Type", { width: c1, shade: NAVY, bold: true, color: "FFFFFF", size: 18 }),
            cell("Mechanism", { width: c2, shade: NAVY, bold: true, color: "FFFFFF", size: 18 }),
            cell("Latency", { width: c3, shade: NAVY, bold: true, color: "FFFFFF", size: 18 }),
          ],
        }),
        new TableRow({
          children: [
            cell("Heuristic", { width: c1, bold: true }),
            cell("Deterministic pattern matching (Regex, Exact Match, DLP, Max Length)", { width: c2 }),
            cell("Sub-millisecond", { width: c3 }),
          ],
        }),
        new TableRow({
          children: [
            cell("Context-Aware", { width: c1, bold: true }),
            cell("Semantic classification evaluated by an LLM", { width: c2 }),
            cell("Sub-50 ms (p95 target)", { width: c3 }),
          ],
        }),
      ],
    });
  })(),

  heading("Decision actions", HeadingLevel.HEADING_2, { color: NAVY }),
  bullet("BLOCK — stop the request or response."),
  bullet("ALLOW_WITH_WARNINGS — pass through with a warning."),
  bullet("FLAG — monitor and log for review."),
  bullet("Redaction — mask the sensitive content."),
  body(
    "Every decision is written to a hash-chained audit ledger and can be exported as compliance evidence.",
    { after: 160 },
  ),

  heading("Deployment model", HeadingLevel.HEADING_2, { color: NAVY }),
  (() => {
    const c1 = DXA(1.9),
      c2 = DXA(1.5),
      c3 = DXA(3.1);
    const row = (a, b, c, header) =>
      new TableRow({
        tableHeader: header,
        children: [
          cell(a, { width: c1, shade: header ? NAVY : undefined, bold: header, color: header ? "FFFFFF" : NAVY, size: header ? 18 : 19 }),
          cell(b, { width: c2, shade: header ? NAVY : undefined, bold: header, color: header ? "FFFFFF" : INK, size: header ? 18 : 19 }),
          cell(c, { width: c3, shade: header ? NAVY : undefined, bold: header, color: header ? "FFFFFF" : INK, size: header ? 18 : 19 }),
        ],
      });
    return new Table({
      columnWidths: [c1, c2, c3],
      width: { size: c1 + c2 + c3, type: WidthType.DXA },
      borders: thinBorders(),
      rows: [
        row("Phase", "Duration", "Scope", true),
        row("1. Shadow Mode", "4–8 weeks", "Entire package in MONITOR; false-positive measurement and threshold tuning."),
        row("2. Staged Enforcement", "8–12 weeks", "Heuristic DLP and prohibited-practice policies to ENFORCE first, then Context-Aware policies."),
        row("3. Full Production", "Continuous", "Entire package in ENFORCE; monthly compliance evidence pack and Governance Health Score reporting."),
      ],
    });
  })(),
  body(
    "Every package is customized to the organization's project structure, confidential-term glossary, and approved model list. Policy changes are published in a versioned way through Control Center without redeploying the application.",
    { after: 40 },
  ),
  new Paragraph({ children: [new PageBreak()] }),
];

// ---- Framework sections ----
const frameworkSections = [];
POLICY_FRAMEWORKS.forEach((fw, idx) => {
  const accent = fw.accent.replace("#", "");
  if (idx > 0) frameworkSections.push(new Paragraph({ children: [new PageBreak()] }));

  frameworkSections.push(
    heading(`${fw.name} — ${fw.fullName}`, HeadingLevel.HEADING_1, { color: NAVY }),
    new Paragraph({
      spacing: { after: 160 },
      border: { bottom: { style: BorderStyle.SINGLE, size: 12, color: accent } },
      children: [
        new TextRun({
          text: `${fw.regulation}   ·   ${fw.policies.length} policies`,
          size: 20,
          color: GRAY,
          bold: true,
        }),
      ],
    }),
    body(fw.description),
    heading("Coverage focus", HeadingLevel.HEADING_2, { color: NAVY, after: 80 }),
  );
  fw.highlights.forEach((h) => frameworkSections.push(bullet(h)));

  const hasHighRisk = fw.policies.some((p) => p.highRisk);
  if (hasHighRisk) {
    frameworkSections.push(
      new Paragraph({
        spacing: { before: 80, after: 120 },
        children: [
          new TextRun({ text: "★ ", color: "C08A00", size: 20 }),
          new TextRun({
            text: "Policies marked with a star target critical-infrastructure and high-risk use scenarios under Annex III.",
            italics: true,
            size: 19,
            color: GRAY,
          }),
        ],
      }),
    );
  }

  frameworkSections.push(heading("Policies", HeadingLevel.HEADING_2, { color: NAVY }));

  fw.policies.forEach((p) => {
    frameworkSections.push(
      new Paragraph({
        keepNext: true,
        spacing: { before: 220, after: 60 },
        children: [
          new TextRun({ text: p.code, bold: true, size: 20, color: accent }),
          new TextRun({ text: "  ·  ", size: 20, color: GRAY }),
          new TextRun({ text: p.title, bold: true, size: 22, color: INK }),
          ...(p.highRisk ? [new TextRun({ text: "  ★", size: 20, color: "C08A00" })] : []),
        ],
      }),
      new Paragraph({
        spacing: { after: 100, line: 270 },
        children: [new TextRun({ text: p.description, size: 20, color: INK })],
      }),
      metaTable(p),
      new Paragraph({ spacing: { after: 60 }, children: [new TextRun({ text: "", size: 8 })] }),
    );
  });
});

// ---- Closing ----
const closing = [
  new Paragraph({ children: [new PageBreak()] }),
  heading("About this document", HeadingLevel.HEADING_1, { color: NAVY }),
  body(
    "This document is generated from the UMAI Policy Library and mirrors the online library at umaisolutions.com/docs/policy-library. All policy definitions are directly implementable with the UMAI AI Engine's Heuristic and Context-Aware policy types.",
  ),
  body(
    "Every policy runs in MONITOR mode first, is measured for false positives, and is then promoted to ENFORCE. Policies are versioned and managed through a draft, publish, and rollback workflow.",
    { after: 200 },
  ),
  body(
    "© 2026 UMAI (Ametrica Tech / Smarttech). Prepared for enterprise AI governance.",
    { size: 18, color: GRAY, italics: true },
  ),
];

// ---- Document ----
const doc = new Document({
  creator: "UMAI",
  title: "UMAI Policy Library",
  description:
    "Ready-made guardrail policy packages for KVKK, GDPR, EU AI Act, and OWASP LLM Top 10.",
  features: { updateFields: true },
  numbering: {
    config: [
      {
        reference: "bullets",
        levels: [
          {
            level: 0,
            format: LevelFormat.BULLET,
            text: "•",
            alignment: AlignmentType.LEFT,
            style: { paragraph: { indent: { left: 360, hanging: 200 } } },
          },
        ],
      },
    ],
  },
  styles: {
    default: { document: { run: { font: "Calibri", size: 21, color: INK } } },
    paragraphStyles: [
      {
        id: "Heading1",
        name: "Heading 1",
        basedOn: "Normal",
        next: "Normal",
        quickFormat: true,
        run: { font: "Calibri", size: 34, bold: true, color: NAVY },
        paragraph: { spacing: { before: 280, after: 140 } },
      },
      {
        id: "Heading2",
        name: "Heading 2",
        basedOn: "Normal",
        next: "Normal",
        quickFormat: true,
        run: { font: "Calibri", size: 25, bold: true, color: NAVY },
        paragraph: { spacing: { before: 220, after: 100 } },
      },
    ],
  },
  sections: [
    {
      properties: {
        page: {
          size: { width: 12240, height: 15840 },
          margin: { top: 1080, bottom: 1080, left: 1200, right: 1200 },
        },
      },
      footers: {
        default: new Footer({
          children: [
            new Paragraph({
              alignment: AlignmentType.CENTER,
              border: { top: { style: BorderStyle.SINGLE, size: 4, color: RULE } },
              spacing: { before: 80 },
              children: [
                new TextRun({ text: "UMAI Policy Library  ·  v1.1  ·  ", size: 16, color: GRAY }),
                new TextRun({
                  children: ["Page ", PageNumber.CURRENT, " of ", PageNumber.TOTAL_PAGES],
                  size: 16,
                  color: GRAY,
                }),
              ],
            }),
          ],
        }),
      },
      children: [...cover, ...toc, ...overview, ...frameworkSections, ...closing],
    },
  ],
});

const outDir = path.join(PROJECT, "documents");
fs.mkdirSync(outDir, { recursive: true });
const out = path.join(outDir, "UMAI-Policy-Library-v1.1.docx");
Packer.toBuffer(doc).then((buf) => {
  fs.writeFileSync(out, buf);
  console.log("Wrote", out, `(${buf.length} bytes, ${POLICY_LIBRARY_TOTAL} policies)`);
});
