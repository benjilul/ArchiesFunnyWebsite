document.addEventListener("DOMContentLoaded", function () {
    let currentPageIndex = 0;
    const pages = document.querySelectorAll('.survey-page');


    function saveResponsesForPage(pageIndex) {
        const checkboxes = pages[pageIndex].querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach(function (checkbox) {
            sessionStorage.setItem(checkbox.id, checkbox.checked);
        });
    }

    function showPage(pageIndex) {
        pages.forEach((page, index) => {
            if (index === pageIndex) {
                page.classList.add('visible');
            } else {
                page.classList.remove('visible');
            }
        });
    }

    window.nextPage = function () {
        if (currentPageIndex < pages.length - 1) {
            saveResponsesForPage(currentPageIndex)
            currentPageIndex++;
            showPage(currentPageIndex);
        }
    }

    window.prevPage = function () {
        if (currentPageIndex > 0) {
            currentPageIndex--;
            showPage(currentPageIndex);
        }
    }

    window.calculateTally = function() {
        let tallyCount = 30;
        nextPage()
        for (let i = 0; i < pages.length; i++) {
            const checkboxes = pages[i].querySelectorAll('input[type="checkbox"]');
            checkboxes.forEach(function (checkbox) {
                const isChecked = sessionStorage.getItem(checkbox.id) === 'true';
                console.log(`Checkbox ID: ${checkbox.id}, Checked: ${isChecked}`);
                if (isChecked) {
                    tallyCount--;
                }
            });
        }
        if (tallyCount <= 5){
            document.getElementById('are-you-an-edater').textContent = "OMG!!!! LOL You're a CRINGE ass EDATERRRR!!! HAHAHA WHAT A LOSER!!! YOU USE DISCORD TO GO ON DATES??? WHAT? You can't find someone IRL???? Literally just go outside...";
        } else if (tallyCount <= 10){
            document.getElementById('are-you-an-edater').textContent = "Hahaha. Okay you're DEFINITELY an Edater but it's alright. You're a bit cringeworthy but we can stand to be around you and your e-kitten.";
        } else if (tallyCount <= 17){
            document.getElementById('are-you-an-edater').textContent = "You have definitely at least used some dating apps in your life but you aren't a typical discord Edater, well done! Keep putting yourself out there!!";
        } else if (tallyCount <= 25){
            document.getElementById('are-you-an-edater').textContent = "Wow!! You're a normal person who plays video games and has a couple of online friends. Congrats! You want a medal?";
        } else if (tallyCount <= 30){
            document.getElementById('are-you-an-edater').textContent = "I was going to roast you... but damn... That's just sad.. Do you not have any friends?";
        }
        document.getElementById('tally').textContent = tallyCount;
        console.log("Tally Count:", tallyCount);
    }
});