let accordion = document.getElementById("accordion");
let message = document.getElementById("message");
let text = document.getElementById("text");

accordion.onclick = function() {
    if (text.style.maxHeight === 150 + "px") {
        text.style.maxHeight = 0;
        text.style.padding = 0;
    } else {
        text.style.maxHeight = 150 + "px";
        text.style.paddingBottom = 25 + "px";
    }

}

