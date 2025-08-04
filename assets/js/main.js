let rollCount = 0;
window.addEventListener("load", function () {
    let dice = document.getElementById("dice");
    dice.classList.add("start-animation");
});

document.getElementById("roll").addEventListener("click", function () {
    let dice = document.getElementById("dice")
    let rolls = document.getElementById("rolls")
    let roll = document.createElement("div")
    let img = document.createElement("img")
    let p = document.createElement("p")
    roll.setAttribute("class", "rolle")
    rolls.appendChild(roll)
    roll.appendChild(p)
    roll.appendChild(img)

    dice.classList.add("spin")
    setTimeout(() => {
        dice.classList.remove("spin")
        let random = Math.floor(Math.random() * 6) + 1;
        dice.src = `public/imgs/Dice-${random}.png`
        rollCount++;
        p.innerHTML = `Roll:${rollCount}`
        img.src = `public/imgs/Dice-${random}.png`
    }, 500);
})