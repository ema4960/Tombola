extracted = [];
SelectedCardS= 0;
cardcounter=0;
ambo=false;
terno=false;
quaterna=false;
cinquina=false;
tombola=false;
checkedCards=[];

function startLoad(){
    cardsGridBox=document.getElementsByClassName("cards__grid"); 
    numbersGridBox=document.getElementsByClassName("numbers__grid"); 
    for(i=1;i<=24;i++){
       cardsGridBox[0].innerHTML+="<input type='checkbox' id='cartella"+i+"' onclick='cardCounter("+i+")'></input><p>"+i+"</p>";
    }
    for(i=1;i<=90;i++){
        numbersGridBox[0].innerHTML+="<p class='num'>"+i+"</p>";
    }
}

function extraction(){
    extractObj=document.getElementById("extract");
    extract2Obj=document.getElementById("extract2");
    extract3Obj=document.getElementById("extract3");
    extract4Obj=document.getElementById("extract4");
    
    nExtract=Math.floor(Math.random() * 90) + 1;
    if(extracted.includes(nExtract)){
        extraction();
    }else{
        extractedObj=document.getElementsByClassName("num");
        extractedObj[nExtract-1].style.backgroundColor="var(--primary500)";
        extractedObj[nExtract-1].style.color="var(--primary800)";
        extract4Obj.innerHTML=extract3Obj.innerHTML;
        extract3Obj.innerHTML=extract2Obj.innerHTML;
        extract2Obj.innerHTML=extractObj.innerHTML;
        extractObj.style.backgroundColor="var(--primary700)";
        extractObj.innerHTML=nExtract;
        extracted.push(nExtract);
        document.getElementsByClassName("smorfia")[0].innerHTML=smorfiaNapoletana[nExtract-1];
    }

   cardVerify();
}

function cardCounter(i){
     checkbox = document.getElementById("cartella"+i);
    if(checkbox.checked){
        cardcounter++;
        checkedCards.push(i);
    }else{
        cardcounter--;
        checkedCards.splice(checkedCards.indexOf(i),1);
    }
}

function calculationQuotas(){
    totalWinObj=document.getElementById("totalWin");
    price= document.getElementById("cardPrice").value;
    price*=cardcounter;
    totalWinObj.innerHTML=price+"€";

    quotaObj=document.getElementsByClassName("quota");
    quotaPriceObj=document.getElementsByClassName("quota__price");
    

    if(quotaObj[0].checked && quotaObj[1].checked && quotaObj[2].checked && quotaObj[3].checked && quotaObj[4].checked){
        quotaPriceObj[0].innerHTML=(price*0.084).toFixed(2)+"€";
        quotaPriceObj[1].innerHTML=(price*0.125).toFixed(2)+"€";
        quotaPriceObj[2].innerHTML=(price*0.166).toFixed(2)+"€";
        quotaPriceObj[3].innerHTML=(price*0.25).toFixed(2)+"€";
        quotaPriceObj[4].innerHTML=(price*0.375).toFixed(2)+"€";
    }else if(quotaObj[1].checked && quotaObj[2].checked && quotaObj[3].checked && quotaObj[4].checked){ 
        quotaPriceObj[0].innerHTML=0.0+"€";
        quotaPriceObj[1].innerHTML=(price*0.146).toFixed(2)+"€";
        quotaPriceObj[2].innerHTML=(price*0.187).toFixed(2)+"€";
        quotaPriceObj[3].innerHTML=(price*0.271).toFixed(2)+"€";
        quotaPriceObj[4].innerHTML=(price*0.396).toFixed(2)+"€";
    }else if(quotaObj[2].checked && quotaObj[3].checked && quotaObj[4].checked){
        quotaPriceObj[0].innerHTML=0.0+"€";
        quotaPriceObj[1].innerHTML=0.0+"€";
        quotaPriceObj[2].innerHTML=(price*0.236).toFixed(2)+"€";
        quotaPriceObj[3].innerHTML=(price*0.32).toFixed(2)+"€";
        quotaPriceObj[4].innerHTML=(price*0.445).toFixed(2)+"€";
    }else if(quotaObj[3].checked && quotaObj[4].checked){
        quotaPriceObj[0].innerHTML=0.0+"€";
        quotaPriceObj[1].innerHTML=0.0+"€";
        quotaPriceObj[2].innerHTML=0.0+"€";
        quotaPriceObj[3].innerHTML=(price*0.438).toFixed(2)+"€";
        quotaPriceObj[4].innerHTML=(price*0.563).toFixed(2)+"€";
    }else{
        quotaPriceObj[0].innerHTML=0.0+"€";
        quotaPriceObj[1].innerHTML=0.0+"€";
        quotaPriceObj[2].innerHTML=0.0+"€";
        quotaPriceObj[3].innerHTML=0.0+"€";
        quotaPriceObj[4].innerHTML=(price).toFixed(2)+"€";
    }


}

 function cardVerify(){
    winnersObj=document.getElementsByClassName("winners__item");
   for(f=0;f<checkedCards.length;f++){
       card=checkedCards[f]-1;
       for (j=0;j<3;j++){
            for (i=0;i<5;i++){    
                if(ambo==false && isAmbo(card,j,i)){
                    winnersObj[0].innerHTML="Ambo:  N°"+(card+1);
                    alert("hai fatto ambo nella cartella "+(card+1));
                }
                if(terno==false && isTerno(card,j,i)){
                    winnersObj[1].innerHTML="terno:  N°"+(card+1);
                    alert("hai fatto terno nella cartella "+(card+1)); 
                }
                if(quaterna==false && isQuaterna(card,j,i)){
                    winnersObj[2].innerHTML="Quaterna:  N°"+(card+1);
                    alert("hai fatto Quaterna nella cartella "+(card+1));
                }
                if(cinquina==false && isCinquina(card,j,i)){
                    winnersObj[3].innerHTML="Cinquina:  N°"+(card+1);
                    alert("hai fatto Cinquina nella cartella "+(card+1));
                }
                
            }
            
        } 
    
        if(tombola==false && isTombola(card)){
            winnersObj[4].innerHTML="Tombola:  N°"+(card+1);
            alert("hai fatto Tombola nella cartella "+(card+1));
         }
   }

}

function isAmbo(f,j,i){
    if(i<=3 && extracted.includes(cards[f][j][i]) && extracted.includes(cards[f][j][i+1])){
        ambo=true;
        return true;
    }
    return false;
}

function isTerno(f,j,i){
    if(i<=2 && extracted.includes(cards[f][j][i]) && extracted.includes(cards[f][j][i+1]) &&  extracted.includes(cards[f][j][i+2])){
        terno=true;
        return true;
    }
    return false;
}

function isQuaterna(f,j,i){
    if(i<=1 && extracted.includes(cards[f][j][i]) && extracted.includes(cards[f][j][i+1]) &&  extracted.includes(cards[f][j][i+2]) && extracted.includes(cards[f][j][i+3])){
        quaterna=true;
        return true;
    }
    return false;
}

function isCinquina(f,j,i){
    if(i==0 && extracted.includes(cards[f][j][i]) && extracted.includes(cards[f][j][i+1]) &&  extracted.includes(cards[f][j][i+2]) && extracted.includes(cards[f][j][i+3]) && extracted.includes(cards[f][j][i+4])){
        cinquina=true;
        return true;
    }
    return false;
}

function isTombola(f){
    if(isCinquina(f,0,0) && isCinquina(f,1,0) && isCinquina(f,2,0)){
        tombola=true;
        return true;
    }
    return false;
}

function reset(){
    if(confirm("vuoi resettare tutto?")){
        location.reload();
    }
}

function verifyCard(){
    card=prompt("che cartella vuoi verificare?");


}

