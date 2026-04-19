const homeLinkHeader =
  '</.well-known/service-desc.json>; rel="service-desc"; type="application/json", ' +
  '</docs>; rel="service-doc"; type="text/html", ' +
  '</.well-known/service-desc.json>; rel="describedby"; type="application/json", ' +
  '</sitemap.xml>; rel="describedby"; type="application/xml"';

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    qualities: [75, 90, 95],
  },
  async headers() {
    return [
      {
        source: "/",
        headers: [
          {
            key: "Link",
            value: homeLinkHeader,
          },
        ],
      },
    ];
  },
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/",
          has: [
            {
              type: "header",
              key: "accept",
              value: ".*text/markdown.*",
            },
          ],
          destination: "/api/agent-markdown?path=/",
        },
        {
          source: "/:path*",
          has: [
            {
              type: "header",
              key: "accept",
              value: ".*text/markdown.*",
            },
          ],
          destination: "/api/agent-markdown/:path*",
        },
      ],
    };
  },
};

export default nextConfig;
