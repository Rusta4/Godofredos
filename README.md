<h1>ASIX2 Proyecto - Godofredo`s                          ®️</h1>


<!-- Presentación de la idea del proyecto -->
<details>
  <summary><h2>📖 Presentación de la idea del proyecto</h2></summary>
  <br>
<p>Estamos creando una plataforma web similar a Hack The Box, pero totalmente enfocada en el campo de la ciberseguridad. Como equipo, nuestra misión es ofrecer un espacio donde los profesionales de la seguridad informática puedan colaborar, compartir herramientas, scripts y proyectos que aborden distintas áreas de la ciberseguridad, desde la evaluación de vulnerabilidades hasta la automatización de auditorías.

El proyecto que estamos desarrollando durante el segundo y tercer trimestre es la continuación directa del trabajo realizado en el primer proyecto. En esta nueva fase, implementaremos de manera completa tecnologías clave como Docker, con el objetivo de crear un despliegue de contenedores. Esta red permitirá a los usuarios desarrollar y compartir entornos avanzados para pruebas de seguridad, maximizando la eficiencia y precisión mediante configuraciones reproducibles y escalables.

Una de las redes de contenedores contará con un firewall implementado mediante pfSense, configurado en un contenedor gateway para la red privada. Este firewall permitirá definir y aplicar políticas estrictas para controlar el tráfico entrante, saliente y lateral, asegurando el aislamiento de servicios sensibles y ofreciendo un control avanzado mediante su interfaz gráfica o mediante scripts automatizados.

Por otro lado, un contenedor basado en Ubuntu gestionará las copias de seguridad, utilizando un script personalizado con rsync para realizar copias incrementales programadas mediante crontab, con almacenamiento en destinos locales.

Con estas características, nuestra plataforma no solo facilitará la colaboración entre profesionales de la ciberseguridad, sino que también garantizará entornos seguros y herramientas integradas para el desarrollo y la protección de proyectos en el campo de la seguridad informática.</p>

</details>
<!-- -------------------------------------------------------------------------- -->

<!-- Nuestros Objetivos -->
<details>
  <summary><h2>🎯 Nuestros Objetivos</h2></summary>
  <br>
<p>Nuestro objetivo es proporcionar una herramienta que no solo centralice el desarrollo en ciberseguridad, sino que también fomente una colaboración más efectiva entre expertos y entusiastas de la seguridad informática. Al reunir recursos, herramientas y proyectos en un solo lugar, buscamos facilitar el acceso a soluciones innovadoras y prácticas que puedan ser aprovechadas por toda la comunidad.</p>
  
![image](https://github.com/Rusta4/Godofredos/blob/main/fotos_memoria/diagrama-red.png)

</details>
<!-- -------------------------------------------------------------------------- -->

<!-- Tecnologías Usadas -->
<details>
  <summary><h2>🌐 Tecnologías Usadas</h2></summary>
  <br>
<p>En este proyecto, se han seleccionado las siguientes tecnologías para crear un entorno virtualizado y una aplicación web efectiva:</p>

<h4>1. Proxmox</h4>
<p>Proxmox es una plataforma de virtualización de código abierto que combina la gestión de máquinas virtuales y contenedores en un entorno centralizado. Ofrece una solución integral para optimizar el uso de los recursos del servidor, permitiendo administrar múltiples entornos desde una única interfaz. Además, facilita la creación de copias de seguridad, la migración en vivo de máquinas y la gestión avanzada del almacenamiento, lo que la convierte en una herramienta robusta para centros de datos y servidores privados.</p>

<h4>2. Máquinas Virtuales (VM)</h4>
<p>Las máquinas virtuales permiten ejecutar varios sistemas operativos independientes en un único hardware físico. Esto resulta útil tanto para pruebas como para la implementación de aplicaciones en entornos aislados, garantizando que los fallos o cambios en una máquina no afecten a las demás. Además, las VM mejoran la seguridad y la flexibilidad del sistema, permitiendo la asignación dinámica de recursos y facilitando la escalabilidad según las necesidades del proyecto.</p>

<h4>3. HTML (HyperText Markup Language)</h4>
<p>HTML es el lenguaje de marcado fundamental para la creación de páginas web. Define la estructura básica del contenido mediante etiquetas, como encabezados, párrafos, imágenes y enlaces, que los navegadores web interpretan para mostrar el contenido de forma visual. Es el pilar de cualquier sitio web, proporcionando la base sobre la cual se construyen elementos interactivos y visuales mediante otras tecnologías como CSS y JavaScript.</p>

<h4>4. CSS (Cascading Style Sheets)</h4>
<p>CSS es el lenguaje utilizado para controlar la presentación y el diseño de las páginas web. Permite separar el contenido (HTML) de la presentación, facilitando el mantenimiento y la actualización del estilo visual de un sitio. Con CSS se puede ajustar el diseño, los colores, las fuentes y el espaciado de los elementos, asegurando que las páginas web sean atractivas y responsivas, adaptándose a diferentes tamaños de pantalla y dispositivos.</p>

<h4>5. JavaScript</h4> 
<p>JavaScript es un lenguaje de programación esencial para el desarrollo web, utilizado para crear contenido dinámico e interactivo en las páginas. Permite modificar la estructura del documento HTML y los estilos CSS en tiempo real, lo que mejora la experiencia del usuario. Además, JavaScript es fundamental para el desarrollo de aplicaciones de una sola página (SPA), donde se gestionan las interacciones del cliente sin tener que recargar toda la página. Con el uso de bibliotecas y frameworks como React, Angular o Vue.js, JavaScript facilita la creación de interfaces ricas y funcionales.</p> 

<h4>6. Node.js</h4> 
<p>Node.js es un entorno de ejecución para JavaScript que permite desarrollar aplicaciones del lado del servidor. Gracias a su modelo asíncrono y basado en eventos, es altamente eficiente para manejar múltiples solicitudes simultáneamente. Se utiliza para crear APIs, gestionar autenticación, procesar datos en tiempo real y conectar con bases de datos como MongoDB o PostgreSQL. Su compatibilidad con frameworks como Express.js facilita el desarrollo de aplicaciones escalables y rápidas, convirtiéndolo en una opción clave para el backend en aplicaciones web modernas.</p>

<h4>7. Firebase</h4> 
<p>Firebase es una plataforma de desarrollo de aplicaciones basada en la nube, que incluye una base de datos NoSQL en tiempo real. Es ideal para aplicaciones que requieren un manejo eficiente de grandes volúmenes de datos, ya que permite almacenar, sincronizar y recuperar información de forma rápida y escalable. Además, proporciona herramientas para autenticación, alojamiento (hosting) y analítica, lo que facilita el desarrollo completo de aplicaciones web y móviles.</p> 


<h4>8. Docker</h4> 
<p>Docker es una plataforma que utiliza contenedores para simplificar el desarrollo, despliegue y ejecución de aplicaciones. Permite empaquetar una aplicación y todas sus dependencias en una "imagen", asegurando que funcione de manera consistente en diferentes entornos. Al usar Docker, se reduce la necesidad de configurar entornos específicos en cada servidor, lo que agiliza la implementación y mejora la escalabilidad y portabilidad de las aplicaciones.</p> 


<h4>Conclusión</h4> 
<p>Estas tecnologías forman un conjunto sólido y flexible que permite el desarrollo de aplicaciones web dinámicas, escalables y seguras. Gracias a su integración eficiente, se garantiza un entorno de trabajo optimizado para las necesidades del proyecto, desde la virtualización y el manejo de contenedores hasta la gestión de la seguridad en la red y la implementación de las tecnologías backend.

</p>

</details>
<!-- -------------------------------------------------------------------------- -->


<!-- Funcionalidades -->
<details>
  <summary><h2>🔨 Funcionalidades</h2></summary>
  <br>
  <p>A lo largo de este proyecto, se pretende implementar las siguientes funcionalidades:</p>
  
  <table>
    <thead>
      <tr>
        <th>#</th>
        <th>Funcionalidad</th>
        <th>Descripción</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Alpine compartidos</td>
        <td>Usar dos Alpines para poder tener mucha más capacidad de procesamiento y almacenamiento. De esta manera, podemos tener una web funcional mucho más rápida y ligera.</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Desplegar contenedores Docker en la web</td>
        <td>Permitir al usuario desplegar contenedores Docker en la web personalizando las características de lanzamiento, es decir: seleccionar S.O. y la versión de este mismo.</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Visualizar y descargar archivos</td>
        <td>Implementar una sección en la web que permita a los usuarios registrados visualizar y descargar pequeños informes y guías sobre CTFs y herramientas de ciberseguridad.</td>
      </tr>
      <tr>
        <td>4</td>
        <td>Descargar ISOs de diferentes S.O.</td>
        <td>Permitir a aquellos usuarios ya registrados, poder descargar la ISO de aquellos sistemas operativos disponibles en la web.</td>
      </tr>
      <tr>
        <td>5</td>
        <td>ChatBot de atención al cliente (opcional)</td>
        <td>Como no contamos con un servicio de atención al cliente, hemos planteado la idea de implementar un pequeño chatBot acompañado de inteligencia artificial para que pueda responder y solventar aquellos pequeños problemas que presenten los usuarios.</td>
      </tr>
    </tbody>
  </table>
</details>
<!-- -------------------------------------------------------------------------- -->


<!-- Organización: -->

<details>
  <summary><h2>📁 Organización</h2></summary>
  

| Responsable             | Tareas |
|-------------------------|--------|
| 🟡 **Nicolás Guerra**    | - Proxmox  |  
|                         | - Docker  |  
|                         | - Seguridad del S.O.  |  
|                         | - Iptables  |  
|                         | - Nginx  |
|                         | - HTML  |
|                         |  -  CSS  |
|                         | - Ngrok ( B4D1T )|
| 🟠 **Adrià Trillo**      | - Seguridad del S.O.  |  
|                         | - Docker  |
|                         | - Iptables  |
|                         | - Nginx  |
|                         | - HTML  |
|                         |  -  CSS  |  
| 🟢 **Edward Murphy**     | - CSS  |  
|                         | - Docker  |  
|                         | - JavaScript  |  
|                         | - Node.js  |  
|                         | - Nginx  |  
|                         | - Firebase  |


</details>
<!-- -------------------------------------------------------------------------- -->



<!-- Diagramas -->
<details>
  <summary><h2>📈 Diagramas</h2></summary>

  <details>
    <summary>&nbsp;&nbsp;&nbsp;&nbsp;🎓 <b>Diagrama Gantt</b></summary>
    <br>
    <table>
  <thead>
    <tr>
      <th>TAREA</th>
      <th>DESCRIPCIÓN</th>
      <th>PRIORIDAD</th>
      <th>FECHA</th>
      <th>PARTICIPANTES</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Acabar de configurar pfSense</td>
      <td>Configurar una regla del pfSense para poder acceder a su configuración sin necesidad de desactivar el firewall.</td>
      <td>Baja-Media</td>
      <td>14/02/2025</td>
      <td>Adrià</td>
    </tr>
    <tr>
      <td>Retocar pequeños detalles de la web</td>
      <td>Retocar pequeños errores y bugs de la web, principalmente en los archivos .js.</td>
      <td>Media</td>
      <td>20/02/2025</td>
      <td>Murphy</td>
    </tr>
    <tr>
      <td>Optimizar la base de datos</td>
      <td>Optimizar la base de datos para mejorar su funcionamiento, ya que presentaba fallos.</td>
      <td>Media-Alta</td>
      <td>28/02/2025</td>
      <td>Murphy</td>
    </tr>
    <tr>
      <td>Conexión a internet en la red interna</td>
      <td>Permitir que la máquina Alpine que alberga los dockers tenga acceso a internet.</td>
      <td>Media</td>
      <td>28/02/2025</td>
      <td>Nico y Adrià</td>
    </tr>
    <tr>
      <td>Poder hacer que el usuario suba archivos a la web</td>
      <td>Crear un uploader en la web para que el usuario pueda subir archivos en el apartado de documentos.</td>
      <td>Alta</td>
      <td>05/03/2025</td>
      <td>Nico</td>
    </tr>
    <tr>
      <td>Desplegar una MV en nuestra web</td>
      <td>Que el usuario pueda ejecutar una máquina virtual en la web sin necesidad de ejecutarla en local.</td>
      <td>Alta</td>
      <td>31/03/2025</td>
      <td>Nico, Adrià y Murphy</td>
    </tr>
    <tr>
      <td>Que el usuario pueda elegir las especificaciones con las que quiere la MV</td>
      <td>Permitir que el usuario elija las especificaciones de la máquina virtual antes de desplegarla.</td>
      <td>Alta</td>
      <td>20/04/2025</td>
      <td>Nico, Adrià y Murphy</td>
    </tr>
  </tbody>
</table>
  </details>

  <details>
    <summary>&nbsp;&nbsp;&nbsp;&nbsp;📊 <b>Diagrama NoSQL</b></summary>
    <br>
    <p> 
<h2>📌 "Deploys"</h2>
      
 <H3>Propósito</H3>
  
      Registra la creación inicial de usuarios con IDs únicos (initial_XXX).
  
 <h3>Campos clave</h3>
  
      {
        deployId	initial_3PXENXEXkdW1UhzBoBFOyI__	--> "ID único del usuario (prefijo initial_)."
        initialRecord	true	--> "Indica que es un registro inicial."
        note	"Documento inicial creado..."	--> "Descripción del evento."
        timestamp	24/03/2025, 5:02 PM UTC+1	--> "Fecha/hora exacta del registro."
        userId	3PXENXEXkdW1UhzBoBFOyIdu32	--> "Vincula con la colección Usuarios."
      }
 <h3>Relación</h3>
    
      → Usamos "userId" para enlazar a cada usuario con la tabla "Usuarios".
  <img src="https://github.com/user-attachments/assets/c42c9ede-86ad-4c31-a017-4d3e4e294b12" alt="LOGO-GODO" width="800" height="400" />

<h2>📌 "Solicitudes"</h2>
  <H3>Propósito</H3>

        Log de acciones importantes (registros, actualizaciones).

  <h3>Campos clave</h3>

        {
          "detalles": "Nuevo usuario registrado",
          "estado": "completado",
          "fecha_creacion": "24/03/2025, 5:02 PM UTC+1",
          "tipo": "registro",
          "userId": "3PXENXEXkdWi1UhzBoBFOyIoIq32"
        }
  <h3>Relación</h3>

      → El "userId" coincide con los "IDs" de "Tabla 1" y "Tabla 3".

<img src="https://github.com/user-attachments/assets/19bac0ba-18d3-4413-baf9-f47b1e194ecb" alt="LOGO-GODO" width="800" height="400" />    

<h2>📌 "Usuarios"</h2>

  <h3>Propósito</h3>

        Almacena toda la información del perfil del usuario.

  <h3>Campos clave</h3>

      {
          Campo	Ejemplo  --> Descripción
          email	ngg@gmail.com	--> Correo del usuario.
          nombre_usuario	ngg	 --> Alias o nombre.
          rol	usuario	Permisos --> (ej: admin, usuario).
          ip_publica	77.231.11.106	--> IP de registro.
          fecha_creacion	23/04/2025, 4:53 PM UTC+2	 --> Fecha de creación del perfil.
      }

 <h3>Relación</h3>
  
      → El "userId" en "Deploys" apunta a esta tabla.

<img src="https://github.com/user-attachments/assets/f53d5312-4104-402c-aaaf-3a4e2f270e0b" alt="LOGO-GODO" width="800" height="400" />

<h2>🎯 Conclusión </h2>
    <h4>Firebase nos está ayudando a:</h4>

      🔸 Movernos rápido (sin perder tiempo en backend).
    
      🔸 Mantener todo sincronizado (datos en tiempo real).
    
      🔸 Crecer sin dolores de cabeza (Google escala por nosotros).


  </details>

  <details>
    <summary>&nbsp;&nbsp;&nbsp;&nbsp;🛜 <b>Diagrama de red</b></summary>
    <br>
    <p>El diagrama de red que presentamos en este proyecto es mucho más sencillo que el anterior. En el diagrama previo, todas las máquinas virtuales se encontraban en un entorno Proxmox, lo que generaba una dispersión mayor, incluso dentro de la simplicidad que Proxmox nos ofrece. En esta nueva versión, hemos optado por utilizar contenedores para reemplazar las máquinas virtuales, lo que nos permite una mayor unificación y organización, todo alojado en nuestra máquina con Alpine Linux. Además, hemos configurado un firewall en pfSense, el cual está ajustado para permitir el acceso a los recursos de los contenedores Docker en Alpine a través de puertos específicos, así como a la web alojada en Nginx.</p>
    <img src="https://github.com/Rusta4/Godofredos/blob/main/fotos_memoria/diagrama-red.png" alt="Diagrama de red" width="1375" height="735" />
  </details>


  <details>
    <summary>&nbsp;&nbsp;&nbsp;&nbsp;📋 <b>Diagrama Web</b></summary>
    <br>
    <p>El mapa de la web muestra una estructura clara y funcional centrada en la página principal (HOME), que actúa como el núcleo desde donde se accede a las tres secciones principales: Docker, ISO files y Hacking tools. La navegación por la web es totalmente gratuita y no es necesario registrarse ni iniciar sesión para explorar el contenido general. Sin embargo, si se quiere descargar archivos o desplegar contenedores, es obligatorio iniciar sesión.

En la sección de Inicio se presentan de forma directa las tres áreas disponibles. Docker permite desplegar contenedores Docker personalizados. ISO files ofrece descargas de imágenes ISO de distintas distribuciones de Linux. Hacking tools contiene informes técnicos sobre cómo usar herramientas de análisis en Linux, con fines educativos o administrativos.

La autenticación se gestiona desde Iniciar sesión, donde se puede acceder, registrarse o recuperar la contraseña mediante un código de verificación. Una vez autenticado, el usuario puede entrar a su perfil y modificar datos como usuario, contraseña o correo.

La sección About Us ofrece información básica sobre la web y permite acceder rápidamente a las opciones de registro e inicio de sesión si se quiere usar alguna funcionalidad avanzada. Toda la estructura está pensada para que la navegación sea directa, modular y enfocada en el acceso a recursos técnicos y la gestión del perfil del usuario.</p>
<img src="https://github.com/Rusta4/Godofredos/blob/main/fotos_memoria/diagrama-web.png" alt="LOGO-GODO" width="900" height="500" />
  </details>
---
</details>
<!-- -------------------------------------------------------------------------- -->


<!-- Página Web -->
<details>
  <summary><h2>💻 Página Web</h2></summary>
  <details>
  <summary>&nbsp;&nbsp;&nbsp;&nbsp;💭 <b>Mockup</b></summary>
    <br>
    <p>La primera pantalla es la de bienvenida, diseñada para captar la atención del usuario mediante un video de fondo que aporta dinamismo y atractivo visual. El mensaje principal invita a explorar el foro y acceder a repositorios destacados, acompañado de un botón de llamada a la acción que dirige a los usuarios a conocer los servicios disponibles. Justo debajo, se presentan de forma accesible las categorías más populares: Docker, Hacking Tools e ISO Files, facilitando la navegación hacia los temas de interés.</p>

  <p>En la sección de Docker, se incluye un panel interactivo que permite seleccionar y desplegar contenedores, eligiendo la ISO deseada junto con su versión correspondiente.</p>

  <p>La página de Hacking Tools ofrece una colección de informes técnicos que explican cómo utilizar diversas herramientas de análisis en entornos Linux, enfocados en fines educativos y de administración de sistemas.</p>

  <p>En la sección de ISO Files, se pone a disposición una amplia variedad de imágenes ISO de distintas distribuciones de Linux, listas para su descarga de forma sencilla y directa.</p>

  <p>Finalmente, el apartado "Mi perfil" muestra los datos de la cuenta del usuario y proporciona funciones como el cambio de contraseña, actualización de correo electrónico y otros ajustes de perfil.</p>
  
<img src="https://github.com/Rusta4/Godofredos/blob/main/fotos_memoria/tres-primeras.png" alt="LOGO-GODO" width="1000" height="500" />




<img src="https://github.com/Rusta4/Godofredos/blob/main/fotos_memoria/4-ultimas_2.png" alt="LOGO-GODO" width="1000" height="500" />
  </details>

  
  <details>
  <summary>&nbsp;&nbsp;&nbsp;&nbsp;🎨 <b>Paleta De Colores</b></summary>
    <br>
      <p>Esta paleta de colores combina el blanco, gris claro, azul oscuro y verde fuerte para equilibrar simplicidad, profesionalismo y dinamismo. El blanco aporta claridad y limpieza, mientras que el gris claro ofrece neutralidad y elegancia sin desentonar. El azul oscuro transmite confianza y seriedad, siendo ideal para entornos corporativos, y el verde fuerte añade energía y frescura, destacando elementos clave como llamadas a la acción. En conjunto, crean una armonía visual que es funcional y atractiva.</p>
<img src="https://github.com/user-attachments/assets/4a00d276-8ad7-4cf6-a7fb-11ecbbd096f1" alt="LOGO-GODO" width="900" height="250" />
  </details>

  <details>
  <summary>&nbsp;&nbsp;&nbsp;&nbsp;👀 <b>Logo</b></summary>
     <br>
      <p>Usaremos el primer logo para nuestra web porque refleja simplicidad y profesionalismo, alineándose con el estilo minimalista de marcas tecnológicas modernas. El diseño en blanco y negro aporta una estética limpia y elegante, lo que facilita su integración en diferentes plataformas. Además, el animal icónico en el logo le da personalidad y un toque distintivo sin sobrecargar el diseño.</p>
<img src="https://github.com/user-attachments/assets/a8580f0e-db47-4891-bf4a-0d3fd1cccb1d" alt="LOGO-GODO" width="400" height="400" />
  </details>

  <details>
  <summary>&nbsp;&nbsp;&nbsp;&nbsp;🔗 <b>Funcionalidades Web</b></summary>
     <br>
<br>
<h2>⚙️ Funcionalidades</h2>
<table>
  <thead>
    <tr>
      <th>ID</th>
      <th>Prioridad</th>
      <th>Objetivo</th>
      <th>Estado</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>ID0</td>
      <td>Media</td>
      <td>Registrar usuarios</td>
      <td>Hecho</td>
    </tr>
    <tr>
      <td>ID1</td>
      <td>Media</td>
      <td>Iniciar sesión</td>
      <td>Hecho</td>
    </tr>
    <tr>
      <td>ID2</td>
      <td>Alta</td>
      <td>Desplegar contenedores en la web</td>
      <td>Hecho</td>
    </tr>
    <tr>
      <td>ID3</td>
      <td>Alta</td>
      <td>Personalizar el S.O. del contenedor</td>
      <td>Hecho</td>
    </tr>
    <tr>
      <td>ID4</td>
      <td>Alta</td>
      <td>Descargar archivos</td>
      <td>Hecho</td>
    </tr>
    <tr>
      <td>ID5</td>
      <td>Media</td>
      <td>Pop up de cookies</td>
      <td>Hecho</td>
    </tr>
    <tr>
      <td>ID6</td>
      <td>Media</td>
      <td>Recuperar contraseña</td>
      <td>Hecho</td>
    </tr>
    <tr>
      <td>ID7</td>
      <td>Media</td>
      <td>Cambiar de usuario</td>
      <td>Hecho</td>
    </tr>
    <tr>
      <td>ID8</td>
      <td>Media</td>
      <td>Cambiar el email</td>
      <td>Hecho</td>
    </tr>
  </tbody>
</table>

  </details>
</details>


<!-- -------------------------------------------------------------------------- -->




  <details>
  <summary><h2>🛡️ pfSense</h2></summary>

    
<p>
Un <b>firewall</b> es un dispositivo de seguridad creado para supervisar, <b>filtrar y gestionar el tráfico de red</b>,     autorizando o impidiendo datos según <b>reglas establecidas</b>. Su finalidad primordial es salvaguardar redes y aparatos frente a <b>accesos no permitidos</b>, <b>ciberataques</b> y la difusión de software malicioso. Es una de las principales defensas en ciberseguridad, <b>actuando como un muro</b> entre una red segura (como la red interna) y una que no lo es (como Internet)

---

Dentro de los firewalls, estas serían sus principales usos:
**Seguridad de redes empresariales**: Previenen accesos no permitidos a los servidores y a la información interna.

**Protección en dispositivos personales**: Bloquean la entrada de programas maliciosos y ataques enfocados a computadoras y dispositivos móviles.

**Gestión del tráfico de red**: Filtran tanto el tráfico que entra como el que sale de acuerdo a las políticas de seguridad definidas.

**Prevención de ciberataques**: Contribuyen a reducir riesgos como los ataques de denegación de servicio (DDoS) y accesos indebidos.

**Supervisión y verificación**: Capturan el flujo de datos en la red para examinar potenciales riesgos o debilidades

---

Un firewall lo podemos diferenciar por distintas categorias, a esto nos referimos a <b>Firewalls de filtrado de paquetes</b>, <b>Firewalls de inspección con estado</b>, <b>Firewalls de aplicación</b>, entre otros.

En nuestro caso, a la hora de estar configurando nuestro Firewall con <b>pfSense</b>, este estaría funcionando al mismo tiempo como un <b>Firewall de inspección con estado</b> y también como un <b>Firewall de aplicación</b>.

Para empezar, definimos nuestro firewall como uno de Inspección con Estado ya que pfSense nos permite examinar las conexiones en curso y también a autorizar o impedir el tráfico de su red, dependiendo de la necesidad. 
Además las configuraciones de firewall que establecemos en <b>WAN</b> y <b>LAN</b> permiten un control <b>específico</b> del tráfico según su IP, puerto y protocolo.

Como ya hemos comentado en los parrafos anteriores, también lo definimos como un <b>Firewall de Aplicación</b> ya que hemos establecido reglas de <b>Port Forwarding (NAT)</b> para poder dirigir el tráfico de la WAN hacia servicios concretos en la LAN. Asímismo, como es típico de un firewall que esta funcionando en la séptima capa del modelo OSI (Aplicación), gracias a esto nos posibilita gestionar y alterar el tráfico según servicios y puertos que nosotros especifiquemos.
</p>
<details>
  <summary>&nbsp;&nbsp;&nbsp;&nbsp;💀 <b>INSTALACIÓN FW</b></summary>
    <br>
      <p>  1 -->Instalación de pfSense y configuración de 2 tarjetas de red 
        
      WAN: 100.77.20.38/24
      
      LAN: 10.20.30.1/24 Dentro del rango de la .100 - .150

  <h2><b>Como hacemos la comprobación de que nuestro cliente tiene salida de internet y su por qué</b></h2>

  Podemos saberlo de las siguientes maneras:
      
  <b>Realizando un ping a una IP pública</b>: Desde un dispositivo en la LAN, ejecutar ping 8.8.8.8. Si hay respuesta, indica que el equipo está   conectado a Internet y que el enrutamiento opera de manera adecuada.
        
  <b>Realizando un ping a un dominio</b>: Ejecutar ping google.com. Si este ping responde, se verifica que el DNS está funcionando de manera adecuada.
        
        
  <b>Navegando en la web</b>: Probar acceder a una página web en el navegador para verificar que todo el tráfico opera adecuadamente
              
<h2><b>¿Por qué desactivamos el cortafuegos con pfctl -d y lo volvemos a activar con pfctl -e?</b></h2>
Antes de proceder a esta siguiente parte de pfSense, explicaremos el funcionamiento de estos comandos y para que los hemos estado utilizando:

<b>pfctl -d</b>: Desactiva temporalmente el firewall de pfSense. Se emplea para prevenir que las normativas de seguridad impidan el acceso mientras establecemos la regla WAN y otros parámetros.

<b>pfctl -e</b>: Vuelve a activar el firewall después de que hayamos configurado adecuadamente las reglas de acceso. Esto asegura que el tráfico sea supervisado y regulado una vez más

  2 --> Desactivamos el firewall de pfSense mediante "pfctl -d" y configuramos mediante una Rule WAN para poder entrar a la web-page con la ip del aula.

      pfctl -d

- En pfSense, ve a Firewall > Rules > WAN:

      Action: Pass (Permitir)
      Interface: WAN
      Protocol: TCP
      Source: Network → Introduce tu red 100.77.20.0/24
      Destination: WAN Address
      Destination Port: 80 (HTTP) o 443 (HTTPS)
      Description: Permitir acceso web desde 100.77.20.0/24


  3 --> Una vez configurada la Rule, activamos de nuevo el firewall mediante "pfctl -e" y accedemos a la pfSense sin tener que desactivar el FW.
  
      pfctl -e
    
  4 --> Una vez dentro de la web de pfSense, habilitamos un "Port Forward" para poder acceder a nuestra máquina Alpine por el puerto 9443, la cual esta en nuestra LAN para poder acceder a nuestro portainer.
  
  - Dirígete a Firewall → NAT → Port Forward.
  - Añade una nueva regla:
  
        Interface: WAN
        Protocol: TCP
        Destination: WAN Address (100.77.20.38)
        Destination Port Range: 9443 (puerto de Portainer por defecto)
        Redirect Target IP: 10.20.30.100
        Redirect Target Port: 9443
        Filter Rule Association: Crear una regla de firewall automáticamente.
        Save & Apply Changes

<h2><b>Como realizamos las comprobaciones a las conexiones en el Port Forward</b></h2>

<b>Telnet</b>: Desde un equipo externo, ejecutamos <b>telnet 127.0.0.1:9443</b>. Si la conexión se logra, el redireccionamiento estaría operando.

<b>Acceso Web</b>: Si el servicio se puede acceder a través de un navegador en <b>https://127.0.0.1:9443</b>, el Port Forward estaría funcionando adecuadamente.

<b>Registros de pfSense</b>: Observar dentro de pfSense <b>"Estado > Registros del Sistema > Firewall"</b> para comprobar si el <b>tráfico</b> está siendo <b>autorizado o denegado</b>


  5 --> Vamos a realizar un "Port Forward" para que nuestro Servidor NGINX que se situa en el puerto 8082 se pueda visualizar. Tendremos que acceder mediante HTTPS
  
  - Dirígete a Firewall → NAT → Port Forward.
  - Añade una nueva regla:

        Interface: WAN
        Protocol: TCP
        Destination: WAN Address (100.77.20.38)
        Destination Port Range: 8082 (puerto de Portainer por defecto)
        Redirect Target IP: 10.20.30.100
        Redirect Target Port: 8082
        Filter Rule Association: Crear una regla de firewall automáticamente.
        Save & Apply Changes
  </p>
  </details>
  
</details>
  <details>
  <summary><h2>🤖 Proxmox</h2></summary>
  <h2>Imagen Arquitectura</h2>


<p>
Nuestra estructura de red se implementa dentro del aula, utilizando la subred <code>100.77.20.X/24</code>. Contamos con un ordenador principal que tiene instalado <strong>Proxmox</strong>, una plataforma de virtualización que permite crear y gestionar máquinas virtuales de manera eficiente.
</p>

<p>
Dentro de Proxmox, hemos creado dos máquinas virtuales con el sistema operativo <strong>Alpine Linux</strong>. Estas máquinas están conectadas a la red mediante un <strong>adaptador en modo puente</strong> (bridge), lo que les permite comunicarse entre sí y con el resto de la red local del aula.
</p>

<p>
Cada una de estas Alpine cumple una función específica dentro del proyecto:
</p>
<ul>
  <li>Una máquina actúa como <strong>frontend</strong>, alojando el servidor web que muestra la interfaz del proyecto a los usuarios.</li>
  <li>La otra funciona como <strong>backend</strong>, gestionando la lógica del sistema y respondiendo a las peticiones del frontend.</li>
</ul>

<p>
Esta arquitectura permite separar claramente la capa visual del sistema de la lógica de negocio, lo cual facilita el desarrollo, la organización del código y una futura escalabilidad del proyecto.
</p>
<br>

![image](https://github.com/Rusta4/Godofredos/blob/main/fotos_memoria/diagrama-red.png)

<h2>¿Qué es un servidor web?</h2>
<p>Un servidor web es un tipo de software cuya función principal es gestionar las solicitudes de los clientes, es decir, los navegadores web, y proporcionarles los recursos solicitados a través de la red. Estas solicitudes se realizan principalmente mediante los protocolos HTTP o HTTPS, que son los estándares utilizados para la transmisión de datos en la web.</p>

<p>Cuando un usuario escribe una URL en su navegador, como por ejemplo: www.godo.com, se inicia una secuencia en la que el navegador traduce esa dirección a una IP utilizando el sistema DNS. Luego, se envía una solicitud al servidor web correspondiente. Este servidor recibe la petición, interpreta qué recurso se solicita como una página HTML o una imagen, lo busca y lo devuelve al navegador, que finalmente lo presenta al usuario.</p>

<p>El contenido que puede entregar un servidor web no se limita solo a HTML. También puede incluir:</p>
<ul>
  <li>Archivos CSS para el diseño de la página.</li>
  <li>Imágenes y archivos multimedia como videos o audios.</li>
  <li>Scripts de cliente como JavaScript que agregan interactividad.</li>
  <li>Archivos ejecutados en el servidor como PHP o Python para contenido dinámico.</li>
  <li>Archivos descargables como PDF o ZIP.</li>
</ul>

<p>En nuestro caso, el servidor web es una parte clave del proyecto. Utilizamos Node.js con el framework Express, lo que nos permitió levantar un servidor local de manera sencilla y flexible. Este servidor cumple con tareas como:</p>
<ul>
  <li>Escuchar y procesar las solicitudes que llegan desde el navegador.</li>
  <li>Buscar los archivos solicitados dentro del sistema de archivos del servidor.</li>
  <li>Responder con los archivos si existen, o mostrar un mensaje de error si no se encuentran.</li>
  <li>Simular durante el desarrollo el comportamiento real que tendría nuestra aplicación una vez desplegada en internet.</li>
</ul>

<p>Gracias a esta arquitectura, pudimos mantener una buena organización del proyecto, separando la parte visual (frontend) de la lógica de entrega de archivos, y dejamos preparado todo para un posible despliegue final en un entorno real.</p>
<br>

<h2>¿Qué es un hosting?</h2>
<p>El hosting, o alojamiento web, es un servicio que permite almacenar los archivos de un sitio web en un servidor conectado a internet, para que cualquier persona pueda acceder a ellos desde cualquier lugar. Este servicio garantiza que el sitio esté disponible las 24 horas del día, los 7 días de la semana. Existen distintos tipos de hosting según las necesidades del proyecto: compartido, dedicado, o en la nube, cada uno con diferentes niveles de rendimiento, seguridad y escalabilidad.</p>
<br>
  </details>


<details>
<summary><h2>  🐝noVNC</h2></summary>

<h2><b>server.js</b></h2>
<p>Hemos implementado un servidor backend con Express.js que nos permite desplegar contenedores Docker de Windows 10 de manera automatizada. A través del endpoint /deploy-windows, enviamos parámetros como el nombre del contenedor y los puertos a utilizar, y el servidor ejecuta un comando docker run para iniciar el contenedor con la configuración necesaria. Además, hemos habilitado CORS para permitir solicitudes desde nuestro frontend y asegurar la comunicación entre ambos.</p>

      const express = require('express');
      const cors = require('cors');
      const { exec } = require('child_process');
      const app = express();
      const port = 3000;
      
      // Middleware para parsear JSON
      app.use(express.json());
      
      // Habilitar CORS para que pueda ser accedido desde cualquier origen o desde un origen específico
      app.use(cors({
          origin: ['http://100.77.20.60:8082', 'http://godo.tallerdekirby.es', 'https://godo.tallerdekirby.es'], // Permitir solicitudes desde tu frontend
          methods: ['GET', 'POST'],
          allowedHeaders: ['Content-Type'],
      }));
      
      // Ruta para desplegar el sistema operativo
      app.post('/deploy-windows', (req, res) => {
          const { containerName, puerto, puerto2, os, version } = req.body;
      
          // Asignar el nombre del contenedor desde la solicitud o generar uno único
          const container = containerName || `container-${Math.floor(Math.random() * 1000) + 1}`;
      
          // Determinar la imagen de Docker, los puertos y las variables de entorno según el sistema operativo
          let dockerImage;
          let dockerPorts;
          let additionalEnv = "";
          let deviceOptions = ""; // Variable para manejar dispositivos
      
          if (os === 'windows') {
              // Imágenes para Windows
              dockerImage = `dockurr/windows:latest`;
              dockerPorts = `-p ${puerto}:8006 -p ${puerto2}:3389`;
              additionalEnv = '--env RAM_SIZE="512M" --env KVM="N"';
              deviceOptions = '--device /dev/kvm --device /dev/net/tun'; // Dispositivos para Windows
          } else if (os === 'ubuntu') {
              // Imágenes para Ubuntu (sin RAM_SIZE y puerto 80)
              dockerImage = 'dorowu/ubuntu-desktop-lxde-vnc';
              dockerPorts = `-p ${puerto}:80`;  // El puerto para Ubuntu será el 80
              additionalEnv = "";  // No se incluye RAM_SIZE en Ubuntu
              deviceOptions = "";  // No se incluyen dispositivos para Ubuntu
          } else if (os === 'mac') {
              // Imágenes para MacOS
              dockerImage = 'dockurr/macos:latest';
              dockerPorts = `-p ${puerto}:8006 -p ${puerto2}:3389`;
              additionalEnv = '--env RAM_SIZE="512M" --env KVM="N"';
              deviceOptions = '--device /dev/kvm --device /dev/net/tun'; // Dispositivos para Mac
          } else {
              // Si no se proporciona un SO válido, devolver error
              return res.status(400).send({ error: 'Sistema operativo no válido' });
          }
      
          // Comando Docker para crear el contenedor
          const dockerCommand = `docker run -d ${dockerPorts} --name ${container} ${additionalEnv} ${deviceOptions} --cap-add NET_ADMIN --restart unless-stopped --privileged --dns 8.8.8.8 --dns 8.8.4.4 ${dockerImage}`;
      
          // Ejecutar el comando Docker
          exec(dockerCommand, (error, stdout, stderr) => {
              if (error) {
                  console.error(`Error al ejecutar el comando Docker: ${error.message}`);
                  return res.status(500).send({ error: `Error al crear el contenedor: ${error.message}` });
              }
              if (stderr) {
                  console.error(`Error en la salida estándar: ${stderr}`);
                  return res.status(500).send({ error: `Error: ${stderr}` });
              }
      
              console.log(`Contenedor creado con nombre: ${container} y puerto: ${puerto}`);
      
              // Verifica los puertos expuestos del contenedor
              exec(`docker port ${container}`, (portError, portStdout, portStderr) => {
                  if (portError) {
                      console.error(`Error al obtener los puertos: ${portError.message}`);
                      return res.status(500).send({ error: `Error al obtener puertos: ${portError.message}` });
                  }
                  if (portStderr) {
                      console.error(`Error en la salida de puertos: ${portStderr}`);
                      return res.status(500).send({ error: `Error en la salida de puertos: ${portStderr}` });
                  }
      
                  console.log(`Puertos del contenedor: ${portStdout}`);
      
                  // Retornar el puerto generado
                  res.send({
                      message: `Contenedor creado con éxito: ${container}`,
                      puerto: puerto, // Retornamos el puerto generado
                      contenedor: container,  // Retornamos el nombre del contenedor
                      puertos: portStdout // Información sobre los puertos
                  });
              });
          });
      });
      
      // Iniciar el servidor
      app.listen(port, () => {
          console.log(`Servidor backend escuchando en el puerto ${port}`);
      });
  <h2><b>docker.html</b></h2>

<p>Hemos desarrollado un flujo completo para desplegar máquinas virtuales con Windows 10 utilizando Docker y un backend en Express.js. El backend expone un endpoint /deploy-windows que recibe el nombre del contenedor y los puertos, ejecutando un comando docker run para iniciar la instancia. En el frontend, antes de enviar la solicitud, verificamos si el usuario ha iniciado sesión; en caso contrario, lo redirigimos a la página de login. Generamos un nombre único para el contenedor y dos puertos aleatorios dentro del rango 8000-9000, que luego enviamos al backend. Si el despliegue es exitoso, abrimos una nueva pestaña con la dirección del puerto asignado para acceder a la máquina virtual.
</p>

        <script>
      // Verifica el estado de la sesión al cargar la página
      document.addEventListener('DOMContentLoaded', function () {
          const isLoggedIn = localStorage.getItem('isLoggedIn'); // Obtiene el estado de la sesión
  
          if (isLoggedIn === 'true') {
              document.getElementById('profile-container').style.display = 'flex'; // Muestra el contenedor del perfil
              document.getElementById('login-link').style.display = 'none';
              document.getElementById('register-link').style.display = 'none';
          }
  
          // Cargar las versiones correspondientes cuando se seleccione un SO
          document.getElementById('os').addEventListener('change', updateVersionOptions);
          updateVersionOptions();
      });
  
      // Función para actualizar las opciones de versión según el sistema operativo seleccionado
      function updateVersionOptions() {
          const os = document.getElementById('os').value;
          const versionSelect = document.getElementById('version');
          versionSelect.innerHTML = ''; // Limpiar las opciones previas
  
          let versions = [];
          if (os === 'windows') {
              versions = ['XP', '7', '10', '11'];
          } else if (os === 'ubuntu') {
              versions = ['latest'];
          } else if (os === 'mac') {
              versions = ['11', '13'];
          }
  
          versions.forEach(version => {
              const option = document.createElement('option');
              option.value = version;
              option.textContent = version;
              versionSelect.appendChild(option);
          });
      }
  
      // Función para manejar el envío del formulario
      document.getElementById('deploy-form').addEventListener('submit', async function (event) {
          event.preventDefault();
  
          const os = document.getElementById('os').value;
          const version = document.getElementById('version').value;
  
          const isLoggedIn = localStorage.getItem('isLoggedIn'); // Verifica si el usuario está logueado
  
          if (isLoggedIn !== 'true') {
              alert('Debes iniciar sesión para desplegar la máquina');
              window.location.href = '../login/login.html'; // Redirige al usuario a la página de inicio de sesión si no está autenticado
              return;
          }
  
          // Nombre único para el contenedor
          const containerName = `${os}${Math.floor(Math.random() * 1000) + 1}`;
  
          // Generar puerto aleatorio
          const puerto = getRandomPort();
          const puerto2 = getRandomPort();
  
          // Hacer la solicitud al servidor para crear el contenedor
          try {
              const response = await fetch('http://100.77.20.60:3000/deploy-windows', {
                  method: 'POST',
                  headers: {
                      'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                      containerName: containerName,
                      puerto: puerto,
                      puerto2: puerto2,
                      os: os,
                      version: version
                  })
              });
  
              if (!response.ok) {
                  throw new Error('Error al desplegar el sistema operativo');
              }
  
              const data = await response.json();
              console.log(data);
  
              // Abrir la nueva pestaña con el puerto generado
              window.open(`http://100.77.20.60:${puerto}`, '_blank');
          } catch (error) {
              console.error(error);
              alert('Error al desplegar el sistema operativo');
          }
      });
  
      // Función para generar un puerto aleatorio entre 8000 y 9000
      function getRandomPort() {
          return Math.floor(Math.random() * (9000 - 8000 + 1)) + 8000;
      }
      </script>
    
</details>

  

<details>
<summary><h2>  🔒 Seguridad</h2></summary>
<br>
<h2><b>Usuarios y contraseñas</b></h2>
<p>Con el fin de garantizar la máxima seguridad y prevenir posibles vulnerabilidades, hemos optado por asignar contraseñas únicas a cada uno de los usuarios. Estas contraseñas no han sido creadas manualmente, sino que han sido generadas automáticamente por un gestor de contraseñas, en nuestro caso, LastPass. Cada contraseña tiene una longitud de 32 caracteres e incluye una combinación de números, letras mayúsculas, minúsculas y caracteres especiales, lo que refuerza aún más la seguridad del sistema.</p>
<br>
<h2><b>Grupos y permisos</b></h2>
<p> En cuanto a la gestión de grupos y permisos, hemos realizado ajustes específicos en los permisos de los usuarios que no cuentan con privilegios de root. Como es de esperar, el usuario root tiene acceso completo y puede ejecutar cualquier comando sin necesidad de autenticación adicional. Sin embargo, hemos revisado y ajustado cuidadosamente los permisos de los usuarios comunes para minimizar los riesgos de seguridad.</p>
<br>
<p> En primer lugar, hemos configurado el sistema para evitar que los usuarios puedan ejecutar comandos con privilegios de sudo. Esta medida nos permite garantizar que, incluso si un atacante obtiene acceso al sistema a través de una reverse shell o un ataque de fuerza bruta, el usuario con el que accedan no podrá ejecutar comandos privilegiados. Además, hemos realizado una revisión exhaustiva para asegurarnos de que no haya vulnerabilidades relacionadas con el uso de SUID.</p>
<br>
<p> En segundo lugar, dado que trabajamos con Docker, inicialmente otorgamos permisos de acceso a Docker a los usuarios comunes. No obstante, con el tiempo hemos identificado que esta práctica podría representar una grave vulnerabilidad, ya que los usuarios podrían crear contenedores de Docker con privilegios elevados. Como medida de seguridad, hemos revocado estos permisos de acceso.</p>
<br>
<p>Finalmente, hemos modificado la asignación de usuarios comunes al grupo "wheel". Este grupo se utiliza en sistemas Linux para facilitar la concesión de permisos de sudo, ya que al añadir un usuario a este grupo, se le otorgan privilegios de root. Debido a las implicaciones de seguridad, hemos decidido eliminar a los usuarios comunes de este grupo para evitar riesgos innecesarios.</p>
    
</details>





<details>
  <summary><h2>💽 Backups</h2></summary>
  <br>
<p>Creamos un docker-compose.yml dentro de una carpeta llamada "Backup". Dentro de /Backup aparte del ya nombrado docker-compose.yml, está la carpeta "Scripts" en la cual se encuentra: backup.log (que contiene todos los logs del backup), backup.sh (que contiene un script que realiza el backup), también tenemos la configuración del <b>crontab</b> que regula cada cuanto se realizan los backups, ya que en el propio docker no se ejecuta dicho crontab y finalmente contamos con "init.sh" que genera el archivo de crontab, inicia el servicio de cron y mantiene el contenedor desplegado.

<b>docker-compose.yml</b>
  
      services:
        backup:
          image: ubuntu:latest
          container_name: backup
          volumes:
            - ./scripts:/scripts  # Directorio para guardar scripts
            - ./data:/data  # Carpeta con datos a respaldar
            - ./storage:/storage  # Carpeta destino del backup
            - ~/.ssh:/root/.ssh  # Asegúrate de montar la clave SSH
          command: ["/bin/bash", "-c", "/scripts/init.sh"]
          restart: unless-stopped
          networks:
            - netweb
      
      networks:
        netweb:
          driver: bridge



<b>backup.sh:</b>
    
            #!/bin/bash
            
            # Configuración
            
            REMOTE_USER="godo"                             # Usuario del servidor remoto
            
            REMOTE_HOST="127.0.0.1"                    # IP o hostname del servidor remoto
            
            REMOTE_PATH="/root/loginRegister"          # Ruta del proyecto en el servidor remoto
            
            LOCAL_BACKUP_DIR="/storage"                   # Carpeta local para guardar backups
            
            BACKUP_NAME="backup-$(date +%Y-%m-%d)"        # Nombre del directorio de backup
            
            # Crea el directorio local de backup si no existe
            
            mkdir -p "$LOCAL_BACKUP_DIR/$BACKUP_NAME"
            
            # Sincroniza la carpeta remota al directorio local
            
            rsync -avz --exclude='mysql/' --exclude='nginx/certs/' -e "ssh -i /root/.ssh/id_rsa" "$REMOTE_USER@$REMOTE_HOST:$REMOTE_PATH" "$LOCAL_BACKUP_DIR/$BACKUP_NAME"
            
            # Verifica si el backup fue exitoso
            
            if [ $? -eq 0 ]; then
            
              echo "Backup completado: $(date)" >> "$LOCAL_BACKUP_DIR/backup.log"
            
            else
            
              echo "Error al realizar el backup: $(date)" >> "$LOCAL_BACKUP_DIR/backup.log"
            
            fi
            
            # Mantener solo los 3 backups mas recientes
            cd "$LOCAL_BACKUP_DIR" || exit 1
            BACKUP_DIRS=($(ls -d backup-* | sort -r))
            
            # Si hay mas de 3 backups, elimina los mas antiguos
            if [ ${#BACKUP_DIRS[@]} -gt 3 ]; then
                for dir in "${BACKUP_DIRS[@]:3}"; do
                    rm -rf "$dir"
                    echo "Backup antiguo eliminado: $dir" >> "$LOCAL_BACKUP_DIR/backup.log"
                done
            fi
            
            # Copia completa al final de cada mes
            
            # Detectamos si mañana es el primer día de cada mes
            
            if [ "$(date -d tomorrow +%d)" -eq 01 ]; then
                    FULL_BACKUP_DIR="/storage/full_backups"
                    mkdir -p "$FULL_BACKUP_DIR"
                    FULL_BACKUP_NAME="full_backup-$(date +%Y-%m-%d).tar.gz"
            
                    # Crear un backup completo comprimido
                    tar -czf "$FULL_BACKUP_DIR/$FULL_BACKUP_NAME" -C "$LOCAL_BACKUP_DIR/$BACKUP_NAME" .
            
                    if [ $? -eq 0 ]; then
                            echo "Backup completo realizado: $FULL_BACKUP_NAME" >> "$LOCAL_BACKUP_DIR/backup.log"
            
                    else
                            echo "Error al crear el backup completo: $(date)" >> "$LOCAL_BACKUP_DIR/backup.log"
                    fi
            
                    # Mantener solo los 3 backups completos más recientes
                    cd "$FULL_BACKUP_DIR" || exit 1
                    FULL_BACKUP_FILES=($(ls full_backup-* 2>/dev/null | sort -r))
            
                    if [ ${#FULL_BACKUP_FILES[@]} -gt 3 ]; then
                            for file in "${FULL_BACKUP_FILES[@]:3}"; do
                                    rm -f "$file"
                                    echo "Backup completo antiguo eliminado: $file" >> "$LOCAL_BACKUP_DIR/backup.log"
            
                            done
                    fi
            fi

<b>crontab:</b>

      * * * * * /scripts/backup.sh >> /scripts/backup.log 2>&1


<b>init.sh:</b>

      #!/bin/bash
      
      # Actualiza e instala las herramientas necesarias
      
      apt-get update && apt-get install -y cron rsync zip openssh-client
      
      # Crea el directorio de almacenamiento si no existe
      
      mkdir -p /storage
      
      # Crea el archivo crontab para programar backups
      
      crontab /scripts/crontab
      
      # Inicia el servicio de cron
      
      service cron start
      
      # Mantén el contenedor corriendo
      
      tail -f /dev/null


<b> restore.sh: </b>

        #!/bin/bash
        
        # Configuración
        REMOTE_USER="godo"                             # Usuario del servidor remoto
        REMOTE_HOST="127.0.0.1"                    # IP o hostname del servidor remoto
        REMOTE_PATH="/root/loginRegister/"             # Ruta del proyecto en el servidor remoto
        LOCAL_BACKUP_DIR="/storage"                   # Carpeta local con los backups
        FULL_BACKUP_DIR="/storage/full_backups"       # Carpeta local con los backups completos
        
        # Función para mostrar los 3 backups más recientes
        mostrar_backups() {
            echo "Selecciona el backup que deseas restaurar:"
            BACKUPS=($(ls -d $LOCAL_BACKUP_DIR/backup-* | sort -r | head -n 3))
        
            if [ ${#BACKUPS[@]} -eq 0 ]; then
                echo "No se encontraron backups para restaurar."
                exit 1
            fi
        
            for i in "${!BACKUPS[@]}"; do
                echo "$((i + 1)). ${BACKUPS[$i]}"
            done
        }
        
        # Función para restaurar solo los archivos que han cambiado
        restaurar_backup() {
            BACKUP_SELECTED=$1
        
            echo "Restaurando el backup seleccionado: $BACKUP_SELECTED"
        
            # Usamos rsync para restaurar solo los archivos modificados o nuevos
            rsync -avz --update --exclude='mysql/' --exclude='nginx/certs/' "$BACKUP_SELECTED/" "$REMOTE_USER@$REMOTE_HOST:$REMOTE_PATH/"
        
            if [ $? -eq 0 ]; then
                echo "Restauración exitosa desde el backup: $BACKUP_SELECTED"
            else
                echo "Error al restaurar el backup desde: $BACKUP_SELECTED" >> "$LOCAL_BACKUP_DIR/restore.log"
                exit 1
            fi
        }
        
        # Mostrar los 3 backups más recientes
        mostrar_backups
        
        # Solicitar al usuario que elija un backup
        read -p "Introduce el número del backup que deseas restaurar (1-3): " BACKUP_CHOICE
        
        # Validar que la elección esté dentro del rango correcto
        if [[ "$BACKUP_CHOICE" -lt 1 || "$BACKUP_CHOICE" -gt 3 ]]; then
            echo "Selección inválida. Por favor, elige un número entre 1 y 3."
            exit 1
        fi
        
        # Llamar a la función para restaurar el backup seleccionado
        restaurar_backup "${BACKUPS[$((BACKUP_CHOICE - 1))]}"
        
        # Restaurar un backup completo (si es necesario)
        echo "Restaurando el backup completo..."
        
        # Comprobamos si hay un archivo de backup completo más reciente
        LATEST_FULL_BACKUP=$(ls -t $FULL_BACKUP_DIR/full_backup-*.tar.gz | head -n 1)
        
        if [ -n "$LATEST_FULL_BACKUP" ]; then
            # Si se encontró un archivo de backup completo, lo restauramos
            echo "Restaurando backup completo: $LATEST_FULL_BACKUP"
            tar -xzf "$LATEST_FULL_BACKUP" -C "$LOCAL_BACKUP_DIR"
        
            if [ $? -eq 0 ]; then
                echo "Restauración de backup completo exitosa: $LATEST_FULL_BACKUP"
            else
                echo "Error al restaurar el backup completo: $(date)" >> "$LOCAL_BACKUP_DIR/restore.log"
                exit 1
            fi
        else
            echo "No se encontró un backup completo reciente."
        fi
</p>
  

</details>


<details>
<summary><h2>🔌 Instalaciones</h2></summary>

<details>
  <summary>&nbsp;&nbsp;&nbsp;&nbsp;📥 <b>Proxmox</b></summary>
  <br>
  <h2>🧾 ¿Qué es Proxmox?</h2>
  <p>
    Proxmox VE es una plataforma de virtualización de código abierto que permite crear, ejecutar y gestionar máquinas virtuales 
    y contenedores desde una interfaz web fácil de usar. Es muy útil para montar laboratorios virtuales o entornos de producción ligeros.
  </p>

  <h2>🛠️ Pasos de instalación</h2>
  <ol>
    <li>Descarga la ISO desde la <a href="https://www.proxmox.com/en/downloads" target="_blank">web oficial de Proxmox</a>.</li>
    <li>Crea un USB booteable con herramientas como Rufus o BalenaEtcher.</li>
    <li>Arranca el equipo desde el USB y sigue los pasos del instalador gráfico.</li>
    <li>Durante la instalación, configura la red en el rango <code>100.77.20.0/24</code>.</li>
    <li>Accede a la interfaz web de Proxmox desde otro dispositivo a través de: <code>https://100.77.20.X:8006</code></li>
  </ol>

  <h2>🔧 Configuración en nuestro entorno</h2>
  <p>
    Hemos instalado Proxmox en un ordenador del aula con un adaptador de red en modo puente. Dentro de Proxmox tenemos:
    <ul>
      <li>Dos máquinas virtuales con Alpine Linux</li>
      <li>Una máquina virtual con Pfsense como cortafuegos</li>
    </ul>
    Todo conectado a la red <code>100.77.20.0/24</code>.
  </p>
</details>

<details>
  <summary>&nbsp;&nbsp;&nbsp;&nbsp;📥 <b>Docker-Compose</b></summary>
  <br>
  <h2>🧾 ¿Qué es Docker Compose?</h2>
  <p>
    Docker Compose es una herramienta que permite definir y ejecutar aplicaciones multicontenedor usando un archivo YAML.
    Facilita la automatización y el despliegue de entornos completos con una sola orden.
  </p>

  <h2>🛠️ Pasos de instalación en Alpine</h2>
  <ol>
    <li>Instala Docker:
      <pre><code>apk add docker</code></pre>
    </li>
    <li>Habilita e inicia el servicio Docker:
      <pre><code>rc-service docker start
rc-update add docker</code></pre>
    </li>
    <li>Instala pip y Docker Compose:
      <pre><code>apk add py3-pip
pip install docker-compose</code></pre>
    </li>
    <li>Comprueba que se ha instalado correctamente:
      <pre><code>docker-compose --version</code></pre>
    </li>
  </ol>

  <h2>🔧 Configuración en nuestro entorno</h2>
  <p>
    Hemos instalado Docker Compose en uno de los Alpine Linux que se ejecuta dentro de Proxmox. Gracias al adaptador puente,
    los contenedores pueden comunicarse entre sí y con el exterior a través de la red <code>100.77.20.0/24</code>. 
    Desde aquí gestionamos el despliegue de servicios como el servidor web, backend y otros recursos necesarios.
  </p>
</details>


  <details>
  <summary>&nbsp;&nbsp;&nbsp;&nbsp;📥 <b>Ejabberd</b></summary>
  <br>
  <details>
    <summary>💡 <b>Conceptos Básicos</b></summary>
    
### 💡 Introducción

Ejabberd es un servidor de mensajería instantánea basado en el protocolo XMPP (Extensible Messaging and Presence Protocol), diseñado para ofrecer comunicación en tiempo real de manera descentralizada, segura y escalable.


Desde su creación en 2002, ha sido una de las opciones más robustas para empresas y servicios de alto tráfico gracias a su capacidad para manejar millones de conexiones simultáneas. Su desarrollo en Erlang le permite gestionar procesos concurrentes con alta eficiencia, garantizando estabilidad, tolerancia a fallos y un rendimiento óptimo en entornos exigentes.


### ⚙️ Características Principales
<h4>1. Rendimiento</h4>
<p>Ejabberd está diseñado para manejar un alto volumen de conexiones simultáneas con un consumo eficiente de recursos. Gracias a su implementación en Erlang, puede gestionar millones de usuarios conectados al mismo tiempo sin comprometer la estabilidad del sistema. Esto lo convierte en una solución ideal para grandes plataformas de mensajería, redes sociales y aplicaciones empresariales que requieren una comunicación en tiempo real fluida y sin interrupciones.</p>

<h4>2. Escalabilidad</h4>
<p>Una de las grandes ventajas de Ejabberd es su capacidad de escalar horizontalmente. Su arquitectura modular y distribuida permite añadir más servidores al sistema para balancear la carga y mejorar el rendimiento a medida que aumenta el número de usuarios. Esto es especialmente útil para empresas y servicios en la nube que requieren una infraestructura flexible y adaptable al crecimiento.</p>

<h4>3. Seguridad</h4>
<p>La seguridad es una prioridad en Ejabberd. Implementa cifrado SSL/TLS para proteger las comunicaciones entre clientes y servidores, evitando interceptaciones o ataques de terceros. Además, permite autenticación avanzada mediante LDAP, bases de datos SQL, OAuth o mecanismos externos. También admite el uso de políticas de control de acceso (ACL) para definir permisos específicos según el rol del usuario.</p>

<h4>4. Extensibilidad</h4>
<p>Ejabberd es altamente personalizable gracias a su sistema de módulos y API. Permite la integración de plugins y funciones personalizadas para adaptarlo a necesidades específicas, como notificaciones push, almacenamiento de mensajes o integración con otros protocolos como MQTT y SIP. Esto lo hace ideal para desarrolladores que buscan ampliar sus capacidades sin modificar el núcleo del sistema.</p>

<h4>5. Compatibilidad</h4>
<p>Ejabberd es totalmente compatible con el estándar XMPP, lo que significa que puede interoperar con otros servidores y clientes XMPP sin problemas. Su flexibilidad le permite integrarse con diversas aplicaciones de mensajería instantánea como Pidgin, Conversations, Dino o Gajim, además de servicios empresariales que usan XMPP para la comunicación interna.</p>

<h4>6. Alta Disponibilidad</h4>
<p>Para entornos críticos donde el tiempo de inactividad no es una opción, Ejabberd soporta clustering. Esta función permite distribuir la carga de trabajo entre varios servidores, asegurando redundancia y tolerancia a fallos. En caso de que un nodo falle, los demás servidores siguen funcionando sin afectar la comunicación de los usuarios.</p>


### ⚖️ Comparación con Alternativas
| Característica  | Ejabberd | OpenFire | Prosody | MongooseIM |
|---------------|----------|---------|---------|-----------|
| **Lenguaje**  | Erlang   | Java    | Lua     | Erlang    |
| **Escalabilidad** | Alta | Moderada | Baja | Muy alta |
| **Consumo de recursos** | Eficiente | Moderado | Muy eficiente | Eficiente |
| **Seguridad** | Avanzada | SSL/TLS | Estándar | Avanzada |

<br>

### 📞 Clientes Compatibles
| **Cliente**            | **Características principales**                                                                           | **Plataformas**                | **Ideal para**                                      |
|-----------------------|-------------------------------------------------------------------------------------------------|--------------------------------|---------------------------------------------------|
| **Xabber**           | Cliente XMPP de código abierto, interfaz limpia y sin publicidad.           | Android                        | Usuarios de XMPP en dispositivos móviles          |
| **Trillian**         | Compatible con múltiples protocolos, sincronización entre dispositivos. | Windows, Mac, iOS, Android    | Usuarios multiplataforma y redes sociales         |
| **Stack Browser**    | Uso de múltiples aplicaciones web en un entorno organizado.                                | Windows, Mac                   | Gestión centralizada de aplicaciones web         |
| **All-in-One Messenger** | Integra WhatsApp, Telegram, Skype y Gmail.               | Windows                        | Usuarios que usan múltiples servicios de chat    |
| **Empathy**          | Soporte para texto, voz y video, compatible con varios protocolos.                              | Linux                          | Usuarios de Linux que buscan integración total   |
| **Adium**           | Cliente ligero y personalizable compatible con múltiples redes.                                | Mac                            | Usuarios de macOS                                |
| **Jitsi**           | Chat de texto, voz y videoconferencia con enfoque en seguridad.                                   | Multiplataforma                | Comunicación segura                              |
| **Digsby**          | Soporte para mensajería instantánea y redes sociales.                                        | Windows                        | Integración de mensajería y redes sociales       |

<br>

### 🛡️ Puertos de Ejabberd
| **Puerto** | **Protocolo**              | **Seguridad**                      |
|-----------|----------------------------|------------------------------------|
| **5222**  | XMPP (cliente a servidor)  | STARTTLS (cifrado opcional)       |
| **5223**  | XMPP (cliente a servidor)  | SSL/TLS (obsoleto, pero soportado) |
| **5269**  | XMPP (servidor a servidor) | STARTTLS (si el otro servidor lo admite) |
| **5280**  | HTTP (interfaz web)        | Sin cifrado (por defecto)         |
| **5443**  | HTTPS (interfaz web)       | SSL/TLS (cifrado activado)        |


  </details>

  <details>
    <summary>🚀 <b>Instalación</b></summary>
    
### 🏢 Instalación en Linux (Debian/Ubuntu)
```bash
sudo apt update && sudo apt install ejabberd -y
```

### 🧑‍💻 Preparación del entorno
<p>En nuestro caso estaremos usando un ubuntu desktop para desplegar el docker-compose y en una red interna 192.168.6.0/24.</p>

### 1️⃣ Instalación en Docker
```bash
sudo apt install docker docker-compose -y
```

### 2️⃣ Configuración de `docker-compose.yml`
```yaml
services:
  xmpp-server:
    image: ejabberd/ecs:latest
    container_name: xmpp_server
    environment:
      - EJABBERD_ADMIN=admin@localhost
      - EJABBERD_PASSWORD=passwd123123
      - EJABBERD_DOMAIN=localhost
    ports:
      - "5222:5222" # XMPP client connection port
      - "5280:5280" # Web admin port
    volumes:
      - ejabberd_data:/var/lib/ejabberd
    restart: unless-stopped


  pidgin_1:
    image: lscr.io/linuxserver/pidgin:latest
    container_name: pidgin_client_1
    networks:
      - pidgin_network
    environment:
      - PUID=1000
      - PGID=1000
      - TZ=Etc/UTC
    volumes:
      - /config_x:/config
    ports:
      - 3000:3000
    restart: unless-stopped


  pidgin_2:
    image: lscr.io/linuxserver/pidgin:latest
    container_name: pidgin_client_2
    networks:
      - pidgin_network
    environment:
      - PUID=1000
      - PGID=1000
      - TZ=Etc/UTC
    volumes:
      - /config_p:/config
    ports:
      - 3001:3001
    restart: unless-stopped


networks:
  pidgin_network:
    driver: bridge


volumes:
  ejabberd_data:

```
<p>Compose creado por L0rd19</p>

### 3️⃣ Desplegar el Contenedor
```bash
docker-compose up -d
```

### 4️⃣ Crear Usuario
```bash
docker exec -it ejabberd ejabberdctl register admin midominio.com contraseña123
```

### 5️⃣ Accediendo a los contenedores
Para acceder a los contenedores simplemente tendremos que dirigirnos al navegador dentro  de nuestra red interna y, ponemos la IP junto a los puertos de los docker: 

<b>docker1</b>
```bash
http://192.168.6.7:3000
```

<b>docker2</b>
```bash
docker2: https://192.168.7:3001
```

<b>Interfaz Web</b>
```bash
Interfaz web: http://192.168.7:5280/admin
```


  </details>

  <details>
    <summary>🛡️ <b>Seguridad y Buenas Prácticas</b></summary>
    
- **Usar TLS para cifrar las conexiones**.
- **Configurar autenticación externa (LDAP, SQL)**.
- **Restringir acceso a la interfaz web** (`http://localhost:5280/admin`).

  </details>

  <details>
    <summary>📚 <b>Conclusión</b></summary>
    
Ejabberd es una solución potente y flexible para la mensajería en tiempo real. Gracias a su arquitectura escalable, seguridad avanzada y compatibilidad con el protocolo XMPP, se convierte en una opción ideal para empresas y proyectos que requieren comunicación eficiente y confiable.
  
  </details>
</details>
  

</details>
 



<details>
  <summary><h2>🧱 Arquitectura de SW</h2></summary>
  <br>
  <h2>⚙️ Funcionalidades</h2>
  <table>
  <thead>
    <tr>
      <th>ID</th>
      <th>Prioridad</th>
      <th>Objetivo</th>
      <th>Funcionalidad</th>
      <th>Disparador</th>
      <th>Fecha Entrega</th>
      <th>Estado</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>ID0</td>
      <td>Media</td>
      <td>Desplegar la web</td>
      <td>Desplegar la web del proyecto por la IP del pfsense y por el puerto 8082</td>
      <td>No hay disparador, simplemente buscar por el navegador</td>
      <td>03/02/2025</td>
      <td>Hecho</td>
    </tr>
    <tr>
      <td>ID1</td>
      <td>Media</td>
      <td>Retocar pequeños detalles de la web</td>
      <td>Retocar pequeños errores y bugs de la web. Principalmente con los archivos .js</td>
      <td>Unos pop ups que se hacen js que a veces se bugean</td>
      <td>20/02/2025</td>
      <td>Hecho</td>
    </tr>
    <tr>
      <td>ID2</td>
      <td>Alta</td>
      <td>Desplegar una MV en nuestra web</td>
      <td>Que el usuario pueda ejecutar una MV en la web para que no tenga que ejecutarlo en local</td>
      <td>Un botón verde que ponga “start” y que al darle se despliegue una MV.</td>
      <td>31/03/2025</td>
      <td>Hecho</td>
    </tr>
    <tr>
      <td>ID3</td>
      <td>Alta</td>
      <td>Que el usuario pueda elegir las especificaciones con las que quiere la MV</td>
      <td>Desplegar una MV con las especificaciones elegidas por el usuario</td>
      <td>Unos selectores desplegables con diferentes opciones para que el usuario pueda elegir</td>
      <td>20/04/2025</td>
      <td>Hecho</td>
    </tr>
    <tr>
      <td>ID4</td>
      <td>Media</td>
      <td>Optimizar la base de datos</td>
      <td>Optimizar la base de datos para que funcione mejor de lo que funcionaba antes, ya que también presentaba fallos.</td>
      <td>-</td>
      <td>28/02/2025</td>
      <td>Hecho</td>
    </tr>
    <tr>
      <td>ID5</td>
      <td>Alta</td>
      <td>Descargar y visualizar archivos</td>
      <td>Permitir al usuario descargar archivos desde la web y visualizarlos directamente si es posible.</td>
      <td>Botón de descarga y previsualización integrada</td>
      <td>--</td>
      <td>Hecho</td>
    </tr>
    <tr>
      <td>ID6</td>
      <td>Media</td>
      <td>Registrar usuarios</td>
      <td>Crear un sistema de registro que permita a los usuarios crear una cuenta con sus datos básicos.</td>
      <td>Formulario de registro</td>
      <td>--</td>
      <td>Hecho</td>
    </tr>
    <tr>
      <td>ID7</td>
      <td>Media</td>
      <td>Iniciar sesión</td>
      <td>Permitir a los usuarios acceder a su cuenta mediante un formulario de autenticación.</td>
      <td>Formulario de inicio de sesión</td>
      <td>--</td>
      <td>Hecho</td>
    </tr>
    <tr>
      <td>ID8</td>
      <td>Alta</td>
      <td>Diversificar recursos</td>
      <td>Separar el frontend y el backend en dos máquinas Alpine diferentes para distribuir la carga.</td>
      <td>Configuración en Proxmox con adaptador puente</td>
      <td>--</td>
      <td>Hecho</td>
    </tr>
  </tbody>
</table>

  <h2><br><br>📝 Listado de Tareas</h2>
  
  <details>
    <summary><u>Objetivo 1: Configurar Alpine para almacenar los docker</u></summary>
    <ul>
      <li>1.1 <b>[Nico]</b> Instalación y configuración básica del Alpine</li>
      <li>CP1.2 – Se ha instalado una máquina Alpine en el proxmox y se ha configurado el Alpine para que guarde los dockers.</li>
    </ul>
  </details>

  <details>
    <summary><u>Objetivo 2: Migrar la web al Alpine</u></summary>
    <ul>
      <li>2.1 <b>[Murphy]</b> Configuración básica del nginx del Alpine</li>
      <li>CP1.2 – Se ha configurado el nginx junto a sus archivos para que almacene la web que teníamos del primer proyecto.</li>
    </ul>
  </details>

  <details>
    <summary><u>Objetivo 3: Acabar de configurar la base de datos</u></summary>
    <ul>
      <li>4.1 <b>[Nico]</b> Solventar ciertos errores de la base de datos</li>
      <li>CP1.2 – Hay que acabar de matizar y de concretar ciertos puntos con la BBDD para que todo funcione bien y se definan bien las configuraciones.</li>
    </ul>
  </details>

  <details>
    <summary><u>Objetivo 4: Actualizar el github</u></summary>
    <ul>
      <li>5.1 <b>[Murphy]</b> Poner al día la memoria del GitHub.</li>
      <li>CP1.2 – A medida que vayamos acabando todas las tareas anteriores, las iremos actualizando en el GitHub.</li>
    </ul>
  </details>

  <details>
    <summary><u>Objetivo 5: Mejorar la web del proyecto</u></summary>
    <ul>
      <li>6.1 <b>[Murphy]</b> Reparar los bugs, errores y otras funciones.</li>
      <li>CP1.2 – A pesar de tener la web en un estado muy avanzado, tenemos aún ciertos puntos que mejorar, así como algunos archivos js que presentan algunos problemas.</li>
    </ul>
  </details>

  <details>
    <summary><u>Objetivo 6: Desplegar una MV en la web</u></summary>
    <ul>
      <li>7.1 <b>[Nico, Adrià y Murphy]</b> Investigar cómo desplegar una MV para que el usuario pueda iniciarla en la web</li>
      <li>CP1.2 – La idea principal del proyecto es que el usuario pueda desplegar una MV en la web, sin necesidad de estar ejecutándola en local y, que además pueda elegir las especificaciones de la MV que quiera. Sin embargo, primero probaremos de desplegar la MV con unas características predefinidas y posteriormente le añadiremos la personalización.</li>
    </ul>
  </details>

  <details>
    <summary><u>Objetivo 7: Personalizar la MV de la web</u></summary>
    <ul>
      <li>7.1 <b>[Nico, Adrià y Murphy]</b> Personalizar las características con las que se despliega la MV en la web.</li>
      <li>CP1.2 – Una vez que hemos logrado desplegar la MV en la web, el siguiente punto es que el usuario pueda elegir sistema operativo junto a componentes para que la MV se despliegue a su gusto y pueda realizar todas las configuraciones que el usuario quiera.</li>
    </ul>
  </details>


  <h2><br><br>💻 ARQUITECTURA DEL SISTEMA</h2>

<table>
  <thead>
    <tr>
      <th>Componente de sistema</th>
      <th>Tecnología o framework</th>
      <th>Versión</th>
      <th>Puerto</th>
      <th>Descripción de uso o requisitos</th>
      <th>Enlace a documentación o información adicional</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Hardware</td>
      <td>Proxmox, Alpine, Adaptador puente (Proxmox), Pfsense</td>
      <td>Proxmox: 8.3.1, Alpine: 3.21.2</td>
      <td>100.77.20.0/24</td>
      <td>Usaremos un Proxmox para alojar el Pfsense y dos máquinas Alpine. El adaptador puente en Proxmox nos permite que ambas Alpines estén conectadas a la red 100.77.20.0/24.</td>
      <td>Documentación oficial de Proxmox, Alpine y Pfsense</td>
    </tr>
    <tr>
      <td>Sistema operativo</td>
      <td>Proxmox, Alpine (Linux), Pfsense</td>
      <td>Proxmox: 8.3.1, Alpine: 3.21.2</td>
      <td>No</td>
      <td>Proxmox sirve como hipervisor para ejecutar las máquinas virtuales. Alpine se usa como sistema base en los contenedores Docker. Pfsense actúa como firewall y gestor de red.</td>
      <td>Documentación oficial de Proxmox y Alpine</td>
    </tr>
    <tr>
      <td>Docker y orquestación</td>
      <td>Docker, Docker Compose</td>
      <td>Docker: 26.0.1, Compose: 2.24.5</td>
      <td>Depende del contenedor</td>
      <td>Utilizamos Docker para contenerizar servicios como el servidor web o el backend, y Docker Compose para gestionar múltiples contenedores y sus configuraciones desde un solo archivo YAML.</td>
      <td><a href="https://docs.docker.com/compose/">Documentación oficial de Docker Compose</a></td>
    </tr>
    <tr>
      <td>Interfaz de usuario (Frontend)</td>
      <td>HTML, CSS, JS</td>
      <td>HTML5, CSS3, ES1</td>
      <td>No</td>
      <td>HTML para la estructura de la web, CSS para los estilos visuales y JS para añadir interactividad en el navegador.</td>
      <td>Documentación de HTML, CSS y JS</td>
    </tr>
    <tr>
      <td>Lógica de negocio (Backend)</td>
      <td>Node.js, PHP</td>
      <td>Node.js: 23.7.0, PHP: 8.4.3</td>
      <td>3000</td>
      <td>Node.js y PHP permiten procesar peticiones del usuario, manejar la subida de archivos y desplegar máquinas virtuales desde la web.</td>
      <td>Documentación oficial de Node.js y PHP</td>
    </tr>
    <tr>
      <td>Servidor web</td>
      <td>Nginx</td>
      <td>Nginx: 1.26.3</td>
      <td>8082</td>
      <td>Se utiliza un contenedor Docker con Nginx para servir la web. El acceso se realiza a través del puerto 8082 configurado en Pfsense.</td>
      <td>Documentación oficial de Nginx</td>
    </tr>
  </tbody>
</table>

</details>

<details>
  <summary><h2>🎞️ NGROK</h2></summary>
<b>1: Crear cuenta de ngrok</b>

<b>2: Descargar nkrok:</b>
  ``` bash
  apt install ngrok
  ```
o
  ``` bash
  curl -sSL https://ngrok-agent.s3.amazonaws.com/ngrok.asc      | tee /etc/apt/trusted.gpg.d/ngrok.asc >/dev/null       && echo "deb https://ngrok-agent.s3.amazonaws.com buster main"        | tee /etc/apt/sources.list.d/ngrok.list        && apt update   && apt install ngrok
  ```
o
  ``` bash
  wget https://bin.equinox.io/c/bNyj1mQVY4c/ngrok-v3-stable-linux-amd64.tgz

  #despuesd de hacer el wget hacemos esto para descomprimir
  tar -xvzf ngrok-v3-stable-linux-amd64.tgz -C /usr/local/bin/
  ```
<b>3: Añadir authtoken que esta en setup & installation(seleccionar la plataforma):.</b>
  ``` bash
  ngrok config add-authtoken <TokenEnPerfil>
  ```
<b>4: Crear ngrok.service en "/etc/systemd/system/ngrok.service":</b>
  ``` bash
[Unit]
Description=Ngrok Tunnel Service
After=network.target

[Service]
ExecStart=/usr/local/bin/ngrok tcp 22
Restart=always
User=root
WorkingDirectory=/usr/local/bin

[Install]
WantedBy=multi-user.target
  ```
<b>5: Hacer un reload del daemon:</b>
  ``` bash
  systemctl daemon-reload
  ```
<b>6: Hacer un restart del ngrok.service:</b>
  ``` bash
  systemctl restart ngrok.servive
  ```
<b>7: Hacer status para saber si esta activo:</b>
  ``` bash
  systemctl status ngrok.servive
  ```
<b>8: Ir a la web de Ngrok (en endpoints) copiar despues del tcp://:</b>
  ``` bash
  #ejemplo solo coger 7.tcp.eu.ngrok.io y el puerto que lo necesitaremos
  tcp://7.tcp.eu.ngrok.io:19089
  ```
<b>9: Conectarte por ssh con el siguiente comando desde donde quieres poder ver el proxmox en este caso:</b>
  ``` bash
  ssh -L 8006:localhost:8006 root@7.tcp.eu.ngrok.io -p 19089
  ```
</details>




<details>
  <summary><h2>🗝️ Cifrado</h2></summary>

  <details>
  <summary><h2>🔐 Funciones de Hash – Parte I</h2></summary>
  <br>

<h2><b>🧠 ¿Qué son las funciones hash?</b></h2>
<p>Las funciones hash son componentes esenciales en la criptografía moderna y la seguridad informática. Son algoritmos que transforman datos de entrada de cualquier longitud en un valor de salida de longitud fija, normalmente expresado como una cadena hexadecimal. Este valor es conocido como <b>hash</b> o <b>digest</b>.</p>

<p>Una buena función hash debe cumplir con ciertas propiedades:</p>
<ul>
  <li><b>Determinismo:</b> siempre produce el mismo hash para la misma entrada.</li>
  <li><b>Unidireccionalidad:</b> es prácticamente imposible obtener la entrada original a partir del hash.</li>
  <li><b>Resistencia a colisiones:</b> no deben existir dos entradas distintas que generen el mismo hash.</li>
  <li><b>Difusión:</b> un pequeño cambio en la entrada produce un hash completamente diferente (efecto avalancha).</li>
</ul>
<p>Gracias a estas propiedades, los hashes se utilizan en verificación de integridad, autenticación, estructuras de datos como tablas hash, y sistemas de blockchain.</p>
<br>

<h2><b>📚 Tipos comunes de funciones hash</b></h2>
<p>Existen diversos algoritmos hash, algunos ya obsoletos y otros considerados seguros hoy en día. La elección del algoritmo depende del uso específico y del nivel de seguridad requerido.</p>

<table>
  <thead>
    <tr><th>🔤 Nombre</th><th>📏 Longitud</th><th>🔐 Estado</th><th>✅ Uso actual</th></tr>
  </thead>
  <tbody>
    <tr><td>MD5</td><td>128 bits</td><td>❌ Obsoleto</td><td>⚠️ No recomendado para seguridad</td></tr>
    <tr><td>SHA-1</td><td>160 bits</td><td>⚠️ Vulnerable</td><td>✅ Aún presente en sistemas antiguos</td></tr>
    <tr><td>SHA-256</td><td>256 bits</td><td>🟢 Seguro</td><td>✅ Estándar en blockchain, TLS, etc.</td></tr>
    <tr><td>SHA-512</td><td>512 bits</td><td>🟢 Seguro</td><td>✅ Usado para firmar y autenticar datos</td></tr>
    <tr><td>SHA-3</td><td>Variable</td><td>🟢 Seguro</td><td>✅ Alternativa robusta a SHA-2</td></tr>
  </tbody>
</table>
<br>

<h2><b>❗ ¿Qué es una colisión?</b></h2>
<p>Una colisión se produce cuando dos entradas diferentes generan el mismo valor hash. En teoría, todas las funciones hash pueden presentar colisiones porque transforman un número prácticamente infinito de entradas posibles en una cantidad finita de salidas. Sin embargo, una buena función hash hace que encontrar colisiones sea computacionalmente inviable.</p>

<p>Cuando se descubren métodos para generar colisiones con relativa facilidad, el algoritmo queda comprometido. Es el caso de MD5 y SHA-1, que fueron abandonados tras demostraciones prácticas de colisiones. Actualmente, algoritmos como SHA-2 y SHA-3 ofrecen una mayor resistencia.</p>
<br>

<h2><b>⚙️ ¿Cómo se generan los hashes?</b></h2>
<p>El proceso depende del algoritmo, pero generalmente implica varias operaciones matemáticas y lógicas, como sustituciones, rotaciones, mezclas, permutaciones y compresión de bloques. Se busca que el resultado final no revele patrones ni relaciones con la entrada original.</p>

<p>En Python, podemos generar un hash SHA-256 así:</p>
<pre><code>import hashlib
data = \"Hola mundo\"
hash_result = hashlib.sha256(data.encode()).hexdigest()
print(\"Hash:\", hash_result)</code></pre>

<p>Este hash puede luego usarse para verificar que el contenido no se ha modificado.</p>
<br>

<h2><b>📌 ¿Para qué se usan los hashes?</b></h2>
<p>Las funciones hash están presentes en infinidad de aplicaciones. Su versatilidad se debe a que permiten comprobar la integridad de datos sin necesidad de conocer el contenido original completo.</p>

<table>
  <thead>
    <tr><th>📍 Aplicación</th><th>📝 Descripción</th></tr>
  </thead>
  <tbody>
    <tr><td>🧾 Integridad</td><td>Comparar el hash de un archivo con el original para detectar modificaciones.</td></tr>
    <tr><td>🔑 Contraseñas</td><td>Guardar solo el hash, no la contraseña original, reduciendo riesgos si hay fuga.</td></tr>
    <tr><td>✍️ Firmas digitales</td><td>Los datos se hashean antes de ser firmados para validar la fuente.</td></tr>
    <tr><td>📦 Blockchain</td><td>Los bloques se enlazan mediante hashes, asegurando inmutabilidad de la cadena.</td></tr>
  </tbody>
</table>
<br>

<h2><b>💰 ¿Cómo se usan en criptomonedas?</b></h2>
<p>En criptomonedas como Bitcoin o Ethereum, las funciones hash no solo protegen los datos: son el núcleo del funcionamiento del sistema.</p>

<ul>
  <li><b>⛏️ Prueba de trabajo (Proof of Work):</b> Los mineros deben calcular millones de hashes hasta encontrar uno con características específicas (como varios ceros al inicio). Esto asegura que agregar un nuevo bloque requiere un gran esfuerzo computacional.</li>
  <li><b>🔗 Integridad de la cadena:</b> Cada bloque contiene el hash del bloque anterior. Si alguien modifica un bloque anterior, se rompe la cadena porque el hash ya no coincide.</li>
  <li><b>📧 Claves públicas y direcciones:</b> Las direcciones de las carteras se generan hasheando claves públicas. Así, el sistema es más seguro y anónimo.</li>
</ul>
<br>

<h2><b>🌈 ¿Qué es una Rainbow Table?</b></h2>
<p>Una Rainbow Table es una técnica de ataque usada para recuperar contraseñas a partir de sus hashes. Funciona como una base de datos que contiene hashes precalculados de millones de combinaciones de contraseñas posibles. Si el atacante obtiene un hash, puede buscar en la tabla para ver si encuentra una coincidencia.</p>

<p>Para protegerse contra este tipo de ataques, se usa un <b>salt</b>: un valor aleatorio añadido a la contraseña antes de aplicarle la función hash. Esto impide que el mismo texto tenga siempre el mismo hash, inutilizando las rainbow tables.</p>

</details>

<details>
  <summary><h2>🔐 Funciones de Hash – Parte II</h2></summary>
  <br>

<h2><b>💥 Hashcat</b></h2>
<p><b>Hashcat</b> es una de las herramientas más potentes y populares para el "cracking" de contraseñas. Está diseñada para recuperar contraseñas perdidas a través de técnicas como fuerza bruta, ataques por diccionario y ataques híbridos. A diferencia de otras herramientas similares, Hashcat puede utilizar tanto la CPU como la GPU para realizar cálculos, lo que le permite realizar millones de intentos por segundo.</p>

<p>Además, soporta más de 300 algoritmos de hash, incluyendo MD5, SHA-1, SHA-256, bcrypt, entre otros. Es ampliamente utilizada en auditorías de seguridad y en entornos de pruebas de penetración (pentesting).</p>

<table>
  <thead>
    <tr><th>🛠️ Modo</th><th>📌 Descripción</th></tr>
  </thead>
  <tbody>
    <tr><td>📖 Diccionario</td><td>Prueba una lista de palabras comunes. Rápido y efectivo si la contraseña es predecible.</td></tr>
    <tr><td>🎭 Máscara</td><td>Permite definir un patrón (ej: ?l?l?l?d?d para "abc12"). Ideal cuando conocemos parte del formato.</td></tr>
    <tr><td>🎲 Fuerza bruta</td><td>Prueba todas las combinaciones posibles. Muy costoso en tiempo si la longitud de la contraseña es alta.</td></tr>
    <tr><td>🧠 Reglas</td><td>Transforma entradas del diccionario en tiempo real con reglas como añadir números, mayúsculas, etc.</td></tr>
  </tbody>
</table>

<pre><code>hashcat -m 0 -a 0 hashes.txt diccionario.txt</code></pre>

<p>Este comando usa modo 0 (hashes MD5) y ataque 0 (diccionario).</p>
<br>

<h2><b>🐍 Generar hashes en Python</b></h2>
<p>Python facilita el uso de funciones hash gracias a su módulo <code>hashlib</code>. Esto permite crear aplicaciones personalizadas de seguridad, validar integridad de archivos o incluso simular el funcionamiento de criptomonedas.</p>

<p>Ejemplo para generar un hash SHA-512:</p>
<pre><code>import hashlib

contraseña = "segura123"
hash = hashlib.sha512(contraseña.encode()).hexdigest()
print("Hash SHA-512:", hash)</code></pre>

<p>También se pueden usar algoritmos como <code>sha256</code>, <code>md5</code>, o incluso <code>blake2b</code> para necesidades más específicas.</p>
<br>

<h2><b>🐧 Hashes de contraseñas en Linux (OpenSSL)</b></h2>
<p>Linux utiliza hashes seguros para almacenar contraseñas en archivos como <code>/etc/shadow</code>. Para generar estos hashes de manera segura desde terminal, OpenSSL es una excelente opción.</p>

<p>Por ejemplo, para generar un hash SHA-512:</p>
<pre><code>openssl passwd -6 "miclavefuerte"</code></pre>

<p>La opción <code>-6</code> indica que se usará SHA-512, uno de los algoritmos más robustos actualmente. El resultado es un hash con salt incorporado, compatible con los estándares modernos de Linux.</p>

<p>Esto es útil cuando necesitamos crear manualmente contraseñas para nuevos usuarios o probar mecanismos de autenticación.</p>
<br>

<h2><b>⚔️ Diferencias entre Hash y KDF</b></h2>
<p>Muchas veces se confunde una función hash con una función derivadora de clave (<b>KDF</b>, por sus siglas en inglés: Key Derivation Function), pero tienen finalidades distintas.</p>

<p>Mientras que un hash sirve para representar datos de forma compacta e irrepetible, un KDF transforma una entrada como una contraseña en una clave segura apta para ser usada en sistemas criptográficos, generalmente aplicando miles de iteraciones, añadiendo <code>salt</code> y dificultando ataques por fuerza bruta o rainbow tables.</p>

<table>
  <thead>
    <tr><th>🧩 Característica</th><th>🔒 Hash</th><th>🛡️ KDF</th></tr>
  </thead>
  <tbody>
    <tr><td>Propósito</td><td>Resumen de datos</td><td>Derivación de claves seguras</td></tr>
    <tr><td>Salt</td><td>No requiere</td><td>Requiere (para evitar ataques de diccionario)</td></tr>
    <tr><td>Iteraciones</td><td>No</td><td>Sí, generalmente miles</td></tr>
    <tr><td>Resistencia a ataques</td><td>Media</td><td>Alta</td></tr>
    <tr><td>Ejemplos</td><td>SHA-256, SHA-512</td><td>PBKDF2, bcrypt, scrypt, Argon2</td></tr>
  </tbody>
</table>

<p>En resumen: <b>usa siempre KDFs para contraseñas</b>, y no funciones hash simples. Es una de las bases de la seguridad moderna.</p>

</details>


<details>
  <summary><h2>🔐 Algoritmos Criptográficos</h2></summary>
  <br>

<h2><b>🔒 Blowfish</b></h2>
<p><b>Blowfish</b> es un algoritmo de cifrado simétrico diseñado en 1993 por el criptógrafo Bruce Schneier como una alternativa rápida, libre de patentes y segura frente a los algoritmos existentes en aquel momento, como DES.</p>

<p>Funciona dividiendo los datos en bloques de 64 bits y aplicando 16 rondas de cifrado utilizando una clave que puede variar entre 32 y 448 bits. Su diseño incorpora una estructura tipo Feistel, lo que permite un cifrado y descifrado eficiente.</p>

<p>Sin embargo, debido a su tamaño de bloque limitado (64 bits), hoy se considera inadecuado para nuevas implementaciones, ya que puede ser vulnerable a ataques sobre grandes volúmenes de datos (por ejemplo, en modos de cifrado como CBC).</p>

<table>
  <thead>
    <tr><th>📌 Propiedad</th><th>🔎 Detalle</th></tr>
  </thead>
  <tbody>
    <tr><td>Longitud de bloque</td><td>64 bits</td></tr>
    <tr><td>Rondas</td><td>16</td></tr>
    <tr><td>Clave</td><td>32 a 448 bits</td></tr>
    <tr><td>Estado actual</td><td>Obsoleto (reemplazado por AES en la mayoría de sistemas)</td></tr>
  </tbody>
</table>

<p><b>Ejemplo práctico con OpenSSL:</b></p>
<pre><code>openssl enc -bf -in archivo.txt -out archivo_cifrado.txt -pass file:./clave.key -pbkdf2</code></pre>
<br>

<h2><b>🧬 Twofish</b></h2>
<p><b>Twofish</b> es el sucesor de Blowfish y fue desarrollado por el mismo equipo (incluido Schneier) en 1998. Fue uno de los cinco finalistas en la competición para elegir el estándar AES. Aunque no ganó (lo hizo Rijndael), Twofish sigue siendo considerado uno de los algoritmos más robustos disponibles.</p>

<p>Opera con bloques de 128 bits y acepta claves de 128, 192 o 256 bits. Su diseño está optimizado tanto para software como para hardware, y presenta una fuerte resistencia contra ataques de análisis diferencial y lineal.</p>

<p>Una de sus ventajas clave es su flexibilidad: puede usarse tanto de forma independiente como combinado con otros cifrados en sistemas de almacenamiento y protección de datos.</p>

<table>
  <thead>
    <tr><th>🔬 Característica</th><th>📋 Valor</th></tr>
  </thead>
  <tbody>
    <tr><td>Tamaño de bloque</td><td>128 bits</td></tr>
    <tr><td>Longitud de clave</td><td>128, 192 o 256 bits</td></tr>
    <tr><td>Velocidad</td><td>Muy alta, ideal para sistemas embebidos y discos</td></tr>
    <tr><td>Seguridad</td><td>Resistente a ataques conocidos</td></tr>
    <tr><td>Uso actual</td><td>VeraCrypt, cifrado de discos, soluciones open source</td></tr>
  </tbody>
</table>

<p><b>Ejemplo de uso en VeraCrypt:</b></p>
<pre><code>veracrypt --create volumen.tc --size 500M --encryption Twofish --hash sha-512 --filesystem ext4 --password '1234'</code></pre>
<br>

<h2><b>🔑 Diffie-Hellman</b></h2>
<p><b>Diffie-Hellman</b> no es un algoritmo de cifrado tradicional, sino un protocolo de intercambio seguro de claves. Fue publicado en 1976 por Whitfield Diffie y Martin Hellman, marcando el nacimiento de la criptografía moderna de clave pública.</p>

<p>Su objetivo es permitir que dos partes establezcan una clave secreta compartida a través de un canal inseguro, sin necesidad de intercambiar directamente la clave. Utiliza conceptos matemáticos basados en exponenciación modular y teoría de números.</p>

<p>Hoy en día es la base de muchos protocolos de seguridad modernos como TLS (HTTPS), SSH o VPNs. Cuando se combina con técnicas como <b>Perfect Forward Secrecy</b> (PFS), garantiza que las claves anteriores no se vean comprometidas incluso si la clave actual es revelada.</p>

<table>
  <thead>
    <tr><th>🔍 Característica</th><th>📄 Descripción</th></tr>
  </thead>
  <tbody>
    <tr><td>Tipo</td><td>Intercambio de claves (no cifrado)</td></tr>
    <tr><td>Base matemática</td><td>Exponenciación modular</td></tr>
    <tr><td>Seguridad</td><td>Depende de la dificultad del logaritmo discreto</td></tr>
    <tr><td>Usos modernos</td><td>TLS, VPNs, SSH</td></tr>
    <tr><td>Ventaja clave</td><td>No se intercambia la clave secreta por la red</td></tr>
  </tbody>
</table>

<p><b>Generar parámetros DH en OpenSSL:</b></p>
<pre><code>openssl dhparam -out dh2048.pem 2048</code></pre>

<p>Este comando crea un conjunto de parámetros Diffie-Hellman con un nivel de seguridad de 2048 bits, adecuado para la mayoría de entornos actuales.</p>

</details>

