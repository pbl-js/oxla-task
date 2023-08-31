// consider this way: https://www.freecodecamp.org/news/javascript-date-now-how-to-get-the-current-date-in-javascript/

export function formatDate(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
}

export function getTodayDate() {
  const today = new Date();
  return formatDate(today);
}

export function randomDateInRange(startDate: Date, endDate: Date) {
  const startTimestamp = startDate.getTime();
  const endTimestamp = endDate.getTime();

  const randomTimestamp = Math.random() * (endTimestamp - startTimestamp) + startTimestamp;

  return new Date(randomTimestamp);
}
