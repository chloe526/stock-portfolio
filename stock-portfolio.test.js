const StockPortfolio = require("./stock-portfolio");

describe("StockPortfolio", () => {
  test("create stock portfolio", () => {
    const portfolio = new StockPortfolio();

    expect(portfolio).toBeDefined();
  });
});