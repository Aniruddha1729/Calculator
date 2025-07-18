const numbers = {
    var1:"",
    var2:"",
};
let operation = "";
let flag=1;
const main = document.querySelector("#main")
const display = document.querySelector("#display")
display.textContent = ""
const keys = document.querySelector("#keys")
const nums = document.querySelector(".nums")
const opps = document.querySelector(".opps")

const buttons = {};
for (let i = 9; i > 0; i--) {
    buttons[`b${i}`] = document.createElement("button");
    buttons[`b${i}`].textContent = `${i}`;
    buttons[`b${i}`].style.backgroundColor = "grey"
    buttons[`b${i}`].style.color = "white"
    nums.appendChild(buttons[`b${i}`]);
    buttons[`b${i}`].addEventListener("click", () => {
        numbers[`var${flag}`] += `${i}`;
        display.appendChild(document.createTextNode(buttons[`b${i}`].textContent))
    })
}
 buttons[`*`] = document.createElement("button");
    buttons[`*`].textContent = `*`;
    nums.appendChild(buttons[`*`]);
    buttons[`*`].addEventListener("click", () => {
        display.appendChild(document.createTextNode(buttons[`*`].textContent))
        operation = "*";
        flag++;
    })

 buttons[`0`] = document.createElement("button");
    buttons[`0`].textContent = `0`;
    buttons[`0`].style.backgroundColor = "grey"
    buttons[`0`].style.color = "white"
    nums.appendChild(buttons[`0`]);
    buttons[`0`].addEventListener("click", () => {
        numbers[`var${flag}`] += `0`;
        display.appendChild(document.createTextNode(buttons[`0`].textContent))
    })

 buttons[`/`] = document.createElement("button");
    buttons[`/`].textContent = `/`;
    nums.appendChild(buttons[`/`]);
    buttons[`/`].addEventListener("click", () => {
        display.appendChild(document.createTextNode(buttons[`/`].textContent))
        operation = "/";
        flag++;
    })

buttons[`c`] = document.createElement("button");
    buttons[`c`].textContent = `C`;
    buttons[`c`].style.backgroundColor = "red";
    opps.appendChild(buttons[`c`]);
     buttons[`c`].addEventListener("click", () => {
        display.innerHTML = "";
        numbers["var1"]="";
        numbers["var2"]="";
        operation="";
        flag=1;
    })

buttons[`+`] = document.createElement("button");
    buttons[`+`].textContent = `+`;
    opps.appendChild(buttons[`+`]);
     buttons[`+`].addEventListener("click", () => {
        display.appendChild(document.createTextNode(buttons[`+`].textContent))
        operation = "+";
        flag++;
    })

buttons[`-`] = document.createElement("button");
    buttons[`-`].textContent = `-`;
    opps.appendChild(buttons[`-`]);
     buttons[`-`].addEventListener("click", () => {
        display.appendChild(document.createTextNode(buttons[`-`].textContent))
        operation = "-";
        flag++;
    })

buttons[`=`] = document.createElement("button");
    buttons[`=`].textContent = `=`;
    buttons[`=`].style.backgroundColor = "plum"
    opps.appendChild(buttons[`=`]);
     buttons[`=`].addEventListener("click", () => {
        display.appendChild(document.createTextNode(buttons[`=`].textContent))
        display.innerHTML = "";
        display.appendChild(document.createTextNode(operate(numbers["var1"],numbers["var2"],operation)))
        numbers["var1"]=operate(numbers["var1"],numbers["var2"],operation);
        numbers["var2"]="";
        operation="";
        flag=1;
    })

    function operate(num1,num2,opp){
        let x = Number(num1);
        let y = Number(num2);
          const operations = {
    "+": (x, y) => x + y,
    "-": (x, y) => x - y,
    "*": (x, y) => x * y,
    "/": (x, y) => x / y
    }
    return operations[opp](x, y);
}
