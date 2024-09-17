let colors = ["red","green","yellow","blue","aqua","orange","pink","brown","darkblue","darkgrey"]
let button = document.getElementById("btn")
let text = document.getElementById("color")

button.addEventListener("click", function(){
    const randomNumber = getRandomNumber();
    console.log(randomNumber)
    document.body.style.backgroundColor = colors[randomNumber];
    text.textContent = colors[randomNumber]
})


function getRandomNumber(){
    return Math.floor(Math.random()*colors.length)
}