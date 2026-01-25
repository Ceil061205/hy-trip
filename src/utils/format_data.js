import days from "dayjs"
export function formatMonthDay(date, formatStr = "MM月DD日") {
  return days(date).format(formatStr)
}

export function getDiffDays(start, end) {
  return days(end).diff(days(start), "day")
}