function pedirdirec(){
    do{
      res = prompt("Elige un camino, Izquierda o Derecha");
      if(res!="Izquierda" && res!="Derecha")
      {
          alert("Respuesta Invalida Solo Puedes ELegir ente Izquierda o Derecha.");
      }
    } 
    while(res!="Izquierda" && res!="Derecha")
    return res;
 }

let d;
let c;
setTimeout(()=>{
    d = pedirdirec();
    document.cookie = "direccion="+d;
    }, 1000);

setTimeout(()=>{
    c = pedirdirec();
    document.cookie = "camino="+c;
    }, 1000);

    console.log(document.cookie);





