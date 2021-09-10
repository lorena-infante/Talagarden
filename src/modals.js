const modal = document.querySelector('div .modal');
const overlay = document.getElementById("overlay");

function openModal(){
    const modal = document.querySelector('div .modal');
    const overlay = document.getElementById("overlay");
    console.log(modal);
    console.log(overlay);
    if(modal === null) return
    modal.classList.add('active');
    overlay.classList.add('active');
}

function closeModal(){
    const modal = document.querySelector('div .modal');
    const overlay = document.getElementById("overlay");
    if(modal === null) return
    modal.classList.remove('active');
    overlay.classList.remove('active');
}