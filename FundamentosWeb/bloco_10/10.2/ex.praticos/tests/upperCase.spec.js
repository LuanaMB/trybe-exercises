const upperCase = require("../src/upperCase");

describe("Requisito 1", () => {
  it("Verifica se a chamada da função luana retorna o valor LUANA", (done) => {
    upperCase("luana", (result) => {
      try {
        expect(result).toBe("LUANA");
        done();
      } catch (error) {
        done(error);
      }
    });
  });
});
