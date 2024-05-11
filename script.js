"use strict";

const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.querySelector(".btn--yes");
const noButton = document.querySelector(".btn--no");
const catImg = document.querySelector(".cat-img");

const MAX_IMAGES = 5;

let play = true;
let noCount = 0;

yesButton.addEventListener("click", handleYesClick);

noButton.addEventListener("click", function () {
  if (play) {
    noCount++;
    const imageIndex = Math.min(noCount, MAX_IMAGES);
    changeImage(imageIndex);
    resizeYesButton();
    updateNoButtonText();
    if (noCount === MAX_IMAGES) {
      play = false;
    }
  }
});

function handleYesClick() {
  titleElement.innerHTML = "Yêu ghê !! :333";
  buttonsContainer.classList.add("hidden");
  changeImage("yes");
}

function resizeYesButton() {
  const computedStyle = window.getComputedStyle(yesButton);
  const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
  const newFontSize = fontSize * 1.2;

  yesButton.style.fontSize = `${newFontSize}px`;
}

function generateMessage(noCount) {
  const messages = [
    "Không !",
    "Chắc chưa vậy 😔",
    "Phũ phàng vậy sao 💔",
    "Đừng như vậy mà 😣",
    "Trái tim anh tan vỡ mất 😭",
    "Cút mẹ mày đi 😏",
  ];

  const messageIndex = Math.min(noCount, messages.length - 1);
  return messages[messageIndex];
}

function changeImage(image) {
  catImg.src = `img/cat-${image}.jpg`;
}

function updateNoButtonText() {
  noButton.innerHTML = generateMessage(noCount);
}



function clickPoster(){
  const poster = document.querySelector(".postercontainer")
  const catImg = document.querySelector(".cat-img")
  const button = document.querySelector(".buttons")
  const title = document.querySelector(".title")
  const nameInput = document.querySelector(".nameInput")
  const music = document.getElementById("music")
  nameInput.classList.add("hidden")
  catImg.classList.add("hidden")
  button.classList.add("hidden")
  title.classList.add("hidden")
  //poster.classList.add("hidden")

  poster.addEventListener("click", function(){
    nameInput.classList.remove("hidden")
    music.play();
    poster.classList.add("hidden")
  })
  


  
}
document.addEventListener("DOMContentLoaded", clickPoster)




document.addEventListener("DOMContentLoaded", function() {
  const submitButton = document.getElementById("submitBtn");
  submitButton.addEventListener("click", function() {
      submitName();
  });
});
function submitName() {
  var userName = document.querySelector(".name").value;
  if (userName.trim() === "") {
      alert("Có cái tên thôi mà cũng keo 😳 😳 😳");
  } else {
      alert("Cảm ơn " + userName + " nha ! ");
      // Đoạn này có thể thêm logic xử lý dữ liệu được nhập vào.
      const poster = document.querySelector(".postercontainer")
      const catImg = document.querySelector(".cat-img")
      const button = document.querySelector(".buttons")
      const title = document.querySelector(".title")
      const nameInput = document.querySelector(".nameInput")
            nameInput.classList.add("hidden")
            catImg.classList.remove("hidden")
            button.classList.remove("hidden")
            title.classList.remove("hidden")
            const titleElement = document.querySelector(".title");
            titleElement.textContent = userName + " ơi đi xem phim cùng anh được không ?";
        
    
  }
}
