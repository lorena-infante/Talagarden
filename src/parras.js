// getting id_categoria para parras
const getParras = async()=>{

    try{
        const resFrut = await axios('./src/catalog.json'); 
        const catalogData= resFrut.data.data;
        console.log(catalogData)
        let id_categoria,
                categoria,
                id_producto,
                nombre_producto,
                precio,
                medidas,
                foto; 

        //recorriendo la data y chequeando que solo traiga los árboles de la categoría "FRU"
        //solo trae los frutales
        const frutales = catalogData.filter(producto => producto.id_categoria === "PAR");
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
                

                nombre_producto = producto.nombre_producto;
                precio = producto.precio;
                medidas = producto.medidas;
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
                
                //iterates to keep on going through the page
                i++;
                //export{producto}
                console.log(nombre_producto,precio,medidas,foto); 
                

            });
        


    }catch(error){
        console.log(`el error es: ${error}`);
    }

}

const orderByDefault = async()=>{

    try{
        const resFrut = await axios('./src/catalog.json'); 
        const catalogData= resFrut.data.data;
        console.log(catalogData)
        let id_categoria,
                categoria,
                id_producto,
                nombre_producto,
                precio,
                medidas,
                foto; 

        //recorriendo la data y chequeando que solo traiga los árboles de la categoría "FRU"
        //solo trae los frutales
        const frutales = catalogData.filter(producto => producto.id_categoria === "PAR");
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

                nombre_producto = producto.nombre_producto;
                precio = producto.precio;
                medidas = producto.medidas;
                foto = producto.foto[0];
                let newImg= new Image();
                newImg.src= foto;
                console.log(newImg);
                console.log(foto);
                //places the right name on the right place
                pPic[i].src=foto;
                pName[i].textContent= `${nombre_producto}`;
                pPrice[i].textContent= `$${precio}`;
                pHeight[i].textContent= `Altura: ${medidas}`;
                //iterates to keep on going through the page
                i++;
                
                console.log(nombre_producto,precio,medidas,foto); 

            });
        


    }catch(error){
        console.log(`el error es: ${error}`);
    }

}
// para ordenar los productos (que los lea en chrome)
document.addEventListener('click', e =>{
    const isDropdownButton = e.target.matches("[data-dropdown-button]");
    //if(!isDropdownButton && e.target.closest('[data-dropdown]') != null) return
    let currentDropdown;
    if (isDropdownButton){
        currentDropdown = e.target.closest('[data-dropdown]');
        currentDropdown.classList.toggle('active');
    }
    //closes all other dropdown that could be opened
    document.querySelectorAll('[data-dropdown].active').forEach(dropdown =>{
        if (dropdown === currentDropdown) return
        dropdown.classList.remove('active');
    })
    //probando
    const isDivDefault = e.target.matches('[data-order-default]');
    const divDefault = document.querySelectorAll('[data-order-default]');
    const isDivLTG = e.target.matches('[data-order-LTG]');
    const divLTG = document.querySelectorAll('[data-order-LTG]');
    const isDivGTL = e.target.matches('[data-order-GTL]');
    const divGTL = document.querySelectorAll('[data-order-GTL]');

    //console.log(isDivGTL);
    if(isDivDefault){
       orderByDefault();
    }
    if(isDivLTG){
        orderLessToGreat();
    }
    if(isDivGTL){
        orderGreatToLess()
    }

})



//

const orderLessToGreat = async()=>{
    try{
        const resFrut = await axios('./src/catalog.json'); 
        const catalogData= resFrut.data.data;
        console.log(catalogData)
        let id_categoria,
                categoria,
                id_producto,
                nombre_producto,
                precio,
                medidas,
                foto; 

        //recorriendo la data y chequeando que solo traiga los árboles de la categoría "FRU"
        //solo trae los frutales
        const frutales = catalogData.filter(producto => producto.id_categoria === "PAR");
        console.log(frutales);
        //el length de los futales
        const frutalesLength=frutales.length; 
        console.log(frutalesLength);
                //get number of box-frutales per page (to iterate until that amount of divs)
        let boxFrutales=document.querySelectorAll('.box-frutales');
        let boxFrutalesLength= boxFrutales.length;
        console.log(boxFrutalesLength);
        
        //Cantidad de frutales mostrados por página (si es la última página poner como end el frutalesLength y como inicio la posición del primer objeto del arreglo donde se quiere empezar. Si es la 1era página, empezae en 0, boxFrutalesLength)
        let frutalesPerPage = frutales.slice(0,boxFrutalesLength);
        console.log(frutalesPerPage);
        //ordena los productos por precio de menor a mayor, para hacerlo de mayor a menor se invierte el resultado, quedando: b.precio-a.precio
        let fruPerPageSorted= frutalesPerPage.sort((a,b)=> a.precio - b.precio);
        console.log(fruPerPageSorted);
        
        //counter of pName (to iterate through the forEach. Includes the new name on the p:nth-child(1) )
        let i=0;
        
        fruPerPageSorted.forEach(producto => {
                //si el numero de cajas en los divs es igual al numero de iteraciones que ha realizado (i), entonces debe detenerse el recorrido que ubica en el pName los nombres de los árboles
                if (i === boxFrutalesLength) return false ;

                //naming DOM variables fot the "P" elements on frutales-box
                let pPic = document.querySelectorAll('.img-frutal'), 
                pName = document.querySelectorAll('.text-container-frutal>p:nth-child(1)'),
                pPrice = document.querySelectorAll('.text-container-frutal>p:nth-child(2)'),
                pHeight = document.querySelectorAll('.text-container-frutal>p:nth-child(3)');
 
                console.log(producto); 
                //console.log(pPrice); 
                //console.log(pHeight);

                nombre_producto = producto.nombre_producto;
                precio = producto.precio;
                medidas = producto.medidas;
                foto = producto.foto[0];
                let newImg= new Image();
                newImg.src= foto;
                console.log(newImg);
                console.log(foto);
                //places the right name on the right place
                pPic[i].src=foto;
                pName[i].textContent= `${nombre_producto}`;
                pPrice[i].textContent= `$${precio}`;
                pHeight[i].textContent= `Altura: ${medidas}`;
                //iterates to keep on going through the page
                i++;
                
                console.log(nombre_producto,precio,medidas,foto); 

            });
        


    }catch(error){
        console.log(`el error es: ${error}`);
    }

}

//ordena los prod. de mayor a menor precio
const orderGreatToLess = async()=>{
    try{
        const resFrut = await axios('./src/catalog.json'); 
        const catalogData= resFrut.data.data;
        console.log(catalogData)
        let id_categoria,
                categoria,
                id_producto,
                nombre_producto,
                precio,
                medidas,
                foto; 

        //recorriendo la data y chequeando que solo traiga los árboles de la categoría "FRU"
        //solo trae los frutales
        const frutales = catalogData.filter(producto => producto.id_categoria === "PAR");
        console.log(frutales);
        //el length de los futales
        const frutalesLength=frutales.length; 
        console.log(frutalesLength);
                //get number of box-frutales per page (to iterate until that amount of divs)
        let boxFrutales=document.querySelectorAll('.box-frutales');
        let boxFrutalesLength= boxFrutales.length;
        console.log(boxFrutalesLength);
        
        //Cantidad de frutales mostrados por página (si es la última página poner como end el frutalesLength y como inicio la posición del primer objeto del arreglo donde se quiere empezar. Si es la 1era página, empezae en 0, boxFrutalesLength)
        let frutalesPerPage = frutales.slice(0,boxFrutalesLength);
        console.log(frutalesPerPage);
        //ordena los productos por precio de menor a mayor, para hacerlo de mayor a menor se invierte el resultado, quedando: b.precio-a.precio
        let fruPerPageSorted= frutalesPerPage.sort((a,b)=> b.precio - a.precio);
        console.log(fruPerPageSorted);
        
        //counter of pName (to iterate through the forEach. Includes the new name on the p:nth-child(1) )
        let i=0;
        
        fruPerPageSorted.forEach(producto => {
                //si el numero de cajas en los divs es igual al numero de iteraciones que ha realizado (i), entonces debe detenerse el recorrido que ubica en el pName los nombres de los árboles
                if (i === boxFrutalesLength) return false ;

                //naming DOM variables fot the "P" elements on frutales-box
                let pPic = document.querySelectorAll('.img-frutal'), 
                pName = document.querySelectorAll('.text-container-frutal>p:nth-child(1)'),
                pPrice = document.querySelectorAll('.text-container-frutal>p:nth-child(2)'),
                pHeight = document.querySelectorAll('.text-container-frutal>p:nth-child(3)');
 
                console.log(producto); 
                //console.log(pPrice); 
                //console.log(pHeight);

                nombre_producto = producto.nombre_producto;
                precio = producto.precio;
                medidas = producto.medidas;
                foto = producto.foto[0];
                let newImg= new Image();
                newImg.src= foto;
                console.log(newImg);
                console.log(foto);
                //places the right name on the right place
                pPic[i].src=foto;
                pName[i].textContent= `${nombre_producto}`;
                pPrice[i].textContent= `$${precio}`;
                pHeight[i].textContent= `Altura: ${medidas}`;
                //iterates to keep on going through the page
                i++;
                
                console.log(nombre_producto,precio,medidas,foto); 

            });
        


    }catch(error){
        console.log(`el error es: ${error}`);
    }

}


getParras(); 

