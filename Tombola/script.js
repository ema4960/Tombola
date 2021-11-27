function showCartelle(){
    cardsGridBox=document.getElementsByClassName("cards__grid"); 
    numbersGridBox=document.getElementsByClassName("numbers__grid"); 
    for(i=1;i<=24;i++){
       cardsGridBox[0].innerHTML+="<input type='checkbox'><p>"+i+"</p></input>";
    }
    for(i=1;i<=90;i++){
        numbersGridBox[0].innerHTML+="<p id='num"+i+"'>"+i+"</p>";
    }

}

