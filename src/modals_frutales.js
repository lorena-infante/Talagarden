/*  //modal1
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
 */

const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');

console.log(openModalButtons);


//Event Listeners

 openModalButtons.forEach(button =>{
    button.addEventListener('click',()=>{
        const modal = document.querySelector(button.dataset.modalTarget);
        console.log(modal);
        openModal(modal);
    })
}) 

overlay.addEventListener('click',()=>{
    const modals = document.querySelectorAll('.modal.active');
    console.log(modals);
    modals.forEach((modal)=>{
        closeModal(modal);

    })
})

closeModalButtons.forEach(button =>{
    button.addEventListener('click',()=>{
        const modal = button.closest('.modal');
        console.log(modal);
       closeModal(modal);
    })
}) 


//functions

function openModal(modal){
    console.log(modal);
    if(modal === null) return
    modal.classList.add('active');
    overlay.classList.add('active');

}

function closeModal(modal){
    
    if(modal === null) return
    modal.classList.remove('active');
    overlay.classList.remove('active');

}