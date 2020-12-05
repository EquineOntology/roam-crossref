import localforage from "localforage";

function createCache() {
  try {
    if (process.env.TESTING) {
      return {
        get: function () {
          return Promise.resolve(null);
        },
        add: function () {},
        remove: function () {},
        clear: function () {},
      };
    }
  } catch (e) {}

  localforage.config({
    driver: localforage.INDEXEDDB,
    name: "roamCrossref",
    storeName: "roam-crossref",
  });

  return {
    get: async function (doi) {
      try {
        const res = await localforage.getItem(doi);
        if (!res) return null;
        if (res.ts < Date.now()) {
          doiCache.remove(doi);
          return null;
        }

        return res;
      } catch (e) {
        return null;
      }
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
