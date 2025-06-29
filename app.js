const date=new Date().toISOString().split("T")[0];
const BASE_URL=`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@${date}/v1/currencies`;
const dropdowns=document.querySelectorAll(".dropdown select");
const button=document.querySelector("form button");

for(let select of dropdowns)
{
    for(let code in countryList)
    {
        let newOption=document.createElement("option");
        newOption.innerText=code;
        newOption.value=code;
        if(select.name==="from" && code==="USD")
        {
            newOption.selected="selected";
        }
        else if(select.name==="to" && code==="PKR")
        {
            newOption.selected="selected";
        }
        select.append(newOption);
    }
    select.addEventListener("change",(event)=>{
        updateFlag(event.target);
    })
}

const updateFlag=(element)=>{
    let currencyCode=element.value;
    let countryCode=countryList[currencyCode];
    let newSrc=`https://flagsapi.com/${countryCode}/flat/64.png`;
    let img=element.parentElement.querySelector("img");
    img.src=newSrc;
};

const from=document.querySelector(".from select");
const to=document.querySelector(".to select");
button.addEventListener("click",async(event)=>{
   event.preventDefault();
   let amount=document.querySelector(".amount input");
   let amountValue=amount.value;
    if(amountValue<1 || amountValue==="")
    {
        amountValue=1;
        amount.value="1";
    }

    const URL=`${BASE_URL}/${from.value.toLowerCase()}.json`;
    console.log(URL);
    let response=await fetch(URL);
    let data=await response.json();

    let rate=data[from.value.toLowerCase()][to.value.toLowerCase()];

    let finalAmount=amount.value*rate;

    let msg=document.querySelector(".msg");
    msg.innerText=`${amountValue} ${from.value} = ${finalAmount} ${to.value}`;
});
