const MAESTRO_LAYERS = [
  {
    id: "layer-7",
    label: "Layer 7",
    title: "Agent Ecosystem",
    subtitle: "Business applications, users, and agent interactions",
    y: 56,
  },
  {
    id: "layer-6",
    label: "Layer 6",
    title: "Security and Compliance",
    subtitle: "Identity, governance, controls, and assurance",
    y: 138,
  },
  {
    id: "layer-5",
    label: "Layer 5",
    title: "Evaluation and Observability",
    subtitle: "Testing, telemetry, alerts, and model behavior tracking",
    y: 220,
  },
  {
    id: "layer-4",
    label: "Layer 4",
    title: "Deployment and Infrastructure",
    subtitle: "Runtime services, compute, network, and hosting",
    y: 302,
  },
  {
    id: "layer-3",
    label: "Layer 3",
    title: "Agent Frameworks",
    subtitle: "Orchestration, tools, planning, and agent runtimes",
    y: 384,
  },
  {
    id: "layer-2",
    label: "Layer 2",
    title: "Data Operations",
    subtitle: "RAG pipelines, vector stores, and data processing",
    y: 466,
  },
  {
    id: "layer-1",
    label: "Layer 1",
    title: "Foundation Models",
    subtitle: "The core model layer that powers reasoning and generation",
    y: 548,
  },
] as const;

const CENTER_BOX = {
  x: 56,
  y: 250,
  width: 468,
  height: 132,
};

const LAYER_BOX = {
  x: 828,
  width: 476,
  height: 64,
};

export function MaestroSevenLayerDiagram() {
  return (
    <div className="relative overflow-hidden rounded-[30px] border border-[#D7E5FF] bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)] p-5 shadow-[0_24px_70px_rgba(15,23,42,0.10)] md:p-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(0,86,249,0.08),transparent_22%),radial-gradient(circle_at_82%_12%,rgba(14,104,188,0.06),transparent_20%)]" />

      <div className="relative hidden lg:block">
        <svg
          viewBox="0 0 1360 680"
          className="h-auto w-full"
          role="img"
          aria-label="MAESTRO seven-layer reference architecture for agentic AI"
        >
          <defs>
            <filter id="maestro-box-shadow" x="-20%" y="-20%" width="160%" height="160%">
              <feDropShadow dx="0" dy="16" stdDeviation="18" floodColor="rgba(15,23,42,0.10)" />
            </filter>
          </defs>

          <rect
            x="0.5"
            y="0.5"
            width="1359"
            height="679"
            rx="32"
            fill="transparent"
            stroke="rgba(215,229,255,0.45)"
          />

          <g filter="url(#maestro-box-shadow)">
            <rect
              x={CENTER_BOX.x}
              y={CENTER_BOX.y}
              width={CENTER_BOX.width}
              height={CENTER_BOX.height}
              rx="28"
              fill="#FFFFFF"
              stroke="#D7E5FF"
              strokeWidth="2"
            />
          </g>

          <text
            x={CENTER_BOX.x + 34}
            y={CENTER_BOX.y + 44}
            fill="#0E68BC"
            fontSize="15"
            fontWeight="700"
            letterSpacing="3.1"
          >
            MAESTRO
          </text>
          <text
            x={CENTER_BOX.x + 34}
            y={CENTER_BOX.y + 88}
            fill="#15202B"
            fontSize="24"
            fontWeight="700"
          >
            7-Layer Reference Architecture
          </text>
          <text
            x={CENTER_BOX.x + 34}
            y={CENTER_BOX.y + 120}
            fill="#4B5563"
            fontSize="24"
            fontWeight="700"
          >
            for Agentic AI
          </text>

          {MAESTRO_LAYERS.map((layer) => {
            const startX = CENTER_BOX.x + CENTER_BOX.width;
            const startY = CENTER_BOX.y + CENTER_BOX.height / 2;
            const endX = LAYER_BOX.x;
            const endY = layer.y + LAYER_BOX.height / 2;
            const controlX1 = 650;
            const controlX2 = 734;
            const path = `M ${startX} ${startY} C ${controlX1} ${startY}, ${controlX2} ${endY}, ${endX} ${endY}`;

            return (
              <g key={layer.id}>
                <path
                  d={path}
                  fill="none"
                  stroke="#2F8CFF"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                <circle cx={endX} cy={endY} r="5" fill="#2F8CFF" />
                <rect
                  x={LAYER_BOX.x}
                  y={layer.y}
                  width={LAYER_BOX.width}
                  height={LAYER_BOX.height}
                  rx="18"
                  fill="#F5F9FF"
                  stroke="#CFE0FF"
                  strokeWidth="2"
                />
                <text
                  x={LAYER_BOX.x + 24}
                  y={layer.y + 27}
                  fill="#0E68BC"
                  fontSize="12"
                  fontWeight="700"
                  letterSpacing="1.8"
                >
                  {layer.label.toUpperCase()}
                </text>
                <text
                  x={LAYER_BOX.x + 122}
                  y={layer.y + 27}
                  fill="#15202B"
                  fontSize="18"
                  fontWeight="700"
                >
                  {layer.title}
                </text>
                <text
                  x={LAYER_BOX.x + 24}
                  y={layer.y + 48}
                  fill="#5B667A"
                  fontSize="12.5"
                >
                  {layer.subtitle}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      <div className="relative lg:hidden">
        <div className="rounded-[24px] border border-[#D7E5FF] bg-white p-5 shadow-[0_16px_40px_rgba(15,23,42,0.08)]">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#0E68BC]">
            MAESTRO
          </p>
          <h3 className="mt-3 text-[1.45rem] font-bold leading-tight tracking-[-0.03em] text-[#15202B]">
            7-Layer Reference Architecture for Agentic AI
          </h3>
        </div>

        <div className="relative mt-4 pl-8">
          <div className="absolute left-[14px] top-2 bottom-2 w-[2px] bg-[#BFD7FF]" />
          <div className="grid gap-3">
            {MAESTRO_LAYERS.map((layer) => (
              <div key={layer.id} className="relative">
                <div className="absolute -left-[25px] top-7 h-[2px] w-5 bg-[#2F8CFF]" />
                <div className="absolute -left-[20px] top-[23px] h-3 w-3 rounded-full border-2 border-[#2F8CFF] bg-white" />
                <div className="rounded-[20px] border border-[#CFE0FF] bg-[#F5F9FF] p-4 shadow-[0_12px_32px_rgba(15,23,42,0.06)]">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#0E68BC]">
                    {layer.label}
                  </p>
                  <h3 className="mt-1 text-base font-semibold leading-snug text-[#15202B]">
                    {layer.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#5B667A]">
                    {layer.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
