var config = {

  //-----------------------------------------------
  // HALT BUYING
  //-----------------------------------------------
  // Uncomment the below to prevent buying

//  BTC_TRADING_LIMIT: 0.00000001, // [DEFAULT: 0.01] Max amount of BTC balance to use for each pair.

  //-----------------------------------------------
  //  PRIMARY SETTINGS
  //-----------------------------------------------

  DEFAULT_MARKET_NAME: 'poloniex',
  DEFAULT_CURRENCY_PAIR: 'BTC_ETH', // Single pair format for all markets!
  SECURITY_MARGIN: 60, // Sell all balance if currency decreases x% after you bought it.


  //-----------------------------------------------
  //  STRATEGY
  //-----------------------------------------------

  MIN_VOLUME_TO_BUY: 0.0005,  // Bitrex min volume.

  //-----------------------------------------------
  //   MARKETS
  //-----------------------------------------------

  //---POLONIEX

  POLONIEX_KEY: '',
  POLONIEX_SECRET: '',

  POLONIEX_PRICE_METHOD: 'vwa', // ohlc OR vwa 'price to buy' definition method.
  POLONIEX_VWA_1_INTERVAL: 0.02, // Weighted average interval in hours.
  POLONIEX_VWA_2_INTERVAL: 0.04, // Weighted average interval in hours.

  //---BITTREX

  BITTREX_KEY:'',
  BITTREX_SECRET:'',
  
  BITTREX_PRICE_METHOD: 'ohlc', // ohlc OR vwa 'price to buy' definition method
  BITTREX_VWA_1_INTERVAL: 10, // weighted average interval in minutes
  BITTREX_VWA_2_INTERVAL: 120, // weighted average interval in minutes

  //---KRAKEN

  KRAKEN_ASSET_PAIR: 'XETHXXBT',

  KRAKEN_KEY: '',
  KRAKEN_SECRET: '',

  KRAKEN_PRICE_METHOD: 'vwa', // ohlc OR vwa 'price to buy' definition method
  KRAKEN_VWA_1_INTERVAL: 1, // weighted average interval in minutes
  KRAKEN_VWA_2_INTERVAL: 15, // weighted average interval in minutes

  //-----------------------------------------------
  //   STARTUP OPTIONS
  //-----------------------------------------------

  SELL_ON_START: false,
  CANCEL_SELL_ORDERS_ON_START: false,
  CANCEL_BUY_ORDERS_ON_START: false,
  CANCEL_OPEN_ORDERS_ON_START: false,


  MAX_LATEST_PRICES: 300, // Limit of latest prices to analyze to determine if price is growing or falling.
  MAX_LATEST_DIRECTIONS: 30, // Limit of latest price directions, used in supergun detection.
  MAX_LAST_ORDERS: 50, // Keeping last orders bought.
  PERIOD: 15, // Candlestick period.

  SAVEFILE_SUFFIX: '-save.json',


  //-----------------------------------------------
  // EMAIL
  //-----------------------------------------------
  ALERT_ON_NO_FUNDS: false,  // Email on insufficcient funds.
  SMTP_EMAIL: '%40@gmail.com',
  ALERT_EMAIL: '********',
  SMTP_PASSWORD: '**********',
  SMTP: true,
  SMTP_PROTOCOL: 'SMTPS',
  SMTP_HOST: 'smtp.gmail.com',


  //-----------------------------------------------
  //  OUTPUT
  //-----------------------------------------------
  MAX_LATEST_PRICES_SHOWN: 0, // Limit of latest prices to show in console.log.
  SHOW_LASTEST_DIRECTIONS: false,  // Show chart in console.
  MAX_LATEST_DIRECTIONS_SHOWN: 0, // Chart height.
  LASTEST_DIRECTIONS_LIST_WIDTH: 0, // Chart width.

  //-----------------------------------------------
  //  DEBUG
  //-----------------------------------------------
 
  DEBUG_LOG: false,
  I_REALLY_WANT_IT: false,
  BUY_SMALL_PORTION: 1,
  INSUFFICIENT_FUNDS_ON_SELL_FIX: 0.0005,
  INSUFFICIENT_FUNDS_ON_BUY_FIX: 0.0005,


  //-----------------------------------------------
  //   OTHER (might be deprecated/not in use)
  //-----------------------------------------------
  BTC_BALANCE: 2 // BTC balance for test purposes.

};
 
module.exports = config;
