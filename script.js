const inputEl = document.getElementById("input");
const numberEl = document.getElementById("number");
const outputEl = document.getElementById("output");
const convertEl = document.getElementById("convert");
const toggleEl = document.getElementById("toggle");
const copyEl = document.getElementById("copy");

let ENCODE = "0";
let DECODE = "1";
let MODE = ENCODE;

function copy_text(text) {
  //Before we copy, we are going to select the text.
  var selection = window.getSelection();
  var range = document.createRange();
  range.selectNodeContents(text);
  selection.removeAllRanges();
  selection.addRange(range);
  //add to clipboard.
  document.execCommand("copy");
}

inputEl.addEventListener("focus", () => {
  inputEl.select();
});

// numberEl.addEventListener('focus', () => {
//     numberEl.select()
// })

toggleEl.addEventListener("click", () => {
  MODE = MODE == ENCODE ? DECODE : ENCODE;
  convertEl.innerText = MODE == ENCODE ? "ENCODE!" : "DECODE!";
});

convertEl.addEventListener("click", () => {
  if (inputEl.value.trim()) {
    let outputText;
    if (MODE == ENCODE) {
      outputText = encode(
        inputEl.value.trim(),
        // Number.parseInt(numberEl.value)
        1
      );
    } else {
      outputText = decode(
        inputEl.value.trim(),
        // Number.parseInt(numberEl.value)
        1
      );
    }
    outputEl.innerText = outputText;
    if (outputEl.innerText.trim()) {
      outputEl.style.border = "3px solid white";
      copyEl.style.display = "block";
    } else {
      outputEl.style.border = "none";
      copyEl.style.display = "none";
    }
  }
});

copyEl.addEventListener("click", () => {
  copy_text(outputEl);
});
