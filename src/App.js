import React, { useEffect, useState } from "react";
function App() {
  const [randomButtons, setRandomButtons] = useState([]);
  const [bgColor, setBgColor] = useState();
  const [clickedButton, setClickedButton] = useState("");
  const [correctButton, setCorrectButton] = useState(undefined);
  console.log("test");

  function randomArr() {
    let newArr = [];
    for (let i = 0; i < 3; i++) {
      newArr.push(randomColor());
    }

    return newArr;
  }

  useEffect(() => {
    const random = randomArr();

    setRandomButtons(random);
    setBgColor(random[Math.floor(Math.random() * 3)]);
  }, [clickedButton]);

  return (
    <div className="flex flex-col">
      <div
        style={{ backgroundColor: "#" + bgColor }}
        className={`w-[300px] h-[300px] mx-auto mt-[100px]`}
      >
        {bgColor}
      </div>
      <div className="flex justify-center">
        {randomButtons.map((item) => {
          return (
            <Button
              key={item}
              {...{
                bgColor,
                setBgColor,
                item,
                randomArr,
                clickedButton,
                setClickedButton,
                correctButton,
                setCorrectButton,
              }}
            />
          );
        })}
      </div>
      <div className="mx-auto">
        {correctButton === undefined ? "" : correctButton ? "correct" : "wrong"}
      </div>
    </div>
  );
}

function randomColor() {
  let hex = [];
  const hexLetters = ["A", "B", "C", "D", "E", "F"];
  const hexNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const arr = hexLetters.concat(hexNumbers);

  for (let i = 0; i < 6; i++) {
    hex += randomGenerator(arr);
  }

  return hex.toString();
}

function randomGenerator(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function Button({
  item,
  bgColor,
  setClickedButton,
  correctButton,
  setCorrectButton,
}) {
  const color = "#" + randomColor();

  function handleClick(e) {
    if (e.target.innerHTML === bgColor) {
      setCorrectButton(true);
    } else {
      setCorrectButton(false);
    }
    setClickedButton(e.target.innerHTML);
  }

  return (
    <button onClick={handleClick} className="p-2 bg-gray-500 m-2">
      {item}
    </button>
  );
}

export default App;
