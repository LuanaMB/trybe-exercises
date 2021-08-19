const { describe, expect, it } = require('@jest/globals')
const { getUserName } = require("../src/getUserName");

describe('Testando as promisses', () => {
  describe('Quando o id existe', () => {
    it('Retorna o id', () => {
     expect(getUserName(1))
      .resolves.toEqual('Mark')
    });
  });

  describe('Quando o id não existe', () => {
    it('Retorna a mensagem de erro', () => {
      expect(getUserName(3))
        .rejects.toEqual(new Error(`User with 3 not found.`))
    });
  });
});

describe('Testando as promisses com async', () => {
  describe('Quando o id existe', () => {
    it('Retorna o Mark ao passar o id 1', async () => {
      const result = await getUserName(1);
      expect(result).toEqual('Mark');
    });
  });

  describe('Quando o id não existe', () => {
    it('Retorna um erro', async () => {
      expect.assertions(1);
      try {
        await getUserName(3);
      } catch (error) {
        expect(error.message).toEqual('User with 3 not found.')
      };
    });
  });  
});
