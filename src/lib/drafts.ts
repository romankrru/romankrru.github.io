type WithDraft = { data: { draft?: boolean } };

export function isVisible<T extends WithDraft>(entry: T): boolean {
  return import.meta.env.DEV || !entry.data.draft;
}
