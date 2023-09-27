//NOTE - оголошення змінних
const buttons = document.querySelectorAll(".timer__switch-btn");
const settingsButton = document.querySelector(".timer__setting");
const startButton = document.querySelector(".timer__main-start");
let seconds = document.querySelector(".timer__main-seconds > input[type=number]");
let minutes = document.querySelector(".timer__main-minutes > input[type=number]");
const ring = document.querySelector(".ring");
let buttonData = {
  помодоро: { minutes: "25", seconds: "00" },
  "коротка перерва": { minutes: "05", seconds: "00" },
  "довга перерва": { minutes: "15", seconds: "00" },
};
minutes.value = buttonData["помодоро"].minutes;
seconds.value = buttonData["помодоро"].seconds;
let pomodoroInput = document.querySelector(".pomodoro");
pomodoroInput.value = buttonData["помодоро"].minutes;
const incrementButton = document.querySelector(".pomo .modal__modal-arrow.up");
const decrementButton = document.querySelector(".pomo .modal__modal-arrow.down");
let shortInput = document.querySelector(".short-break");
shortInput.value = buttonData["коротка перерва"].minutes;
const incrementButtonShort = document.querySelector(".short .modal__modal-arrow.up");
const decrementButtonShort = document.querySelector(".short .modal__modal-arrow.down");
let longInput = document.querySelector(".long-break");
longInput.value = buttonData["довга перерва"].minutes;
const incrementButtonLong = document.querySelector(".long .modal__modal-arrow.up");
const decrementButtonLong = document.querySelector(".long .modal__modal-arrow.down");
const motionSection = document.querySelector(".modal__modal");
const modalBlock = document.querySelector(".hidden");
const closeButton = document.querySelector(".modal__modal-close");
const showNotification = document.querySelector(".timer__notification");
const applyButton = document.querySelector(".modal__modal-btn");
let circleSvg = document.querySelector(".timer__main-circle");
let mainContainer = document.querySelector(".timer__main-container");
const audio = document.querySelector("#myAudio");
let startTime = 0;
let timer = null;
let running = false;
let totalSeconds;
let start = null;

//NOTE - обчислення обсяга кола по розмірах контейнера де воно знаходиться
const radiusInPercentage = parseFloat(circleSvg.getAttribute("r"));
const containerWidth = mainContainer.clientWidth;
const radiusInPixels = (radiusInPercentage / 100) * containerWidth;
const circumference = radiusInPixels * 2 * Math.PI;

//NOTE - створення зміної яка буде вставляти в dash-array значення обчисленого об'єма кола
let currentDasharray = circumference;
circleSvg.style.setProperty("--dash-array", `${currentDasharray}`);

//NOTE - Функція для активації кнопок
function changeContent(target) {
  const buttons = document.querySelectorAll(".timer__switch-btn");
  buttons.forEach((button) => {
    button.classList.remove("active");
  });
  target.classList.add("active");
}

//NOTE - Обробник подій при натисканні на кнопки
buttons.forEach((button) => {
  button.addEventListener("click", function (e) {
    if (running) {
      showNotification.style.display = "block";
      setTimeout(() => {
        showNotification.style.display = "none";
      }, 3000);
      return;
    }

    changeContent(e.target);

    const data = buttonData[e.target.textContent.trim()];
    if (data) {
      minutes.value = data.minutes;
      seconds.value = data.seconds;
    }
    circleSvg.style.strokeDashoffset = 0;

    fixTotalTimer();
  });
});

//NOTE - обробник подій для кнопки старт/пауза
startButton.addEventListener("click", () => {
  if (!running) {
    startTimer();
  } else if (running) {
    pauseTimer();
  }
});

//NOTE - функція для фіксованого значення суми хвилин та секунд для роботи кола
let fixedTotalTimer;

function fixTotalTimer() {
  const secondsTime = parseInt(seconds.value);
  const minutesTime = parseInt(minutes.value);
  fixedTotalTimer = secondsTime + minutesTime * 60;
}

//NOTE - Функція старту таймера
const startTimer = () => {
  running = true;
  startButton.innerText = "Пауза";
  startTime = Date.now();
  const secondsValue = parseInt(seconds.value);
  const minutesValue = parseInt(minutes.value);
  totalSeconds = secondsValue + minutesValue * 60;
  console.log(totalSeconds);
  timer = setInterval(() => {
    const currentTime = Date.now();
    const diff = currentTime - startTime;
    const secondsLeft = totalSeconds - Math.floor(diff / 1000);
    const minutesLeft = Math.floor(secondsLeft / 60);
    seconds.value = padNumber(secondsLeft % 60);
    minutes.value = padNumber(minutesLeft);

    let percentage = ((secondsLeft * 60 + minutesLeft) / (fixedTotalTimer * 60)) * 100;

    circleSvg.style.strokeDashoffset = `calc(var(--dash-array) - (var(--dash-array) * ${percentage}) / 100)`;

    if (secondsLeft === 0 && minutesLeft <= 0) {
      finishTimer();
      updatePomodoroTimer();
    }
  }, 1000);
};

//NOTE - Функція паузи таймера
const pauseTimer = () => {
  running = false;
  startButton.innerText = "Старт";
  clearInterval(timer);
};

//NOTE - Функція фініша таймера
const finishTimer = () => {
  clearInterval(timer);
  ring.classList.add("ending");
  console.log(ring.classList);
  circleSvg.style.strokeDashoffset = 0;
  setTimeout(() => {
    // alert("Час минув!");
    audio.play();
    resetTimer();
  }, 0);
};

//NOTE - Функція форматування чисел з лідируючими нулями
const padNumber = (number) => {
  if (number < 10) {
    return "0" + number;
  }
  return number;
};

//NOTE - Функція скидання таймера
const resetTimer = () => {
  clearInterval(timer);
  startButton.innerText = "Старт";
  ring.classList.remove("ending");
  running = false;
};

resetTimer();

//NOTE - Обробник подій для кнопки налаштування
settingsButton.addEventListener("click", () => {
  if (running) {
    showNotification.style.display = "block";
    setTimeout(() => {
      showNotification.style.display = "none";
    }, 3000);
    return;
  }

  if (!running) {
    // Задайте початкове положення модального блоку
    motionSection.style.transform = 'translate(-50%, calc(100vh - 50%))';
    motionSection.style.transition = 'transform 0.6s ease-out';
    modalBlock.style.display = "block";

    // Анімація до кінцевого положення
    setTimeout(() => {
      motionSection.style.transform = 'translate(-50%, -50%)';
    }, 0);

    closeButton.addEventListener("click", () => {     
      motionSection.style.transform = 'translate(-50%, calc(100vh - 50%))';
     
      setTimeout(() => {
        modalBlock.style.display = "none";
      }, 700);
    });
  }  
});

//NOTE - Функція оновлення таймера при виборі хвилин
function updatePomodoroTimer() {
  const activeButton = document.querySelector(".timer__switch-btn.active");

  if (!activeButton) {
    return;
  }

  const data = buttonData[activeButton.textContent.trim()];

  if (data) {
    minutes.value = data.minutes;
    seconds.value = data.seconds;
  }
  fixTotalTimer();  
}

//NOTE - Кнопка підтвердження і закриття модального вікна
applyButton.addEventListener("click", () => {
  buttonData["помодоро"].minutes = pomodoroInput.value.toString();
  buttonData["коротка перерва"].minutes = shortInput.value.toString();
  buttonData["довга перерва"].minutes = longInput.value.toString();

  updatePomodoroTimer();  
  circleSvg.style.strokeDashoffset = 0;  

  motionSection.style.transform = 'translate(-50%, calc(100vh - 50%))';
  
  setTimeout(() => {
    modalBlock.style.display = "none";
  }, 700);
});

//NOTE - Функція, яка збільшує значення
function increaseInputValue(input, increment) {
  increment.addEventListener("click", () => {
    let currentValue = parseInt(input.value);
    if (currentValue < 60) {
      currentValue = (currentValue + 1).toString().padStart(2, "0");
      input.value = currentValue;
    }
    return;
  });
}

increaseInputValue(pomodoroInput, incrementButton);
increaseInputValue(shortInput, incrementButtonShort);
increaseInputValue(longInput, incrementButtonLong);

//NOTE - Функція, яка зменшує значення
function decreaseInputValue(input, decrement) {
  decrement.addEventListener("click", () => {
    let currentValue = parseInt(input.value);
    if (currentValue > 0) {
      currentValue = (currentValue - 1).toString().padStart(2, "0");
      input.value = currentValue;
    }
    return;
  });
}

decreaseInputValue(pomodoroInput, decrementButton);
decreaseInputValue(shortInput, decrementButtonShort);
decreaseInputValue(longInput, decrementButtonLong);




