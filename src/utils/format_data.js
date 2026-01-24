import days from "dayjs"
export function formatMonthDay(date) {
  return days(date).format("MM月DD日")
}

export function getDiffDays(start, end) {
  return days(end).diff(days(start), "day")
}