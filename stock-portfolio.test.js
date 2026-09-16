const StockPortfolio = require("./stock-portfolio");

describe("StockPortfolio", () => {
  // 2.1
  test("create stock portfolio", () => {
    const portfolio = new StockPortfolio();

    expect(portfolio).toBeDefined();
  });

  // 2.2
  test("empty checking for portfolio", () => {
    const portfolio = new StockPortfolio();

    expect(portfolio.isEmpty()).toBe(true);
  });

  // 2.3
  test("making a purchase", () => {
    const portfolio = new StockPortfolio();

    portfolio.purchase("DISNEY", 5);

    expect(portfolio.isEmpty()).toBe(false);
  });

  // 2.4
  test("making sale", () => {
    const portfolio = new StockPortfolio();

    portfolio.purchase("DISNEY", 2);
    portfolio.sell("DISNEY", 5);

    expect(portfolio.stocks.get("DISNEY")).toBe(-3);
  });
});
