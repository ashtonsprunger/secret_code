let chars = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    " ",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    ".",
    ",",
    "?",
    "!",
    ":",
    ";",
    "'",
    '"',
    "`",
    "/",
    "\\",
    "|",
    "*",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "(",
    ")",
    "{",
    "}",
    "<",
    ">",
    "[",
    "]",
    "-",
    "_",
    "+",
    "=",
    "~",
  ];
  
  const OFFSET = 51;
  
  const code = (char, offset, times) => {
    offset *= times;
    offset += offset > 0 ? times : -times;
    offset %= chars.length;
    let index = chars.indexOf(char);
    index += offset;
    if (index > chars.length - 1) {
      index -= chars.length;
    } else if (index < 0) {
      index += chars.length;
    }
    let newChar = chars[index];
    return newChar;
  };
  
  const encode = (text, times = 1) => {
    let encodedText = "";
    for (let i = 0; i < text.length; i++) {
      encodedText += code(text[i], OFFSET, times);
    }
    return `c${encodedText}c`;
  };
  
  const decode = (text, times = 1) => {
    text = text.slice(1, text.length - 1);
    let decodedText = "";
    for (let i = 0; i < text.length; i++) {
      decodedText += code(text[i], -OFFSET, times);
    }
    return decodedText;
  };
  