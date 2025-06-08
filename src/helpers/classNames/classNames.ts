type Mods = Record<string, boolean | string>;

export function classNames(
  cls: string,
  additional: string[],
  mods?: Mods,
): string {
  return [
    cls,
    ...additional,
    ...Object.entries(mods)
      .filter(([cls, value]) => Boolean(value))
      .map(([cls, value]) => cls),
  ].join(" ");
}
