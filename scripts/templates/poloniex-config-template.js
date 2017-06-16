var config = { 

  //-----------------------------------------------
  //   TRADE SIZE
  //-----------------------------------------------

  BTC_TRADING_LIMIT: 0.01, // [DEFAULT: 0.01] Max amount of BTC balance to use for each pair.

  //-----------------------------------------------
  //   Trend follower sensitivity
  //-----------------------------------------------

  MAX_LATEST_PRICES_TREND: 60, // Limit of latest prices to analyze to determine if price is growing or falling.

  //-----------------------------------------------
  //   BOT TIMINGS
  //-----------------------------------------------
  // All timings are (milliseconds) * seconds

  BOT_SLEEP_DELAY: ((1003)*60*(Math.random()*0.1+1.0)), // bot cycle delay (koef*sec)
  BOT_ON_FAIL_DELAY:((1003)*30*(Math.random()*0.1+1.0)), // bot repeat cycle delay if previous cycle failed
  BOT_MAX_LIFETIME:999999999, // overall bot lifetime (koef*min)
  API_CALLS_DELAY:(777*(Math.random()*0.1+1.0)),

  //-----------------------------------------------
  //   STRATEGY
  //-----------------------------------------------

  BUY_STRATEGY: 'BB', // accepted values BB or STEPGAIN or GAIN or PINGPONG
  SELL_STRATEGY: 'BB', // accepted values BB or STEPGAIN or GAIN or PINGPONG

  // BB
  LOW_BB: 25, // [DEFAULT: 25] Percent. Buy if price is x% or less above the lowerst Bollinger Band.
  HIGH_BB: 25, // [DEFAULT: 25] Percent. Sell if price is x% or less below the highest Bollinger Band.

  // GAIN
  BUY_LEVEL: 3, // [DEFAULT: 3] Percent. Buy if price is x% below the lower ema value.
  GAIN: 3, // [DEFAULT: 5] Percent. Sell if price is x% above bought price.

  // PINGPONG
  PINGPONG_BUY: 0.12345678, // [DEFAULT: 0.000001] Buy price.
  PINGPONG_SELL: 0.12345678, // [DEFAULT: 0.000002] Sell price.

  // STEPGAIN
  BUYLVL1: 3, // [DEFAULT: 2] Percent. Buy if price is x% below the lower ema value. But try also to reach BUYLVL2
  BUYLVL2: 4, // [DEFAULT: 5] Percent. Buy if price is x% below the lower ema value. But try also to reach BUYLVL3
  BUYLVL3: 5, // [DEFAULT: 41] Percent. Buy if price is x% below the lower ema value or even less.

  SELLLVL1: 3, // [DEFAULT: 2] Percent. Sell if price is x% above bought price. But try also to reach SELLLVL2
  SELLLVL2: 5, // [DEFAULT: 5] Percent. Sell if price is x% above bought price. But try also to reach SELLLVL3
  SELLLVL3: 7, // [DEFAULT: 70] Percent. Sell if price is x% above bought price or even more.

};
module.exports = config;
