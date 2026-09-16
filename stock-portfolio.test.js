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

    expect(() => portfolio.sell("DISNEY", 5)).toThrow(
      "Not possible to sell this number of shares.",
    );
  });

  // 2.5
  test("unique ticket symbols", () => {
    const portfolio = new StockPortfolio();

    portfolio.purchase("DISNEY", 5);
    portfolio.purchase("TIKTOK", 10);

    expect(portfolio.getUniqueSymbols()).toBe(2);
  });

  // 2.6
  test("ticket no zero shares", () => {
    const portfolio = new StockPortfolio();

    portfolio.purchase("DISNEY", 5);
    portfolio.sell("DISNEY", 5);
    portfolio.purchase("TIKTOK", 3);

    expect(portfolio.getUniqueSymbols()).toBe(1);
  });

  // 2.7
  test("shares per symbol - zero and nonzero", () => {
    const portfolio = new StockPortfolio();

    portfolio.purchase("DISNEY", 5);
    portfolio.sell("DISNEY", 5);
    portfolio.purchase("TIKTOK", 3);

    expect(portfolio.getShares("DISNEY")).toBe(0);
    expect(portfolio.getShares("TIKTOK")).toBe(3);
  });

  // 2.8
  test("sell limit", () => {
    const portfolio = new StockPortfolio();

    portfolio.purchase("DISNEY", 5);

    expect(() => portfolio.sell("DISNEY", 6)).toThrow(
      "Not possible to sell this number of shares.",
    );
  });
});
