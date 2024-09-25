function getTextFieldById(id){
    const amount = document.getElementById(id).innerText;
    const currentAmount = parseFloat(amount);
    
    return currentAmount;

}
function getInputFieldById(id){
    const input = document.getElementById(id).value;
    const inputAmount = parseFloat(input);
    
    return inputAmount;

}