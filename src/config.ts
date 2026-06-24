export const R2_BASE_URL = "https://art.greetvandewynckele.com" as const;

type CfImageOptions = {
  width?: number;
  quality?: number;
  fit?: "cover" | "contain" | "scale-down";
};

export function cfImage(src: string, opts: CfImageOptions = {}): string {
  const { width, quality = 75, fit = "scale-down" } = opts;
  const params = [
    width ? `width=${width}` : null,
    `quality=${quality}`,
    `fit=${fit}`,
    "format=auto",
  ]
    .filter(Boolean)
    .join(",");

  try {
    const url = new URL(src);
    return `${url.origin}/cdn-cgi/image/${params}${url.pathname}`;
  } catch {
    return src;
  }
}
