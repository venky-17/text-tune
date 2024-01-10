import { useContext, useEffect, useState } from "react";
import ResultContext from "./ResultContext";
import "../CSS/Result.css";

const ResultBoard = ({ children }) => {
  const { input: inputText } = useContext(ResultContext);

  const [textSummary, setTextSummary] = useState({
    charactersWithSpaces: 0,
    charactersWithoutSpaces: 0,
    words: 0,
    letters: 0,
    sentences: 0,
    timeToRead: 0,
  });

  useEffect(() => {
    const calculateSummary = () => {
      const charsWithSpaces = inputText.length;
      const charsWithoutSpaces = inputText.replace(/\s+/g, "").length;
      const words = inputText
        .split(/\s+/)
        .filter((word) => word.length > 0).length;
      const letters = inputText.replace(/[^A-Za-z]/g, "").length;
      const sentences = inputText
        .split(/[.!?]+/)
        .filter((sentence) => sentence.length > 0).length;
      const timeToRead = (words / 175).toFixed(2);

      setTextSummary({
        charactersWithSpaces: charsWithSpaces,
        charactersWithoutSpaces: charsWithoutSpaces,
        words: words,
        letters: letters,
        sentences: sentences,
        timeToRead: timeToRead,
      });
    };

    calculateSummary();
  }, [inputText]);

  return (
    <>
      <div className="summary">
        <h2>Text Summary</h2>
        <ol className="summaryList">
          <li className="summary1">
            {textSummary.charactersWithSpaces} characters including spaces
          </li>
          <li className="summary1">
            {textSummary.charactersWithoutSpaces} characters without spaces
          </li>
          <li className="summary1">{textSummary.words} words </li>
          <li className="summary1">{textSummary.letters} letters </li>
          <li className="summary1">{textSummary.sentences} sentences </li>
          <li className="summary1">
            {textSummary.timeToRead} minutes Time to read
          </li>
        </ol>
      </div>
    </>
  );
};

export default ResultBoard;
