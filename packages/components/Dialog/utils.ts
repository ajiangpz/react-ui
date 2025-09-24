export function parseValueToPx(value: Number | String) {
  if (typeof value === 'number') return `${value}px`;
  return value;
}
