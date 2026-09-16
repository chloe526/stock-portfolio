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
    const currentlyOwned = this.stocks.get(symbol) ?? 0;
    this.stocks.set(symbol, currentlyOwned - numberOfShares);
  }

  getUniqueSymbols() {
    return this.stocks.size;
  }
}

module.exports = StockPortfolio;
