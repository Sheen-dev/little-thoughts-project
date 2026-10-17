import { useState } from "react";
import quotes from "./data/quotes.json";
import "./App.css";

function App() {
  const [quote, setQuote] = useState(
    quotes[Math.floor(Math.random() * quotes.length)],
  );

  const [isDark, setIsDark] = useState(false);

  function changeQuote() {
    if (quotes.length < 2) return;

    let randomIndex;

    do {
      randomIndex = Math.floor(Math.random() * quotes.length);
    } while (quotes[randomIndex] === quote);

    setQuote(quotes[randomIndex]);
  }

  function toggleTheme() {
    setIsDark((previousTheme) => !previousTheme);
  }

  return (
    <div className={`app ${isDark ? "dark" : "light"}`}>
      <header className="header">
        <a className="logo" href="/">
          little thoughts.
        </a>

        <button
          className={`theme-switch ${isDark ? "active" : ""}`}
          onClick={toggleTheme}
          role="switch"
          aria-checked={isDark}
          aria-label="Toggle dark mode"
        >
          <span className="switch-icon">{isDark ? "☾" : "☀"}</span>
          <span className="switch-knob"></span>
        </button>
      </header>

      <main className="main-content">
        <section className="quote-card">
          <p className="quote-text">" {quote.quoteText} "</p>

          <p className="quote-author">— {quote.quoteAuthor || "Unknown"}</p>

          <div className="divider"></div>

          <button className="new-quote-button" onClick={changeQuote}>
            another thought <span>↗</span>
          </button>
        </section>

        <footer className="footer">a little reminder for your day ♡</footer>
      </main>
    </div>
  );
}

export default App;
