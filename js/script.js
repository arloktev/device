let linkContacts = document.querySelector(".contacts__button");
let linkMap = document.querySelector(".contacts__map");
let popupWriteUs = document.querySelector(".write-us");
let popupMap = document.querySelector(".map");

let closePopupWriteUs = popupWriteUs.querySelector(".button--close");
let closePopupMap = popupMap.querySelector(".button--close");

let formWriteUs =  document.forms[1];

let nameUser = formWriteUs.querySelector("[name=name]");
let emailUser = formWriteUs.querySelector("[name=email]");
let messageUser = formWriteUs.querySelector("[name=message]");

let isStorageSupport = true;
let storage = "";

let keyCode = {
  ESC: 27
}

function supportPreventDefault(event) {
  return event.preventDefault ? event.preventDefault() : (event.returnValue = false);
}

try {
  storage = localStorage.getItem("nameUser");
} catch (err) {
  isStorageSupport = false;
}

linkContacts.addEventListener("click", function(event) {
  supportPreventDefault(event)
  popupWriteUs.classList.add("modal--show");
  nameUser.focus();
  if (storage) {
    nameUser.value = storage;
    emailUser.focus();
  } else {
    nameUser.focus();
  }
});

formWriteUs.addEventListener("submit", function(event) {
  if (!nameUser.value || !emailUser.value || !messageUser.value) {
    supportPreventDefault(event)
    popupWriteUs.classList.remove("modal--error");
    popupWriteUs.offsetWidth = popupWriteUs.offsetWidth;
    popupWriteUs.classList.add("modal--error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("nameUser", nameUser.value);
    }
  }
});

closePopupWriteUs.addEventListener("click", function(event) {
  supportPreventDefault(event)
  popupWriteUs.classList.remove("modal--show", "modal--error");
});

linkMap.addEventListener("click", function(event) {
  supportPreventDefault(event)
  popupMap.classList.add("modal--show");
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === keyCode.ESC) {
    supportPreventDefault(event)
    if (popupWriteUs.classList.contains("modal--show")) {
      popupWriteUs.classList.remove("modal--show", "modal--error");
    }
    if (popupMap.classList.contains("modal--show")) {
      popupMap.classList.remove("modal--show");
    }
  }
});

closePopupMap.addEventListener("click", function(event) {
  supportPreventDefault(event)
  popupMap.classList.remove("modal--show");
});