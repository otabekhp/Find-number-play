

let randomNumber = Math.floor(Math.random()*20+1);
console.log(randomNumber);

let score = 20;


const inputMynumber = document.querySelector(".myNumber");
const chekerBtn = document.querySelector(".check");
const notification = document.querySelector(".notification");
const compyuterNumber = document.querySelector(".random_number");
const scoreSpan = document.querySelector(".scoreSpan");
const hightScore = document.querySelector(".highScore");
const resetBtn = document.querySelector(".reset");

chekerBtn.addEventListener("click",()=>{
   
    const val = inputMynumber.value;


    if(randomNumber < val){
      notification.textContent = "Too hight";
      score--;
      scoreSpan.textContent = score;
    }
    else if(randomNumber > val){
      notification.textContent = "Too low";
      score--;
      scoreSpan.textContent = score;
    } 
    else{
      notification.textContent = 'Congratulation 🥳🥳👍👍🎉🎉🎇🎇🎆🎆🎊🎊🎀🎀';
      document.body.style.backgroundColor = "green";
      compyuterNumber.textContent = randomNumber;
       if (score > hightScore.textContent) {
        hightScore.textContent = score;
      }
    }
    
});
resetBtn.addEventListener("click",()=>{
    document.body.style.backgroundColor = "indigo";
    notification.textContent = "";
    score = 20;
    randomNumber = Math.floor(Math.random()*20+1);
    compyuterNumber.textContent = "?";
    inputMynumber.value = "";
    scoreSpan.textContent = score;
});

inputMynumber.addEventListener("change",()=> {
    if(inputMynumber.value){
      chekerBtn.disabled = false;
    }
    else{
      chekerBtn.disabled = true;
    }
})
