





function makeBubble () {

    
let counter = "";

for (let i = 0; i < 90; i++) {


   let randomNum = Math.floor(Math.random()*10)

    counter += `<div class="bubble">${randomNum}</div>`

}

document.querySelector("#pbtm").innerHTML = counter;
}

makeBubble();

let timer = 25;
let scorevalue = 0;




function runTimer (){

    let SetTime = setInterval(function(){


        if (timer > 0) {

        timer--;
        document.querySelector("#runtime").textContent = timer;

        }else {
            timer = 25
            scorevalue = -10

            clearInterval(SetTime)
           document.querySelector("#pbtm").innerHTML = `
            <div class="game-over-container">
            <h1>Game Over</h1>
            <div class="game-over-animation" id="gameOverAnimation">
                <p>Play Again!</p>
            </div>
            </div>`
            let startAgain = document.querySelector(".game-over-animation")
            startAgain.addEventListener("click", function(){
                makeBubble()
                getNewhit()
                runTimer()
                increaseScore()
            })
        }
    },1000)
    
}

runTimer();


let hitNew = 0;

function getNewhit () {

    hitNew = Math.floor(Math.random()*10);
    document.querySelector("#newHit").textContent = hitNew;
}

getNewhit()


//let scorevalue = 0;

function increaseScore () {

    scorevalue += 10;

    document.querySelector("#scoreval").textContent = scorevalue;
}



 document.querySelector("#pbtm").addEventListener("click", function(details) {

    let numberHit = Number(details.target.textContent);

    if (numberHit === hitNew) {
        increaseScore()
        makeBubble()
        getNewhit()
    } 

})





 



// function makeBubble () {

    
//     let counter = "";


//     let Maxwidth = window.innerWidth;

//     if (Maxwidth < 650) {

//         for (let i = 0; i < 40; i++) {
    
    
//             let randomNum = Math.floor(Math.random()*10)
         
//              counter += `<div class="bubble">${randomNum}</div>`
         
//          }
//     }else {

//         for (let i = 0; i < 90; i++) {
    
    
//             let randomNum = Math.floor(Math.random()*10)
         
//              counter += `<div class="bubble">${randomNum}</div>`
         
//          }
//     }
    
   
    
//     document.querySelector("#pbtm").innerHTML = counter;
//     }
    
//     makeBubble();

