const { get } = require("axios");
require("should");

const header = { "Content-type": "application/json" };
const cases = [4, 1, 0, -1, -4];

cases.forEach((x) =>
  describe(x + " is original number", () =>
    it("should respond with original number", async () => {
      const firstResponse = await get(`http://kodaktor.ru/api2/there/${x}`, {
        header,
      }).then(({ data }) => data);

      const secondResponse = await get(
        `http://kodaktor.ru/api2/andba/${firstResponse}`,
        { header }
      ).then(({ data }) => data);

      // test condition
      secondResponse.should.equal(x);
    })
  )
);
