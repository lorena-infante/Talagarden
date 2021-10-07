const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
//const getProdName = document.querySelectorAll('[data-name-prod]');

const overlay = document.getElementById('overlay');

console.log(openModalButtons);

//Event Listeners

 openModalButtons.forEach(button =>{
    button.addEventListener('click',()=>{
        const modal = document.querySelector(button.dataset.modalTarget);
        //console.log(button);
        //gets the name of the product bringing it from the HTML content
        const prodName = button.childNodes[3].childNodes[1].textContent;
        console.log(modal);
        console.log(prodName);
        openModal(modal,prodName);
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
function openModal(modal,prodName){
    console.log(modal);
    //console.log(prodName);
    if(modal === null) return
    modal.classList.add('active');
    overlay.classList.add('active');
    //Llamando elementos del DOM
    //modal.modal-body.modal-title (esa es la ruta que llamo aqui)
    const mTitle = modal.children[1].childNodes[1];
    //console.log(mTitle);
    //Assigning dynamic title to modal
    mTitle.textContent = `${prodName}`; 
    
}
 
function closeModal(modal){
    
    if(modal === null) return
    modal.classList.remove('active');
    overlay.classList.remove('active');

}
