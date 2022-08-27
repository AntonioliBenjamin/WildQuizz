//---------------TOUTES MES CONSATANTES CONTIENNENT DES ELEMENTS HTML---------//
const compteurBonneReponses = document.getElementById("compteur_réponses");
const questionContainer = document.getElementById("questionContainer");
const nextQuestion1 = document.getElementById("nextQuestion1");
const gifMerNoir = document.getElementById("gifMerNoir");
const gifBravo = document.getElementById("gifBravo");
const questionTitle = document.getElementById("questionTitle");
const question =document.getElementById("question");
//-----------BOUTONS QUESTION 1-------
const btnMerNoire = document.getElementById("btn1");
const btnChine = document.getElementById("btn2");
//-----------BOUTONS QUESTION 2--------
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
//--------------------------------------
const containerReponse = document.querySelector("#questionContainer > div.container-reponses")
const conclusion = document.getElementById("conclusion");
const gifBad = document.getElementById("gifBad");
const retourBtn = document.getElementById("retour-btn");
//--------------------------------------------------------------------------//
//----VARIABLE COMPTEUR DE BONNE REPONSE----//
let i = 1; 
//------------------------------------------//

//----------------------QUESTION 1 EVENTS--------------------
btnMerNoire.addEventListener('click', (e) => {
    questionContainer.style.backgroundColor = 'red';
    btnMerNoire.style.backgroundColor = 'red';
    btnChine.style.backgroundColor = 'green';
    btnChine.disabled = true;
    btnMerNoire.disabled = true;
    nextQuestion1.style.visibility = 'visible';
    nextQuestion1.style.position = 'absolute';
    nextQuestion1.style.top = '15%';
    nextQuestion1.style.left =  '50%';
    nextQuestion1.style.transform = 'translate(-50%, -50%)';
    gifMerNoir.style.visibility = 'visible';
});
btnChine.addEventListener('click', (e) => {
    questionContainer.style.backgroundColor = 'green';
    btnChine.style.backgroundColor = 'green';
    compteurBonneReponses.innerText = 'Bonnes réponses : '+ i++ + '/2' ;
    btnMerNoire.disabled = true;
    btnChine.disabled = true;
    nextQuestion1.style.visibility = 'visible';
    nextQuestion1.style.position = 'absolute';
    nextQuestion1.style.top = '15%';
    nextQuestion1.style.left =  '50%';
    nextQuestion1.style.transform = 'translate(-50%, -50%)';
    gifBravo.style.visibility = 'visible';
});
//------------------TRANSITION A LA QUESTION 2 --------------------//
nextQuestion1.addEventListener('click', (e) => {
    questionContainer.style.backgroundColor = 'whitesmoke';
    btnMerNoire.disabled = false;
    btnChine.disabled = false;
    gifBravo.style.visibility = 'hidden';
    gifMerNoir.style.visibility = 'hidden';
    questionTitle.innerHTML = 'QUESTION N°2';
    question.innerHTML = "Le quel des deux est le plus lourd ??";
    btnChine.style.visibility = 'hidden';
    btnMerNoire.style.visibility=  'hidden';
    questionTitle.style.paddingLeft = '30%';
    containerReponse.style.paddingLeft = '20%';
    btn3.style.visibility="visible";
    btn4.style.visibility="visible";
    nextQuestion1.style.visibility = 'hidden';
});
//-------------------QUESTION 2 EVENTS ----------------------------//
btn3.addEventListener('click', (e) => {
    btn3.style.backgroundColor = 'red';
    btn4.style.backgroundColor = 'green';
    btn3.disabled = true;
    btn4.disabled = true;
    questionContainer.style.backgroundColor = 'red'; 
//---------------EVENT SELON RESULTAT-----------------------------//
      if (i === 1) {
        conclusion.innerHTML = 'Vous pouvez mieu faire, réessayez !';
    } if (i === 2) {
        conclusion.innerHTML = 'Vous avez obtenu ' + (i -1) + ' bonne réponse, vous pouvez mieux faire !';
    } if (i === 3) {
        conclusion.innerHTML = 'Vous avez obtenu ' + (i -1) + ' bonnes réponses, BRAVO !';
    };
    retourBtn.style.visibility = "visible";
    gifBad.style.visibility =  "visible";
});
//-----------------------------------------------------------------//
btn4.addEventListener('click', (e) => {
    questionContainer.style.backgroundColor = 'green';
    btn4.style.backgroundColor = 'green';
    btn3.disabled = true;
    btn4.disabled = true;
    compteurBonneReponses.innerText = 'Bonnes réponses : '+ i++ + '/2' ;
    gifBravo.style.visibility = 'visible';
//---------------EVENT SELON RESULTAT-------------------------------//
      if (i === 1) {
        conclusion.innerHTML = 'Vous pouvez mieu faire, réessayez !';
    } if (i === 2) {
        conclusion.innerHTML = 'Vous avez obtenu ' + (i -1) + ' bonne réponse, vous pouvez mieux faire !';
    } if (i === 3) {
        conclusion.innerHTML = 'Vous avez obtenu ' + (i -1) + ' bonnes réponses, BRAVO !';
    };
    retourBtn.style.visibility = "visible";
});
//-----------------------------------------------------------------//
//---------------RECOMMENCER LE QUIZZ------------------------------//
retourBtn.addEventListener("click", (e) => {
    window.open('index.html', '_self');
});
//----------------------------------------------------------------//