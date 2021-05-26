window.addEventListener("load", ()=>{

    let Dibujar = document.getElementById("Draw");
    let Color = document.getElementById("Color");
    let Color2 = document.getElementById("Gradiente");
    let letra = document.getElementById("letras");
    let Coloreado = document.getElementById("tipo");
    let Figura = document.getElementById("figura");

    let fondo="#BD1466";
    let Gradiente="#BD1466";
    let Tipo=1;
    let forma=1;

    Color.addEventListener('change',()=>{
        fondo= Color.value;
    })

    Coloreado.addEventListener('change',()=>{
        Tipo= Coloreado.value;
        if(Tipo>"1"){
            Color2.style.display="block";
            letra.style.display="block";
                Color2.addEventListener('change',()=>{
                    Gradiente= Color2.value;
                })
        }
        else{
            Color2.style.display="none";
            letra.style.display="none";
        }
    })

    Figura.addEventListener('change',()=>{
        forma= Figura.value;
    })

    Dibujar.addEventListener('click',()=>{
        var canvas = document.getElementById("myCanvas");
        var ctx = canvas.getContext("2d");

        if(forma==2){
            canvas.width=canvas.width;
            //Micky Mouse
            ctx.arc(230,280,150,0, Math.PI*2);
            ctx.moveTo(360,100);
            ctx.arc(360,100,80,0, Math.PI*2);
            ctx.moveTo(100,100);
            ctx.arc(100,100,80,0, Math.PI*2);
        }
        if(forma==1){
            canvas.width=canvas.width;
            //Estrella
            ctx.beginPath();
                ctx.moveTo(220,50);
                ctx.lineTo(400,350);
                ctx.lineTo(50,350);
                ctx.lineTo(220,50);
                ctx.moveTo(50,150);
                ctx.lineTo(400,150);
                ctx.lineTo(220,450);
                ctx.lineTo(50,150);
            ctx.closePath();
        }
        if(forma==3){
            canvas.width=canvas.width;
            //Icono
            ctx.rect(220,220,200,200);
            ctx.arc(220,220,200,0,Math.PI*2);
        }

        if(Tipo==1){
            ctx.fillStyle=fondo;
        }
        if(Tipo==2){
            let degradado=ctx.createLinearGradient(220,200,220,400);
            degradado.addColorStop(0,fondo);
            degradado.addColorStop(1,Gradiente);
            ctx.fillStyle=degradado;
        }
        if(Tipo==3){
            let grad=ctx.createRadialGradient(220,350,100,220,400,300);
            grad.addColorStop(0,fondo);
            grad.addColorStop(1,Gradiente);
            ctx.fillStyle=grad;
        }
        ctx.fill();
    })
    
})