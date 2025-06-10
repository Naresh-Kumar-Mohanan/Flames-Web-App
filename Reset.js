// This will reset the input Felds "Clear The Inputs Only" 

document.addEventListener("DOMContentLoaded", function () 
{
    document.querySelector(".Buttons button:nth-child(1)").addEventListener("click", function () 
    {
        document.querySelector("input[placeholder='Boy Name']").value = "";
        document.querySelector("input[placeholder='Girl Name']").value = "";
    });
});