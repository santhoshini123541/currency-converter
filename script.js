//api not working
const BASE_URL ="https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies"

const dropdowns=document.querySelectorAll(".dropdown select");
const btn=document.querySelector("form button");
const fromCurr= document.querySelector(".from select");
const toCurr= document.querySelector(".to select");
const msg=document.querySelector(".msg");

for(let select of dropdowns) {
    for(currCode in countryList){
        let newOption=document.createElement("option");
        newOption.innerText=currCode;
        newOption.value=currCode;//this function is basically adding all countries currencies
        select.append(newOption);
        if(select.name === "from" && currCode === "USD") {
            newOption.selected="selected";
        }
        else if (select.name === "to" && currCode === "INR") {
            newOption.selected ="selected";
        }
        select.append(newOption);
    }
    select.addEventListener("change",(evt)=>{
    updateFlag(evt.target);// evt is event object and evt.target is place where change took place
    });
}


 const updateFlag = (element) => {//in element we have select
    let currCode=element.value;
    let countryCode= countryList[currCode];//IN 
    let newSrc=`https://flagsapi.com/${countryCode}/flat/64.png`;
   let img= element.parentElement.querySelector("img");//here both for from and to get changed like anything we change image will be correct coz in select both from and to comes
   img.src=newSrc;
 };
 
 
 const updateExchangeRate = async () =>{
    let amount = document.querySelector(".amount input");
    let amtVal=amount.value;
    if(amtVal===""|| amtVal < 1){
        amtVal=1;
        amount.value="1";
    }

    const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
    let response=await fetch(URL);
    let data= await response.json();
    let rate=data[toCurr.value.toLowerCase()];
    let finalAmount = amtVal*rate;
    msg.innerText=`${amtVal} ${fromCurr.value}=${finalAmount} ${toCurr.value}`;
 }
 btn.addEventListener("click",  (evt) => {
     evt.preventDefault();//generally when we submit form it reloads and some default changes happen ,u can prevent them
    updateExchangeRate();

 });
window.addEventListener("load",()=>{
 updateExchangeRate();
})