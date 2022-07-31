const container = document.querySelector("#container");

const redPara = document.createElement('p');
redPara.style.cssText="color:red;";
redPara.textContent = "Hey I'm Red!"

container.appendChild(redPara);

const blueH3 =document.createElement("h3");
blueH3.style.cssText="color:blue;";
blueH3.textContent = "I'm a blue h3!"
container.appendChild(blueH3)

const div = document.createElement("div");
div.style.cssText = "border: 2px solid black; background-color: pink;"

const h1 = document.createElement("h1");
h1.textContent = "I'm in a div"

const divPara = document.createElement("p");
divPara.textContent = "ME TOO!"

div.append(h1, divPara)


container.appendChild(div)

const buttons = document.querySelectorAll(".button");

buttons.forEach((button) => {
    button.addEventListener("click", function (e) {
        e.target.style.color = "yellow";
    });
});

/*const button1 = document.querySelector("#button1");
button1.onclick = () => alert("only 1 'onclick' method is allowed");

const button2 = document.querySelector("#button2");
button2.addEventListener("click", () => {
    alert("Most flexible and powerful, but more complex")
});

const button3 = document.querySelector("#button3");
button3.addEventListener("click", function (e) {
    e.target.style.background = 'blue';
});*/