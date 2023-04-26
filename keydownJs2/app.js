const bM = document.querySelector(".bM")
const b1 = document.querySelector(".b1")
const b2 = document.querySelector(".b2")
const b3 = document.querySelector(".b3")
const b4 = document.querySelector(".b4")
const b0 = document.querySelector(".b0")
const b_cem = document.querySelector(".b_cem")
const b_ferq = document.querySelector(".b_ferq")


bM.addEventListener("click", function () {
    b0.innerText = 0
    console.log(b0);
})

b1.addEventListener("click", function () {
    b0.innerText = 30
})
b2.addEventListener("click", function () {
    b0.innerText = 60
})
b3.addEventListener("click", function () {
    b0.innerText = 90
})
b4.addEventListener("click", function () {
    b0.innerText = 120
})
b_cem.addEventListener("click", function () {
    b0.innerText = +b0.innerText + 10;
})
b_ferq.addEventListener("click", function () {
    
    if (+b0.innerText !== 0) {
        b0.innerText = +b0.innerText - 10;
    }
})




document.addEventListener('keydown', function (e) {
    console.log(e.key);
    if (e.key.toLocaleLowerCase() === "m") {
        b0.innerText = 0
        console.log(b0);
    }
    else if (e.key.toLocaleLowerCase() === "1") {
        b0.innerText = 30
    }
    else if (e.key.toLocaleLowerCase() === "2") {
        b0.innerText = 60
    }
    else if (e.key.toLocaleLowerCase() === "3") {
        b0.innerText = 90
    }
    else if (e.key.toLocaleLowerCase() === "4") {
        b0.innerText = 120
    }
    else if (e.key == "+") {
        b0.innerText = +b0.innerText + 10;
    }
    else if (e.key == "-") {
        if (+b0.innerText !== 0) {
            b0.innerText = +b0.innerText - 10;
        }
    }

})