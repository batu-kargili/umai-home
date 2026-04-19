import { Container } from "@/components/ui/Container";

const CUSTOMERS = [
  "Acme Bank",
  "Nova Health",
  "Axis Fintech",
  "Meridian AI",
  "Vault Insurance",
  "Crestline Media",
];

export function LogosBar() {
  return (
    <section className="bg-white border-y border-light-gray py-12">
      <Container>
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-mid-gray mb-8">
          Trusted by security-first enterprises
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {CUSTOMERS.map((name) => (
            <div
              key={name}
              className="opacity-40 hover:opacity-70 transition-opacity h-7 w-28 bg-light-gray rounded flex items-center justify-center"
              aria-label={name}
            >
              <span className="text-[10px] font-semibold text-mid-gray">{name}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
