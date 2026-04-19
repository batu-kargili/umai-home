import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { ArrowRight, Play } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-hero-gradient pt-[68px]">
      {/* Background glows */}
      <div className="absolute inset-0 bg-cyan-glow" />
      <div className="absolute inset-0 bg-ocean-glow" />
      <div className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-denim/30 blur-[140px]" />
      <div className="absolute -bottom-20 -left-20 h-[400px] w-[400px] rounded-full bg-academy-blue/20 blur-[120px]" />

      {/* Dot-grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <Container className="relative z-10 py-24">
        <div className="max-w-3xl mx-auto text-center">
          {/* Eyebrow badge */}
          <div className="fade-up mb-6">
            <Badge color="cyan">Now in GA — Enterprise-ready AI guardrails</Badge>
          </div>

          {/* Headline */}
          <h1 className="fade-up delay-1 text-[52px] md:text-[68px] lg:text-[76px] font-bold text-white leading-[1.06] tracking-[-0.03em] mb-6">
            Enforce AI Policy
            <br />
            <span className="text-gradient-cyan">Before It Matters</span>
          </h1>

          {/* Subtitle */}
          <p className="fade-up delay-2 text-lg md:text-xl text-white/65 leading-relaxed max-w-2xl mx-auto mb-10">
            Umai intercepts every LLM request and response in real time — blocking
            policy violations, detecting prompt injection, and generating a full
            audit trail. Deploy in minutes, enforce in milliseconds.
          </p>

          {/* CTAs */}
          <div className="fade-up delay-3 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="secondary" size="lg" href="/contact">
              Start for free <ArrowRight className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="lg" href="/docs">
              <Play className="w-4 h-4" /> Read the docs
            </Button>
          </div>

          {/* Stats bar */}
          <div className="fade-up delay-4 mt-14 flex flex-col sm:flex-row items-center justify-center gap-8 border-t border-white/10 pt-10">
            {[
              { value: "< 2 ms",   label: "Policy evaluation latency" },
              { value: "99.99%",   label: "Uptime SLA" },
              { value: "SOC 2",    label: "Type II certified" },
              { value: "50+ SDKs", label: "Framework integrations" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl font-bold text-island-cyan">{stat.value}</p>
                <p className="text-xs text-white/50 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
