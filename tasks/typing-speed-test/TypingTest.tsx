import { useEffect, useState } from "react";
import { testSentence } from "./mock-test-data";

export default function TypingTest() {
  const [input, setInput] = useState("");
  const [startTime, setStartTime] = useState<number | null>(null);
  const [finished, setFinished] = useState(false);

  const handleInput = (e) => {
    const value = e.target.value;

    if (!startTime) {
      setStartTime(Date.now());
    }

    setInput(value);

    if (value === testSentence) {
      setFinished(true);
    }
  };

  const calculateWPM = () => {
    if (!startTime) return 0;
    const timeMinutes = (Date.now() - startTime) / 1000 / 60;
    const words = testSentence.split(" ").length;
    return Math.round(words / timeMinutes);
  };

  const calculateAccuracy = () => {
    let correct = 0;
    for (let i = 0; i < input.length; i++) {
      if (input[i] === testSentence[i]) correct++;
    }
    return Math.round((correct / testSentence.length) * 100);
  };

  const restart = () => {
    setInput("");
    setStartTime(null);
    setFinished(false);
  };

  return (
    <div style={{ padding: "40px", maxWidth: "700px", margin: "0 auto" }}>
      <h1>Typing Speed Test</h1>

      <p style={{ fontSize: "18px", marginBottom: "20px" }}>{testSentence}</p>

      <textarea
        value={input}
        onChange={handleInput}
        disabled={finished}
        placeholder="Start typing here..."
        style={{ width: "100%", height: "120px", fontSize: "16px" }}
      />

      {finished && (
        <div style={{ marginTop: "20px" }}>
          <p>WPM: {calculateWPM()}</p>
          <p>Accuracy: {calculateAccuracy()}%</p>
          <button onClick={restart} style={{ marginTop: "10px" }}>
            Restart
          </button>
        </div>
      )}
    </div>
  );
}
