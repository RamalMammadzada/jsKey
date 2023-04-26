let tisbaga = document.querySelector(".tisbaga")
let x = 0
let y = 0

document.addEventListener(`keydown`, function (e) {
    console.log(e.key);
    if (e.key == "a") {
        console.log("men sola gedirem");
        x-= 10
        tisbaga.style.transform = `translate(${x}px,${y}px)`
    }
    else if (e.key == "d") {
        console.log("men saga gedirem");
        x+= 10
        tisbaga.style.transform = `translate(${x}px,${y}px)`
    }
    else if (e.key == "w") {
        console.log("men qabaqa gedirem");
        y-= 10
        tisbaga.style.transform = `translate(${x}px,${y}px)`
    }
    else if (e.key == "s" ) {
        console.log("men arxaya gedirem");
        y+= 10
        tisbaga.style.transform = `translate(${x}px,${y}px)`
    }
})