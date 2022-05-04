export default function getFormattedDate() {
  const month = new Date().getMonth() + 1;
  const date = new Date().getDate();
  const year = new Date().getFullYear();
  const hour = new Date().getHours();
  const minute = new Date().getMinutes();
  const second = new Date().getSeconds();
  const time = `${month} ${date} ${year} ${hour}:${minute}:${second}`;
  return time;
}
