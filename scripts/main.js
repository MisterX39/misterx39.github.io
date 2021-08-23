let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/MA.jpg') {
      myImage.setAttribute('src','images/Swiss.jpg');
    } else {
      myImage.setAttribute('src','images/MA.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h3');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.textContent = 'Welcome to my website, ' + myName;
    }
  }

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Welcome to my website, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
  }
  