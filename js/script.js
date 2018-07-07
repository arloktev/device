var linkContacts = document.querySelector(".contacts__button");

var popupWriteUs = document.querySelector(".write-us");
var closePopupWriteUs = popupWriteUs.querySelector(".button--close");

var formWriteUs = document.querySelector(".write-us__form");
var nameUser = popupWriteUs.querySelector("[name=name]");
var emailUser = popupWriteUs.querySelector("[name=email]");
var messageUser = popupWriteUs.querySelector("[name=message]");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("nameUser");
} catch (err) {
  isStorageSupport = false;
}

linkContacts.addEventListener("click", function(e) {
  e.preventDefault();
  popupWriteUs.classList.add("modal--show");
  nameUser.focus();
  if (storage) {
    nameUser.value = storage;
    emailUser.focus();
  } else {
    nameUser.focus();
  }
});

closePopupWriteUs.addEventListener("click", function(e) {
  e.preventDefault();
  popupWriteUs.classList.remove("modal--show");
  popupWriteUs.classList.remove("modal--error");
});

formWriteUs.addEventListener("submit", function(e) {
  if (!nameUser.value || !emailUser.value || !messageUser.value) {
    e.preventDefault();
    popupWriteUs.classList.remove("modal--error");
    popupWriteUs.offsetWidth = popupWriteUs.offsetWidth;
    popupWriteUs.classList.add("modal--error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("nameUser", nameUser.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popupWriteUs.classList.contains("modal--show")) {
      popupWriteUs.classList.remove("modal--show");
      popupWriteUs.classList.remove("modal--error");
    }
  }
});

var linkMap = document.querySelector(".contacts__map");

var popupMap = document.querySelector(".map");
var closePopupMap = popupMap.querySelector(".button--close");

linkMap.addEventListener("click", function(e) {
  e.preventDefault();
  popupMap.classList.add("modal--show");
});

closePopupMap.addEventListener("click", function(e) {
  e.preventDefault();
  popupMap.classList.remove("modal--show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popupMap.classList.contains("modal--show")) {
      popupMap.classList.remove("modal--show");
    }
  }
});