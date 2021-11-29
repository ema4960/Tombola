extracted = [];
SelectedCardS= 0;
cardcounter=0;

function startLoad(){
    cardsGridBox=document.getElementsByClassName("cards__grid"); 
    numbersGridBox=document.getElementsByClassName("numbers__grid"); 
    for(i=1;i<=24;i++){
       cardsGridBox[0].innerHTML+="<input type='checkbox' id='cartella"+i+"' onclick='cardCounter("+i+")'><p>"+i+"</p></input>";
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
    }
}

function cardCounter(i){
     checkbox = document.getElementById("cartella"+i);
    if(checkbox.checked){
        cardcounter++;
    }else{
        cardcounter--;
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



