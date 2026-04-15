export function shortDate(date?: string | Date) {
  if (!date) return;

  const normalizedDate =
    typeof date === "string" ? date.replace(" ", "T") : date;

  const dateObj = new Date(normalizedDate);

  return new Intl.DateTimeFormat(navigator.language, {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(dateObj);
}
