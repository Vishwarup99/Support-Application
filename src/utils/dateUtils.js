export function formatDate(ts) {
  const date = new Date(ts);
  return date.toLocaleDateString("en-GB");
}

export function isSameDate(ts1, ts2) {
  const d1 = new Date(ts1);
  const d2 = new Date(ts2);
  return d1.toDateString() === d2.toDateString();
}

export function formatChatDate(ts) {
  const date = new Date(ts);
  const today = new Date();
  const diff = (today - date) / (1000 * 60 * 60 * 24);

  if (diff < 1 && date.getDate() === today.getDate()) return "Today";
  if (diff < 2) return "Yesterday";
  if (diff < 7) return date.toLocaleDateString("en-US", { weekday: "long" });
  return date.toLocaleDateString("en-GB");
}
