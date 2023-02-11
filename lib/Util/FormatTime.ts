export const format = (date?: Date | number, locale?: string, options?: object) => {
  return new Intl.DateTimeFormat(locale, options).format(date);
};

export const getRelativeTime = (date: number): string => {
  if (typeof (date) == "string") { date = new Date(date).getTime() }
  const units: any = {
    year: 24 * 60 * 60 * 1000 * 365,
    month: (24 * 60 * 60 * 1000 * 365) / 12,
    day: 24 * 60 * 60 * 1000,
    hour: 60 * 60 * 1000,
    minute: 60 * 1000,
    second: 1000,
  };
  const rtf: any = new Intl.RelativeTimeFormat("es", { numeric: "auto" });
  const elapsed: number = date - Date.now()

  for (var u in units)
    if (Math.abs(elapsed) > units[u] || u == 'second') {
      return rtf.format(Math.round(elapsed / units[u]), u)
    }
  return ""
};

export const getHour = (number: number): string => {
  const date = new Date(number)
  let t: string = ""
  let h: number = (() => {
    if (date.getHours() > 11) {
      t = "p.m."
      return date.getHours() - 12
    } date.getHours()
    t = "a.m."
    return date.getHours()
  })()
  let m: number = date.getMinutes()
  const resp: string = `${h == 0 ? 12 : h}:${m < 10 ? `0${m}` : m} ${t}`
  return resp
};

export const getDate = (number: number | undefined = 0): string => {
  const date = new Date(number)
  const resp = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
  return resp
};