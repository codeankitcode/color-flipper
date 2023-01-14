const btn = document.querySelector("#btn")
const color = document.querySelector("#color")


const hexCode = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]


btn.addEventListener("click", function(){
    let hexVal = "#"
    for(let i = 0; i < 6; i++){
        let randomVal = randomNum()
        hexVal += hexCode[randomVal]
        
    }
    color.textContent = hexVal
    document.body.style.backgroundColor = hexVal
})


function randomNum(){
    return Math.floor(Math.random() * hexCode.length)
}
