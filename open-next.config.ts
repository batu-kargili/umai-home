import { defineCloudflareConfig } from "@opennextjs/cloudflare";
import staticAssetsIncrementalCache from "@opennextjs/cloudflare/overrides/incremental-cache/static-assets-incremental-cache";

// The marketing site is fully prerendered and never revalidates, so prerendered
// payloads can be served straight from Workers static assets. Without this the
// adapter reports `x-nextjs-cache: MISS` on every request and re-runs SSR on the
// Worker (measured TTFB ~1.25s).
// See https://opennext.js.org/cloudflare/caching
export default defineCloudflareConfig({
	incrementalCache: staticAssetsIncrementalCache,
	// Serve cached routes before the Next.js server handler runs.
	enableCacheInterception: true,
});
