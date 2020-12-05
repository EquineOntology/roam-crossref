module.exports = {
  moduleFileExtensions: ["js", "svelte"],
  roots: ["src"],
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
  testPathIgnorePatterns: [],
  transform: {
    "^.+\\.js$": "babel-jest",
    "^.+\\.svelte$": "svelte-jester",
  },
};

// We need a way to tell localforage _not_ to use storage when we're running tests, otherwise we get failed promises (CF 03.12.20).
process.env = Object.assign(process.env, {
  TESTING: true,
});

// process.on("unhandledRejection", (err) => {
//   console.log(err);
//   fail(err);
// });
