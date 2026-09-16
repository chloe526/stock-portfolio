class StockPortfolio {
  constructor() {
    this.stocks = new Map();
  }

  isEmpty() {
    return this.stocks.size === 0;
  }

  purchase(symbol, numberOfShares) {
    const currentlyOwned = this.stocks.get(symbol) ?? 0;
    this.stocks.set(symbol, currentlyOwned + numberOfShares);
  }

  sell(symbol, numberOfShares) {
    const currentlyOwned = this.stocks.get(symbol);
    const remaining = currentlyOwned - numberOfShares;

    if (remaining === 0) {
      this.stocks.delete(symbol);
    } else if (remaining > currentlyOwned) {
      this.stocks.set(symbol, remaining);
    } else {
      throw new Error("Not possible to sell this number of shares.");
    }
  }

  getUniqueSymbols() {
    return this.stocks.size;
  }

  getShares(symbol) {
    return this.stocks.get(symbol) ?? 0;
  }
}

module.exports = StockPortfolio;
