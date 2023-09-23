# Explorando los Fundamentos del Desarrollo Web en Entornos de Cliente

---

A día de hoy ell mundo se ha traslado a internet, y las aplicaciones web son nuevos lugares de trabajo, y páginas comerciales, 
hay muchos tipos de páginas web según su funcionalidad y uso, por lo tanto, tenemos diferentes tipos de arquitecturas con las
que podemos ofrecer un alto rendimiento y personalización.

### ¿Qué es la arquitectura de las Aplicaciones Web?
La arquitectura de las aplicaciones web es la forma en la que interactuan entre sí los diferentes componentes de una aplicación web. Puede ser
tan sencillo como definir una relación entre un cliente y un servidor, o ser mucho más complejo con unos muchos servidores
backend en contenedores, equilibradores de carga, pasarelas API y frontends de una sola página orientados al usuario.

La forma en la que diseñamos una aplicación web es clave en su usabilidad y también en la optimización de sus costes.

![TUX](https://kinsta.com/wp-content/uploads/2022/10/web-app-architecture-components.jpg)
> Ejemplo de diagrama de arquitectura de una aplicación web

## Modelos de Programación en Entornos Cliente/Servidor:

La arquitectura de las aplicaciones web define cómo se estructuran los componentes de una aplicacion que se basa en la web, las
arquitecturas son muy específicas basándonos en el propósito de la aplicación web. Utilizar correctamente una arquitectura web 
nos puede dar ciertos beneficios:
- **Un Desarrollo Organizado;** ya que así podemos aislar componentes según sea necesario, y puedes elegir una estructura adecuada para cada módulo que y componentes que hagas según sea necesario.
- **Una mejor Gestión del Código;** dividir la aplicación por módulos y establecer canalizaciones personalizadas son necesarias para un desarrollo fluido de la aplicación, además de que siempre es más fácil después modificar cosas cuando todo está ordenado, este combinado con una buena estrategia de control de versiónes puede ser muy util para trabajar y desarrollar la página con mucha más comodidad o en paralelo con más compañeros.
- **Una mejor Seguridad;** la mayoría en las arquitecturas tienen en cuenta la seguridad al estructurar los componentes.

---

## *Tipos de Arquitecturas de Aplicaciones Web*
Algunos tipos de Arquitectura Web son los siguientes:

### *Arquitectura de Una Sola Página*
La arquitectura SPA es bastante sencilla, toda la aplicación se basa en una sola página, una vez el usuario entra en la aplicación
no necesita desplazarse a ninguna otra página web. Estas son bastante útiles cuando se trata de ofrecer una experiencia
rápida y sin fisuras a los usuarios finales o consumidores, pero carecen del toque de un sitio web tradicional, estas pueden
ser difíciles de optimizar para el SEO.

![TUX](https://geekflare.com/wp-content/uploads/2021/10/singlepageapplication.png)

Algunos de sus usos son aplicaciones como **Gmail, Facebook o GitHub** 

### *Arquitectura de Renderizado del Lado del Servidor*
En la arquitectura SSR, las páginas web del frontend se renderizan en un servidor backend después de ser solicitadas por el usuario, esto 
para reducir la carga del cliente, ya que recibe una página web estática de *HTML, CSS y JS*.
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
Esta es una mezcla de aplicaciones creadas con SSR y SPA, estas aplicaciones se renderizan primero en el servidor, como una
SSR normal y corriente, una vez las recibe el cliente, la app carga el DOM virtual para un procesamiento rápido y eficiente
por parte del cliente, esto la convierte en una SPA, con ella tienes un renderizado rapido, y un soporte de SEO y enlaces completo.

Esta arquitectura se utiliza en aplicaciónes como **Pinterest, Twitter, Uber**

### *Arquitectura Orientada a Servicios*
En esta arquitectura las aplicaciones web se dividen en servicios que representa una unidad funcional cada uno, estos servicios están
acoplados e interactuan entre sí mediante el paso de mensajes.
Esta arquitectura orientada a servicios añade estabilidad y escalabilidad a la aplicación, pero no tienen un tamaño y alcance fijos,
por lo que puede ser complicada para el mantenimiento.

![TUX](https://hectorpoblete.cl/wp-content/uploads/2021/03/Arquitectura-basada-en-servicios.png)

Algunas aplicaciones que utilizan esta estructura son **Amazon(AWS), Google Maps, Spotify**

### *Arquitectura de Microsevicios*
Esta fue diseñada para resolver los problemas de la Arquitectura Orientada a Servicios, estas son más modulares y encajan entre sí para construir una aplicación
web, son pequeñas y con un contexto limitado, esta es la mejor estructura para aplicaciones que pretenden llevar a muchos usuarios, 
ya que son escalables y fácil de mantener, para proyectos pequeños puede requerir demasiado esfuerzo de mantenimiento.

![TUX](https://learn.microsoft.com/es-es/azure/architecture/includes/images/microservices-logical.png)

Algunas aplicaciones como **Linkedin, SoundCloud, Zuul(Servicio de Netflix)** utilizan esta estructura.

### *Arquitectura sin Servidor*
Esta arquitectura se centra en que tu aplicación se base en términos de funciones que debe realizar, son funciones que se invocan según la 
llegada de las solicitudes, estas arquitecturas no permanecen en funcionamiento todo el tiempo, se comportan como lo harían
las funciones de un programa según lo que acciones reacciona, reduce los costes de mantenimiento 
y son fácil de escalar sin mucho esfuerzo, pero es difícil llevar a cabo tareas de larga duración utilizando estos componentes.

![TUX](https://learn.microsoft.com/es-es/azure/architecture/serverless-quest/images/mobile-app-backends.png)

Algunos de los usos de esta arquitectura generalmente son en **aplicaciones de automatización, aplicaciones de backend y móviles...** Microsoft ofrece un servicio
llamado **Azure Functions con su API** para crear páginas sin servidor.

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

Además, JavaScript es el **unico** lenguaje que realmente entienden los navegadores modernos, tenemos lenguajes como TypeScript
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

Es importante saber que JavaScript es interpretado de diferente manera en el navegador, es decir cada uno lo lee a su 
manera, al principio la compatibilidad entre los navegadores era muy baja poco a poco ha ido creciendo más, a día de hoy,
ya pasa mucho menos, pero seguimos teniendo estos problemas de compatibilidad,
hace unos 10 años era necesario crear códigos diferentes para cada navegador, esto generaba una carga de trabajo mucho 
a la de hoy en día.

Hay día de hoy es más compatible, pero seguimos teniendo muchas funciones que son diferentes en cada navegador por lo que 
lo correcto es probar en todos los navegadores y asegurarnos de que funcionan correctamente en todos, el problema es que
existen muchos navegadores un web para comprobar la compatibilidad con todo es ***[Can I Use](https://caniuse.com/)***, 
no solo para comprobar JS, también para comprobar HTML5 y CSS3 es muy util, ya que también encontramos diferencias de este
tipo en los lenguajes de marcas, podemos comparar con todo tipo de versiones de navegador.

También es importante tener en cuenta que cuando hacemos una web no hay que darle soporte a todos los navegadores, ya que
existen demasiados, sino a los más grandes que ocupan el uso de la mayoría de las personas del mundo como pueden ser, 
**Chrome, Safari, Edge, Firefox...**

### Resolución de problemas de compatibilidad en una Aplicación Web

Es muy importante testear la compatibilidad de la que hablamos para asegurarnos de que en diferentes dispositivos y 
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
- Pruebas de compatibilidad con versiones anteriores.
- Pruebas Generales de compatibilidad.
- Pruebas de compatibilidad móvil.
- Pruebas de compatibilidad en dispositivos variados.
- Pruebas de compatibilidad de hardware.
- Pruebas funcionales de red.

Una vez testeado y encontrado los problemas tendremos que ir modificando y resolviendo todos los problemas de compatibilidad
por eso es muy util tener un buen plan de control de versiones y repositorios en los que tener todo organizado con las 
modificaciones que se vayan haciendo.

## Lenguajes de Programación en Entorno Cliente

Vamos a ver algunos lenguajes de programación conocidos de Entorno Cliente:

<div style="display: flex; align-items: center;">
  <div style="flex: 1;">

### JavaScript

JavaScript es un lenguaje de programación ligero, un lenguaje interpretado, más conocido como lenguaje de scripting para
páginas web, también usado en muchos entornos fueras del navegador como con en Node.js, Apache CouchDB y Adobe Acrobat, 
este es orientado a objetos.

Su estándar es [ECMAScript](https://developer.mozilla.org/es/docs/conflicting/Web/JavaScript/JavaScript_technologies_overview).
Es importante no confundir Java con JavaScript son las dos registradas por Oracle en muchos paises, pero son dos lenguajes 
muy diferentes.

</div>
  <div style="flex: 1;margin: 100px">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png" alt="JavaScript">
  </div>
</div>

<div style="display: flex; align-items: center;">
  <div style="flex: 1;">

### TypeScript

TypeScript es un lenguaje de programación desarrollado por Microsoft que está construido a base de JavaScript, pero
este está construido a un nivel superior, es decir este tiene características adicionales que nos facilitan la vida al 
escribir código a los programadores, su sintaxis es orientada a objetos.

Actualmente, es el lenguaje por defecto de google para desarrollar junto a Angular.

Este está a un paso más alla del estándar ECMAScript6 tiene más funcionalidad, además de que todo código escrito en JS
es válido en TypeScript.

Este es bastante recomendable para proyectos grandes, ya que nos facilita mucho a la hora de programar.


</div>
  <div style="flex: 1;margin: 100px">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png" alt="Type Script">
  </div>
</div>

<div style="display: flex; align-items: center;">
  <div style="flex: 1;">

### jQuery

jQuery es una librería para JavaScript desarrollada en 2006 que nos permite simplificar la forma en la que accedemos al DOM,
nos permite añadir una capa de interacción AJAX entre la web y las aplicaciones que desarrollemos controlando los 
eventos que suceden ella, creando animaciones y efectos para enriquecer la experiencia del usuario.

Esta nos facilita mucho la navegación por un documento y a seleccionar elementos del DOM, proporcionando más comodidad
a los desarrolladores a la hora de por desarrollar en menos código. Una alternativa a jQuery es Angular JS(Para creación 
de páginas SPA).

</div>
  <div style="flex: 1;margin: 100px">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTnOERRdJZSEYeeGJ1s0ReOwaWV0iC2Ra1faqhFZyp12KiFbIYG6REl3a7bQWy8CObCvc&usqp=CAU" alt="jQuery">
  </div>
</div>

<div style="display: flex; align-items: center;">
  <div style="flex: 1;">

### Angular

Angular es un framework mantenido por Google, que sirve para desarrollar aplicaciones web de estilo SPA o de tipo
web progresivas PWA, sirve para tanto móvil como ordenador.

Es un poco complejo y su desarrollo se realiza por medio de TypeScript o JavaScript.

Su nombre proviene de un concepto que se utiliza en HTML "**< >**", esta usa un DOM predeterminado
para una mejor organización en el desarrollo web, tiene facilidad de enlace de datos, además nos brinda una buena 
optimización de rendimiento y de SEO y muchas más cosas.

</div>
  <div style="flex: 1;margin: 100px">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png" alt="Angular">
  </div>
</div>

<div style="display: flex; align-items: center;">
  <div style="flex: 1;">

### React



</div>
  <div style="flex: 1;margin: 100px">
    <img src="" alt="Type Script">
  </div>
</div>

<div style="display: flex; align-items: center;">
  <div style="flex: 1;">

### Node.js



</div>
  <div style="flex: 1;margin: 100px">
    <img src="" alt="Type Script">
  </div>
</div>

<div style="display: flex; align-items: center;">
  <div style="flex: 1;">

### PHP



</div>
  <div style="flex: 1;margin: 100px">
    <img src="" alt="Type Script">
  </div>
</div>

<div style="display: flex; align-items: center;">
  <div style="flex: 1;">

### Swift


</div>
  <div style="flex: 1;margin: 100px">
    <img src="" alt="Type Script">
  </div>
</div>