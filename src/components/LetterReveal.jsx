export default function LetterReveal({ text, className = "", startDelay = 0 }) {
  const words = text.split(" ");
  const lettersBefore = (w) =>
    words.slice(0, w).reduce((sum, word) => sum + word.length, 0);

  return (
    <span className={`letter-reveal ${className}`} aria-label={text}>
      {words.map((word, w) => {
        const base = lettersBefore(w);
        return (
          <span key={w} className="inline-block whitespace-nowrap">
            {word.split("").map((ch, i) => (
              <span
                key={i}
                style={{ animationDelay: `${startDelay + (base + i) * 0.04}s` }}
                aria-hidden="true"
              >
                {ch}
              </span>
            ))}
            {w < words.length - 1 && " "}
          </span>
        );
      })}
    </span>
  );
}
