const { describe, expect, it } = require("@jest/globals");
const { getRepos } = require("../src/getRepos");

describe("Testando o resultado de uma API", () => {
  it("gets a list of repositories names", () => {
    const url = "https://api.github.com/orgs/tryber/repos";

    return getRepos(url).then((result) => {
      expect(result).toContain("sd-01-week4-5-project-todo-list");
      expect(result).toContain("sd-01-week4-5-project-meme-generator");
    });
  });
});
