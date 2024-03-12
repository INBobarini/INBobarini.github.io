function showJob(jobId){
    let jobContent = document.querySelector(`#${jobId}`)
    if(!jobContent.style.display){
        jobContent.style.display = 'block';
    }
    else{
        jobContent.style.display = jobContent.style.display === 'none' ? 'block' : 'none';
    }
    let buttonToTurnActive = document.querySelector(`.${jobId}`);
    if (buttonToTurnActive) {
        buttonToTurnActive.classList.toggle('active'); // Add or remove the "active" class
    }
}

function toggleContent() {
    let ES = document.querySelectorAll('.ES');
    let EN = document.querySelectorAll('.EN');

    ES = [...ES]
    EN = [...EN]

    for (let i = 0; i < ES.length; i++) {
        let esDisplayStyle = window.getComputedStyle(ES[i]).getPropertyValue('display');

        if (esDisplayStyle === 'block') {
            ES[i].style.display = 'none';
            EN[i].style.display = 'block';
        }
        else {
            ES[i].style.display = 'block';
            EN[i].style.display = 'none';
        }
    }
}


