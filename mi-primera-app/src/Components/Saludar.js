import React from 'react';



export default function Saludar(props) {
    
    const { nombre, apellidos } = props;
    //const { userInfo, saludarfn } = props;
    //const { nombre = "Anonimo", edad } = userInfo; //El anonimo es para que si no me pasan valor en esa propiedad se muestre algo que no sea "undefined"
    

    //console.log(props);
    //console.log(userInfo);
    //console.log(saludarfn);




    return(
        <div>
          
          <p>
              Hola {nombre} {apellidos}.
          </p>
          
          {/*<button onClick ={() => saludarfn(nombre, edad)}> Saludar </button>
           
           <h2>
          Hola {props.userInfo.nombre}, 
           tiene {props.userInfo.edad} anos y 
           su color favorito es el {props.userInfo.color}
           </h2>*/}
        </div>     
    ) 
}



