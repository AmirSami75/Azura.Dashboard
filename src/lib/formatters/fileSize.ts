export function formatfileSize(bytes: number, Decimals = 2) {
  if (!Number.isFinite(bytes) || bytes < 0) return `0 B`;
  const KB = 1024;
  const MB = KB ** 2;
  const GB = KB ** 3;

  let value = bytes;
  let unit = "B";

  if (value >= GB) {
    value = bytes / GB;
    unit = "GB";
  } else if (value >= MB) {
    value = bytes / MB;
    unit = "MB";
  } else if (value >= KB) {
    value = bytes / KB;
    unit = "KB";
  }
  return `${value.toFixed(Decimals)} ${unit}`;
}
