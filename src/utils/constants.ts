export const baseUrl = "http://161.35.153.209:5430/api"
export const jsonPlaceholderUrl = "https://jsonplaceholder.typicode.com"
export const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
export const YANDEX_CLIENT_ID = import.meta.env.VITE_YANDEX_CLIENT_ID;
export const REDIRECT_URI = import.meta.env.VITE_YANDEX_REDIRECT_URI;
export const CLIENT_SECRET = import.meta.env.VITE_CLIENT_SECRET;

if (!baseUrl) {
  throw new Error("Missing baseUrl");
}
if (!PUBLISHABLE_KEY) {
  throw new Error("Missing PUBLISHABLE_KEY");
}
if (!YANDEX_CLIENT_ID) {
  throw new Error("Missing YANDEX_CLIENT_ID");
}
if (!REDIRECT_URI) {
  throw new Error("Missing YANDEX_REDIRECT_URI");
}
// if (!CLIENT_SECRET) {
//   throw new Error("Missing YANDEX_CLIENT_SECRET");
// }