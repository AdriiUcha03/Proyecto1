function numSecreto(){
    // calculamos el número secreto
    var numSecreto=Math.round(Math.random()*100+1) // esto nos puede obtener un número entre 1 y 100
    var numInferior=0
    var numSuperior=100; // número entre los que va estar el número que buscamos
    // la primera vez entre 0 y 100
    var numVeces=0; // número de intentos para descubrir el número
    var numUsuario=0;
    // definimos un array para meter los números
    var numLista = new Array(100); //utilizamos un object

    function finalizar(){
        alert('Se a parado el juego.')
        document.write("<br><hr><br> EL NUMERO ERA: " + numSecreto + "</br>")
        document.write("<br><hr><br> LISTADO DE LA TABLA CON VALORES</br>")
        for (var i=0; i<=numVeces; i++){
            var contenido=numLista[i]; // pasamos el contenido a una variable
            document.write("Elemento "+i+" con contenido "+contenido+" <br>"); // mostramos la lista
        }
    }

    document.addEventListener("keydown", function(event) {
        if (event.key === "Escape") {
            finalizar();
        }
      });

    while (numSecreto!=numUsuario){
        document.addEventListener("keydown", function(event) {
        if (event.key === "Escape") {
            finalizar();
        }
      });
        // pedimos al usuario un número entre los márgenes inferior y superior
        var numUsuario1=prompt("Introduzca el número entre"+numInferior+" y "+numSuperior);
        var letras = array = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','w','v','y','z',
                     'A','B','C','D','E','F','G','H','I','J','K','L','M','N','Ñ','O','P','Q','R','S','T','U','W','V','Y','Z']

        if (numUsuario1 === null){
            alert('No has introducido un valor')
            return;
        } else if (letras.includes(numUsuario1)){
            alert('No has introducido un número')
            return;
        }else{
            numUsuario=parseInt(numUsuario1);
            numLista[numVeces] = numUsuario; // metemos los valores en la lista
            numVeces++; //incrementamos el número de intentos
            if (numUsuario>numSuperior){
                alert('El valor es mator al máx')
            }else if(numUsuario<numInferior){
                alert('El valor es menor al min')
            }else if (numUsuario>numSecreto){ // el número del usuario es mayor al valor del número buscado
            // en este caso el numero mayor es el que ha metido el usuario
            numSuperior=numUsuario;
            }else {
            numInferior=numUsuario; // el número del usuario es menor que el superior, es decir está entre ambos
            }
        }
    }
    document.write(" Has adivinado el número en "+numVeces+" veces y el número secreto era "+numSecreto);
        numVeces--; // hemos contado una demás
        // listamos el contenido de la lista
        document.write("<br><hr><br> LISTADO DE LA TABLA CON VALORES</br>")
        for (var i=0; i<=numVeces; i++){
            var contenido=numLista[i]; // pasamos el contenido a una variable
            document.write("Elemento "+i+" con contenido "+contenido+" <br>"); // mostramos la lista
        }
}