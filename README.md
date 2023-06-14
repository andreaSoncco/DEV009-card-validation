# Tarjeta de crédito válida

## Índice

* [1. Definición del Proyecto](#1-proyecto)
* [2. Principales Usuarios](#2-resumen-del-proyecto)
* [3. Objetivos de los Usuarios con Relación al Producto](#3-consideraciones-generales)
* [4. Utilidad e Importancia de la Página](#4-hito-criterios-de-aceptación-mínimos-del-proyecto)

***

## 1. DEFINICIÓN DEL PROYECTO

El Presente Proyecto de Card Validation es sobre la interfaz de un Banco donde podemos direccionarnos a Banca Por Internet para conocer nuestro Estado de Cuenta, aquí se aplica la validación de una tarjeta de per persona natural o empresa para permitirles ver su Estado de Cuenta. Asimismo, se debe mostrar los últimos 4 dígitos de la tarjeta en la página. 

1.1.	PROTOTIPO DE BAJA FIDELIDAD

Se uso un prototipo muy sencillo de Figma para representar la interfaz de la estructura de la web y el diseño principal de las páginas tal como se muestran en las imágenes:

Página 0

![gráfica del prototipo pagina0](imagen0.png)

Página 1

![gráfica del prototipo pagina0](pagina1.jpg)

Página 2

![gráfica del prototipo pagina0](pagina2.jpg) 

1.2.	DESARROLLO DEL PROYECTO

Para entender este trabajo empezaremos por explicar la estructura de la página Web, la cual cuenta con tres ventanas y se hizo con HTML, consta del siguiente cuerpo:

A.	PAGINA PRINCIPAL: Donde se encuentra el Encabezado con el Nombre de la Empresa: BANCO PISAQ y su logo correspondiente, el botón de acceso a Banca por Internet y debajo en el pie de página nos encontramos con la información de referencia sobre la Empresa para contactarnos con ellos y conocer su horario de atención. Asimismo, la página principal contiene una imagen del Banco que ilustre mejor su visión y los servicios que ofrece.

B.	SEGUNDA PÁGINA: Abarca el acceso a Banca por Internet donde se encuentra la plantilla de los datos que llenar para acceder al Estado de Cuenta.

C.	ÚLTIMA PÁGINA: Nos brinda información sobre si la tarjeta es valida y nos resalta los cuatro últimos dígitos de la tarjeta. Por último, nos indica si se nos permitirá ver nuestro Estado de Cuenta posteriormente.

Seguidamente, luego de implementar la estructura en el HTML se trabajo con JAVASCRIPT para incorporar las dos funcionalidades necesarias:

A.	FUNCIONALIDAD DE VALIDAR TARJETA
Para validar la tarjeta aplicamos el Algoritmo de Luhn, también llamado algoritmo de módulo 10, es un método de suma de verificación, se utiliza para validar números de identificación. Este algoritmo es simple y sigue los siguientes pasos:

*	Obtenemos la reversa del número a verificar (que solamente contiene dígitos [0-9]); 
*	A todos los números que ocupan una posición par se les debe multiplicar por dos, si este número es mayor o igual a 10, debemos sumar los dígitos del resultado; el número a verificar será válido si la suma de sus dígitos finales es un múltiplo de 10.

B.	FUNCIONALIDAD DE MOSTRAR SOLO LOS ÚLTIMOS 4 DÍGITOS
Para solo mostrar los últimos 4 dígitos también se usaron las posiciones (i) y se coloco como condición la siguiente:

if (i>(número de posiciones desde 0-5))

Entendiendo que de cada arreglo de números el programa tomaría solo las últimas cuatro posiciones.

Luego de la ejecución de las funciones, se trabajó en el diseño de estilo de la pagina con CSS donde se usaron los dos colores característicos del Banco PISAQ: el verde y morado. Adicionalmente se uso el gris y blanco para darle un aspecto neutral y un diseño sencillo.

La presentación de la página web se muestra a continuación:

Página Principal

![gráfica de la pagina0](pagina3.jpg)

Página Secundaria

![gráfica de la pagina1](pagina4.jpg)

Última Página

![gráfica de la pagina2](pagina5.jpg) 

Por último, se probaron los Tests con npm test y corrieron todos como se muestra en pantalla:

![gráfica de la pagina2](test.jpg) 

## 2. PRINCIPALES USUARIOS

Los principales usuarios de esta página web son los clientes del Banco PISAQ que queriendo ingresar a su Estado de Cuenta ingresan a la interfaz para acceder a su Cuenta. Otros usuarios también serían los clientes potenciales del Banco que entran a la página con la finalidad se informarse y conocer más de la empresa. 

### OBJETIVOS DE LOS USUARIOS CON RELACIÓN AL PRODUCTO

Los usuarios ya mencionados anteriormente pueden tener dos tipos de objetivos:
A.	OBJETIVOS PRIMARIOS
El objetivo principal del Usuario es poder Acceder a su Estado de Cuenta para lo cual es necesario validar su tarjeta de crédito
B.	OBJETIVOS SECUNDARIOS
*	Informarse y conocer del Banco en su presentación
*	Saber la dirección de la agencia más cercana
*	Conocer su horario de atención


## 3. UTILIDAD E IMPORTANCIA DE LA PÁGINA WEB

Esta página es útil para realizar operaciones financiaras dentro del Banco Pisaq, para ello es que valida su tarjeta de crédito. También es importante para representar y proyectar diversos pensamientos, ideas, deseos y creencias de la empresa para que de esta manera se promueva la venta de servicios financieros. 
Es un espacio que ayuda tener mayor alcance en el mercado y fidelizar los clientes del Banco que se beneficiaran de poder acceder a su Cuenta sin necesidad de asistir presencialmente a la agencia central.

![gráfica de la pagina2](https://elcomercio.pe/resizer/Qg2q3p2xigsAoB8vwmCcl877T-M=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/UEENUT6R7JF35LGIH3WF5TF7JU.jpg) 
