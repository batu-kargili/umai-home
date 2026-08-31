import type { CSSProperties } from "react";
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

// The diagram's motion lives in globals.css (see "HERO DIAGRAM MOTION") rather
// than in SVG SMIL, which ticks on the main thread and inflates TBT. These
// custom properties feed the shared keyframes.
const motion = (vars: Record<string, string>) => vars as CSSProperties;

// Node cards are laid out in the same coordinate space as the SVG viewBox and
// resolved through --u (see "HERO DIAGRAM" in globals.css), so the HTML layer
// scales in lockstep with the paths instead of staying at fixed pixel sizes.
const u = (n: number) => `calc(${n} * var(--u))`;

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
  const nodeBorder = isLight ? "border-[#d9e1ef]" : "border-white/[0.10]";
  const nodeBorderAccent = isLight ? "border-[#b8cdf8]" : "border-[#0056F9]/24";
  const nodeShadow = isLight ? "shadow-[0_8px_24px_rgba(21,32,43,0.07),0_1px_3px_rgba(21,32,43,0.05)]" : "shadow-[0_10px_30px_rgba(0,0,0,0.18)]";
  const nodeIconLeft = isLight ? "text-[#0056F9]" : "text-[#8ebcff]/70";
  const nodeIconRight = isLight ? "text-[#525252]" : "text-white/52";
  const nodeIconBottom = isLight ? "text-[#0056F9]" : "text-[#9ec6ff]/58";
  const nodeLabel = isLight ? "text-[#26364d]" : "text-white/72";
  const nodeLabelBottom = isLight ? "text-[#17325f]" : "text-[#c6dcff]/72";
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


  const width = 1100;
  const height = 620;
  const cx = 550;
  const cy = 269;
  const shield = 66;
  const nodeWidth = 184;
  // Tall enough for a two-line label, so one- and two-line cards render at the
  // same height and the columns keep an even rhythm.
  const nodeMinHeight = 64;
  const columnLeft = 108;
  const columnRight = width - columnLeft;
  // Connectors meet the card edge rather than its centre, so no path ever runs
  // underneath a card.
  const edgeLeft = columnLeft + nodeWidth / 2;
  const edgeRight = columnRight - nodeWidth / 2;
  const rows = [84, 158, 232, 306, 380, 454];
  const bottomWidth = 196;
  const bottomMinHeight = 66;
  const bottomY = 548;
  const bottomTop = bottomY - bottomMinHeight / 2;

  const mobileWidth = 400;
  const mobileHeight = 420;
  const mobileCx = 200;
  const mobileCy = 155;
  const mobileShield = 40;
  const mobileNodeWidth = 116;
  const mobileNodeMinHeight = 48;
  const mobileColumnLeft = 64;
  const mobileColumnRight = mobileWidth - mobileColumnLeft;
  const mobileEdgeLeft = mobileColumnLeft + mobileNodeWidth / 2;
  const mobileEdgeRight = mobileColumnRight - mobileNodeWidth / 2;
  const mobileRows = [68, 126, 184, 242];
  const mobileBottomWidth = 118;
  const mobileBottomMinHeight = 52;
  const mobileBottomY = 360;
  const mobileBottomTop = mobileBottomY - mobileBottomMinHeight / 2;

  const leftNodes = [
    { Icon: Users,         label: "Employee AI",       x: columnLeft, y: rows[0] },
    { Icon: MessageSquare, label: "Customer chat",     x: columnLeft, y: rows[1] },
    { Icon: Bot,           label: "Internal copilot",  x: columnLeft, y: rows[2] },
    { Icon: Workflow,      label: "Agent workflows",   x: columnLeft, y: rows[3] },
    { Icon: Database,      label: "RAG context",       x: columnLeft, y: rows[4] },
    { Icon: Server,        label: "App / API traffic", x: columnLeft, y: rows[5] },
  ];

  const rightNodes = [
    { Icon: BrainCircuit, label: "Model output",   x: columnRight, y: rows[0] },
    { Icon: Wrench,       label: "Tool calls",     x: columnRight, y: rows[1] },
    { Icon: Database,     label: "Database query", x: columnRight, y: rows[2] },
    { Icon: Globe,        label: "External APIs",  x: columnRight, y: rows[3] },
    { Icon: Workflow,     label: "Agent actions",  x: columnRight, y: rows[4] },
    { Icon: Eye,          label: "Data access",    x: columnRight, y: rows[5] },
  ];

  const bottomNodes = [
    { Icon: FileCheck2, label: "Audit ledger", x: 320, y: bottomY },
    { Icon: LayoutDashboard, label: "Live dashboard", x: 550, y: bottomY },
    { Icon: Eye, label: "Governance", x: 780, y: bottomY },
  ];

  const leftPaths = leftNodes.map(
    (node) =>
      `M ${edgeLeft},${node.y} C ${edgeLeft + 140},${node.y} ${cx - shield - 140},${cy} ${cx - shield},${cy}`,
  );
  const rightPaths = rightNodes.map(
    (node) =>
      `M ${cx + shield},${cy} C ${cx + shield + 140},${cy} ${edgeRight - 140},${node.y} ${edgeRight},${node.y}`,
  );
  const bottomPaths = bottomNodes.map(
    (node) =>
      `M ${cx},${cy + shield} C ${cx},${cy + shield + 70} ${node.x},${bottomTop - 60} ${node.x},${bottomTop}`,
  );

  const fullPaths = leftNodes.map((leftNode, index) => {
    const rightNode = rightNodes[index];
    return `M ${edgeLeft},${leftNode.y} C ${edgeLeft + 140},${leftNode.y} ${cx - 140},${cy} ${cx},${cy} C ${cx + 140},${cy} ${edgeRight - 140},${rightNode.y} ${edgeRight},${rightNode.y}`;
  });

  const blockedEvents = [
    { label: "PROMPT INJECTION", delay: 0, duration: 5, index: 0 },
    { label: "DATA LEAKAGE", delay: 2.5, duration: 4.5, index: 2 },
    { label: "PII DETECTED", delay: 5, duration: 5.5, index: 4 },
    { label: "JAILBREAK", delay: 7.5, duration: 4.2, index: 1 },
  ];
  const mobileLeftNodes = [
    { Icon: Users, label: "Employee AI", x: mobileColumnLeft, y: mobileRows[0] },
    { Icon: MessageSquare, label: "Customer chat", x: mobileColumnLeft, y: mobileRows[1] },
    { Icon: Bot, label: "Copilots", x: mobileColumnLeft, y: mobileRows[2] },
    { Icon: Workflow, label: "Agent flows", x: mobileColumnLeft, y: mobileRows[3] },
  ];
  const mobileRightNodes = [
    { Icon: BrainCircuit, label: "Model output", x: mobileColumnRight, y: mobileRows[0] },
    { Icon: Wrench, label: "Tool calls", x: mobileColumnRight, y: mobileRows[1] },
    { Icon: Globe, label: "API calls", x: mobileColumnRight, y: mobileRows[2] },
    { Icon: Eye, label: "Data access", x: mobileColumnRight, y: mobileRows[3] },
  ];
  const mobileBottomNodes = [
    { Icon: FileCheck2, label: "Audit ledger", x: 68, y: mobileBottomY },
    { Icon: LayoutDashboard, label: "Live monitor", x: 200, y: mobileBottomY },
    { Icon: Eye, label: "Evidence", x: 332, y: mobileBottomY },
  ];
  const mobileLeftPaths = mobileLeftNodes.map(
    (node) =>
      `M ${mobileEdgeLeft},${node.y} C ${mobileEdgeLeft + 46},${node.y} ${mobileCx - mobileShield - 46},${mobileCy} ${mobileCx - mobileShield},${mobileCy}`,
  );
  const mobileRightPaths = mobileRightNodes.map(
    (node) =>
      `M ${mobileCx + mobileShield},${mobileCy} C ${mobileCx + mobileShield + 46},${mobileCy} ${mobileEdgeRight - 46},${node.y} ${mobileEdgeRight},${node.y}`,
  );
  const mobileBottomPaths = mobileBottomNodes.map(
    (node) =>
      `M ${mobileCx},${mobileCy + mobileShield} C ${mobileCx},${mobileCy + mobileShield + 46} ${node.x},${mobileBottomTop - 42} ${node.x},${mobileBottomTop}`,
  );
  const mobileFullPaths = mobileLeftNodes.map((leftNode, index) => {
    const rightNode = mobileRightNodes[index];

    return `M ${mobileEdgeLeft},${leftNode.y} C ${mobileEdgeLeft + 46},${leftNode.y} ${mobileCx - 46},${mobileCy} ${mobileCx},${mobileCy} C ${mobileCx + 46},${mobileCy} ${mobileEdgeRight - 46},${rightNode.y} ${mobileEdgeRight},${rightNode.y}`;
  });

  type NodeSpec = {
    Icon: (typeof leftNodes)[number]["Icon"];
    label: string;
    x: number;
    y: number;
  };

  type NodeStyle = {
    canvasW: number;
    canvasH: number;
    boxWidth: number;
    minHeight: number;
    padX: number;
    padY: number;
    gap: number;
    tile: number;
    icon: number;
    font: number;
    border: string;
    tileClass: string;
    iconClass: string;
    labelClass: string;
    hover: string;
    center?: boolean;
  };

  // Cards are sized from their content (min-height + padding) instead of a fixed
  // height, so a label that wraps grows the card rather than spilling out of it.
  const renderNode = (key: string, node: NodeSpec, s: NodeStyle) => (
    <div
      key={key}
      className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
      style={{
        left: `${(node.x / s.canvasW) * 100}%`,
        top: `${(node.y / s.canvasH) * 100}%`,
      }}
    >
      <div
        className={`flex items-center ${s.center ? "justify-center" : ""} border ${s.border} ${nodeBg} ${nodeShadow} transition-[transform,border-color,box-shadow] duration-200 ${s.hover}`}
        style={{
          width: u(s.boxWidth),
          minHeight: u(s.minHeight),
          gap: u(s.gap),
          paddingLeft: u(s.padX),
          paddingRight: u(s.padX),
          paddingTop: u(s.padY),
          paddingBottom: u(s.padY),
          borderRadius: u(10),
        }}
      >
        <span
          className={`flex shrink-0 items-center justify-center ${s.tileClass}`}
          style={{ width: u(s.tile), height: u(s.tile), borderRadius: u(7) }}
        >
          <node.Icon
            className={s.iconClass}
            style={{ width: u(s.icon), height: u(s.icon) }}
          />
        </span>
        <span
          className={`text-left font-semibold ${s.labelClass}`}
          style={{ fontSize: u(s.font), lineHeight: 1.25 }}
        >
          {node.label}
        </span>
      </div>
    </div>
  );

  const renderPill = (
    text: string,
    x: number,
    y: number,
    canvasW: number,
    canvasH: number,
    tone: string,
    font: number,
    dot = false,
  ) => (
    <div
      className="absolute z-20 -translate-x-1/2 -translate-y-1/2"
      style={{ left: `${(x / canvasW) * 100}%`, top: `${(y / canvasH) * 100}%` }}
    >
      <span
        className={`inline-flex items-center whitespace-nowrap rounded-full border font-bold uppercase leading-none ${tone}`}
        style={{
          fontSize: u(font),
          letterSpacing: "0.18em",
          gap: u(6),
          paddingLeft: u(13),
          paddingRight: u(13),
          paddingTop: u(7),
          paddingBottom: u(7),
        }}
      >
        {dot && (
          <span className="rounded-full bg-[#0056F9]" style={{ width: u(5), height: u(5) }} />
        )}
        {text}
      </span>
    </div>
  );

  const pillBlue = isLight
    ? "border-[#cfe0ff] bg-white text-[#0056F9]"
    : "border-[#0056F9]/20 bg-[#0b1119] text-[#8ebcff]";
  const pillPurple = isLight
    ? "border-[#ddd2ff] bg-white text-[#6D4AFF]"
    : "border-[#7C3AED]/20 bg-[#0b1119] text-[#bba9ff]";
  const pillRuntime = isLight
    ? "border-[#cfe0ff] bg-white text-[#315b9a]"
    : "border-[#0056F9]/20 bg-[#0b1119] text-[#a7c4ff]";
  const pillMuted = isLight
    ? "border-[#d9e1ef] bg-white text-[#52657c]"
    : "border-white/10 bg-[#0b1119] text-white/50";

  const tileLeft = isLight ? "bg-[#edf4ff]" : "bg-[#0056F9]/12";
  const tileRight = isLight ? "bg-[#f3efff]" : "bg-[#7C3AED]/12";

  const desktopNodeStyle = {
    canvasW: width,
    canvasH: height,
    boxWidth: nodeWidth,
    minHeight: nodeMinHeight,
    padX: 14,
    padY: 10,
    gap: 10,
    tile: 34,
    icon: 18,
    font: 15,
  };

  const mobileNodeStyle = {
    canvasW: mobileWidth,
    canvasH: mobileHeight,
    boxWidth: mobileNodeWidth,
    minHeight: mobileNodeMinHeight,
    padX: 10,
    padY: 8,
    gap: 8,
    tile: 26,
    icon: 14,
    font: 11,
    hover: "",
  };

  return (
    <div>
      {!isCompact && (
      <div
        data-testid="premium-hero-diagram"
        className="umai-diagram relative mx-auto hidden w-full xl:block"
        style={{ maxWidth: width, aspectRatio: `${width} / ${height}` }}
      >
        {/* --u resolves against this layer's query container (the box above),
            so every card scales with the SVG viewBox. */}
        <div
          className="umai-diagram-layer absolute inset-0"
          style={{ "--design-w": width } as CSSProperties}
        >
        <div
          className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0056F9]/16 blur-[80px]"
          style={{ left: "50%", top: `${(cy / height) * 100}%`, width: u(230), height: u(230) }}
        />
        <div
          className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#6D4AFF]/14 blur-[110px]"
          style={{ left: "54%", top: `${((cy + 10) / height) * 100}%`, width: u(210), height: u(210) }}
        />

        <svg
          viewBox={`0 0 ${width} ${height}`}
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
            r={shield + 4}
            opacity="0.2"
            stroke={shieldInner}
            strokeWidth="1"
            fill="none"
            strokeDasharray="4 6"
            className="umai-ring-pulse"
            style={motion({
              "--umai-ring-dur": "3s",
              "--umai-ring-r0": `${shield + 4}px`,
              "--umai-ring-r1": `${shield + 14}px`,
              "--umai-ring-o0": "0.2",
              "--umai-ring-o1": "0.55",
            })}
          />

          <circle
            cx={cx}
            cy={cy}
            r={shield + 20}
            opacity="0.12"
            stroke={shieldOuter}
            strokeWidth="0.9"
            fill="none"
            strokeDasharray="2 10"
            className="umai-ring-pulse"
            style={motion({
              "--umai-ring-dur": "4.5s",
              "--umai-ring-r0": `${shield + 20}px`,
              "--umai-ring-r1": `${shield + 32}px`,
              "--umai-ring-o0": "0.12",
              "--umai-ring-o1": "0.3",
            })}
          />

          {fullPaths.map((path, index) => (
            <circle
              key={`flow-${index}`}
              r="2.5"
              fill={svgFlowDot}
              opacity="0"
              className="umai-flow-dot"
              style={motion({
                "--umai-flow-path": `path("${path}")`,
                "--umai-flow-dur": `${8 + index * 0.7}s`,
                "--umai-flow-delay": `${index * 1.7}s`,
              })}
            />
          ))}

          {bottomPaths.map((path, index) => (
            <circle
              key={`bottom-flow-${index}`}
              r="2"
              fill={svgBottomDot}
              opacity="0"
              className="umai-flow-dot"
              style={motion({
                "--umai-flow-path": `path("${path}")`,
                "--umai-flow-fade": "umai-flow-fade-bottom",
                "--umai-flow-dur": `${4 + index * 0.45}s`,
                "--umai-flow-delay": `${index * 1.2}s`,
              })}
            />
          ))}

          {blockedEvents.map((event) => (
            <g key={event.label}>
              <circle
                r="3.3"
                fill={svgBlockedDot}
                opacity="0"
                className="umai-blocked-dot"
                style={motion({
                  "--umai-flow-path": `path("${leftPaths[event.index]}")`,
                  "--umai-flow-dur": `${event.duration}s`,
                  "--umai-flow-delay": `${event.delay}s`,
                })}
              />
              <circle
                cx={cx - shield}
                cy={cy}
                r="0"
                fill="none"
                stroke="#7C3AED"
                strokeWidth="1.4"
                opacity="0"
                className="umai-blocked-ripple"
                style={motion({
                  "--umai-flow-dur": `${event.duration}s`,
                  "--umai-flow-delay": `${event.delay}s`,
                })}
              />
            </g>
          ))}
        </svg>

        {renderPill("AI inputs", columnLeft, 24, width, height, pillBlue, 13)}
        {renderPill("Governed actions", columnRight, 24, width, height, pillPurple, 13)}
        {renderPill("Runtime policy check", cx, cy - shield - 40, width, height, pillRuntime, 13)}
        {renderPill("Every request logged", cx, 382, width, height, pillMuted, 13, true)}
        {renderPill("Evidence & oversight", cx, 462, width, height, pillMuted, 13)}

        {leftNodes.map((node, index) =>
          renderNode(`left-node-${index}`, node, {
            ...desktopNodeStyle,
            border: nodeBorder,
            tileClass: tileLeft,
            iconClass: nodeIconLeft,
            labelClass: nodeLabel,
            hover:
              "hover:-translate-y-[2px] hover:border-[#0056F9]/50 hover:shadow-[0_10px_28px_rgba(0,86,249,0.12)]",
          }),
        )}

        {rightNodes.map((node, index) =>
          renderNode(`right-node-${index}`, node, {
            ...desktopNodeStyle,
            border: nodeBorder,
            tileClass: tileRight,
            iconClass: nodeIconRight,
            labelClass: nodeLabel,
            hover:
              "hover:-translate-y-[2px] hover:border-[#7C3AED]/50 hover:shadow-[0_10px_28px_rgba(124,58,237,0.12)]",
          }),
        )}

        {bottomNodes.map((node, index) =>
          renderNode(`bottom-node-${index}`, node, {
            ...desktopNodeStyle,
            boxWidth: bottomWidth,
            minHeight: bottomMinHeight,
            padY: 12,
            border: nodeBorderAccent,
            tileClass: tileLeft,
            iconClass: nodeIconBottom,
            labelClass: nodeLabelBottom,
            hover: "hover:-translate-y-[2px] hover:border-[#0056F9]/60",
            center: true,
          }),
        )}

        <div
          className="absolute z-20 -translate-x-1/2 -translate-y-1/2"
          style={{ left: "50%", top: `${(cy / height) * 100}%` }}
        >
          <div
            className="relative flex items-center justify-center rounded-full bg-gradient-to-br from-[#0056F9] via-[#4B30C8] to-[#7C3AED] shadow-[0_18px_70px_rgba(0,86,249,0.36),0_0_110px_rgba(109,74,255,0.22)]"
            style={{ width: u(shield * 2), height: u(shield * 2), padding: u(3) }}
          >
            <div
              className={`flex h-full w-full items-center justify-center rounded-full ${umaiInnerBg}`}
              style={{ padding: u(22) }}
            >
              <Image
                src="/assets/umailogo_white.png"
                alt="UMAI"
                width={96}
                height={96}
                className="h-full w-full object-contain"
              />
            </div>
          </div>
        </div>
        </div>
      </div>
      )}

      <div className={isCompact ? "block" : "xl:hidden"}>
        <div
          className="umai-diagram relative mx-auto w-full"
          style={{ maxWidth: 460, aspectRatio: `${mobileWidth} / ${mobileHeight}` }}
        >
        <div
          className="umai-diagram-layer absolute inset-0"
          style={{ "--design-w": mobileWidth } as CSSProperties}
        >
          <div
            className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0056F9]/18 blur-[70px]"
            style={{ left: "50%", top: `${(mobileCy / mobileHeight) * 100}%`, width: u(160), height: u(160) }}
          />

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
              r={mobileShield + 2}
              opacity="0.16"
              stroke={shieldInner}
              strokeWidth="1"
              fill="none"
              strokeDasharray="4 6"
              className="umai-ring-pulse"
              style={motion({
                "--umai-ring-dur": "3s",
                "--umai-ring-r0": `${mobileShield + 2}px`,
                "--umai-ring-r1": `${mobileShield + 12}px`,
                "--umai-ring-o0": "0.16",
                "--umai-ring-o1": "0.55",
              })}
            />

            <circle
              cx={mobileCx}
              cy={mobileCy}
              r={mobileShield + 14}
              opacity="0.08"
              stroke={shieldOuter}
              strokeWidth="0.9"
              fill="none"
              strokeDasharray="2 8"
              className="umai-ring-pulse"
              style={motion({
                "--umai-ring-dur": "4.4s",
                "--umai-ring-r0": `${mobileShield + 14}px`,
                "--umai-ring-r1": `${mobileShield + 24}px`,
                "--umai-ring-o0": "0.08",
                "--umai-ring-o1": "0.28",
              })}
            />

            {mobileFullPaths.map((path, index) => (
              <circle
                key={`mobile-flow-${index}`}
                r="2.4"
                fill={svgFlowDot}
                opacity="0"
                className="umai-flow-dot"
                style={motion({
                  "--umai-flow-path": `path("${path}")`,
                  "--umai-flow-fade": "umai-flow-fade-mobile",
                  "--umai-flow-dur": `${7.2 + index * 0.5}s`,
                  "--umai-flow-delay": `${index * 1.35}s`,
                })}
              />
            ))}

            {mobileBottomPaths.map((path, index) => (
              <circle
                key={`mobile-bottom-flow-${index}`}
                r="2"
                fill={svgBottomDot}
                opacity="0"
                className="umai-flow-dot"
                style={motion({
                  "--umai-flow-path": `path("${path}")`,
                  "--umai-flow-fade": "umai-flow-fade-bottom",
                  "--umai-flow-dur": `${3.8 + index * 0.35}s`,
                  "--umai-flow-delay": `${index * 0.9}s`,
                })}
              />
            ))}

          </svg>

          {/* Short form: the full label is wider than the gap between columns. */}
          {renderPill(
            "Runtime check",
            mobileCx,
            mobileCy - mobileShield - 26,
            mobileWidth,
            mobileHeight,
            pillRuntime,
            11,
          )}
          {renderPill(
            "Every request logged",
            mobileCx,
            292,
            mobileWidth,
            mobileHeight,
            pillMuted,
            11,
            true,
          )}

          {mobileLeftNodes.map((node, index) =>
            renderNode(`mobile-left-node-${index}`, node, {
              ...mobileNodeStyle,
              border: nodeBorder,
              tileClass: tileLeft,
              iconClass: nodeIconLeft,
              labelClass: nodeLabel,
            }),
          )}

          {mobileRightNodes.map((node, index) =>
            renderNode(`mobile-right-node-${index}`, node, {
              ...mobileNodeStyle,
              border: nodeBorder,
              tileClass: tileRight,
              iconClass: nodeIconRight,
              labelClass: nodeLabel,
            }),
          )}

          {mobileBottomNodes.map((node, index) =>
            renderNode(`mobile-bottom-node-${index}`, node, {
              ...mobileNodeStyle,
              boxWidth: mobileBottomWidth,
              minHeight: mobileBottomMinHeight,
              tile: 24,
              icon: 13,
              border: nodeBorderAccent,
              tileClass: tileLeft,
              iconClass: nodeIconBottom,
              labelClass: nodeLabelBottom,
            }),
          )}

          <div
            className="absolute z-20 -translate-x-1/2 -translate-y-1/2"
            style={{ left: "50%", top: `${(mobileCy / mobileHeight) * 100}%` }}
          >
            <div
              className="relative flex items-center justify-center rounded-full bg-gradient-to-br from-[#0056F9] via-[#4B30C8] to-[#7C3AED] shadow-[0_18px_60px_rgba(0,86,249,0.32),0_0_90px_rgba(109,74,255,0.20)]"
              style={{ width: u(mobileShield * 2), height: u(mobileShield * 2), padding: u(2) }}
            >
              <div
                className={`flex h-full w-full items-center justify-center rounded-full ${umaiInnerBg}`}
                style={{ padding: u(14) }}
              >
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
        </div>
      </div>
    </div>
  );
}
