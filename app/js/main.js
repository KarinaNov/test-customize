let options = document.getElementById("options");
let optionList = ["Ad Agency", "Ad Network", "Advertiser", "Publisher", "Other"];

let button = document.getElementById("button");

let isOpen = false;

button.addEventListener("click", getMessage);
options.addEventListener("click", addToUIOptions);

function getMessage() {
    let message = document.createElement("div");
    message.className = "message";

    if (options.firstElementChild.classList.contains("hide-option")) {
        message.classList.add("danger");
        message.textContent = "Oh no! It is cannot be blank";

        document.body.appendChild(message);

        deleteMessage(message);
    }
    else {
        message.classList.add("success");
        message.textContent = "Thanks for completing :)";

        document.body.appendChild(message);

        deleteMessage(message);
    }

}

function deleteMessage(el) {
    setTimeout(() => {
        document.body.removeChild(el);
    }, 6000);
}

function addToUIOptions(e) {
    if (e.target.classList.contains("hide-option")) {
        controlOptions(e);
    }
    else {
        const pickedOption = e.target;

        if (options.firstElementChild.classList.contains("hide-option")) {
            options.removeChild(options.firstElementChild);
        }
        options.insertAdjacentElement("afterbegin", pickedOption);

        deleteOptions();
        controlOptions(e);
    }
}

function controlOptions(e) {
    if (isOpen === false) {
        createOptions();
        options.classList.add("opened");
        isOpen = true;
    }
    else {
        deleteOptions();
        options.classList.remove("opened");
        isOpen = false;
    }
}

function deleteOptions() {
    while (options.childElementCount > 1) {
        options.removeChild(options.lastElementChild);
    }
}

function createOptions() {
    optionList.forEach(element => {
        if (options.firstElementChild.textContent !== element) {
            let option = document.createElement("div");
            option.className = "option";
            option.textContent = element;

            options.firstElementChild.insertAdjacentElement("afterend", option);
        }
    });
};


const bg = document.querySelector('.singup-form');
const bg2 = document.querySelector('.singup-form__bg');

const windowWidth = window.innerWidth / 5;
const windowHeight = window.innerHeight / 5 ;

bg.addEventListener('mousemove', (e) => {
  const mouseX = e.clientX / windowWidth;
  const mouseY = e.clientY / windowHeight;
  
  bg2.style.transform = `translate3d(-${mouseX}%, -${mouseY}%, 0)`;
});