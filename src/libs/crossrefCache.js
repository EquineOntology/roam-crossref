import { writable, get } from "svelte/store";

function createCache() {
  console.count("caches");
  let storedCrossrefCache;
  try {
    storedCrossrefCache = JSON.parse(localStorage.getItem("roam-crossref"));
    storedCrossrefCache = storedCrossrefCache || {};
  } catch {
    storedCrossrefCache = {};
  }
  const crossrefCache = writable(storedCrossrefCache);

  crossrefCache.subscribe((value) => {
    console.count("updated");
    localStorage.setItem("roam-crossref", JSON.stringify(value));
  });

  return {
    get: function (doi) {
      const doiData = get(crossrefCache, doi);
      if (!doiData) return null;
      if (doiData.ts < Date.now()) {
        console.info("remove");
        doiCache.remove(doi);
        return null;
      }

      return doiData[doi];
    },

    add: function (doi, data) {
      crossrefCache[doi] = {
        title: data.title[0],
        ts: Date.now() + 86400000,
        ...data,
      };
      crossrefCache.set(crossrefCache);
    },

    remove: function (doi) {
      if (!get(crossrefCache, doi)) return;
      delete crossrefCache[doi];
      crossrefCache.set(crossrefCache);
    },
  };
}

export const crossrefCache = createCache();
