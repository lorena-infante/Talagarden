const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
//const getProdName = document.querySelectorAll('[data-name-prod]');

const overlay = document.getElementById('overlay');
let mLight;
let imgLight;
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
        openModal(modal,prodName);
    })
}) 

overlay.addEventListener('click',()=>{
    const modals = document.querySelectorAll('.modal.active');
    console.log(modals);
    modals.forEach((modal)=>{
        closeModal(modal,mLight);
    })
})

closeModalButtons.forEach(button =>{
    button.addEventListener('click',()=>{
        const modal = button.closest('.modal');
        console.log(modal);
        closeModal(modal,mLight);
    })
}) 


//functions
function openModal(modal,prodName){
    console.log(modal);
    //console.log(prodName);
    if(modal === null) return
    modal.classList.add('active');
    overlay.classList.add('active');
    //trae el objeto JSON desde el catalog.json
    getJSONObj(modal,prodName);
    
}

//trae los objetos JSON en base al nombre del producto
const getJSONObj = async(modal,prodName)=>{
    try{
        const resObject = await axios('./src/catalog.json'); 
        const catalogData= resObject.data.data;
        //console.log(catalogData)
          //recorriendo la data y chequeando que solo traiga los árboles con el nombre de producto asignado (que trae del HTML)
        const object = catalogData.filter(producto => producto.nombre_producto === `${prodName}`);
        console.log(object);
        //object es un array con un único objeto dentro, por eso siempre va en posición 0
        let id_categoria = object[0].id_categoria;
        let categoria = object[0].categoria;
        let id_producto = object[0].id_producto;
        let precio = object[0].precio;
        let medidas = object[0].medidas;
        let nombre_producto = object[0].nombre_producto;
        let foto = object[0].foto;
        let descripcion = object[0].descripcion;
        let cuidados = object[0].cuidados;
        let luz = object[0].luz;
        //console.log(luz);
        //ubica en el modal cada uno de los datos traidos por el JSON
        setModalContent(modal,nombre_producto,foto,descripcion,cuidados,luz);


        }catch(error){
        console.log(`el error es: ${error}`);
    }

}

//ubica en el modal cada uno de los datos traidos por el JSON
function setModalContent(modal,nombre_producto,foto,descripcion,cuidados,luz){
    //Llamando elementos del DOM
    //#modal > div:nth-child(2) > div:nth-child(1)
    const mTitle = modal.children[1].childNodes[1];
    //#modal > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > img:nth-child(1)
    const mSliderCont = modal.children[1].children[1].children[0].children[1].children[0].children[0]
    /* solo funciona para el almendro modal.children[1].children[1].children[0].children[1].children[0].children[0].children[0]; */
    /*#modal > div:nth-child(2) > div:nth-child(4) > p:nth-child(2) */
    const mDescrip = modal.children[1].children[3].children[1];
    /*#modal > div:nth-child(2) > div:nth-child(4) > p:nth-child(4) */
    const mCares = modal.children[1].children[3].children[3];
    /*#modal > div:nth-child(2) > div:nth-child(4) > div:nth-child(6)*/
    mLight = modal.children[1].children[3].children[5];

    console.log(mLight);


    //let newImg= new Image();
    //newImg.src = `${foto}`;
    console.log(mSliderCont)
    //console.log(mTitle);
    //Assigning dynamic titles & content to modal
    mTitle.textContent = `${nombre_producto}`; 
    console.log(foto[0]);
    mSliderCont.src = `${foto}`; 
    mDescrip.textContent = `${descripcion}`;
    mCares.textContent = `${cuidados}`;
    let luzLength = luz.length;
    console.log(luz);
    console.log("el length de la luz: " + luzLength);
                
    //creates same amount of img elements inside lighting box as luzLength
    for(let i = 0; i < luzLength; i++) {
         imgLight = document.createElement("img");
         console.log(imgLight);
         console.log(mLight);    
        
        //console.log(img.src);
        //let lightingClass = document.getElementsByClassName("lighting");
        //console.log(lightingClass);
                  
        mLight.appendChild(imgLight);
        //console.log(mLight);  
 
    } 
     //classifing luz into categories
     //sol=1 sombra=2 semisombra=3
     switch(luz.includes(3)) {
        //sol=1 sombra=2 semisombra=3
        case luz.includes(1&&3):
            //(aquí van las img del lighting)#modal > div:nth-child(2) > div:nth-child(4) > div:nth-child(6) > img:nth-child(1)
            mLight.children[0].src = './icons/sol.png';
            mLight.children[1].src = './icons/semi-sombra.png';
            //console.log(imgLight.src)
        break; 
        case luz.includes(1):
            imgLight.src = './icons/sol.png';
            console.log(imgLight.src)
        break;
        case luz.includes(2):
            imgLight.src = './icons/sombra.png';
            console.log(imgLight.src)
        break;
        case luz.includes(3):
            imgLight.src = './icons/semi-sombra.png';
            console.log(imgLight.src)
        break;
        //sujeto a cambios
        default:
            console.log(imgLight.src)
        //  imgLight.src = './icons/sol.png'; 
    }
    
    
}
function closeModal(modal,mLight){
    //console.log(mLight);
    if(modal === null) return
    modal.classList.remove('active');
    overlay.classList.remove('active');
    mLight.innerHTML="";

}
