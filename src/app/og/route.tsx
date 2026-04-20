import { ImageResponse } from "next/og";

import {
  SITE_DEFAULT_OG_IMAGE_HEIGHT,
  SITE_DEFAULT_OG_IMAGE_WIDTH,
  SITE_NAME,
} from "@/lib/site";

export const runtime = "edge";

const title = "Control Plane for Enterprise AI";
const description =
  "Runtime guardrails, browser governance, and tamper-evident audit evidence.";

function FeatureCard({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 10,
        borderRadius: 22,
        border: "1px solid rgba(154, 168, 191, 0.18)",
        background: "rgba(8, 13, 23, 0.92)",
        padding: "18px 20px",
      }}
    >
      <div
        style={{
          fontSize: 18,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "#8FB3FF",
        }}
      >
        {label}
      </div>
      <div
        style={{
          fontSize: 28,
          lineHeight: 1.2,
          fontWeight: 700,
          color: "#F8FAFC",
        }}
      >
        {value}
      </div>
    </div>
  );
}

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          position: "relative",
          display: "flex",
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(135deg, #07111F 0%, #0A1730 46%, #111827 100%)",
          color: "white",
          padding: "56px 60px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 40,
            left: 36,
            width: 280,
            height: 280,
            borderRadius: 9999,
            background: "rgba(0, 86, 249, 0.18)",
            filter: "blur(70px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 10,
            bottom: -20,
            width: 360,
            height: 360,
            borderRadius: 9999,
            background: "rgba(109, 74, 255, 0.16)",
            filter: "blur(88px)",
          }}
        />
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            gap: 40,
            zIndex: 1,
          }}
        >
          <div
            style={{
              display: "flex",
              width: 620,
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minWidth: 116,
                  borderRadius: 9999,
                  border: "1px solid rgba(154, 168, 191, 0.22)",
                  background: "rgba(15, 23, 42, 0.42)",
                  padding: "12px 22px",
                  fontSize: 28,
                  fontWeight: 800,
                  letterSpacing: "0.08em",
                }}
              >
                {SITE_NAME}
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  borderRadius: 9999,
                  background: "rgba(0, 86, 249, 0.16)",
                  color: "#BFD3FF",
                  padding: "10px 18px",
                  fontSize: 20,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                }}
              >
                Enterprise AI Governance
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 18,
              }}
            >
              <div
                style={{
                  display: "flex",
                  fontSize: 66,
                  lineHeight: 1.02,
                  fontWeight: 800,
                  letterSpacing: "-0.04em",
                  color: "#F8FAFC",
                }}
              >
                {title}
              </div>
              <div
                style={{
                  display: "flex",
                  maxWidth: 560,
                  fontSize: 28,
                  lineHeight: 1.38,
                  color: "#CBD5E1",
                }}
              >
                {description}
              </div>
            </div>
            <div
              style={{
                display: "flex",
                gap: 14,
                flexWrap: "wrap",
              }}
            >
              {["Runtime Guardrails", "Browser Governance", "Audit Evidence"].map(
                (item) => (
                  <div
                    key={item}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      borderRadius: 9999,
                      border: "1px solid rgba(154, 168, 191, 0.18)",
                      background: "rgba(15, 23, 42, 0.58)",
                      padding: "12px 18px",
                      fontSize: 22,
                      color: "#E2E8F0",
                    }}
                  >
                    {item}
                  </div>
                ),
              )}
            </div>
          </div>
          <div
            style={{
              display: "flex",
              width: 420,
              flexDirection: "column",
              gap: 18,
              borderRadius: 30,
              border: "1px solid rgba(154, 168, 191, 0.2)",
              background: "rgba(15, 23, 42, 0.6)",
              boxShadow: "0 28px 60px rgba(2, 6, 23, 0.38)",
              padding: 24,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderRadius: 22,
                background: "rgba(3, 7, 18, 0.78)",
                padding: "18px 20px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                }}
              >
                <div
                  style={{
                    fontSize: 18,
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: "#8FB3FF",
                  }}
                >
                  Governance Layer
                </div>
                <div
                  style={{
                    fontSize: 30,
                    fontWeight: 700,
                    color: "#F8FAFC",
                  }}
                >
                  Inline policy enforcement
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  width: 18,
                  height: 18,
                  borderRadius: 9999,
                  background: "#22C55E",
                  boxShadow: "0 0 0 8px rgba(34, 197, 94, 0.16)",
                }}
              />
            </div>
            <FeatureCard label="PRE_LLM" value="Prompt screening and routing" />
            <FeatureCard label="POST_LLM" value="Response enforcement and approvals" />
            <FeatureCard label="Ledger" value="Audit-ready evidence and traceability" />
          </div>
        </div>
      </div>
    ),
    {
      width: SITE_DEFAULT_OG_IMAGE_WIDTH,
      height: SITE_DEFAULT_OG_IMAGE_HEIGHT,
    },
  );
}
