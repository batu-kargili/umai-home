import { statSync } from "node:fs";
import { join } from "node:path";

export function getSourceLastModified(relativePath: string) {
  return statSync(join(process.cwd(), relativePath)).mtime;
}
