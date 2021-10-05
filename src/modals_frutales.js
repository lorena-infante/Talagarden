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
    frutalesPg1();
}


//get frutales1 
const frutalesPg1 = async()=>{

    try{
        const resFrut = await axios('./src/catalog.json'); 
        const catalogData= resFrut.data.data;
        console.log(catalogData)
        let     nombre_producto,
                precio,
                descripcion,
                cuidados,
                medidas,
                foto; 

        //recorriendo la data y chequeando que solo traiga los árboles de la categoría "FRU"
        //solo trae los frutales
        const frutales = catalogData.filter(producto => producto.id_categoria === "FRU");
        console.log(frutales);
        //el length de los futales
        const frutalesLength=frutales.length; 
        console.log(frutalesLength);
        //contador del numero de productos en el DOM
        const counter = document.querySelectorAll('.counter > p:nth-child(1)');
        console.log(counter[0]);
        counter[0].textContent=`${frutalesLength} Productos(s)`;
        //get number of box-frutales per page (to iterate until that amount of divs)
        let boxFrutales=document.querySelectorAll('.box-frutales');
        let boxFrutalesLength= boxFrutales.length;
        console.log(boxFrutalesLength);
        
        //Cantidad de frutales mostrados por página (si es la última página poner como end el frutalesLength y como inicio la posición del primer objeto del arreglo donde se quiere empezar. Si es la 1era página, empezae en 0, boxFrutalesLength)
        let frutalesPerPage = frutales.slice(0,boxFrutalesLength);
        console.log(frutalesPerPage);
        
        
       
        
        //counter of pName (to iterate through the forEach. Includes the new name on the p:nth-child(1) )
        let i=0;
        
        frutalesPerPage.forEach(producto => {
                //si el numero de cajas en los divs es igual al numero de iteraciones que ha realizado (i), entonces debe detenerse el recorrido que ubica en el pName los nombres de los árboles
                if (i === boxFrutalesLength) return false ;

                //naming DOM variables fot the "P" elements on frutales-box
                let pPic = document.querySelectorAll('.img-frutal'),
                pName = document.querySelectorAll('.text-container-frutal>p:nth-child(1)'),
                pPrice = document.querySelectorAll('.text-container-frutal>p:nth-child(2)'),
                pHeight = document.querySelectorAll('.text-container-frutal>p:nth-child(3)');
                

                console.log(producto);
                //console.log(pPic); 
                //console.log(pPrice); 
                //console.log(pHeight);
                //getting data from ctalog.json
                //modal DOM
                let mTitle = document.querySelectorAll('.modal-title');
                //console.log(mTitle);
                let mFoto = document.querySelectorAll('.glider-slide img');
                let mDescript = document.querySelectorAll('.modal-descript');
                let mCuidados = document.querySelectorAll('.cares-descript');
                //console.log(mTitle,mFoto,mDescript,mCuidados);  
                //mIluminacion= document.querySelectorAll('.lighting');
                //console.log(mIluminacion[i]);
                
                //console.log(luz);
                //luzLength = luz.length;
                //console.log("el length de la luz: " + luzLength);

                nombre_producto = producto.nombre_producto;
                precio = producto.precio;
                medidas = producto.medidas;
                descripcion = producto.descripcion;
                cuidados= producto.cuidados;
                //está en [0] porque por defecto muestra ÚNICAMENTE la primera foto del array. El resto se muestra en el slider.
                foto = producto.foto[0];
                console.log(foto);
                /* let newImg= new Image();
                newImg.src= foto;
                console.log(newImg);
                console.log(foto); */
                //places the right name on the right place
                pPic[i].src=foto;
                pName[i].textContent= `${nombre_producto}`;
                pPrice[i].textContent= `$${precio}`;
                pHeight[i].textContent= `Altura: ${medidas}`;

                 //modal assignations
                mTitle[i].textContent =`${nombre_producto}`;
                mDescript[i].textContent= `${descripcion}`;
                mCuidados[i].textContent = `${cuidados}`;
                //console.log(foto);
                mFoto[i].src = foto;
                //console.log(luz);
                
                //iterates to keep on going through the page
                i++;
                //export{producto}
                console.log(nombre_producto,precio,medidas,foto); 
                

            });
        


    }catch(error){
        console.log(`el error es: ${error}`);
    }
    
}
//console.log(producto);
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


function closeModal(modal){
    
    if(modal === null) return
    modal.classList.remove('active');
    overlay.classList.remove('active');

}
