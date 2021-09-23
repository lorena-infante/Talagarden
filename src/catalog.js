// getting id_categoria para frutales
 const getFrutales = async(id_categoria)=>{

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
        //naming DOM variables fot the "P" elements on frutales-box
        /* document.querySelectorAll('.text-container-frutal>p') */
        
        let pName = document.querySelectorAll('.text-container-frutal>p:nth-child(1)'),//pilas aqwui era antes getElementById("pName") 
        pPrice = document.getElementById("pPrice"),
        pHeight = document.getElementById("pHeight");
        console.log(pName);  
        /* console.log(pPrice);  
        console.log(pHeight);  */   

        //recorriendo la data y chequeando que solo traiga los árboles de la categoría "FRU"
        //counter of pName
        let i=0;
            catalogData.forEach((producto,index) => {
                let pName = document.querySelectorAll('.text-container-frutal>p:nth-child(1)'),//pilas aqwui era antes getElementById("pName") 
                pPrice = document.getElementById("pPrice"),
                pHeight = document.getElementById("pHeight");
                 
                if(producto.id_categoria === "FRU"){  
                    console.log(producto); 
                    //el length de los futales
                    const frutales = catalogData.filter(producto => producto.id_categoria === "FRU");
                    const frutalesLength=frutales.length; 
                    console.log(frutalesLength);
                    /* let prodIndexIf= index;      
                    console.log(prodIndexIf); */
                    nombre_producto = producto.nombre_producto;
                    precio = producto.precio;
                    medidas = producto.medidas;
                    foto = producto.foto;
                    
                    pName[i].textContent= nombre_producto;
                    i++;
                    //for(i; i<frutalesLength; i++){
                        //pName.item(i).textContent=nombre_producto;

                        //pName.item(i).textContent= nombre_producto;

                    //} 
                    /* pName.textContent = nombre_producto;
                    console.log(pName.textContent); */
                    
                    /* pName.item(0).textContent= nombre_producto
                    console.log(pName.textContent); */
                    //console.log(nombre_producto);
                    //console.log(pName.item(index)); 
                    console.log(nombre_producto,precio,medidas,foto); 
                    //pName.textContent = nombre_producto;
                    
                }
                
                
                //pName.textContent= `${nombre_producto}`;
                /*pPrice.textContent= `$${precio}`;
                pHeight.textContent= `Altura: ${medidas}`; */
            });
            /* pName.forEach((name,index)=>{
                name.textContent = nombre_producto;
                let prodIndex= index;  
                console.log(prodIndex);
                pName.item(prodIndex).textContent= nombre_producto;
                 
            });  */
        
        


    }catch(error){
        console.log(`el error es: ${error}`);
    }

}

getFrutales("FRU"); 
