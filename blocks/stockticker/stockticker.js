const nodeList = document.querySelectorAll("p");
var tickerSymbol = nodeList[0].innerHTML;

if (tickerSymbol === ""){
   //don't do anything
}else {
  alert(tickerSymbol);
}