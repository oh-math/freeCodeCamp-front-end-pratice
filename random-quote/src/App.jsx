import { useState } from "react";
import "./App.scss";

function App() {
  const [quotes, setQuotes] = useState({
    quote:
      "You may be disappointed if you fail, but you are doomed if you don't try.",
    author: "Robert Frost",
  });

  return (
    // ::  should load a random quote when loading first
    // :: should be centralized horizontally
    <div className="quoteBox" id="quote-box">
      <p className="text" id="text">
        <i class="fa fa-quote-left"></i>
        {quotes.quote}
      </p>
      <p className="author" id="author">
        - {quotes.author}
      </p>

      {/* tweet the actual quote when clicke */}
      <a
        id="tweet-quote"
        className="tweetQuote"
        target="_blank"
        href="twitter.com/intent/tweet"
      >
        <i class="fa-brands fa-twitter"></i>
      </a>
      {/* when clicked, should search a new quote and output in 'text' id elemente */}
      <a className="newQuote" id="new-quote">
        New quote
      </a>
    </div>
  );
}

export default App;
