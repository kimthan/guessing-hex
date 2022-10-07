import React, { useEffect, useState } from "react";

const divs = [1, 2, 3, 4, 5];

function App() {
  const [keypress, setKeypress] = useState(null);
  const [selectedDiv, setSelectedDiv] = useState();
  const [selectedClass, setSelectedClass] = useState("bg-green-300");

  console.log("kim".charAt(Math.floor(Math.random() * "kim".length)));

  function handleClick(e) {}

  function handleKeydown(e) {
    switch (e.key) {
      case "ArrowUp":
        if (selectedDiv === 1) return;
        setSelectedDiv((prev) => prev - 1);

        break;
      case "ArrowDown":
        if (selectedDiv === 6) return;
        setSelectedDiv((prev) => prev + 1);

        break;
      case "Enter":
        setSelectedDiv(divs.length + 1);
        break;
    }
  }
  useEffect(() => {
    setSelectedDiv(divs.length + 1);
  }, []);
  useEffect(() => {
    console.log("useeffect");
    window.addEventListener("keydown", handleKeydown);

    return () => {
      console.log("remove useeffect");

      window.removeEventListener("keydown", handleKeydown);
    };
  }, [handleKeydown]);
  return (
    <div className="flex flex-col gap-2 items-center">
      {divs.map((div) => {
        return (
          <div
            key={div}
            id={div}
            onClick={handleClick}
            className={`w-[200px] h-[50px] rounded ${
              selectedDiv === div ? selectedClass : "bg-gray-300"
            } flex items-center justify-center`}
          >
            {div}
          </div>
        );
      })}
    </div>
  );
}

export default App;
