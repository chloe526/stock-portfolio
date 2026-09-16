const StockPortfolio = require("./stock-portfolio");

describe("StockPortfolio", () => {
  test("create stock portfolio", () => {
    const portfolio = new StockPortfolio();

    expect(portfolio).toBeDefined();
  });

  test("a new portfolio is empty", () => {
    const portfolio = new StockPortfolio();

    expect(portfolio.isEmpty()).toBe(true);
  });

  test("portfolio not empty after shares", () => {
    const portfolio = new StockPortfolio();

    portfolio.purchase("AAPL", 5);

    expect(portfolio.isEmpty()).toBe(false);
  });
});
