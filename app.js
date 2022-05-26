//on selectionne tous les elements du dom qu'on va utiliser
const form=document.querySelector("form")
const btnStart=document.querySelector(".btn-start")
const btnNext=document.querySelector(".btn-next")
const btnQuit=document.querySelector(".btn-quit")
const btnHome=document.querySelector(".btn-home")
const playerName=document.querySelector(".player-name")
const playerMail=document.querySelector(".player-mail")
const home=document.querySelector(".container-start")
const questionContainer=document.querySelector(".container-questions")
const resultContainer=document.querySelector(".container-result")
const quiz=document.querySelector(".quiz")
const formReponses=document.querySelector(".reponses")
let choixReponse=document.querySelector(".answer-group")
let choixReponseSelect=document.querySelector("input[type=radio]")
const spanScore=document.querySelector(".score")
const quizCounter=document.querySelector(".quiz-count")
let progressBar=document.querySelector(".rebours")
let errorsnom=0;
let errorsmail=0; 
let nomError=document.querySelector(".error-name")
let mailError=document.querySelector(".error-mail")
let bordureErrorNom=document.querySelector('.name')
let bordureErrormail=document.querySelector('.mail')
let iconesResultat=document.querySelector(".fa-regular")
let answerTrue=0;
let answerSelected=0;


// on cree une fonction pour la validation des mail et du nom

function validation(name , email){
  if(name===""){
    errorsnom=true
     bordureErrorNom.style.border='solid 1px red'
    nomError.textContent="N’oubliez pas de renseigner votre nom avant de commencer le Quiz"
  }else{
    nomError.textContent=" "
    errorsnom=false
    bordureErrorNom.style.border='solid 2px rgb(233, 233, 233)'
  }
  let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(email.match(mailformat)){
    mailError.textContent=" "
    errorsmail =false
    bordureErrormail.style.border='solid 2px rgb(233, 233, 233)'
  
  }else{
    errorsmail=true
    bordureErrormail.style.border='solid 1px red'
    mailError.textContent="Vueillez  renseigner un  email valide avant de commencer le Quiz"
  }
  return 
}

// on soumet le formulaire et 
form.addEventListener("submit", function(e){ 
  e.preventDefault();
  const nom=form.querySelector("#name").value
  const mail=document.querySelector("#mail").value
  validation(nom , mail);

  //s'il n'ya pas d'erreur on affiche le conteneur des question
  if(errorsnom==false && errorsmail==false ){
    home.style.display="none"
    questionContainer.style.display="grid"
    questionContainer.style.opacity="1"
    playerName.textContent=nom
    playerMail.textContent=mail

    // on recharge la page si on clique le le btn quit
    btnQuit.addEventListener('click', function(e){
      e.preventDefault();
      document.location.reload(true);
     
    })
    //quand on clique sur une assertion
    // choixReponseSelect.addEventListener("click" , function(){
    //   choixReponse.style.border="solid 2px rgba(2, 138, 61, 1)"
    //   document.querySelector('input[type=radio]').checked=true
    //   console.log(choixReponse);
    // })  

    let count=0;
    let rebours=60;

    function timer(){
      if(rebours>0){
        rebours-=1;
        document.querySelector('.count-time').textContent=rebours 
      }
      else if(rebours==0){

        if(document.querySelector('input[type=radio]:checked')){
          answerSelected=document.querySelector('input[type=radio]:checked').value
          answerTrue=questions[count].reponse

          if(answerSelected==answerTrue){
            playerScore+=1
          } 
        }
        count+=1
        rebours=60

        progressBar.remove()
        progressBar=document.createElement('div')
        progressBar.classList.add("rebours")
        document.querySelector('.timer').appendChild(progressBar)
        console.log(progressBar)
        progressBar.classList.add("rebours")
        rebours-=1;
        document.querySelector('.count-time').textContent=rebours

        if(count<questions.length){ 
       
          quizCounter.textContent=count+1 +"/"+  questions.length 
          quiz.textContent=questions[count].question
          let choix=questions[count].choix
          document.querySelector("#id1").value=choix[0]
          document.querySelector("#id1").checked=false
          document.querySelector('label[for=id1]').textContent=choix[0]
          document.querySelector("#id2").value=choix[1]
          document.querySelector("#id2").checked=false
          document.querySelector('label[for=id2]').textContent=choix[1]
          document.querySelector("#id3").value=choix[2]
          document.querySelector("#id3").checked=false
          document.querySelector('label[for=id3]').textContent=choix[2]
          document.querySelector("#id4").value=choix[3]
          document.querySelector("#id4").checked=false
          document.querySelector('label[for=id4]').textContent=choix[3] 
        }else{
          questionContainer.style.display="none"
          questionContainer.style.opacity="0"
          resultContainer.style.display="grid"
          resultContainer.style.opacity="1"
          // verifie si le score depasse la moitié de la ail du tableau des questions
          if(playerScore >=questions.length/2){
            iconesResultat.classList.remove("fa-circle-xmark")
            iconesResultat.classList.add("fa-circle-check")
                console.log(iconesResultat);
          }
          spanScore.textContent=playerScore +"/"+  questions.length 
          btnHome.addEventListener("click", function(e){
            e.preventDefault();
            document.location.reload(true);
          })
        }
      }
      return rebours
    }

    let compteur = setInterval(timer, 1000)
    console.log(compteur);

    // affiche la premiere question
    
    quizCounter.textContent=count+1 +"/"+  questions.length 
    quiz.textContent=questions[count].question
    let choix=questions[count].choix
    document.querySelector("#id1").value=choix[0]
    document.querySelector('label[for=id1]').textContent=choix[0]
    document.querySelector("#id2").value=choix[1]
    document.querySelector('label[for=id2]').textContent=choix[1]
    document.querySelector("#id3").value=choix[2]
    document.querySelector('label[for=id3]').textContent=choix[2]
    document.querySelector("#id4").value=choix[3]
    document.querySelector('label[for=id4]').textContent=choix[3]
    let playerScore=0;
    // btn suivant 
    btnNext.addEventListener("click", function(e){
      e.preventDefault();
     
      //on verifie la reponse choix eton update le score
      if(document.querySelector('input[type=radio]:checked')){
        rebours=60
        progressBar.remove()
        progressBar=document.createElement('div')
        progressBar.classList.add("rebours")
        document.querySelector('.timer').appendChild(progressBar)
        console.log(progressBar)
        progressBar.classList.add("rebours")
        answerSelected=document.querySelector('input[type=radio]:checked').value
        count+=1
        answerTrue=questions[count-1].reponse
       
        if(answerSelected==answerTrue){
          playerScore+=1
        } 
      

        console.log(answerSelected);
        console.log(answerTrue);
        console.log(playerScore);
        if(count<questions.length){ 
       
        quizCounter.textContent=count+1 +"/"+  questions.length
        choix=questions[count].choix
        quiz.textContent=questions[count].question
        document.querySelector("#id1").value=choix[0]
        document.querySelector("#id1").checked=false
        document.querySelector('label[for=id1]').textContent=choix[0]
        document.querySelector("#id2").value=choix[1]
        document.querySelector("#id2").checked=false
        document.querySelector('label[for=id2]').textContent=choix[1]
        document.querySelector("#id3").value=choix[2]
        document.querySelector("#id3").checked=false
        document.querySelector('label[for=id3]').textContent=choix[2]
        document.querySelector("#id4").value=choix[3]
        document.querySelector("#id4").checked=false
        document.querySelector('label[for=id4]').textContent=choix[3] 
        }else{
          questionContainer.style.display="none"
         questionContainer.style.opacity="0"
          resultContainer.style.display="grid"
          resultContainer.style.opacity="1"
         // verifie si le score depasse la moitié de la ail du tableau des questions
         if(playerScore >=questions.length/2){
            iconesResultat.classList.remove("fa-circle-xmark")
            iconesResultat.classList.add("fa-circle-check")
            console.log(iconesResultat);
          }
          spanScore.textContent=playerScore +"/"+  questions.length 


          btnHome.addEventListener("click", function(e){
          e.preventDefault();
          document.location.reload(true);
          })
        }
      }
    })
       
  }
  return
})


function Choix_select(e)
{
  e.querySelector('input[type=radio]').checked=true
  if(e.querySelector('input[type=radio]').checked=true){
  e.style.border="solid 2px red"
}
}