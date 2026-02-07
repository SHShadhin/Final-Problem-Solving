function gonoVote(array) {
  if (Array.isArray(array) === false) {
    return "Invalid";
  }

  let haArr = [];
  let naArr = [];

  for (let vote of array) {
    if (vote.includes("na") === false) {
      haArr.push(vote);
    }
    if (vote.includes("na") === true) {
      naArr.push(vote);
    }
  }

  let ha = haArr.length;
  let na = naArr.length;

  if (ha > na) {
    return true;
  } else if (ha === na) {
    return "equal";
  } else {
    return false;
  }
}

const output = gonoVote(["ha", "na", "ha", "na"]);
console.log(output);
