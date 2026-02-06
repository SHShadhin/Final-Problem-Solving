function finalScore(omr) {
  let totalQuestion = 0;
  let newScore = [];

  for (let marks in omr) {
    let score = omr[marks];
    totalQuestion = totalQuestion + score;
    newScore.push(score);
  }

  if (totalQuestion !== 100) {
    return "Invalid";
  }

  let right = 1 * newScore[0];
  let wrong = -0.5 * newScore[1];

  let totalScore = right + wrong;

  let roundScore = Math.round(totalScore);
  return roundScore;
}

const output = finalScore({ right: 67, wrong: 23, skip: 10 });
console.log(output);
