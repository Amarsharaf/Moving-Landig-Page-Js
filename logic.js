let stars = document.getElementById("stars")
let moon = document.getElementById("moon")
let mountain3 = document.getElementById("mountain3")
let mountain4 = document.getElementById("mountain4")
let river = document.getElementById("river")
let boat = document.getElementById("boat")
let nov = document.getElementById("nov")


window.onscroll = function() {
    let scroll = scrollY;
    stars.style.left = scroll  + 'px'
    moon.style.top = scroll * 3 + 'px'
    mountain3.style.top = scroll * 2 + 'px'
    mountain4.style.top = scroll * 1.5 + 'px'
    river.style.top = scroll + 'px'
    boat.style.top = scroll + 'px'
    boat.style.left = scroll * 3 + 'px'
    nov.style.fontSize = scroll  + 'px'
    if (scrollY >= 50) {
        nov.style.fontSize = 50  + 'px'
        nov.style.position = "fixed"
        if (scrollY >= 250) {
            nov.style.display = "none"
        } else {
            nov.style.display = "blok"

        }
        if (scrollY >= 100) {
            document.querySelector(".main").style.background = " linear-gradient(#376281, #10001f)"
        } else {
            document.querySelector(".main").style.background = " linear-gradient(#200016, #10001f)"

        }
    }
}