/**
 * checkIsBoolean
 * @typeGuard
 */
export function checkIsBoolean(item: unknown): item is boolean {
  return typeof item === "boolean";
}
