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
document.addEventListener("DOMContentLoaded", function () {
    const options = {
        timeZone: "Asia/Dhaka", // Bangladesh time zone
        year: 'numeric',
        month: 'short',
        day: '2-digit',
        weekday: 'short',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZoneName: 'long'
    };

    // Create date for Bangladesh time zone
    const bdTime = new Date().toLocaleString('en-US', options);
    document.getElementById("time").textContent = bdTime;
    console.log(bdTime);
});
