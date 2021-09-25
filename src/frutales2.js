const getFrutalesPg2 = async(id_categoria)=>{

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
        const frutales = catalogData.filter(producto => producto.id_categoria === "FRU");
        console.log(frutales);
        //el length de los futales
        const frutalesLength=frutales.length; 
        console.log(frutalesLength);
        //get number of box-frutales per page (to iterate until that amount of divs)
        let boxFrutales=document.querySelectorAll('.box-frutales');
        let boxFrutalesLength= boxFrutales.length;
        console.log(boxFrutalesLength);
        
        //Cantidad de frutales mostrados por página (si es la última página poner como end el frutalesLength y como inicio la posición del primer objeto del arreglo donde se quiere empezar. Si es la 1era página, empezae en 0, boxFrutalesLength)
        let frutalesPerPage = frutales.slice(10,frutalesLength);
        console.log(frutalesPerPage);
        
        
       
        
        //counter of pName (to iterate through the forEach. Includes the new name on the p:nth-child(1) )
        let i=0;
        
        frutalesPerPage.forEach(producto => {
                //si el numero de cajas en los divs es igual al numero de iteraciones que ha realizado (i), entonces debe detenerse el recorrido que ubica en el pName los nombres de los árboles
                if (i === boxFrutalesLength) return false ;

                //naming DOM variables fot the "P" elements on frutales-box
                let pName = document.querySelectorAll('.text-container-frutal>p:nth-child(1)'),
                pPrice = document.querySelectorAll('.text-container-frutal>p:nth-child(2)'),
                pHeight = document.querySelectorAll('.text-container-frutal>p:nth-child(3)');
 
                console.log(producto); 
                //console.log(pPrice); 
                //console.log(pHeight);

                nombre_producto = producto.nombre_producto;
                precio = producto.precio;
                medidas = producto.medidas;
                foto = producto.foto;
                
                //places the right name on the right place
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

getFrutalesPg2("FRU"); 