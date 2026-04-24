export function dateWithLargeHours(date?: string | Date) {
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

export const dateWithHours = function (date: string) {
  return new Intl.DateTimeFormat(navigator.language, {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  })
    .format(new Date(date))
    .toLowerCase()
    .replace(/\s/g, "");
};

export const shortDate = (val: string | number | Date): string => {
  const date = new Date(val);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    timeZone: "GMT",
  };

  // Retorna la fecha en formato corto (dd/mm/yyyy) en español (MX).
  return date.toLocaleDateString(navigator.language, options);
};
