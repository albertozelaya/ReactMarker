export function shortDate(date: string | Date) {
  if (!date) return;

  return new Intl.DateTimeFormat(navigator.language, {
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(date));
}
