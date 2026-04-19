import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ArrowRight } from "lucide-react";

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-cta-gradient section-padding-sm">
      <div className="absolute inset-0 bg-cyan-glow opacity-50" />

      <Container className="relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-5 tracking-tight">
            Start enforcing AI policy{" "}
            <span className="text-island-cyan">today</span>
          </h2>
          <p className="text-white/65 text-base leading-relaxed mb-8">
            Deploy Umai in under 10 minutes. No proxy required, no infrastructure
            changes, no lock-in. Start free and scale to millions of evaluations
            per day.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="secondary" size="lg" href="/contact">
              Get started — it&apos;s free <ArrowRight className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="lg" href="/contact">
              Talk to an engineer
            </Button>
          </div>
          <p className="mt-6 text-xs text-white/40">
            No credit card required · Free forever for small projects · Enterprise
            plans available
          </p>
        </div>
      </Container>
    </section>
  );
}
