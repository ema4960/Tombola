extracted = [];

function showCartelle(){
    cardsGridBox=document.getElementsByClassName("cards__grid"); 
    numbersGridBox=document.getElementsByClassName("numbers__grid"); 
    for(i=1;i<=24;i++){
       cardsGridBox[0].innerHTML+="<input type='checkbox'><p>"+i+"</p></input>";
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
    
    nExtract=Math.floor(Math.random() * 90);
    if(extracted.includes(nExtract)){
        extraction();
    }else{
        extractedObj=document.getElementsByClassName("num");
        extractedObj[nExtract-1].style.backgroundColor="var(--primary500)";
        extractedObj[nExtract-1].style.color="var(--primary800)"
        extract4Obj.innerHTML=extract3Obj.innerHTML;
        extract3Obj.innerHTML=extract2Obj.innerHTML;
        extract2Obj.innerHTML=extractObj.innerHTML;
        extractObj.innerHTML=nExtract;
        extracteded.push(nExtract);
    }
}

