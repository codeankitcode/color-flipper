const btn = document.querySelector("#btn")
const color = document.querySelector("#color")


let colors = ["#FAD3E7", "#EFA3C8", "RGB(255,0,0)", "RGB(0,128,0)", "#8DCBE6", "#FFEA20", "#13005A"]

btn.addEventListener("click", function(){
    let randomNum = randomColor()
    color.textContent = colors[randomNum]
    document.body.style.backgroundColor = colors[randomNum]

    
})

function randomColor(){
    return Math.floor(Math.random() * colors.length)
}