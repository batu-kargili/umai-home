import Image from "next/image";
import {
  Bot,
  BrainCircuit,
  Database,
  Eye,
  FileCheck2,
  Globe,
  LayoutDashboard,
  MessageSquare,
  Server,
  Users,
  Workflow,
  Wrench,
} from "lucide-react";

export function PremiumHeroDiagram({
  variant = "dark",
  size = "default",
}: {
  variant?: "dark" | "light";
  size?: "default" | "compact";
} = {}) {
  const isLight = variant === "light";
  const isCompact = size === "compact";
  const nodeBg = isLight ? "bg-white" : "bg-[#0b1119]";
  const nodeBorder = isLight ? "border-[#c6c6c6]" : "border-white/[0.08]";
  const nodeBorderAccent = isLight ? "border-[#0056F9]/40" : "border-[#0056F9]/16";
  const nodeShadow = isLight ? "shadow-[0_4px_12px_rgba(22,22,22,0.08),0_1px_2px_rgba(22,22,22,0.06)]" : "shadow-[0_0_24px_rgba(0,86,249,0.08)]";
  const nodeShadowRight = isLight ? "shadow-[0_4px_12px_rgba(22,22,22,0.08),0_1px_2px_rgba(22,22,22,0.06)]" : "shadow-[0_0_24px_rgba(255,255,255,0.03)]";
  const nodeIconLeft = isLight ? "text-[#0056F9]" : "text-[#8ebcff]/70";
  const nodeIconRight = isLight ? "text-[#525252]" : "text-white/52";
  const nodeIconBottom = isLight ? "text-[#0056F9]" : "text-[#9ec6ff]/58";
  const nodeLabel = isLight ? "text-[#6f6f6f]" : "text-white/26";
  const nodeLabelBottom = isLight ? "text-[#525252]" : "text-[#9ec6ff]/38";
  const svgTextDark = isLight ? "#161616" : "#ffffff";
  const svgTextMuted = isLight ? "rgba(82,82,82,0.85)" : "rgba(167,196,255,0.56)";
  const svgTextRuntime = isLight ? "rgba(0,86,249,0.85)" : "rgba(167,196,255,0.70)";
  const svgBlockedText = isLight ? "#6D4AFF" : "#bba9ff";
  const svgFlowDot = isLight ? "#161616" : "#ffffff";
  const svgBottomDot = isLight ? "#0056F9" : "#9ec6ff";
  const svgBlockedDot = isLight ? "#0056F9" : "#8ebcff";
  const leftPathGradient = isLight ? "premium-left-path-light" : "premium-left-path";
  const rightPathGradient = isLight ? "premium-right-path-light" : "premium-right-path";
  const bottomPathGradient = isLight ? "premium-bottom-path-light" : "premium-bottom-path";
  const mobileLeftPathGradient = isLight ? "premium-mobile-left-path-light" : "premium-mobile-left-path";
  const mobileRightPathGradient = isLight ? "premium-mobile-right-path-light" : "premium-mobile-right-path";
  const mobileBottomPathGradient = isLight ? "premium-mobile-bottom-path-light" : "premium-mobile-bottom-path";
  const shieldInner = isLight ? "rgba(0,86,249,0.35)" : "rgba(0,86,249,0.16)";
  const shieldOuter = isLight ? "rgba(124,58,237,0.22)" : "rgba(124,58,237,0.10)";
  const umaiInnerBg = isLight ? "bg-[#0a1020]" : "bg-[#05080f]";


  const cx = 550;
  const cy = 215;
  const shield = 62;
  const mobileWidth = 340;
  const mobileHeight = 520;
  const mobileCx = 170;
  const mobileCy = 208;
  const mobileShield = 50;

  const leftNodes = [
    { Icon: Users,        label: "Employee AI Use",   x: 60,  y: 50  },
    { Icon: MessageSquare,label: "Customer Chat",     x: 160, y: 116 },
    { Icon: Bot,          label: "Internal Copilot",  x: 60,  y: 182 },
    { Icon: Workflow,     label: "AI Agent Flow",     x: 160, y: 248 },
    { Icon: Database,     label: "RAG Context",       x: 60,  y: 314 },
    { Icon: Server,       label: "App / API Traffic", x: 160, y: 380 },
  ];

  const rightNodes = [
    { Icon: BrainCircuit, label: "Model Output",       x: 1040, y: 50  },
    { Icon: Wrench,       label: "Tool Calls",         x: 940,  y: 116 },
    { Icon: Database,     label: "Database Queries",   x: 1040, y: 182 },
    { Icon: Globe,        label: "External API Calls", x: 940,  y: 248 },
    { Icon: Workflow,     label: "Agent Actions",      x: 1040, y: 314 },
    { Icon: Eye,          label: "Data Access",        x: 940,  y: 380 },
  ];

  const bottomNodes = [
    { Icon: FileCheck2, label: "Audit ledger", x: 350, y: 530 },
    { Icon: LayoutDashboard, label: "Dashboard", x: 550, y: 555 },
    { Icon: Eye, label: "Governance", x: 750, y: 530 },
  ];

  const leftPaths = leftNodes.map(
    (node) =>
      `M ${node.x},${node.y} C ${node.x + 180},${node.y} ${cx - 200},${cy} ${cx - shield},${cy}`,
  );
  const rightPaths = rightNodes.map(
    (node) =>
      `M ${cx + shield},${cy} C ${cx + 200},${cy} ${node.x - 180},${node.y} ${node.x},${node.y}`,
  );
  const bottomPaths = bottomNodes.map(
    (node) =>
      `M ${cx},${cy + shield} C ${cx},${cy + shield + 100} ${node.x},${node.y - 70} ${node.x},${node.y}`,
  );

  const fullPaths = leftNodes.map((leftNode, index) => {
    const rightNode = rightNodes[index];
    return `M ${leftNode.x},${leftNode.y} C ${leftNode.x + 180},${leftNode.y} ${cx - 200},${cy} ${cx},${cy} C ${cx + 200},${cy} ${rightNode.x - 180},${rightNode.y} ${rightNode.x},${rightNode.y}`;
  });

  const blockedEvents = [
    { label: "PROMPT INJECTION", delay: 0, duration: 5, index: 0 },
    { label: "DATA LEAKAGE", delay: 2.5, duration: 4.5, index: 2 },
    { label: "PII DETECTED", delay: 5, duration: 5.5, index: 4 },
    { label: "JAILBREAK", delay: 7.5, duration: 4.2, index: 1 },
  ];
  const blockedYOffsets = [-55, -20, 18, 48];
  const mobileLeftNodes = [
    { Icon: Users, label: "Employee AI", x: 54, y: 92 },
    { Icon: MessageSquare, label: "Customer chat", x: 100, y: 150 },
    { Icon: Bot, label: "Internal copilot", x: 54, y: 208 },
    { Icon: Workflow, label: "Agent flow", x: 100, y: 266 },
  ];
  const mobileRightNodes = [
    { Icon: BrainCircuit, label: "Model output", x: 286, y: 92 },
    { Icon: Wrench, label: "Tool calls", x: 240, y: 150 },
    { Icon: Globe, label: "API calls", x: 286, y: 208 },
    { Icon: Eye, label: "Data access", x: 240, y: 266 },
  ];
  const mobileBottomNodes = [
    { Icon: FileCheck2, label: "Audit", x: 86, y: 410 },
    { Icon: LayoutDashboard, label: "Monitor", x: 170, y: 446 },
    { Icon: Eye, label: "Evidence", x: 254, y: 410 },
  ];
  const mobileLeftPaths = mobileLeftNodes.map(
    (node, index) =>
      `M ${node.x},${node.y} C ${node.x + 54},${node.y} ${mobileCx - 78},${mobileCy + (index - 1.5) * 18} ${mobileCx - mobileShield},${mobileCy}`,
  );
  const mobileRightPaths = mobileRightNodes.map(
    (node, index) =>
      `M ${mobileCx + mobileShield},${mobileCy} C ${mobileCx + 78},${mobileCy + (index - 1.5) * 18} ${node.x - 54},${node.y} ${node.x},${node.y}`,
  );
  const mobileBottomPaths = mobileBottomNodes.map(
    (node) =>
      `M ${mobileCx},${mobileCy + mobileShield} C ${mobileCx},${mobileCy + 120} ${node.x},${node.y - 72} ${node.x},${node.y}`,
  );
  const mobileFullPaths = mobileLeftNodes.map((leftNode, index) => {
    const rightNode = mobileRightNodes[index];

    return `M ${leftNode.x},${leftNode.y} C ${leftNode.x + 54},${leftNode.y} ${mobileCx - 78},${mobileCy + (index - 1.5) * 18} ${mobileCx},${mobileCy} C ${mobileCx + 78},${mobileCy + (index - 1.5) * 18} ${rightNode.x - 54},${rightNode.y} ${rightNode.x},${rightNode.y}`;
  });

  return (
    <>
      {!isCompact && (
      <div
        className="relative mx-auto hidden w-full md:block"
        style={{ maxWidth: 1100, aspectRatio: "1100 / 620" }}
      >
        <div className="pointer-events-none absolute left-1/2 top-[210px] h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0056F9]/16 blur-[80px]" />
        <div className="pointer-events-none absolute left-[54%] top-[220px] h-[200px] w-[200px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#6D4AFF]/14 blur-[110px]" />

        <svg
          viewBox="0 0 1100 620"
          className="absolute inset-0 h-full w-full pointer-events-none"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <linearGradient id="premium-left-path" x1="0%" x2="100%">
              <stop offset="0%" stopColor="rgba(120,167,255,0.10)" />
              <stop offset="100%" stopColor="rgba(0,86,249,0.26)" />
            </linearGradient>
            <linearGradient id="premium-right-path" x1="0%" x2="100%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.08)" />
              <stop offset="100%" stopColor="rgba(124,58,237,0.16)" />
            </linearGradient>
            <linearGradient id="premium-bottom-path" x1="50%" y1="0%" x2="50%" y2="100%">
              <stop offset="0%" stopColor="rgba(0,86,249,0.24)" />
              <stop offset="100%" stopColor="rgba(167,196,255,0.18)" />
            </linearGradient>
            <linearGradient id="premium-left-path-light" x1="0%" x2="100%">
              <stop offset="0%" stopColor="rgba(0,86,249,0.45)" />
              <stop offset="100%" stopColor="rgba(0,86,249,0.85)" />
            </linearGradient>
            <linearGradient id="premium-right-path-light" x1="0%" x2="100%">
              <stop offset="0%" stopColor="rgba(82,82,82,0.55)" />
              <stop offset="100%" stopColor="rgba(124,58,237,0.80)" />
            </linearGradient>
            <linearGradient id="premium-bottom-path-light" x1="50%" y1="0%" x2="50%" y2="100%">
              <stop offset="0%" stopColor="rgba(0,86,249,0.75)" />
              <stop offset="100%" stopColor="rgba(0,86,249,0.40)" />
            </linearGradient>
          </defs>

          {leftPaths.map((path, index) => (
            <path
              key={`left-${index}`}
              d={path}
              stroke={`url(#${leftPathGradient})`}
              strokeWidth={isLight ? "1.8" : "1.1"}
              fill="none"
            />
          ))}
          {rightPaths.map((path, index) => (
            <path
              key={`right-${index}`}
              d={path}
              stroke={`url(#${rightPathGradient})`}
              strokeWidth={isLight ? "1.8" : "1.1"}
              fill="none"
            />
          ))}
          {bottomPaths.map((path, index) => (
            <path
              key={`bottom-${index}`}
              d={path}
              stroke={`url(#${bottomPathGradient})`}
              strokeWidth={isLight ? "1.6" : "1"}
              strokeDasharray="4 5"
              fill="none"
              opacity={isLight ? "0.95" : "0.72"}
            />
          ))}

          <circle
            cx={cx}
            cy={cy}
            r={shield + 8}
            stroke={shieldInner}
            strokeWidth="1"
            fill="none"
            strokeDasharray="4 6"
          >
            <animate
              attributeName="r"
              values={`${shield + 4};${shield + 14};${shield + 4}`}
              dur="3s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0.2;0.55;0.2"
              dur="3s"
              repeatCount="indefinite"
            />
          </circle>

          <circle
            cx={cx}
            cy={cy}
            r={shield + 24}
            stroke={shieldOuter}
            strokeWidth="0.9"
            fill="none"
            strokeDasharray="2 10"
          >
            <animate
              attributeName="r"
              values={`${shield + 20};${shield + 32};${shield + 20}`}
              dur="4.5s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0.12;0.3;0.12"
              dur="4.5s"
              repeatCount="indefinite"
            />
          </circle>

          {fullPaths.map((path, index) => (
            <circle key={`flow-${index}`} r="2.5" fill={svgFlowDot} opacity="0">
              <animateMotion
                dur={`${8 + index * 0.7}s`}
                begin={`${index * 1.7}s`}
                repeatCount="indefinite"
                path={path}
              />
              <animate
                attributeName="opacity"
                values="0;0.52;0.85;0.52;0"
                keyTimes="0;0.06;0.5;0.94;1"
                dur={`${8 + index * 0.7}s`}
                begin={`${index * 1.7}s`}
                repeatCount="indefinite"
              />
            </circle>
          ))}

          {bottomPaths.map((path, index) => (
            <circle key={`bottom-flow-${index}`} r="2" fill={svgBottomDot} opacity="0">
              <animateMotion
                dur={`${4 + index * 0.45}s`}
                begin={`${index * 1.2}s`}
                repeatCount="indefinite"
                path={path}
              />
              <animate
                attributeName="opacity"
                values="0;0.6;0.8;0.6;0"
                keyTimes="0;0.1;0.5;0.9;1"
                dur={`${4 + index * 0.45}s`}
                begin={`${index * 1.2}s`}
                repeatCount="indefinite"
              />
            </circle>
          ))}

          {blockedEvents.map((event, index) => (
            <g key={event.label}>
              <circle r="3.3" fill={svgBlockedDot} opacity="0">
                <animateMotion
                  dur={`${event.duration}s`}
                  begin={`${event.delay}s`}
                  repeatCount="indefinite"
                  path={leftPaths[event.index]}
                />
                <animate
                  attributeName="opacity"
                  values="0;0.8;0.9;0"
                  keyTimes="0;0.08;0.84;1"
                  dur={`${event.duration}s`}
                  begin={`${event.delay}s`}
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="r"
                  values="3.3;3.3;9;0"
                  keyTimes="0;0.82;0.93;1"
                  dur={`${event.duration}s`}
                  begin={`${event.delay}s`}
                  repeatCount="indefinite"
                />
              </circle>
              <circle
                cx={cx - shield}
                cy={cy}
                r="0"
                fill="none"
                stroke="#7C3AED"
                strokeWidth="1.4"
                opacity="0"
              >
                <animate
                  attributeName="r"
                  values="0;0;0;18;28;28"
                  keyTimes="0;0.83;0.84;0.91;0.97;1"
                  dur={`${event.duration}s`}
                  begin={`${event.delay}s`}
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  values="0;0;0;0.62;0.2;0"
                  keyTimes="0;0.83;0.84;0.90;0.96;1"
                  dur={`${event.duration}s`}
                  begin={`${event.delay}s`}
                  repeatCount="indefinite"
                />
              </circle>
              <text
                x={cx - shield - 14}
                y={cy + blockedYOffsets[index]}
                textAnchor="end"
                fill={svgBlockedText}
                fontSize="11"
                fontWeight="700"
                letterSpacing="0.06em"
                opacity="0"
              >
                <animate
                  attributeName="opacity"
                  values="0;0;0;0.9;0.9;0"
                  keyTimes="0;0.82;0.84;0.88;0.94;1"
                  dur={`${event.duration}s`}
                  begin={`${event.delay}s`}
                  repeatCount="indefinite"
                />
                {event.label}
              </text>
            </g>
          ))}

          <text
            x={cx + shield + 14}
            y={cy - 18}
            textAnchor="start"
            fill={svgTextDark}
            fontSize="11"
            fontWeight="600"
            opacity="0"
          >
            <animate
              attributeName="opacity"
              values="0;0;0.7;0;0"
              keyTimes="0;0.44;0.5;0.58;1"
              dur="8s"
              repeatCount="indefinite"
            />
            SAFE
          </text>
          <text
            x={cx + shield + 14}
            y={cy + 28}
            textAnchor="start"
            fill={svgTextDark}
            fontSize="11"
            fontWeight="600"
            opacity="0"
          >
            <animate
              attributeName="opacity"
              values="0;0;0.7;0;0"
              keyTimes="0;0.44;0.5;0.58;1"
              dur="9.4s"
              begin="3s"
              repeatCount="indefinite"
            />
            PASSED
          </text>
          <text
            x={cx}
            y={cy + shield + 56}
            textAnchor="middle"
            fill={svgTextMuted}
            fontSize="10"
            fontWeight="700"
            letterSpacing="0.2em"
          >
            EVERY REQUEST LOGGED
          </text>
        </svg>

        {leftNodes.map((node, index) => (
          <div
            key={`left-node-${index}`}
            className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${(node.x / 1100) * 100}%`, top: `${(node.y / 620) * 100}%` }}
          >
            <div className={`flex h-[64px] w-[64px] flex-col items-center justify-center gap-1 rounded-2xl border ${nodeBorder} ${nodeBg} ${nodeShadow} transition-colors hover:border-[#0056F9]/40`}>
              <node.Icon className={`h-[22px] w-[22px] ${nodeIconLeft}`} />
              <span className={`px-1.5 text-center text-[10px] leading-[1.15] ${nodeLabel}`}>
                {node.label}
              </span>
            </div>
          </div>
        ))}

        {rightNodes.map((node, index) => (
          <div
            key={`right-node-${index}`}
            className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${(node.x / 1100) * 100}%`, top: `${(node.y / 620) * 100}%` }}
          >
            <div className={`flex h-[64px] w-[64px] flex-col items-center justify-center gap-1 rounded-2xl border ${nodeBorder} ${nodeBg} ${nodeShadowRight} transition-colors hover:border-[#7C3AED]/40`}>
              <node.Icon className={`h-[22px] w-[22px] ${nodeIconRight}`} />
              <span className={`px-1.5 text-center text-[10px] leading-[1.15] ${nodeLabel}`}>
                {node.label}
              </span>
            </div>
          </div>
        ))}

        {bottomNodes.map((node, index) => (
          <div
            key={`bottom-node-${index}`}
            className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${(node.x / 1100) * 100}%`, top: `${(node.y / 620) * 100}%` }}
          >
            <div className={`flex h-[68px] w-[68px] flex-col items-center justify-center gap-1 rounded-2xl border ${nodeBorderAccent} ${nodeBg} ${nodeShadow} transition-colors hover:border-[#7C3AED]/40`}>
              <node.Icon className={`h-[22px] w-[22px] ${nodeIconBottom}`} />
              <span className={`px-1.5 text-center text-[10px] font-medium leading-[1.15] ${nodeLabelBottom}`}>
                {node.label}
              </span>
            </div>
          </div>
        ))}

        <div
          className="absolute z-20 -translate-x-1/2 -translate-y-1/2"
          style={{ left: "50%", top: `${(cy / 620) * 100}%` }}
        >
          <div className="relative flex h-[92px] w-[92px] items-center justify-center rounded-full bg-gradient-to-br from-[#0056F9] via-[#4B30C8] to-[#7C3AED] p-[2px] shadow-[0_18px_70px_rgba(0,86,249,0.36),0_0_110px_rgba(109,74,255,0.22)]">
            <div className={`flex h-full w-full items-center justify-center rounded-full ${umaiInnerBg} p-3`}>
              <Image
                src="/assets/umailogo_white.png"
                alt="UMAI"
                width={64}
                height={64}
                className="h-full w-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
      )}

      <div className={isCompact ? "block" : "md:hidden"}>
        <div
          className={isCompact ? "relative mx-auto w-full" : "relative mx-auto w-full max-w-[340px]"}
          style={isCompact ? { aspectRatio: `${mobileWidth} / ${mobileHeight}` } : { height: mobileHeight }}
        >
          <div className="pointer-events-none absolute left-1/2 top-[210px] h-[170px] w-[170px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0056F9]/18 blur-[70px]" />
          <div className="pointer-events-none absolute left-1/2 top-[208px] h-[190px] w-[190px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#6D4AFF]/10 blur-[90px]" />

          <svg
            viewBox={`0 0 ${mobileWidth} ${mobileHeight}`}
            className="absolute inset-0 h-full w-full pointer-events-none"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <linearGradient id="premium-mobile-left-path" x1="0%" x2="100%">
                <stop offset="0%" stopColor="rgba(120,167,255,0.12)" />
                <stop offset="100%" stopColor="rgba(0,86,249,0.32)" />
              </linearGradient>
              <linearGradient id="premium-mobile-right-path" x1="0%" x2="100%">
                <stop offset="0%" stopColor="rgba(255,255,255,0.08)" />
                <stop offset="100%" stopColor="rgba(124,58,237,0.18)" />
              </linearGradient>
              <linearGradient id="premium-mobile-bottom-path" x1="50%" y1="0%" x2="50%" y2="100%">
                <stop offset="0%" stopColor="rgba(0,86,249,0.26)" />
                <stop offset="100%" stopColor="rgba(167,196,255,0.18)" />
              </linearGradient>
              <linearGradient id="premium-mobile-left-path-light" x1="0%" x2="100%">
                <stop offset="0%" stopColor="rgba(0,86,249,0.45)" />
                <stop offset="100%" stopColor="rgba(0,86,249,0.85)" />
              </linearGradient>
              <linearGradient id="premium-mobile-right-path-light" x1="0%" x2="100%">
                <stop offset="0%" stopColor="rgba(82,82,82,0.55)" />
                <stop offset="100%" stopColor="rgba(124,58,237,0.80)" />
              </linearGradient>
              <linearGradient id="premium-mobile-bottom-path-light" x1="50%" y1="0%" x2="50%" y2="100%">
                <stop offset="0%" stopColor="rgba(0,86,249,0.75)" />
                <stop offset="100%" stopColor="rgba(0,86,249,0.40)" />
              </linearGradient>
            </defs>

            {mobileLeftPaths.map((path, index) => (
              <path
                key={`mobile-left-path-${index}`}
                d={path}
                stroke={`url(#${mobileLeftPathGradient})`}
                strokeWidth={isLight ? "1.6" : "1.1"}
                fill="none"
              />
            ))}
            {mobileRightPaths.map((path, index) => (
              <path
                key={`mobile-right-path-${index}`}
                d={path}
                stroke={`url(#${mobileRightPathGradient})`}
                strokeWidth={isLight ? "1.6" : "1.1"}
                fill="none"
              />
            ))}
            {mobileBottomPaths.map((path, index) => (
              <path
                key={`mobile-bottom-path-${index}`}
                d={path}
                stroke={`url(#${mobileBottomPathGradient})`}
                strokeWidth={isLight ? "1.4" : "1"}
                strokeDasharray="4 5"
                fill="none"
                opacity={isLight ? "0.95" : "0.8"}
              />
            ))}

            <circle
              cx={mobileCx}
              cy={mobileCy}
              r={mobileShield + 6}
              stroke={shieldInner}
              strokeWidth="1"
              fill="none"
              strokeDasharray="4 6"
            >
              <animate
                attributeName="r"
                values={`${mobileShield + 2};${mobileShield + 12};${mobileShield + 2}`}
                dur="3s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values="0.16;0.55;0.16"
                dur="3s"
                repeatCount="indefinite"
              />
            </circle>

            <circle
              cx={mobileCx}
              cy={mobileCy}
              r={mobileShield + 18}
              stroke={shieldOuter}
              strokeWidth="0.9"
              fill="none"
              strokeDasharray="2 8"
            >
              <animate
                attributeName="r"
                values={`${mobileShield + 14};${mobileShield + 24};${mobileShield + 14}`}
                dur="4.4s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values="0.08;0.28;0.08"
                dur="4.4s"
                repeatCount="indefinite"
              />
            </circle>

            {mobileFullPaths.map((path, index) => (
              <circle key={`mobile-flow-${index}`} r="2.4" fill={svgFlowDot} opacity="0">
                <animateMotion
                  dur={`${7.2 + index * 0.5}s`}
                  begin={`${index * 1.35}s`}
                  repeatCount="indefinite"
                  path={path}
                />
                <animate
                  attributeName="opacity"
                  values="0;0.46;0.84;0.46;0"
                  keyTimes="0;0.08;0.5;0.92;1"
                  dur={`${7.2 + index * 0.5}s`}
                  begin={`${index * 1.35}s`}
                  repeatCount="indefinite"
                />
              </circle>
            ))}

            {mobileBottomPaths.map((path, index) => (
              <circle key={`mobile-bottom-flow-${index}`} r="2" fill={svgBottomDot} opacity="0">
                <animateMotion
                  dur={`${3.8 + index * 0.35}s`}
                  begin={`${index * 0.9}s`}
                  repeatCount="indefinite"
                  path={path}
                />
                <animate
                  attributeName="opacity"
                  values="0;0.6;0.8;0.6;0"
                  keyTimes="0;0.1;0.5;0.9;1"
                  dur={`${3.8 + index * 0.35}s`}
                  begin={`${index * 0.9}s`}
                  repeatCount="indefinite"
                />
              </circle>
            ))}

            <text
              x={mobileCx}
              y={128}
              textAnchor="middle"
              fill={svgTextRuntime}
              fontSize="9"
              fontWeight="700"
              letterSpacing="0.18em"
            >
              RUNTIME CONTROL
            </text>
            <text
              x={mobileCx - mobileShield - 14}
              y={mobileCy - 12}
              textAnchor="end"
              fill={svgBlockedText}
              fontSize="9"
              fontWeight="700"
              letterSpacing="0.12em"
            >
              <animate
                attributeName="opacity"
                values="0.12;0.8;0.12"
                dur="5.4s"
                repeatCount="indefinite"
              />
              BLOCKED
            </text>
            <text
              x={mobileCx + mobileShield + 14}
              y={mobileCy - 12}
              textAnchor="start"
              fill={svgTextDark}
              fontSize="9"
              fontWeight="700"
              letterSpacing="0.12em"
            >
              <animate
                attributeName="opacity"
                values="0.14;0.82;0.14"
                dur="5.8s"
                begin="1s"
                repeatCount="indefinite"
              />
              SAFE
            </text>
            <text
              x={mobileCx}
              y={mobileCy + mobileShield + 54}
              textAnchor="middle"
              fill={svgTextMuted}
              fontSize="9"
              fontWeight="700"
              letterSpacing="0.2em"
            >
              EVERY REQUEST LOGGED
            </text>
          </svg>

          {mobileLeftNodes.map((node, index) => (
            <div
              key={`mobile-left-node-${index}`}
              className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
              style={{
                left: `${(node.x / mobileWidth) * 100}%`,
                top: `${(node.y / mobileHeight) * 100}%`,
              }}
            >
              <div className="flex w-[60px] flex-col items-center gap-1">
                <div className={`flex h-12 w-12 items-center justify-center rounded-[16px] border ${nodeBorder} ${nodeBg} ${nodeShadow}`}>
                  <node.Icon className={`h-[18px] w-[18px] ${nodeIconLeft}`} />
                </div>
                <span className={`text-center text-[9px] leading-[1.15] ${nodeLabel}`}>
                  {node.label}
                </span>
              </div>
            </div>
          ))}

          {mobileRightNodes.map((node, index) => (
            <div
              key={`mobile-right-node-${index}`}
              className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
              style={{
                left: `${(node.x / mobileWidth) * 100}%`,
                top: `${(node.y / mobileHeight) * 100}%`,
              }}
            >
              <div className="flex w-[60px] flex-col items-center gap-1">
                <div className={`flex h-12 w-12 items-center justify-center rounded-[16px] border ${nodeBorder} ${nodeBg} ${nodeShadowRight}`}>
                  <node.Icon className={`h-[18px] w-[18px] ${nodeIconRight}`} />
                </div>
                <span className={`text-center text-[9px] leading-[1.15] ${nodeLabel}`}>
                  {node.label}
                </span>
              </div>
            </div>
          ))}

          {mobileBottomNodes.map((node, index) => (
            <div
              key={`mobile-bottom-node-${index}`}
              className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
              style={{
                left: `${(node.x / mobileWidth) * 100}%`,
                top: `${(node.y / mobileHeight) * 100}%`,
              }}
            >
              <div className="flex w-[62px] flex-col items-center gap-1">
                <div className={`flex h-12 w-12 items-center justify-center rounded-[16px] border ${nodeBorderAccent} ${nodeBg} ${nodeShadow}`}>
                  <node.Icon className={`h-[18px] w-[18px] ${nodeIconBottom}`} />
                </div>
                <span className={`text-center text-[9px] font-medium leading-[1.15] ${nodeLabelBottom}`}>
                  {node.label}
                </span>
              </div>
            </div>
          ))}

          <div
            className="absolute z-20 -translate-x-1/2 -translate-y-1/2"
            style={{ left: "50%", top: `${(mobileCy / mobileHeight) * 100}%` }}
          >
            <div className="relative flex h-[78px] w-[78px] items-center justify-center rounded-full bg-gradient-to-br from-[#0056F9] via-[#4B30C8] to-[#7C3AED] p-[2px] shadow-[0_18px_60px_rgba(0,86,249,0.32),0_0_90px_rgba(109,74,255,0.20)]">
              <div className={`flex h-full w-full items-center justify-center rounded-full ${umaiInnerBg} p-2.5`}>
                <Image
                  src="/assets/umailogo_white.png"
                  alt="UMAI"
                  width={52}
                  height={52}
                  className="h-full w-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
