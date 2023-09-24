# Explorando los Fundamentos del Desarrollo Web en Entornos de Cliente

---

# Índice

1. [Modelos de Programación en Entornos Cliente/Servidor](#modelos-de-programación-en-entornos-clienteservidor)
2. [Tipos de Arquitecturas de Aplicaciones Web](#tipos-de-arquitecturas-de-aplicaciones-web)
3. [Mecanismos de Ejecución de Código en un Navegador Web. Capacidades y Limitaciones. Compatibilidad con Navegadores](#mecanismos-de-ejecución-de-código-en-un-navegador-web-capacidades-y-limitaciones-compatibilidad-con-navegadores)
4. [Lenguajes de Programación en Entorno Cliente](#lenguajes-de-programación-en-entorno-cliente)
5. [Características de los Lenguajes de Script. Ventajas y Desventajas](#características-de-los-lenguajes-de-script-ventajas-y-desventajas)
6. [Tecnologías y Lenguajes Asociados. Integración del Código con las Etiquetas HTML](#tecnologías-y-lenguajes-asociados-integración-del-código-con-las-etiquetas-html)
7. [Herramientas de Programación](#herramientas-de-programación)

---

A día de hoy el mundo se ha traslado a internet, y las aplicaciones web son nuevos lugares de trabajo, y páginas comerciales, 
hay muchos tipos de páginas web según su funcionalidad y uso, por lo tanto, tenemos diferentes tipos de arquitecturas con las
que podemos ofrecer un alto rendimiento y personalización.

### ¿Qué es la arquitectura de las Aplicaciones Web?
La arquitectura de las aplicaciones web es la forma en la que interactuan entre sí los diferentes componentes de una 
aplicación web. Puede ser tan sencillo como definir una relación entre un cliente y un servidor, o ser mucho más 
complejo con unos muchos servidores backend en contenedores, equilibradores de carga, pasarelas API y frontends de una 
sola página orientados al usuario.

La forma en la que diseñamos una aplicación web es clave en su usabilidad y también en la optimización de sus costes.

![TUX](https://kinsta.com/wp-content/uploads/2022/10/web-app-architecture-components.jpg)
> Ejemplo de diagrama de arquitectura de una aplicación web

## Modelos de Programación en Entornos Cliente/Servidor:

La arquitectura de las aplicaciones web define cómo se estructuran los componentes de una aplicación que se basa en la 
web, las arquitecturas son muy específicas basándonos en el propósito de la aplicación web. Utilizar correctamente una 
arquitectura web nos puede dar ciertos beneficios.
- **Un Desarrollo Organizado;** ya que así podemos aislar componentes según sea necesario, y puedes elegir una estructura 
adecuada para cada módulo que y componentes que hagas según sea necesario.
- **Una mejor Gestión del Código;** dividir la aplicación por módulos y establecer canalizaciones personalizadas son 
necesarias para un desarrollo fluido de la aplicación, además de que siempre es más fácil después modificar cosas cuando 
todo está ordenado, este combinado con una buena estrategia de control de versiónes puede ser muy util para trabajar y 
desarrollar la página con mucha más comodidad o en paralelo con más compañeros.
- **Una mejor Seguridad;** la mayoría en las arquitecturas tienen en cuenta la seguridad al estructurar los componentes.

---

## *Tipos de Arquitecturas de Aplicaciones Web*
Algunos tipos de Arquitectura Web son los siguientes:

### *Arquitectura de Una Sola Página*
La **arquitectura SPA** es bastante sencilla, toda la aplicación se basa en una sola página, una vez el usuario entra en la aplicación
no necesita desplazarse a ninguna otra página web. Estas son bastante útiles cuando se trata de ofrecer una experiencia
rápida y sin fisuras a los usuarios finales o consumidores, pero carecen del toque de un sitio web tradicional, estas pueden
ser difíciles de optimizar para el SEO.

![TUX](https://geekflare.com/wp-content/uploads/2021/10/singlepageapplication.png)

Algunos de sus usos son aplicaciones como **Gmail, Facebook o GitHub** 

### *Arquitectura de Renderizado del Lado del Servidor*
En la **arquitectura SSR**, las páginas web del frontend se renderizan en un servidor backend después de ser solicitadas por
el usuario, esto para reducir la carga del cliente, ya que recibe una página web estática de *HTML, CSS y JS*.
Estas son populares entre los blogs y sitios web de comercio electrónico, porque la gestión de enlaces y el SEO son bastante sencillos, además
de tener un tiempo de respuesta en carga bastante rapido, porque el cliente no tiene que cargar nada.

![TUX](https://www.ionos.es/digitalguide/fileadmin/DigitalGuide/Screenshots_2022/Imagen-explicativa-del-server-side-rendering.png)

Algunos de sus usos son en aplicaciones como **Wikipedia, Shopify, ING Direct.**

### *Arquitectura de Aplicaciones Prerrenderizadas*
Esta arquitectura también se conoce como arquitectura de generación de sitios estáticos, en esta arquitectura, el frontend
se genera y almacena previamente en archivos HTML, CSS y JS planos en el servidor. Una vez que el usuario solicita una página
esta se obtiene directamente de la muestra generada previamente, esto hace que la aplicación web sea muy rápida, pero aumenta 
el tiempo de la construcción de la aplicación, ya que se renderizan durante la construcción de la aplicación.

![TUX](https://zhumarcos.com/static/d8e8a71921e4c09ad9ccef03b4f1f4f3/dfe5d/staticgenerator.jpg)

Esta se utiliza en sitios webs de **noticias y blogs**, también para sitios de **documentación técnica**

### *Arquitectura de Aplicaciones Isomórficas*
Esta es una **mezcla de aplicaciones creadas con SSR y SPA**, estas aplicaciones se renderizan primero en el servidor, como una
SSR normal y corriente, una vez las recibe el cliente, la app carga el DOM virtual para un procesamiento rápido y eficiente
por parte del cliente, esto la convierte en una SPA, con ella tienes un renderizado rapido, y un soporte de SEO y enlaces completo.

Esta arquitectura se utiliza en aplicaciónes como **Pinterest, Twitter, Uber**

### *Arquitectura Orientada a Servicios*
En esta arquitectura las aplicaciones web se dividen en **servicios** que representa una unidad funcional cada uno, estos servicios están
acoplados e interactuan entre sí mediante el paso de mensajes.
Esta arquitectura orientada a servicios añade estabilidad y escalabilidad a la aplicación, pero no tienen un tamaño y alcance fijos,
por lo que puede ser complicada para el mantenimiento.

![TUX](https://hectorpoblete.cl/wp-content/uploads/2021/03/Arquitectura-basada-en-servicios.png)

Algunas aplicaciones que utilizan esta estructura son **Amazon(AWS), Google Maps, Spotify**

### *Arquitectura de Microsevicios*
Esta fue diseñada para resolver los **problemas de la Arquitectura Orientada a Servicios**, estas son más modulares y 
encajan entre sí para construir una aplicación web, son pequeñas y con un contexto limitado, esta es la mejor estructura 
para aplicaciones que pretenden llevar a muchos usuarios, ya que son escalables y fácil de mantener, para proyectos 
pequeños puede requerir demasiado esfuerzo de mantenimiento.

![TUX](https://learn.microsoft.com/es-es/azure/architecture/includes/images/microservices-logical.png)

Algunas aplicaciones como **Linkedin, SoundCloud, Zuul(Servicio de Netflix)** utilizan esta estructura.

### *Arquitectura sin Servidor*
Esta arquitectura se centra en que tu aplicación se base en **términos de funciones** que debe realizar, son funciones que 
se invocan según la llegada de las solicitudes, estas arquitecturas no permanecen en funcionamiento todo el tiempo, se 
comportan como lo harían las funciones de un programa según lo que acciones reacciona, reduce los costes de mantenimiento 
y son fácil de escalar sin mucho esfuerzo, pero es difícil llevar a cabo tareas de larga duración utilizando estos 
componentes.

![TUX](https://learn.microsoft.com/es-es/azure/architecture/serverless-quest/images/mobile-app-backends.png)

Algunos de los usos de esta arquitectura generalmente son en **aplicaciones de automatización, aplicaciones de backend 
y móviles...** Microsoft ofrece un servicio llamado **Azure Functions con su API** para crear páginas sin servidor.

---

## Mecanismos de Ejecución de Código en un Navegador Web. Capacidades y Limitaciones. Compatibilidad con Navegadores

### Ejecución de JavaScript en Los Navegadores

**JavaScript** es un lenguaje de programación que se puede aplicar a un documento HTML y usarse para que haya interactividad
en una página web al aplicarse en un documento HTML, este funciona de la siguiente manera en los navegadores:
1. Descarga y carga el código
2. Realiza un análisis del código 
3. Crea un árbol de análisis(AST) para que la interpretación del código sea más sencilla
4. Interpreta el código linea por linea
5. Se ejecuta el código que interactúa con el DOM para manipular y modificar los elementos HTML y CSS de la página. Además
de registrar callbacks, clics de botón y funciones según eventos que se realicen en la página.
6. Se produce el ciclo de eventos según la interactividad de la página el código lanza funciones o eventos.

Además, JavaScript es el **único** lenguaje que realmente entienden los navegadores modernos, tenemos lenguajes como TypeScript
compilan a JS, pero te permiten desarrollar en otro lenguaje, al final lo que lee
el navegador sigue siendo JS.

### Como ejecutar código JavaScript en un HTML

**Forma 1;** Ejecutándolo con la etiqueta script.

    <script>
        var fecha = new Date();
        document.write("Hoy es "+ fecha.getDate() + "/" + fecha.getMonth() + "/" + fecha.gethYear())
    </script>

**Forma 2;** Ejecutándolo desde un archivo externo que enlazamos a .

    <script src="script.js"></script>

### Compatibilidad entre navegadores

Es importante saber que JavaScript es interpretado de **diferente manera en el navegador**, es decir cada uno lo lee a su 
manera, al principio la compatibilidad entre los navegadores era muy baja poco a poco ha ido creciendo más, a día de hoy,
ya pasa mucho menos, pero seguimos teniendo estos problemas de compatibilidad, hace unos 10 años era necesario crear 
códigos diferentes para cada navegador, esto generaba una carga de trabajo mucho mayor.

Hay día de hoy es más compatible, pero seguimos teniendo muchas funciones que son diferentes en cada navegador por lo que 
lo correcto es probar en todos los navegadores y asegurarnos de que funcionan correctamente en todos, el problema es que
existen muchos navegadores web para comprobar la compatibilidad con todo es ***[Can I Use](https://caniuse.com/)***, 
no solo para comprobar JS, también para comprobar HTML5 y CSS3 es muy útil, ya que también encontramos diferencias de este
tipo en los lenguajes de marcas, podemos comparar con todo tipo de versiones de navegador.

También es importante tener en cuenta que cuando hacemos una web no hay que darle soporte a todos los navegadores, ya que
existen demasiados, sino a los más grandes que ocupan el uso de la mayoría de las personas del mundo como pueden ser, 
**Chrome, Safari, Edge, Firefox...**

### Resolución de problemas de compatibilidad en una Aplicación Web

Es muy importante **testear la compatibilidad** de la que hablamos para asegurarnos de que en diferentes dispositivos y 
navegadores funciona correctamente todo y cumple las expectativas de lo esperado, este tipo de testeos y comprobaciones 
debemos de realizarlas cuando hagamos proyectos web para todo el mundo y no dirigido a un sistema o equipos en concreto,
ya que si es por ejemplo para una empresa que tiene todo el sistema igual, pues no es necesario entonces nos debemos de
hacer cargo solo de que vaya en el que la empresa solicite.

Realizar dichas pruebas cuando es necesario nos puede dar varias ventajas:
1. **Un público más amplio**, ya que si funcionamos en todos los dispositivos estaremos abiertos a cualquier público.
2. **Mejora de estabilidad**, ya que al testearlo todo probamos que todo funciona correctamente y siempre es más estable,
porque sacamos la aplicación a prueba de errores de cualquier navegador.
3. **Perfecciona el desarrollo**, esto nos puede ser util porque podemos prevenir los errores actuales en proyectos futuros
y reducir costes.

Qué tipos de pruebas podemos realizar para comprobar la compatibilidad:
- **Pruebas de compatibilidad** con versiones anteriores.
- **Pruebas Generales** de compatibilidad.
- Pruebas de compatibilidad **móvil**.
- Pruebas de compatibilidad en **dispositivos variados**.
- Pruebas de compatibilidad de **hardware**.
- Pruebas **funcionales de red**.

Una vez testeado y encontrado los problemas tendremos que ir modificando y resolviendo todos los problemas de compatibilidad
por eso es muy util tener un buen plan de **control de versiones y repositorios** en los que tener todo organizado con las 
modificaciones que se vayan haciendo.

## Lenguajes de Programación en Entorno Cliente

Vamos a ver algunos lenguajes de programación conocidos de Entorno Cliente:

### JavaScript

JavaScript es un lenguaje de programación ligero, un lenguaje interpretado, más conocido como lenguaje de scripting para
páginas web, también usado en muchos entornos fueras del navegador como con en Node.js, Apache CouchDB y Adobe Acrobat, 
este es orientado a objetos.

Aplicaciones como Gmail, Netflix, Facebook... están desarrolladas con JavaScript.

Su estándar es [ECMAScript](https://developer.mozilla.org/es/docs/conflicting/Web/JavaScript/JavaScript_technologies_overview)

Es importante no confundir Java con JavaScript son las dos registradas por Oracle en muchos paises, pero son dos lenguajes 
muy diferentes.

![TUC](https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png)

### TypeScript

**[TypeScript](https://www.typescriptlang.org/)** es un lenguaje de programación desarrollado por Microsoft que está construido a base de JavaScript, pero
este está construido a un nivel superior, es decir este tiene características adicionales que nos facilitan la vida al 
escribir código a los programadores, su sintaxis es orientada a objetos.

Actualmente, es el lenguaje por defecto de google para desarrollar junto a Angular.

Este está a un paso más alla del estándar ECMAScript6 tiene más funcionalidad, además de que todo código escrito en JS
es válido en TypeScript.

Este es bastante recomendable para proyectos grandes, ya que nos facilita mucho a la hora de programar.

TypeScript se utiliza para todo en general, desarrollo web, de aplicaciones móviles, juegos, servidores ...

![TUC](https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png)

### jQuery

**[jQuery](https://jquery.com/)** es una librería para JavaScript desarrollada en 2006 que nos permite simplificar la forma en la que accedemos al DOM,
nos permite añadir una capa de interacción AJAX entre la web y las aplicaciones que desarrollemos controlando los 
eventos que suceden ella, creando animaciones y efectos para enriquecer la experiencia del usuario.

Esta nos facilita mucho la navegación por un documento y a seleccionar elementos del DOM, proporcionando más comodidad
a los desarrolladores a la hora de por desarrollar en menos código. Una alternativa a jQuery es Angular JS(Para creación 
de páginas SPA).

Este es muy útil y usa en la manipulación del DOM y el manejo de eventos, animaciones y efectos.

![TUC](https://www.zdnet.com/a/img/resize/ffd33e4f96d86823328a1360e6321e0f9c5318c9/2019/04/21/9d791bf2-9b20-476a-bba6-201e622d2a1f/jquery-logo-blue.png?auto=webp&width=1024)

### Angular.JS

**[Angular](https://angular.io/)** es un framework mantenido por Google, que sirve para desarrollar aplicaciones web de estilo SPA o de tipo
web progresivas PWA, sirve para tanto móvil como ordenador.

Es un poco complejo y su desarrollo se realiza por medio de TypeScript o JavaScript.

Su nombre proviene de un concepto que se utiliza en HTML "**< >**", esta usa un DOM predeterminado
para una mejor organización en el desarrollo web, tiene facilidad de enlace de datos, además nos brinda una buena 
optimización de rendimiento y de SEO y muchas más cosas.

![TUC](https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png)

### React.JS

**[React](https://es.react.dev/)** es otra biblioteca de JavaScript que utiliza para hacer interfaces de usuario, todas las aplicaciones de react se componen
de componentes reutilizables que forman la interfaz del usuario, el poder reutilizar dicho código nos puede facilitar 
a la hora de hacer una web, ya que solo tenemos que ponerlo donde nos haga falta y ya.

La sintaxis utilizada para construir aplicaciones con React se llama JSX(JavaScript XML), una extensión 
de JavaScript, gracias ello podemos combinar la lógica interfaz de usuario con JavaScript de una manera única

El uso de JSX no es obligatorio en React, pero facilita mucho su uso.

![TUC](https://blog.cellenza.com/wp-content/uploads/2015/05/React-JS-1024x584.png)

### Node.js

**[Node](https://nodejs.org/es)** es una plataforma de ejecución de JavaScript de propósito general, con ella puedes ejecutar JavaScript
fuera del navegador y crear programas de consola servicios web, interfaces gráficas y mucho más, básicamente con ella
podemos sacar JavaScript del entorno cliente en navegadores y darle otra utilidad diferente a la habitual.

Por decirle de alguna forma, se puede decir que Node.js es un JavaScript sacado del contexto de los navegadores web

Su uso más habitual es en el desarrollo de servicios web.

![TUC](https://www.muylinux.com/wp-content/uploads/2022/04/nodejs.png)

## Características de los Lenguajes de Script. Ventajas y Desventajas

Los lenguajes de script tienen una serie de características:

- Son lenguajes interpretados.
- No necesitan declaración de variables como los tradicionales.
- Utilizan instrucciones para funcionar
- Su código es simple, los scripts pueden verse complicados, pero realmente son muchos trozos de código pequeño que se 
unen y forman uno más grande.

Estos son muy útiles tanto para programadores de software como desarrolladores web.

Las diferencias entre los lenguajes de scripting y los de compilación son las siguientes:
- Los lenguajes de scripting son específicos para una plataforma, en cambio, los tradicionales funcionan en cualquiera generalmente.
- El código de los lenguajes de scripting es interpretado se va interpretando sobre la marcha
el tradicional es compilado primero se tiene que compilar no dar error y después ejecutarse.
- Debido a dicha diferencia de implementación de código generalmente suelen ser más rápidos los lenguajes
de scripting.
- Los lenguajes de programación son generalmente más extensos y complejos que los de scripting, por muy largo
que puedas llegar a ver un script.
- Con las aplicaciones de scripting no es posible crear aplicaciones de escritorio y móviles como con los lenguajes
tradicionales.

En resumen:
Claro, aquí tienes la información en una tabla Markdown:

| **Lenguajes de scripting**               | **Lenguajes de programación**     |
|------------------------------------------|-----------------------------------|
| Específicos de plataforma                | Independientes de la plataforma   |
| (Mayoritariamente) interpretado          | Compilado                         |
| Más lento en tiempo de ejecución         | Más rápido en tiempo de ejecución |
| Menos intensivo en código                | Más intensivo en código           |
| Crea aplicaciones como parte de un stack | Crea aplicaciones independientes  |

## Tecnologías y Lenguajes Asociados. Integración del Código con las Etiquetas HTML:

### HTML

El **Lenguaje de Marcas de Hipertexto**, es el componente más básico de las webs, este define el significado y la estructura
del contenido que se va a añadir a la web.

Hipertexto hace referencia a los enlaces que conectan las páginas web entre sí que es lo que suelen ver los usuarios,
además de que los enlaces son fundamentales en las webs.

Este lenguaje de marcas utiliza ya como su tipo de lenguaje indica, marcas para etiquetar texto y darle propiedades a las
cosas y así mostrar contenido en el navegador web, estas marcas incluyen los elementos que se representan mediante las
famosas etiquetas **< >**, que ya comentamos anteriormente.

Actualmente, el último estándar de HTML es el **HTML5**

![TUC](https://cms.rootstack.com/sites/default/files/inline-images/23-237381_java-html-language-logo-png-transparent-png.png)

### CSS

Las hojas de **estilos en cascada**, es otro lenguaje de marcas, pero de estilos utilizados para proporcionar propiedades a los
elementos de un HTML, este es un lenguaje basico que se utiliza para asi personalizar los elementos
que tenemos en el HTML podemos escribirlos directamente con la propiedad "style", dentro del HTML
o hacerlo enlazando una hoja".css" al HTML y asignar las personalizaciones desde ese enlace.

![TUC](https://1000marcas.net/wp-content/uploads/2021/02/CSS-Logo.jpg)

### Sencilla Aplicación Web combinando HTML, CSS y JS

Vamos a ver una sencilla aplicación de un *Juego Básico de adivinar un número secreto*
en el que utilizaremos HTML para crear los elementos con los que jugaremos, css para
decorar un poco el juego y JS para recoger los valores e ir chequeando si acertamos el valor, una vez se 
averigua, el script printeara los valores introducidos con el número de intentos:

**Código del HTML:**
    
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="style.css">
        <title>Juego del Número secreto</title>
        <script type="text/javascript" src="script.js"></script>
    </head>
    <body>
        <h1>JUEGO DEL NÚMERO SECRETO</h1>
        <button type="submit" onclick="numSecreto()">JUGAR</button>
        <p><small>Pulsa 3 veces ESC para salir del juego una vez inciado.</small></p>
    </body>
    </html>

**Código del CSS:**
    
    body {
            font-family: Arial, sans-serif;
            background-color: #f0f0f0;
            text-align: center;
        }

    h1 {
        color: #333;
        text-transform: uppercase;
    }

    button {
        padding: 10px 20px;
        background-color: #007bff;
        color: #fff;
        border: none;  
        border-radius: 5px;
        cursor: pointer;
        font-size: 18px;
    }

    button:hover {
    background-color: #0056b3;
    }

    p {
    margin-top: 20px;
    font-size: 14px;
    color: #666;
    }

    small {
    color: #999;
    }

**Código del Script**
    
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

Adjunto los ficheros individuales para descargar, **importante que esten juntos en la misma carpeta**

## Herramientas de Programación

Podemos hacer código en un archivo de texto con la extensión correcta, pero esto se nos hace muy incómodo y complicado
a día de hoy tenemos muchas herramientas que nos facilitan muchas cosas a la hora de programar, vamos a ver algunas de
ellas.

### Visual Studio Code
Este es un **editor desarrollado por Microsoft** para todas las plataformas, es de código abierto y gratuito.

Este se basa en Electron, un framework que se utiliza para implementar Chromium y Node.js, como aplicaciones de 
escritorio, que se ejecuta en un motor de diseño Blink, junto con Visual Studio Team Services.

En este podemos desarrollar código ver errores ejecutar programas y testearlos, en general vale para casi todos los
lenguajes de programación. Podemos instalar extensiones para poder personalizarlo y añadirle las funciones extras que 
queramos a nuestro gusto.

Tiene autocompletación de código para CSS, HTML JS, JSON, Less, Sass, TypeScript

![TUC](https://code.visualstudio.com/assets/docs/languages/typescript/overview.png)

### Chrome Devtools

Es un **conjunto de herramientas** que nos ayudan para desarrollar programas web, nos ayuda a representar
de una forma mucha más clara el código de una página web, lo utilizan la mayoría de desarrolladores,
sobre todo se utiliza en HTML, CSS o JavaScript.

Este es desarrollado por google y lo podemos utilizar en nuestro navegador.

![TUC](https://nira.com/wp-content/uploads/2020/03/chrome-dev-tools.png)


### WEBSTORM
Un **IDE especializado en JavaScript**, en este también podemos crear código de HTML y CSS y combinarlos
con el de JS.
- Tiene un asistente de código que te corrige errores y es muy intuitivo.
- Permite trabajar con los frameworks actuales como Angular, React...
- Es un editor sencillo y muy fácil de usar
- Además, nos permite realizar Debugging para ver paso a paso como se ejecutan las cosas, y testear las cosas que creamos.
- Este nos ayuda también a simplificar código y que sea mas eficiente.

![TUC](https://www.jetbrains.com/webstorm/img/overview/webstorm-overview.png)

---

# Bibliografía
- [Tipos de Arquitecturas Web Cliente Servidor](https://kinsta.com/es/blog/arquitectura-aplicaciones-web/#ventajas-de-la-arquitectura-spa)
- [Ejecución de JavaScript en Navegadores](https://blog.hubspot.es/website/que-es-javascript#como-funciona)
- [Compatibilidad de Java Script en navegadores](https://www.edgardandrea.com/javascript-es-igualmente-compatible-en-todos-los-navegadores/)
- [Resolución de problemas](https://www.zaptest.com/es/pruebas-de-compatibilidad-que-son-tipos-proceso-caracteristicas-herramientas-y-mucho-mas)
- [JAVASCRIPT](https://developer.mozilla.org/es/docs/Web/JavaScript)
- [TYPESCRIPT](https://profile.es/blog/que-es-typescript-vs-javascript/)
- [JQUERY](https://openwebinars.net/blog/que-es-jquery/)
- [ANGULAR](https://blog.hubspot.es/website/que-es-angular#:~:text=Angular%20es%20un%20framework%20de,versiones%20m%C3%B3viles%20como%20de%20escritorio)
- [REACT](https://kinsta.com/es/base-de-conocimiento/que-es-react-js/)
- [NODE.JS](https://desarrolloweb.com/home/nodejs)
- [Características de los lenguajes de Script](https://www.hostingplus.com.es/blog/estos-son-los-lenguajes-de-programacion-mas-destacables-de-script/)
- [Diferencias](https://kinsta.com/es/blog/lenguajes-script/#lenguajes-de-scripting-vs-lenguajes-de-programacin)
- [HTML](https://developer.mozilla.org/es/docs/Web/HTML)
- [CSS](https://developer.mozilla.org/es/docs/Web/CSS)
- [VS CODE](https://es.wikipedia.org/wiki/Visual_Studio_Code)
- [Chrome DEVTOOLS]()
- [WEBSTORM](https://keepcoding.io/blog/para-que-sirve-devtools/)
