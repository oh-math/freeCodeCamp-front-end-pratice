import "./App.scss";

function App() {
  return (
    // ::  should load a random quote when loading first
    // :: should be centralized horizontally
    <div className="quoteBox" id="quote-box">
      <p className="text" id="text">
        <i class="fa fa-quote-left"></i>
        Life is 10% what happens to me and 90% of how I react to it.
      </p>
      <p className="author " id="author">
        Autor
      </p>

      {/* tweet the actual quote when clicke */}
      <a id="tweet-quote" className="tweetQuote" target="_blank" href="twitter.com/intent/tweet">
      <i class="fa-brands fa-twitter"></i>
      </a>
      {/* when clicked, should search a new quote and output in 'text' id elemente */}
      <a className="newQuote" id="new-quote">New quote</a>

    </div>
  );
}

export default App;
