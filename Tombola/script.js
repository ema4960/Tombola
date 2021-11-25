function showCartelle(){
    cardsGridBox=document.getElementsByClassName("cards__grid"); 
    for(i=1;i<=24;i++){
       cardsGridBox[0].innerHTML+="<input type='checkbox'><p>"+i+"</p></input>";
    }
}