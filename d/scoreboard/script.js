let addBtn1El = document.querySelector("#home-one");
let addBtn2El = document.querySelector("#home-two");
let addBtn3El = document.querySelector("#home-three");
let addBtnGuest1El = document.querySelector("#guest-one");
let addBtnGuest2El = document.querySelector("#guest-two");
let addBtnGuest3El = document.querySelector("#guest-three");
let homeScoreEl = document.querySelector("#homeScore");
let guestScoreEl = document.querySelector("#guestScore");
let newGameBtn = document.querySelector("#resetGame");

addBtn1El.addEventListener("click", function () {
  let currentScore = parseInt(homeScoreEl.textContent);
  currentScore += 1;
  homeScoreEl.innerHTML = currentScore;
});

addBtn2El.addEventListener("click", function () {
  let currentScore = parseInt(homeScoreEl.textContent);
  currentScore += 2;
  homeScoreEl.innerHTML = currentScore;
});

addBtn3El.addEventListener("click", function () {
  let currentScore = parseInt(homeScoreEl.textContent);
  currentScore += 3;
  homeScoreEl.innerHTML = currentScore;
});

addBtnGuest1El.addEventListener("click", function () {
  let currentScore = parseInt(guestScoreEl.textContent);
  currentScore += 1;
  guestScoreEl.innerHTML = currentScore;
});

addBtnGuest2El.addEventListener("click", function () {
  let currentScore = parseInt(guestScoreEl.textContent);
  currentScore += 2;
  guestScoreEl.innerHTML = currentScore;
});

addBtnGuest3El.addEventListener("click", function () {
  let currentScore = parseInt(guestScoreEl.textContent);
  currentScore += 3;
  guestScoreEl.innerHTML = currentScore;
});

let intervalId;

newGameBtn.addEventListener("click", function () {
  if (intervalId) {
    clearInterval(intervalId);
  }

  // let countDownDate = new Date().setSeconds(new Date().getSeconds() + 720);
  let countDownDate = new Date().setSeconds(new Date().getSeconds() + 10);

  // Update the count down every 1 second
  intervalId = setInterval(function () {
    // Get today's date and time
    let now = new Date().getTime();

    // Find the distance between now and the count down date
    let timeDifference = countDownDate - now;

    let minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    // Add leading zeros if necessary
    let formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
    let formattedSeconds = seconds < 10 ? "0" + seconds : seconds;

    // Output the result in an element with id="demo"
    document.querySelector("#timer").innerHTML =
      formattedMinutes + ":" + formattedSeconds;

    // If the count down is over, write some text
    if (timeDifference < 0) {
      clearInterval(intervalId);
      announceWinner();
    }
  }, 100);
  guestScoreEl.innerHTML = 0;
  homeScoreEl.innerHTML = 0;
});

function announceWinner() {
  let homeScore = parseInt(homeScoreEl.textContent);
  let guestScore = parseInt(guestScoreEl.textContent);
  if (homeScore > guestScore) {
    document.querySelector(
      "#timer"
    ).innerHTML = `<h1 id="winner"> HOME WON!! </h1>`;
  } else if (guestScore > homeScore) {
    document.querySelector(
      "#timer"
    ).innerHTML = `<h1 id="winner"> GUEST WON !! </h1>`;
  } else {
    document.querySelector(
      "#timer"
    ).innerHTML = `<h1 id="tie"> Its a tie </h1>`;
  }
}