export function DateToTimestamp(date: string): number {
  const timestamp = new Date(date).getTime() / 1000;
  return timestamp;
}
