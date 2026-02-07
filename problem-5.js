function analyzeText(str) {
  if (typeof str !== "string") {
    return "Invalid";
  }
  if (str.trim().length === 0) {
    return "Invalid"
  }

  let longwords = [];
  let words = str.split(" ");
  let token = words.join("").length;

  for (let word of words) {
    if (word.length > longwords.length) {
      longwords = word;
    }
  }
  return {
    longwords: longwords,
    token: token,
  };
}

const output = analyzeText("  ");
console.log(output);
