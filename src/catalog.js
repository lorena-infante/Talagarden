// getting id_categoria para frutales
 const getFrutales = async(id_categoria)=>{

    try{
        const resFrut = await axios('./src/catalog.json'); 
        const catalogData= resFrut.data;
        console.log(catalogData)
        let id_categoria,
                categoria,
                id_producto,
                producto,
                precio,
                medidas,
                foto;
        //naming DOM variables fot the "P" elements on frutales-box
        let pName = document.getElementById("pName")
        ,pPrice,pHeight;
        console.log(pName);
        //getting only category "FRU"
/*         for(let i=0;i< catalogData.length;i++){
            if(catalogData[i].id_categoria=== 'FRU'){
                id_categoria = catalogData[i].id_categoria;
                categoria = catalogData[i].categoria;
                id_producto = catalogData[i].id_producto;
                producto = catalogData[i].producto;
                precio = catalogData[i].precio;
                medidas = catalogData[i].medidas;
                foto = catalogData[i].foto;
                console.log(id_categoria,categoria,id_producto,
                    producto, precio, medidas, foto);

            }
                //replacing values in HTML
                pName.innerHTML= `${producto}`; 
        } */

    }catch(error){
        console.log(`el error es: ${error}`);
    }

}

getFrutales("FRU"); 
