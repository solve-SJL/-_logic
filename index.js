const readline = require("readline");

function getComputerChoice() {
  let choices = ["가위", "바위", "보"];
  let randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function determinationWinnerLoser(userChoice, computerChoice) {
  const userWin = `유저가 ${userChoice}으로 승리했습니다.`;
  const computerWin = `컴퓨터가 ${computerChoice}으로 승리했습니다.`;

  if (userChoice === computerChoice)
    return `둘다 ${userChoice}로 무승부입니다.`;

  if (
    (userChoice === "가위" && computerChoice === "보") ||
    (userChoice === "바위" && computerChoice === "가위") ||
    (userChoice === "보" && computerChoice === "주먹")
  ) {
    return userWin;
  } else {
    return computerWin;
  }
}

function playGame() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question("가위,바위,보 중에 하나를 입력해주세요.", (userInput) => {
    const userChoice = userInput;
    const validChoices = ["가위", "바위", "보"];

    if (!validChoices.includes(userChoice)) {
      console.log("가위,바위,보 중에 입력을 해주세요.");
    } else {
      const computerChoice = getComputerChoice();
      console.log(`당신의 선택은 ${userChoice}입니다.`);
      console.log(`컴퓨터의 선택은 ${computerChoice}입니다.`);
      console.log(determinationWinnerLoser(userChoice, computerChoice));
    }

    rl.close();
  });
}

playGame();
