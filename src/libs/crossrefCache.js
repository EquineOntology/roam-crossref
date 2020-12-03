import localforage from "localforage";

function createCache() {
  localforage.config({
    driver: localforage.INDEXEDDB,
    name: "roamCrossref",
    storeName: "roam-crossref",
  });

  return {
    get: async function (doi) {
      return localforage.getItem(doi).then((res) => {
        if (!res) return null;
        if (res.ts < Date.now()) {
          doiCache.remove(doi);
          return null;
        }

        return res;
      });
    },

    add: function (doi, data, title) {
      if (!doi) return;
      localforage.setItem(doi, {
        ts: Date.now() + 86400000,
        title: title,
        ...data,
      });
    },

    remove: function (doi) {
      localforage.removeItem(doi);
    },

    clear: function () {
      localforage.clear();
    },
  };
}

export const crossrefCache = createCache();
