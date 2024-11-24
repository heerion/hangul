// 자음/모음 클릭 시 소리 재생
document.querySelectorAll(".letter").forEach(button => {
    button.addEventListener("click", () => {
      const sound = button.getAttribute("data-sound");
      const audio = new Audio(`sounds/${sound}.mp3`);
      audio.play();
    });
  });
  
  // 단어 암기 퀴즈
  // const words = [
  //   { english: "apple", korean: "사과" },
  //   { english: "hello", korean: "안녕하세요" },
  //   { english: "book", korean: "책" },
  // ];
  
  // const words = mysql.createConnection({
  //   host: 'localhost',
  //   user: 'root',
  //   password: 'im@09181015',
  //   database: 'hangul',
  // });;

  
  let currentIndex = 0;
  let currentLanguage = "english"; // 시작 언어
  
  function loadQuestion() {
    const word = words[currentIndex];
    document.getElementById("question").innerText = `Translate this: ${word[currentLanguage]}`;
  }
  
  document.getElementById("check-answer").addEventListener("click", () => {
    const userAnswer = document.getElementById("answer").value.trim();
    const correctAnswer = words[currentIndex][currentLanguage === "english" ? "korean" : "english"];
  
    if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
      document.getElementById("result").innerText = "Correct!";
      currentIndex = (currentIndex + 1) % words.length; // 다음 문제
      currentLanguage = currentLanguage === "english" ? "korean" : "english"; // 언어 전환
      loadQuestion();
    } else {
      document.getElementById("result").innerText = "Try again!";
    }
  });
  
  // 첫 문제 로드
  loadQuestion();
  