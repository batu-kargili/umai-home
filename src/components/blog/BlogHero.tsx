import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function BlogHero() {
  return (
    <section className="bg-midnight pt-[68px] section-padding-sm border-b border-white/5">
      <Container>
        <div className="max-w-xl">
          <SectionLabel light>Blog</SectionLabel>
          <h1 className="text-5xl font-bold text-white mb-4 tracking-tight">
            AI security, compliance,
            <br />
            and engineering
          </h1>
          <p className="text-white/60 text-base leading-relaxed">
            Deep dives from the Umai engineering and security teams on building
            responsible AI systems at scale.
          </p>
        </div>
      </Container>
    </section>
  );
}
