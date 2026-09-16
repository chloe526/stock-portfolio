const StockPortfolio = require("./stockPortfolio");

describe("StockPortfolio", () => {
  test("create stock portfolio", () => {
    const portfolio = new StockPortfolio();

    expect(portfolio).toBeDefined();
  });
});