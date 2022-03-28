exports.index = (req, res) => {

  const quotes = [
    "DO IT.",
    "JUST. DO IT.",
    "Don't let your dreams be dreams.",
    "YESTERDAY, you said TOMORROW. So JUST. DO IT.",
    "MAKE. Your DREAMS. COME TRUE.",
    "JUST...ffffDO IT.",
    "Some people dream of success, while you're gonna wake up—and work HARD at it.",
    "NOTHING IS IMPOSSIBLE.",
    "You should get to the point where anyone else would quit, and YOU'RE NOT GONNA STop THERe.",
    "NO, WHAT are you WAITING for?",
    "....DO IT.",
    "JUST...dDOeIT.",
    "YES U CAN.",
    "JUhSdoit.",
    "If you're tired of starting over... stop. giving. U P ."
  ];

  function randomNumber() {
    return Math.floor(Math.random() * quotes.length)
  }

  const randomQuote = quotes[randomNumber()];

  res.json(randomQuote);
};