import { useContext } from "react";
import "../CSS/Home.css";
import ResultContext from "./ResultContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const { input, setInput: setResultInput } = useContext(ResultContext);

  const handleInput = (e) => {
    setResultInput(e.target.value);
  };

  const toUpperCase = () => {
    setResultInput((prevText) => prevText.toUpperCase());
    toast.success("Converted to UpperCase", {
      autoClose: 1000,
      closeOnClick: true,
    });
  };

  const toLowerCase = () => {
    setResultInput((prevText) => prevText.toLowerCase());
    toast.success("Converted to LowerCase", {
      autoClose: 1000,
      closeOnClick: true,
    });
  };

  const toTitleCase = () => {
    let linesArray = input.split("\n");

    let titleCaseArray = linesArray.map((line) => {
      let wordsArray = line.split(" ");
      let titleCaseLine = wordsArray.map((word) => {
        return word.length > 0
          ? word[0].toUpperCase() + word.slice(1).toLowerCase()
          : "";
      });
      return titleCaseLine.join(" ");
    });

    setResultInput(titleCaseArray.join("\n"));
    toast.success("Converted to TitleCase", {
      autoClose: 1000,
      closeOnClick: true,
    });
  };
  const toCamelCase = () => {
    const linesArray = input.split("\n");
    let camelCaseArray = linesArray.map((line) => {
      let wordsArray = line.split(" ");
      let camelCaseLine = wordsArray.map((word, index) => {
        return index === 0
          ? word.toLowerCase()
          : word.length > 0
          ? word[0].toUpperCase() + word.slice(1).toLowerCase()
          : "";
      });
      return camelCaseLine.join("");
    });

    setResultInput(camelCaseArray.join("\n"));
    toast.success("Converted to CamelCase", {
      autoClose: 1000,
      closeOnClick: true,
    });
  };

  const deleteExtraSpaces = () => {
    setResultInput(input.replace(/\s+/g, " ").trim());
    toast.info("Deleted Extra Spaces", {
      autoClose: 1000,
      closeOnClick: true,
    });
  };

  const copyToCB = () => {
    navigator.clipboard
      .writeText(input)
      .then((result) => {
        console.log("copied");
      })
      .catch((err) => {
        console.log(err);
      });
    toast.info("Copied to Clipboard", {
      autoClose: 1000,
      closeOnClick: true,
    });
  };

  const downloadFile = () => {
    const blob = new Blob([input], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "textfile.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast.success("Downloaded Successfully", {
      autoClose: 1000,
      closeOnClick: true,
    });
  };

  return (
    <>
      <div className="input">
        <h1>Type your text below</h1>
        <textarea
          name=""
          id=""
          cols="35"
          rows="10"
          value={input}
          onChange={handleInput}
        ></textarea>
      </div>
      <div className="operations">
        <button className="operation" onClick={toUpperCase}>
          Convert to Uppercase
        </button>
        <button className="operation" onClick={toLowerCase}>
          Convert to Lowercase
        </button>
        <button className="operation" onClick={toTitleCase}>
          Convert to Titlecase
        </button>
        <button className="operation" onClick={toCamelCase}>
          Convert to Camelcase
        </button>
        <button className="operation" onClick={deleteExtraSpaces}>
          Delete Extra Spaces
        </button>
        <button className="operation" onClick={copyToCB}>
          Copy to ClipBoard
        </button>
        <button className="operation" onClick={downloadFile}>
          Download TextFile
        </button>
      </div>
    </>
  );
};

export default Home;
