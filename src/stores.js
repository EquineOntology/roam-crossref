import { writable } from "svelte/store";

export const currentTitle = writable("roam-crossref");

export const mainDoi = writable("");

let storedCrossrefCache;
try {
  storedCrossrefCache = JSON.parse(localStorage.getItem("roam-crossref"));
} catch {
  storedCrossrefCache = {};
}
export const crossrefCache = writable(storedCrossrefCache);
crossrefCache.subscribe((value) => {
  localStorage.setItem("roam-crossref", JSON.stringify(value));
});
