const main = document.querySelector("#main")
const display = document.querySelector("#display")
display.textContent = "0"
const keys = document.querySelector("#keys")
const nums = document.querySelector(".nums")
const opps = document.querySelector(".opps")

const buttons = {};
for (let i = 9; i > 0; i--) {
    buttons[`b${i}`] = document.createElement("button");
    buttons[`b${i}`].textContent = `${i}`;
    nums.appendChild(buttons[`b${i}`]);
}
 buttons[`*`] = document.createElement("button");
    buttons[`*`].textContent = `*`;
    nums.appendChild(buttons[`*`]);
 buttons[`0`] = document.createElement("button");
    buttons[`0`].textContent = `0`;
    nums.appendChild(buttons[`0`]);
 buttons[`/`] = document.createElement("button");
    buttons[`/`].textContent = `/`;
    nums.appendChild(buttons[`/`]);

buttons[`c`] = document.createElement("button");
    buttons[`c`].textContent = `c`;
    buttons[`c`].style.backgroundColor = "red";
    opps.appendChild(buttons[`c`]);
buttons[`+`] = document.createElement("button");
    buttons[`+`].textContent = `+`;
    opps.appendChild(buttons[`+`]);
buttons[`-`] = document.createElement("button");
    buttons[`-`].textContent = `-`;
    opps.appendChild(buttons[`-`]);
buttons[`=`] = document.createElement("button");
    buttons[`=`].textContent = `=`;
    opps.appendChild(buttons[`=`]);
