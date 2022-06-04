const copyText = document.querySelector("textarea[name=copyText]");
const finalText = document.querySelector("textarea[name=finalText]");
const moveBtn = document.querySelector(".moveBtn");
const copyBtn = document.querySelector(".copyBtn");
const textOuterOutput = document.querySelector(".outer-output");

moveBtn.addEventListener('click', moveText);
copyBtn.addEventListener('click', copyTxt);
copyText.addEventListener('click', selectAllText);
finalText.addEventListener('click', selectAllText);

function selectAllText(){
    this.select();
}

function copyTxt() {
    let temp = copyText.value;
    copyTextToClipboard(temp);
};

function copyTextToClipboard(string) {
    const textarea = document.createElement("textarea");
    textarea.value = string;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);

    textOuterOutput.innerHTML = "<h4>Copied text content is as follows:</h4>" + textarea.value;
}

function moveText() {
    let temp = copyText.value;
    finalText.value = temp;
}














































