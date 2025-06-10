    // This For Flames Button
    function displayFlamesResult(result) 
    {
        const resultScreen = document.getElementById("resultScreen");
        const flamesResultText = document.getElementById("flamesResult");

        flamesResultText.textContent = `Result: ${result}`;
        resultScreen.style.display = "block";
    }

    function closeResult() 
    {
        document.getElementById("resultScreen").style.display = "none";
    }

    document.querySelector(".Buttons button:nth-child(2)").addEventListener("click", function () 
    {
        const boyName = document.querySelector("input[placeholder='Boy Name']").value.trim().toLowerCase();
        const girlName = document.querySelector("input[placeholder='Girl Name']").value.trim().toLowerCase();

        if (boyName === "" || girlName === "") 
            {
            alert("Please enter both names!");
            return;
            }

        let combinedName = boyName + girlName;
        let uniqueChars = new Set(combinedName);
        const flamesResults = ["Friendship", "Love", "Affection", "Marriage", "Enemy", "Sibling"];
        let resultIndex = uniqueChars.size % flamesResults.length;

        displayFlamesResult(flamesResults[resultIndex]);
    });