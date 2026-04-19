import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  CONTACT_URL,
  PRIMARY_CTA_CLASS,
} from "@/components/home/premium-landing-content";
import { Container } from "@/components/ui/Container";

const LOCALIZATION_SIGNALS = [
  "Mixed Turkish and English phrasing",
  "KVKK-sensitive routing",
  "Cultural intent detection",
  "Approval escalation before action",
];

const LOCALIZATION_FOOTER = [
  {
    label: "Turkish semantics",
    value: "PRE + POST LLM evaluation",
  },
  {
    label: "Local governance",
    value: "KVKK-aware policy routing",
  },
  {
    label: "User behavior",
    value: "Cultural intent signals",
  },
];

export function PremiumLocalizationSection() {
  return (
    <section id="localization" className="relative overflow-hidden py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(0,86,249,0.18),transparent_24%),radial-gradient(circle_at_82%_28%,rgba(109,74,255,0.12),transparent_22%),linear-gradient(180deg,#050a13_0%,#02050b_56%,#000000_100%)]" />

      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#d4c8ff]">
            Localization power
          </p>
          <h2 className="mt-3 text-[34px] font-black leading-[1.05] tracking-[-0.04em] text-white md:text-[48px]">
            Built for Turkiye&apos;s AI reality, not translated into it.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/58 md:text-[1.05rem]">
            UMAI connects Turkish language nuance, Turkiye&apos;s regulatory expectations,
            and end-user cultural behavior inside one runtime decision layer.
            Governance stays local to how real Turkish teams prompt, review, and act.
          </p>
        </div>

        <div className="relative mt-14 grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)] lg:items-center">
          <div className="order-2 lg:order-1">
            <LocalizationGlobe />
          </div>

          <div className="order-1 max-w-[440px] lg:order-2 lg:justify-self-end">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/40">
              Localization orbit
            </p>
            <h3 className="mt-3 text-[28px] font-bold leading-tight text-white md:text-[2rem]">
              Global AI governance with Turkiye in focus.
            </h3>
            <p className="mt-4 text-base leading-relaxed text-white/60 md:text-[1.02rem]">
              UMAI connects Turkish-native language evaluation, KVKK-aware runtime
              policy, and local user behavior signals inside one enforcement layer so
              governance stays aligned with how teams in Turkiye actually work.
            </p>

            <dl className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {LOCALIZATION_FOOTER.map((item) => (
                <div key={item.label}>
                  <dt className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/36">
                    {item.label}
                  </dt>
                  <dd className="mt-2 text-sm font-medium leading-snug text-white/82">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/56">
            {LOCALIZATION_SIGNALS.map((signal) => (
              <li key={signal} className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-[#6D4AFF]" />
                {signal}
              </li>
            ))}
          </ul>
          <Link href={CONTACT_URL} className={PRIMARY_CTA_CLASS}>
            Discuss localized deployment <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}

function LocalizationGlobe() {
  const cx = 360;
  const cy = 292;
  const r = 176;

  const pills = [
    {
      x: 28,
      y: 92,
      w: 182,
      h: 42,
      dotColor: "#6D4AFF",
      title: "Turkish Prompts",
      delay: "0s",
      anchor: { x: cx - r * 0.78, y: cy - r * 0.6 },
    },
    {
      x: 500,
      y: 92,
      w: 204,
      h: 42,
      dotColor: "#0056F9",
      title: "Regulations",
      delay: "0.5s",
      anchor: { x: cx + r * 0.78, y: cy - r * 0.6 },
      align: "right",
    },
    {
      x: 28,
      y: 442,
      w: 208,
      h: 42,
      dotColor: "#7C3AED",
      title: "Cultural awareness",
      delay: "1.1s",
      anchor: { x: cx - r * 0.78, y: cy + r * 0.6 },
    },
    {
      x: 486,
      y: 442,
      w: 218,
      h: 42,
      dotColor: "#0056F9",
      title: "Global Attach Surfaces",
      delay: "1.7s",
      anchor: { x: cx + r * 0.78, y: cy + r * 0.6 },
      align: "right",
    },
  ];

  const connectors = pills.map((pill) => {
    const startX = pill.align === "right" ? pill.x : pill.x + pill.w;
    const startY = pill.y + pill.h / 2;
    const cpX =
      pill.align === "right"
        ? (startX + pill.anchor.x) / 2 + 18
        : (startX + pill.anchor.x) / 2 - 18;
    const cpY = startY < cy ? startY + 12 : startY - 12;
    return {
      d: `M ${startX} ${startY} Q ${cpX} ${cpY} ${pill.anchor.x} ${pill.anchor.y}`,
      delay: pill.delay,
      dotColor: pill.dotColor,
    };
  });

  const turkeyWidth = 168;
  const turkeyHeight = 72;
  const turkeyX = cx - turkeyWidth / 2;
  const turkeyY = cy - turkeyHeight / 2 + 4;

  return (
    <div className="relative">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0056F9]/14 blur-[140px]" />
      <div className="pointer-events-none absolute left-[58%] top-[54%] h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#6D4AFF]/10 blur-[140px]" />

      <svg
        viewBox="0 0 720 620"
        className="relative z-10 mx-auto block h-[360px] w-full max-w-[820px] md:h-[430px] lg:h-[500px] xl:h-[540px]"
        aria-label="Animated globe showing UMAI localization focus on Turkiye"
        role="img"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <radialGradient id="localization-globe-fill" cx="38%" cy="32%" r="72%">
            <stop offset="0%" stopColor="#1a2a48" />
            <stop offset="45%" stopColor="#0a1328" />
            <stop offset="80%" stopColor="#050a16" />
            <stop offset="100%" stopColor="#02040a" />
          </radialGradient>
          <radialGradient id="localization-globe-highlight" cx="30%" cy="22%" r="42%">
            <stop offset="0%" stopColor="#5b8dff" stopOpacity="0.14" />
            <stop offset="100%" stopColor="#5b8dff" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="localization-globe-shadow" cx="72%" cy="78%" r="54%">
            <stop offset="0%" stopColor="#000000" stopOpacity="0" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0.55" />
          </radialGradient>
          <radialGradient id="localization-inner-glow" cx="50%" cy="52%" r="60%">
            <stop offset="0%" stopColor="#0056F9" stopOpacity="0.06" />
            <stop offset="100%" stopColor="#0056F9" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="localization-ring" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(143,179,255,0.58)" />
            <stop offset="55%" stopColor="rgba(0,86,249,0.42)" />
            <stop offset="100%" stopColor="rgba(109,74,255,0.32)" />
          </linearGradient>
          <clipPath id="localization-globe-clip">
            <circle cx={cx} cy={cy} r={r} />
          </clipPath>
          <filter id="localization-turkey-glow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="5" result="blurred" />
            <feColorMatrix
              in="blurred"
              type="matrix"
              values="0 0 0 0 0.22
                      0 0 0 0 0.52
                      0 0 0 0 1
                      0 0 0 1.6 0"
              result="glow"
            />
            <feMerge>
              <feMergeNode in="glow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {connectors.map((connector, index) => (
          <g key={`connector-${index}`}>
            <path
              d={connector.d}
              fill="none"
              stroke="rgba(143,179,255,0.20)"
              strokeWidth="1.2"
              strokeDasharray="4 7"
              strokeLinecap="round"
            />
            <circle r="2.8" fill={connector.dotColor} opacity="0">
              <animateMotion
                dur="3.8s"
                begin={connector.delay}
                repeatCount="indefinite"
                path={connector.d}
              />
              <animate
                attributeName="opacity"
                values="0;0.9;0.9;0"
                keyTimes="0;0.15;0.84;1"
                dur="3.8s"
                begin={connector.delay}
                repeatCount="indefinite"
              />
            </circle>
          </g>
        ))}

        {pills.map((pill, index) => (
          <g key={`anchor-${index}`}>
            <circle cx={pill.anchor.x} cy={pill.anchor.y} r="4.8" fill={pill.dotColor} />
            <circle
              cx={pill.anchor.x}
              cy={pill.anchor.y}
              r="10"
              fill="none"
              stroke={pill.dotColor}
              strokeOpacity="0.36"
              strokeWidth="1.2"
            >
              <animate
                attributeName="r"
                values="8;18;8"
                dur="4s"
                begin={pill.delay}
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values="0.2;0.48;0.2"
                dur="4s"
                begin={pill.delay}
                repeatCount="indefinite"
              />
            </circle>
          </g>
        ))}

        <ellipse
          cx={cx}
          cy={cy + r + 32}
          rx="124"
          ry="16"
          fill="rgba(0,0,0,0.26)"
        />

        <circle
          cx={cx}
          cy={cy}
          r={r + 22}
          fill="none"
          stroke="rgba(255,255,255,0.08)"
          strokeDasharray="3 9"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from={`0 ${cx} ${cy}`}
            to={`360 ${cx} ${cy}`}
            dur="46s"
            repeatCount="indefinite"
          />
        </circle>
        <circle
          cx={cx}
          cy={cy}
          r={r + 34}
          fill="none"
          stroke="rgba(0,86,249,0.14)"
          strokeDasharray="4 12"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from={`360 ${cx} ${cy}`}
            to={`0 ${cx} ${cy}`}
            dur="58s"
            repeatCount="indefinite"
          />
        </circle>

        <circle
          cx={cx}
          cy={cy}
          r={r}
          fill="url(#localization-globe-fill)"
          stroke="url(#localization-ring)"
          strokeWidth="1.4"
        />
        <circle cx={cx} cy={cy} r={r} fill="url(#localization-inner-glow)" />
        <circle cx={cx} cy={cy} r={r} fill="url(#localization-globe-highlight)" />
        <circle cx={cx} cy={cy} r={r} fill="url(#localization-globe-shadow)" />

        <g clipPath="url(#localization-globe-clip)">
          <g opacity="0.34">
            <animateTransform
              attributeName="transform"
              type="rotate"
              from={`0 ${cx} ${cy}`}
              to={`360 ${cx} ${cy}`}
              dur="36s"
              repeatCount="indefinite"
            />
            {[44, 84, 122, 158].map((radius) => (
              <ellipse
                key={`lat-${radius}`}
                cx={cx}
                cy={cy}
                rx={r}
                ry={radius}
                fill="none"
                stroke="rgba(190,214,255,0.30)"
                strokeWidth="0.9"
              />
            ))}
            {[60, 110, 150].map((radius) => (
              <ellipse
                key={`mer-${radius}`}
                cx={cx}
                cy={cy}
                rx={radius}
                ry={r}
                fill="none"
                stroke="rgba(190,214,255,0.24)"
                strokeWidth="0.9"
              />
            ))}
          </g>

          <ellipse
            cx={cx}
            cy={cy + 4}
            rx="104"
            ry="40"
            fill="rgba(0,86,249,0.32)"
            filter="blur(18px)"
          >
            <animate
              attributeName="opacity"
              values="0.45;0.85;0.45"
              dur="4.2s"
              repeatCount="indefinite"
            />
          </ellipse>
          <ellipse
            cx={cx}
            cy={cy + 4}
            rx="74"
            ry="26"
            fill="rgba(124,179,255,0.35)"
            filter="blur(12px)"
          >
            <animate
              attributeName="opacity"
              values="0.3;0.7;0.3"
              dur="3.6s"
              begin="0.6s"
              repeatCount="indefinite"
            />
          </ellipse>

          <image
            href="/assets/tr.svg"
            x={turkeyX}
            y={turkeyY}
            width={turkeyWidth}
            height={turkeyHeight}
            preserveAspectRatio="xMidYMid meet"
            filter="url(#localization-turkey-glow)"
            opacity="0.95"
          >
            <animate
              attributeName="opacity"
              values="0.85;1;0.85"
              dur="3.8s"
              repeatCount="indefinite"
            />
          </image>

          <circle cx={cx + 12} cy={cy - 4} r="2" fill="#ffffff" opacity="0">
            <animate
              attributeName="opacity"
              values="0;0.9;0"
              dur="2.4s"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx={cx - 32} cy={cy + 10} r="1.6" fill="#7cb6ff" opacity="0">
            <animate
              attributeName="opacity"
              values="0;0.9;0"
              dur="2.8s"
              begin="0.8s"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx={cx + 38} cy={cy + 12} r="1.6" fill="#7cb6ff" opacity="0">
            <animate
              attributeName="opacity"
              values="0;0.9;0"
              dur="3.1s"
              begin="1.4s"
              repeatCount="indefinite"
            />
          </circle>
        </g>

        {pills.map((pill, index) => (
          <g key={`pill-${index}`} transform={`translate(${pill.x} ${pill.y})`}>
            <circle cx="4" cy={pill.h / 2} r="4" fill={pill.dotColor}>
              <animate
                attributeName="opacity"
                values="0.35;1;0.35"
                dur="2.8s"
                begin={pill.delay}
                repeatCount="indefinite"
              />
            </circle>
            <text
              x="18"
              y={pill.h / 2 + 5}
              fill="rgba(255,255,255,0.94)"
              fontSize="16"
              fontWeight="800"
            >
              {pill.title}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
