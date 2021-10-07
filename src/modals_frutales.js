const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
//const getProdName = document.querySelectorAll('[data-name-prod]');

const overlay = document.getElementById('overlay');

console.log(openModalButtons);

//Event Listeners

 openModalButtons.forEach(button =>{
    button.addEventListener('click',()=>{
        const modal = document.querySelector(button.dataset.modalTarget);
        
        console.log(button);
        //gets the name of the product bringing it from the HTML content
        const prodName = button.childNodes[3].childNodes[1].textContent;
        console.log(modal);
        console.log(prodName);
        openModal(modal);
    })
}) 

/* getProdName.forEach(name =>{
    name
}) */
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
