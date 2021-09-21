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
        
            catalogData.forEach((producto,index) => {
                if(producto.id_categoria === "FRU"){  
                    console.log(producto); 
                         
                    pName.forEach((name)=>{
                        name.textContent = producto.nombre_producto;
                        let prodIndex= index;
                        console.log(prodIndex);
                        pName.item(index);
                         
                    })  
                    nombre_producto = producto.nombre_producto;
                    precio = producto.precio;
                    medidas = producto.medidas;
                    foto = producto.foto;
    
                    console.log(nombre_producto,precio,medidas,foto);
                    
                    
    
                    //prod_array.push(nombre_producto);
                  /*   let prod_array= [nombre_producto];
                    console.log(prod_array);
                    pName.innerHTML= `${prod_array}`;
                    prod_array.forEach(elem => {
    
                        /* pName.innerHTML= `${elem.nombre_producto}`; 
                        
                    }); */
                    /* pName.innerHTML= `${nombre_producto}`; */
                    /* console.log(nombreArray); */
                    
    
                    /* nombre_producto = producto.nombre_producto;
                    nombreArray= nombre_producto.map(arbol => arbol.nombre_producto); */
                    
                }
                /* pName.textContent= `${nombre_producto}`;
                pPrice.textContent= `$${precio}`;
                pHeight.textContent= `Altura: ${medidas}`; */
            });
        
        


    }catch(error){
        console.log(`el error es: ${error}`);
    }

}

getFrutales("FRU"); 
