---
marp: true
title: Explorando los Fundamentos del Desarrollo Web en Entornos de Cliente
paginate: true
theme: gaia
---
# Explorando los Fundamentos del Desarrollo Web en Entornos de Cliente

![TUC](https://cdn.icon-icons.com/icons2/3709/PNG/96/browser_coding_programming_development_web_page_website_seo_script_icon_230041.png)

---

## Índice

1. [Modelos de Programación en Entornos Cliente/Servidor](#modelos-de-programación-en-entornos-clienteservidor)
2. [Mecanismos de Ejecución de Código en un Navegador Web. Capacidades y Limitaciones. Compatibilidad con Navegadores](#mecanismos-de-ejecución-de-código-en-un-navegador-web-capacidades-y-limitaciones-compatibilidad-con-navegadores)
3. [Lenguajes de Programación en Entorno Cliente](#lenguajes-de-programación-en-entorno-cliente)
4. [Características de los Lenguajes de Script. Ventajas y Desventajas](#características-de-los-lenguajes-de-script-ventajas-y-desventajas)
5. [Tecnologías y Lenguajes Asociados. Integración del Código con las Etiquetas HTML](#tecnologías-y-lenguajes-asociados-integración-del-código-con-las-etiquetas-html)
6. [Herramientas de Programación](#herramientas-de-programación)

---

# Modelos de Programación en Entornos Cliente/Servidor


La arquitectura de las aplicaciones web es la forma en la que interactuan entre sí los diferentes componentes de una aplicación web.

---

Algunos *tipos de arquitectura* son:
- Arquitectura de una Sola Página (SPA)
- Arquitectura de renderizado del Lado del Servidor(SSR)
- Arquitectura de Aplicaciones Prerrenderizadas
- Arquitectura de Aplicaciones Isomórficas
- Arquitectura Orientada a Servicios
- Arquitectura de Microsevicios
- Arquitectura sin Servidor

---

# Mecanismos de Ejecución de Código en un Navegador Web. Capacidades y Limitaciones. Compatibilidad con Navegadores

Java funciona de la siguiente manera:

---

1. Descarga y carga el código
2. Realiza un análisis del código 
3. Crea un árbol de análisis(AST) para que la interpretación del código sea más sencilla
4. Interpreta el código linea por linea
5. Se ejecuta el código que interactúa con el DOM para manipular y modificar los elementos HTML y CSS de la página. Además
de registrar callbacks, clics de botón y funciones según eventos que se realicen en la página.
6. Se produce el ciclo de eventos según la interactividad de la página el código lanza funciones o eventos.

---

### Como ejecutar código JavaScript en un HTML

**Forma 1;** Ejecutándolo con la etiqueta script.

    <script>
        var fecha = new Date();
        document.write("Hoy es "+ fecha.getDate() + "/" + fecha.getMonth() + "/" + fecha.gethYear())
    </script>

**Forma 2;** Ejecutándolo desde un archivo externo que enlazamos a .

    <script src="script.js"></script>

---

### Compatibilidad entre navegadores

Hay día de hoy es más compatible que años atras, pero seguimos teniendo muchas funciones que son diferentes en cada navegador por lo que  lo correcto es probar en todos los navegadores y asegurarnos de que funcionan correctamente en todos, el problema es que existen muchos navegadores web para comprobar la compatibilidad con todo es ***[Can I Use](https://caniuse.com/)***

---

### Resolución de problemas de compatibilidad en una Aplicación Web

Es muy importante **testear la compatibilidad** de la que hablamos para asegurarnos de que en diferentes dispositivos y  navegadores funciona correctamente todo y cumple las expectativas de lo esperado, este tipo de testeos y comprobaciones debemos de realizarlas cuando hagamos proyectos web para todo el mundo y no dirigido a un sistema o equipos en concreto.

---

# Lenguajes de Programación en Entorno Cliente

Vamos a ver algunos lenguajes de programación conocidos de Entorno Cliente:

---

### JavaScript
- **JavaScript** es un lenguaje de programación ligero, un lenguaje interpretado, más conocido como lenguaje de scripting para páginas web.
- Es un lenguaje Orientado a objetos

![TUC](https://cdn-icons-png.flaticon.com/128/5968/5968292.png)

---

### TypeScript

- **[TypeScript](https://www.typescriptlang.org/)** es un lenguaje de programación desarrollado por Microsoft que está construido a base de JavaScript, pero este es una versión mejorada de JavaScript.

![TUC](https://cdn.icon-icons.com/icons2/2415/PNG/96/typescript_plain_logo_icon_146316.png)

---

### jQuery

- **[jQuery](https://jquery.com/)** es una librería para JavaScript desarrollada en 2006 que nos permite simplificar la forma en la que accedemos al DOM.

![TUC](https://cdn.icon-icons.com/icons2/2415/PNG/96/jquery_original_wordmark_logo_icon_146447.png)

---

### Angular.JS
- **[Angular](https://angular.io/)** es un framework mantenido por Google, que sirve para desarrollar aplicaciones web de estilo SPA o de tipo
web progresivas PWA, sirve para tanto móvil como ordenador.

![TUC](https://cdn.icon-icons.com/icons2/2107/PNG/96/file_type_angular_icon_130754.png)

---

### React.JS
- **[React](https://es.react.dev/)** es otra biblioteca de JavaScript que utiliza para hacer interfaces de usuario.

![TUC](https://cdn.icon-icons.com/icons2/2415/PNG/96/react_original_wordmark_logo_icon_146375.png)

---

### Node.js
- **[Node](https://nodejs.org/es)** es una plataforma de ejecución de JavaScript de propósito general, con ella puedes ejecutar JavaScript fuera del navegador, todo lo contrario a la funcionalidad clásica de JavaScript.

![TUC](https://cdn.icon-icons.com/icons2/2107/PNG/96/file_type_node_icon_130301.png)

---

# Características de los Lenguajes de Script. Ventajas y Desventajas

Vamos a ver las diferencias generales entre los lenguajes de Scripting y los de programación tradicional:

---
| **Lenguajes de scripting**               | **Lenguajes de programación**     |
|------------------------------------------|-----------------------------------|
| Específicos de plataforma                | Independientes de la plataforma   |
| (Mayoritariamente) interpretado          | Compilado                         |
| Más lento en tiempo de ejecución         | Más rápido en tiempo de ejecución |
| Menos intensivo en código                | Más intensivo en código           |
| Crea aplicaciones como parte de un stack | Crea aplicaciones independientes  |


---
# Tecnologías y Lenguajes Asociados. Integración del Código con las Etiquetas HTML

Veremos la siguiente aplicación web realizada con HTML, CSS y JS

[GitHub](https://github.com/AdriiUcha03/Proyecto1/tree/master/app_web)

---

# Herramientas de Programación

Algunas herramientas de programación que podemos utilizar para programar web son:

- Visual Studio Code
- Webstorm
- Chrome DevTools