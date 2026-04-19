import type { CapabilityTheme } from "@/content/umai-content-types";
import { capabilityThemes } from "@/components/platform/theme";

type ConnectorSide = "left" | "right";
type ConnectorVariant = "top" | "middle" | "bottom";

const connectorPaths: Record<ConnectorSide, Record<ConnectorVariant, string>> = {
  left: {
    top: "M0 30 C34 28 58 34 100 68",
    middle: "M0 50 C38 50 62 50 100 50",
    bottom: "M0 70 C34 72 58 66 100 32",
  },
  right: {
    top: "M100 30 C66 28 42 34 0 68",
    middle: "M100 50 C62 50 38 50 0 50",
    bottom: "M100 70 C66 72 42 66 0 32",
  },
};

export function CapabilityConnectorSvg({
  side,
  variant,
  theme,
  active = false,
}: {
  side: ConnectorSide;
  variant: ConnectorVariant;
  theme: CapabilityTheme;
  active?: boolean;
}) {
  const stroke = capabilityThemes[theme].stroke;
  const path = connectorPaths[side][variant];

  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      className="h-full w-full overflow-visible"
      aria-hidden="true"
    >
      <path
        d={path}
        fill="none"
        stroke={stroke}
        strokeWidth="9"
        strokeLinecap="round"
        opacity="0.08"
        vectorEffect="non-scaling-stroke"
      />
      <path
        d={path}
        fill="none"
        stroke={stroke}
        strokeWidth="1.6"
        strokeLinecap="round"
        opacity={active ? "0.88" : "0.34"}
        vectorEffect="non-scaling-stroke"
      />
      <path
        d={path}
        fill="none"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="8 10"
        opacity={active ? "0.9" : "0.24"}
        className="motion-safe:[animation:umai-flow_8s_linear_infinite] motion-reduce:animate-none"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
