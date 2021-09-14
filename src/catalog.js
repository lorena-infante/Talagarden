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
        let pName = document.getElementById("pName")
        ,pPrice,pHeight;
        console.log(pName);      

        //recorriendo la data y chequeando que solo traiga los árboles de la categoría "FRU"
        catalogData.forEach(producto => {
            if(producto.id_categoria === "FRU"){  
                  
                console.log(producto);      
                nombre_producto = producto.nombre_producto;
                pName.innerHTML= `${nombre_producto}`
                

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
        });
        


        
     /*    for(let i=0;i< catalogData.length;i++){
            if(catalogData[i].id_categoria=== 'FRU'){
                id_categoria = catalogData[i].id_categoria;
                categoria = catalogData[i].categoria;
                id_producto = catalogData[i].id_producto;
                nombre_producto = catalogData[i].nombre_producto;
                precio = catalogData[i].precio;
                medidas = catalogData[i].medidas;
                foto = catalogData[i].foto;
                console.log(id_categoria,categoria,id_producto,
                    nombre_producto, precio, medidas, foto);

            }
                //replacing values in HTML
               // pName.innerHTML= `${producto}`; 
        }
 */
    }catch(error){
        console.log(`el error es: ${error}`);
    }

}

getFrutales("FRU"); 
