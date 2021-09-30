//export openModal
//export default function openModal(modal){};
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
    //getting data from ctalog.json
    //modal DOM
    /* let mTitle = document.querySelectorAll('.modal-title');
    //console.log(mTitle);
    let mFoto = document.querySelectorAll('.glider-slide img');
    let mDescript = document.querySelectorAll('.modal-descript');
    let mCuidados = document.querySelectorAll('.cares-descript');
    console.log(mFoto);  */
    //hay que recorrer cada child y asociarle un nuev src a la img dependiendo del número añadido en el JSON: 1:sol 2:sombra 3:semiSombra
    /* mIluminacion= document.querySelectorAll('.lighting')[0].children[0]; */
   /*  mIluminacion= document.querySelectorAll('.lighting');
    //console.log(mIluminacion);
    console.log(luz);
    luzLength=luz.length;
    console.log("el length de la luz: " + luzLength); */
    
    //creates same amount of img elements inside lighting box as luzLength
     /* for(let i = 0; i < luzLength; i++) { */
        /* const img = document.createElement("img");
        //img.src = './icons/sol.png'; */
        //console.log(img.src);
       /*  const p = document.createElement("p");
        p.textContent = luz[i];
        console.log(p);
        //img.src = './icons/sol.png';
        //console.log(img.src);
        let lightingClass = document.getElementsByClassName("lighting");
        //console.log(lightingClass);
        
        lightingClass[i].appendChild(p);
     } 
        //modal assignations
        mTitle[i].textContent =`${nombre_producto}`;
        mDescript[i].textContent= `${descripcion}`;
        mCuidados[i].textContent = `${cuidados}`;
        //console.log(foto);
        mFoto[i].src = foto;
        //console.log(luz);
    */

}

function closeModal(modal){
    
    if(modal === null) return
    modal.classList.remove('active');
    overlay.classList.remove('active');

}
