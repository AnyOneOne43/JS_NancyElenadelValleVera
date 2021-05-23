window.addEventListener("load", ()=>{
    function numaleatorio (){
      return Math.round(Math.random()*4)+1;
    }
    var m;
    function obtenercolor(){
      var n=numaleatorio();
      if(n==1 || n==0){
        m="amarillo";
      }
      if(n==2){
        m="verde";
      }
      if(n==3){
        m="rojo";
      }
      if(n==4){
        m="azul";
      }
      return m;
    }
  
    function retornar(){
      amarillo.style.background="#EBD22F"
      verde.style.background="#31C461"
      rojo.style.background="#E33238"
      azul.style.background="#343FF5"
    }
  
    let jugar = document.getElementById("boton");
    let plano = document.getElementById("cuadradito");
    let amarillo = document.getElementById("amarillo");
    let verde = document.getElementById("verde");
    let rojo = document.getElementById("rojo");
    let azul = document.getElementById("azul");
    let arreglo=['colores'];
    let usuario=['juego'];
    let verifica=1;
  
    function perder(){
      plano.style.display="none";
      document.body.innerHTML = "<h1>Perdiste TvT</h1>";
    }
    function ganar(){
      if(verifica==5){
        plano.style.display="none";
        document.body.innerHTML = "<h1>Ganaste UWU</h1>";
      }
    }
  
    jugar.addEventListener("click", ()=>{
      jugar.style.display = "none";
      plano.style.margin = "20px";
      plano.style.left = "40%";
  
      for(let i=0;i<5;i++){
        arreglo.push(obtenercolor())
      }
      console.log(arreglo)
  
      for(let i=1;i<=5;i++){
          if(arreglo[i]=="amarillo"){
           setTimeout(()=>{amarillo.style.background="#fcea72"},i*1000)
           setTimeout(retornar,i*1000+100)
          }
          else if(arreglo[i]=="verde"){
            setTimeout(()=>{verde.style.background="#56fc8c"},i*1000+100)
            setTimeout(retornar,i*1000+200)
          }
          else if(arreglo[i]=="rojo"){
            setTimeout(()=>{rojo.style.background="#fa5f64"},i*1000+200)
            setTimeout(retornar,i*1000+300)
          }
          else if(arreglo[i]=="azul"){
            setTimeout(()=>{azul.style.background="#7d84ff"},i*1000+300)
            setTimeout(retornar,i*1000+400)
          }
        }
  
      amarillo.addEventListener("click",()=>{
        usuario.push("amarillo");
        if(usuario[verifica]==arreglo[verifica]){
          console.log("Bien")
          ganar()
        }
        else{
          console.log("Perdio")
          perder()
        }
        verifica++;
      })
      verde.addEventListener("click",()=>{
        usuario.push("verde");
        if(usuario[verifica]==arreglo[verifica]){
          console.log("Bien")
          ganar()
        }
        else{
          console.log("Perdio")
          perder()
        }
        verifica++;
      })
      rojo.addEventListener("click",()=>{
        usuario.push("rojo");
        if(usuario[verifica]==arreglo[verifica]){
          console.log("Bien")
          ganar()
        }
        else{
          console.log("Perdio")
          perder()
        }
        verifica++;
      })
      azul.addEventListener("click",()=>{
        usuario.push("azul");
        if(usuario[verifica]==arreglo[verifica]){
          console.log("Bien")
          ganar()
        }
        else{
          console.log("Perdio")
          perder()
        }
        verifica++;
      })
      console.log(verifica);
      
  
    })
  })
  
  