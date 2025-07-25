
let settings ={
    "async":true,
    "scrossDomain":true,
    "url":"https://api.coingecko.com/api/v3/simple/price?vs_currencies=usd&ids=bitcoin%2Cethereum%2Cdodgecoin",
    "method":"GET",
    "headers":{}
}
$.ajax(settings).done(function(reponse){
    console.log(response)
})