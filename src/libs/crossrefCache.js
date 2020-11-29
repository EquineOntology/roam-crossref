import { writable, get } from "svelte/store";

function createCache() {
  let storedCrossrefCache;
  try {
    storedCrossrefCache = JSON.parse(localStorage.getItem("roam-crossref"));
    storedCrossrefCache = storedCrossrefCache || {};
  } catch {
    storedCrossrefCache = {};
  }
  const crossrefCache = writable(storedCrossrefCache);

  crossrefCache.subscribe((value) => {
    localStorage.setItem("roam-crossref", JSON.stringify(value));
  });

  return {
    get: function (doi) {
      const doiData = get(crossrefCache, doi);
      if (!doiData) return null;
      if (doiData.ts < Date.now()) {
        doiCache.remove(doi);
        return null;
      }

      return doiData[doi];
    },

    add: function (doi, data) {
      crossrefCache[doi] = {
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

    clear: function () {
      crossrefCache.set("");
    },
  };
}

export const crossrefCache = createCache();
