
const card = document.getElementById("card");
document.getElementById("btn-donate-now-newkhali").addEventListener("click",function(event){
   event.preventDefault();

   const myCurrentAmount = getTextFieldById("current-amount");
   const currentAmount = getTextFieldById("newkhali-current-amount");
   const donatedAmount = getInputFieldById("newkhali-donation");
   
    if(myCurrentAmount >= donatedAmount && donatedAmount >0){
    const newDonatedAmount = currentAmount + donatedAmount;
    const myAmount = myCurrentAmount - donatedAmount;

    card.classList.remove('hidden');

    document.getElementById("current-amount").innerText=myAmount;
    document.getElementById("newkhali-current-amount").innerText=newDonatedAmount;

    card.classList.remove('hidden');

    const trans =document.createElement("div");
    trans.classList.add("border-2");
    trans.classList.add("p-5");
    trans.innerHTML=`
                   <p>  ${donatedAmount} Taka is Donated for Flood at Noakhali, Bangladesh. <p>
                   <p>Date: <span id="time"></span></p>`

    document.getElementById("history-container").appendChild(trans);
 
    console.log(currentAmount,donatedAmount, newDonatedAmount, myAmount);
  }
  
  else{
    alert("Invalid Amount");
  }



})
document.getElementById("btn-donate-now-feni").addEventListener("click",function(event){
    event.preventDefault();

    const myCurrentAmount = getTextFieldById("current-amount");
   const currentAmount2 = getTextFieldById("feni-current-amount");
   const donatedAmount2 = getInputFieldById("feni-donation");
   
    if(myCurrentAmount >= donatedAmount2 && donatedAmount2 > 0){
    const newDonatedAmount2 = currentAmount2 + donatedAmount2;
    const myAmount2 = myCurrentAmount - donatedAmount2;

    card.classList.remove('hidden');

    document.getElementById("current-amount").innerText= myAmount2;
    document.getElementById("feni-current-amount").innerText=newDonatedAmount2;

    const trans =document.createElement("div");
    trans.classList.add("border-2");
    trans.classList.add("p-5");
    trans.innerHTML=`
                   <p>  ${donatedAmount2} Taka is Donated for Flood at Feni, Bangladesh. <p>
                   <p>Date: <span id="time"> </span></p>`

    document.getElementById("history-container").appendChild(trans);
 
    console.log(currentAmount2,donatedAmount2, newDonatedAmount2, myAmount2);
  }
 
  else{
    alert("Invalid Amount");
  }

})
document.getElementById("btn-donate-now-quota").addEventListener("click",function(event){
    event.preventDefault();

    const myCurrentAmount = getTextFieldById("current-amount");
    const currentAmount3 = getTextFieldById("quota-current-amount");
    const donatedAmount3 = getInputFieldById("quota-donation");
    
     if(myCurrentAmount >= donatedAmount3 && donatedAmount3 > 0 ){
     const newDonatedAmount3 = currentAmount3 + donatedAmount3;
     const myAmount3 = myCurrentAmount - donatedAmount3;

     card.classList.remove('hidden');

     document.getElementById("current-amount").innerText= myAmount3;
     document.getElementById("quota-current-amount").innerText=newDonatedAmount3;

     const trans =document.createElement("div");
     trans.classList.add("border-2");
     trans.classList.add("p-5");
     trans.innerHTML=`
                    <p>  ${donatedAmount3}Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh. <p>
                    <p>Date: <span id="time"></span></p>`
 
     document.getElementById("history-container").appendChild(trans);
  
     console.log(currentAmount3,donatedAmount3, newDonatedAmount3, myAmount3);
   }
 
   else{
     alert("Invalid Amount");
   }


})