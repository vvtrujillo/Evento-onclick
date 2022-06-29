//función que cambia el texto del boton de login a logout y al revés
function cambiaLogin(elemento)
{    
    if(elemento.innerText=="Login")
    {
        elemento.innerText="Logout"
        console.log("Se cambia texto a boton: ",elemento.innerText);
    }
    else
    {
        elemento.innerText="Login"
        console.log("Se cambia texto a boton: ",elemento.innerText);
    }    
}
//variable para contador de likes
var contador = 0;

//Funión que aumenta en 1 el valor al texto del botón
function aumentaLogin(boton)
{
    if (boton.innerText=="0 likes")
    {
        contador=0;
        contador +=1;
        boton.innerText= contador +" likes";        
        console.log("contador: ", contador);
        alert("Ninja was liked");    
    }
    else
    {
        contador +=1;
        boton.innerText= contador +" likes";
        console.log("contador: ", contador);
        alert("Ninja was liked");
    }    
}

//Función que elimina el elemento boton.
function eliminaButton()
{
    var elemento = document.getElementById('btnAddDef');
    elemento.parentNode.removeChild(elemento);
    return false;
}