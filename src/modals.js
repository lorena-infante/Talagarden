//modal1
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

//modal2

function openModal2(){
    const modal2 = document.querySelector('div #modal2');
    const overlay = document.querySelector(".overlay");
    console.log(modal2);
    console.log(overlay);
    if(modal2 === null) return
    modal2.classList.add('active');
    overlay.classList.add('active');
}

function closeModal2(){
    const modal2 = document.querySelector('div #modal2');
    const overlay = document.querySelector(".overlay");
    if(modal2 === null) return
    modal2.classList.remove('active');
    overlay.classList.remove('active');
} 

