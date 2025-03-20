<h1>ASIX2 Proyecto - Godofredo`s                          ®️</h1>


<!-- Presentación de la idea del proyecto -->
<details>
  <summary><h2>📖 Presentación de la idea del proyecto</h2></summary>
  <br>
<p>Estamos creando una plataforma web similar a Hack The Box, pero totalmente enfocada al campo de la ciberseguridad. Como equipo, nuestra misión es ofrecer un espacio donde los profesionales de la seguridad informática puedan colaborar, compartir herramientas, scripts y proyectos que aborden distintas áreas de ciberseguridad, desde la evaluación de vulnerabilidades hasta la automatización de auditorías.

El proyecto que estamos desarrollando durante el segundo y tercer trimestre es la continuación directa del trabajo realizado en el primer proyecto. En esta nueva fase, implementaremos de manera completa tecnologías clave como Docker, con el objetivo de crear un despliegue de contenedores. Esta red permitirá a los usuarios desarrollar y compartir entornos avanzados para pruebas de seguridad, maximizando la eficiencia y precisión mediante configuraciones reproducibles y escalables.

Una de las redes de contenedores contará con un firewall implementado mediante pfSense, configurado en un contenedor gateway para la red privada. Este firewall permitirá definir y aplicar políticas estrictas para controlar el tráfico entrante, saliente y lateral, asegurando el aislamiento de servicios sensibles y ofreciendo un control avanzado mediante su interfaz gráfica o configuración mediante scripts automatizados.

Por otro lado, un contenedor basado en Ubuntu gestionará los backups, utilizando un script personalizado con rsync para realizar copias incrementales programadas mediante crontab, con almacenamiento en destinos locales. 

Con estas características, nuestra plataforma no solo facilitará la colaboración entre profesionales de la ciberseguridad, sino que también garantizará entornos seguros y herramientas integradas para el desarrollo y la protección de proyectos en el campo de la seguridad informática.</p>

</details>
<!-- -------------------------------------------------------------------------- -->

<!-- Nuestros Objetivos -->
<details>
  <summary><h2>🎯 Nuetros Objetivos</h2></summary>
  <br>
<p>Nuestro objetivo es proporcionar una herramienta que no solo centralice el desarrollo en ciberseguridad, sino que también fomente una colaboración más efectiva entre expertos y entusiastas de la seguridad informática. Al concentrar los recursos, herramientas y proyectos en un solo lugar, buscamos facilitar el acceso a soluciones innovadoras y prácticas que puedan ser utilizadas por toda la comunidad.</p>
  
![image](https://github.com/user-attachments/assets/194e9e44-7b82-4afe-943f-0832058dda4f)

</details>
<!-- -------------------------------------------------------------------------- -->

<!-- Tecnologías Usadas -->
<details>
  <summary><h2>🌐 Tecnologías Usadas</h2></summary>
  <br>
<p>En este proyecto, se han seleccionado las siguientes tecnologías para crear un entorno virtualizado y una aplicación web efectiva:</p>

<h4>1. Proxmox</h4>
<p>Proxmox es una plataforma de virtualización de código abierto que combina la gestión de máquinas virtuales y contenedores en un entorno centralizado. Ofrece una solución integral para optimizar el uso de los recursos del servidor, permitiendo administrar múltiples entornos desde una única interfaz. Además, facilita la creación de copias de seguridad, la migración en vivo de máquinas y la gestión avanzada de almacenamiento, lo que la convierte en una herramienta robusta para centros de datos y servidores privados.</p>

<h4>2. Máquinas Virtuales (VM)</h4>
<p>Las máquinas virtuales permiten ejecutar varios sistemas operativos independientes en un único hardware físico. Esto es útil tanto para pruebas como para la implementación de aplicaciones en entornos aislados, garantizando que los fallos o cambios en una máquina no afecten a las demás. Además, las VM mejoran la seguridad y flexibilidad del sistema, permitiendo la asignación dinámica de recursos y facilitando la escalabilidad según las necesidades del proyecto.</p>

<h4>3. HTML (HyperText Markup Language)</h4>
<p>HTML es el lenguaje de marcado fundamental para la creación de páginas web. Define la estructura básica del contenido mediante etiquetas, como encabezados, párrafos, imágenes y enlaces, que los navegadores web interpretan para mostrar el contenido de manera visual. Es el pilar de cualquier sitio web, proporcionando la base sobre la cual se construyen elementos interactivos y visuales mediante otras tecnologías como CSS y JavaScript.</p>

<h4>4. CSS (Cascading Style Sheets)</h4>
<p>CSS es el lenguaje utilizado para controlar la presentación y diseño de las páginas web. Permite separar el contenido (HTML) de la presentación, facilitando el mantenimiento y la actualización del estilo visual de un sitio. Con CSS se puede ajustar el diseño, los colores, las fuentes y el espaciado de los elementos, asegurando que las páginas web sean atractivas y responsivas, adaptándose a diferentes tamaños de pantalla y dispositivos.</p>

<h4>5. JavaScript</h4> 
<p>JavaScript es un lenguaje de programación esencial para el desarrollo web, utilizado para crear contenido dinámico e interactivo en las páginas. Permite modificar la estructura del documento HTML y los estilos CSS en tiempo real, lo que mejora la experiencia del usuario. Además, JavaScript es fundamental para el desarrollo de aplicaciones de una sola página (SPA), donde se gestionan las interacciones del cliente sin tener que recargar toda la página. Con el uso de bibliotecas y frameworks como React, Angular o Vue.js, JavaScript facilita la creación de interfaces ricas y funcionales.</p> 

<h4>6. Node.js</h4> 
<p>Node.js es un entorno de ejecución para JavaScript que permite desarrollar aplicaciones del lado del servidor. Gracias a su modelo asíncrono y basado en eventos, es altamente eficiente para manejar múltiples solicitudes simultáneamente. Se utiliza para crear APIs, gestionar autenticación, procesar datos en tiempo real y conectar con bases de datos como MongoDB o PostgreSQL. Su compatibilidad con frameworks como Express.js facilita el desarrollo de aplicaciones escalables y rápidas, convirtiéndolo en una opción clave para el backend en aplicaciones web modernas.</p>

<h4>7. Firebase</h4> 
<p>Firebase es una plataforma de desarrollo de aplicaciones basada en la nube, que incluye una base de datos NoSQL en tiempo real. Es ideal para aplicaciones que requieren un manejo eficiente de grandes volúmenes de datos, ya que permite almacenar, sincronizar y recuperar información de forma rápida y escalable. Además, proporciona herramientas para la autenticación, hosting y analítica, lo que facilita el desarrollo completo de aplicaciones web y móviles.</p> 


<h4>8. Docker</h4> 
<p>Docker es una plataforma que utiliza contenedores para simplificar el desarrollo, despliegue y ejecución de aplicaciones. Permite empaquetar una aplicación y todas sus dependencias en una "imagen", asegurando que funcione de manera consistente en diferentes entornos. Al usar Docker, se reduce la necesidad de configurar entornos específicos en cada servidor, lo que agiliza la implementación y mejora la escalabilidad y portabilidad de las aplicaciones.</p> 

<h4>9. pfSense</h4> 
<p>pfSense es un software de firewall y enrutador de código abierto basado en FreeBSD. Ofrece una solución robusta para la gestión de redes, proporcionando funcionalidades avanzadas como VPN, filtrado de contenido, y control de tráfico. En este proyecto, pfSense ha sido configurado para proteger y gestionar el acceso a los contenedores Docker y otros recursos dentro de la red. A través de reglas de firewall y la configuración de puertos específicos, pfSense asegura que solo los usuarios autorizados puedan acceder a los recursos de la red, incluyendo la web alojada en Nginx y otros servicios dentro de Alpine Linux.</p>

<h4>Conclusión</h4> 
<p>Estas tecnologías forman un conjunto sólido y flexible que permite el desarrollo de aplicaciones web dinámicas, escalables y seguras. Gracias a su integración eficiente, se garantiza un entorno de trabajo optimizado para las necesidades del proyecto, desde la virtualización y el manejo de contenedores hasta la gestión de la seguridad en la red y la implementación de las tecnologías backend.</p>

</details>
<!-- -------------------------------------------------------------------------- -->

<!-- Organización: -->

<details>
  <summary><h2>📁 Organización:</h2></summary>
  
  | Responsable       | Tareas        | 
|---------------|---------------|
| 🟡 **Nicolás Guerra** | - Proxmox  | 
|                        | - DOCKERS | 
| 🟠 **Adrià Trillo**    | - Máquinas Virtuales (VM)  |
|                          | - pfSense  | 
|                         | - HTML (HyperText Markup Language)  | 
| 🟢 **Edward Murphy**   | - CSS (Cascading Style Sheets)  | 
|                         | - Responsive  |
|                         |- JavaScript | 


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
    <p>Al haber utilizado Firebase, que tal como hemos comentado anteriormente, es un tipo de base de datos <b>NOSQL</b>. Así que la manera de realizar el diagrama es totalmente distinto, y en nuestro caso, lo hemos realizado desde el mismo cloud de Firebase. A continuación, os vamos a mostrar como han quedado estructuradas el conjunto de colecciones (tablas) con todos sus documentos y campos.</p>

<img src="https://github.com/user-attachments/assets/56b66400-d640-4b77-87d8-6df387f9c247" alt="LOGO-GODO" width="1000" height="500" />
<img src="https://github.com/user-attachments/assets/1c5a2ee1-1f9f-4540-858a-4dd2a3334718" alt="LOGO-GODO" width="1000" height="500" />
<img src="https://github.com/user-attachments/assets/4ea8488b-9647-413d-b05f-04bcfa4805bc" alt="LOGO-GODO" width="1000" height="500" />
<img src="https://github.com/user-attachments/assets/b3020efc-6d73-4622-aa33-34a2ffb66727" alt="LOGO-GODO" width="1000" height="500" />
<img src="https://github.com/user-attachments/assets/1ad4121e-51dd-4f97-bd8e-cfc334f9510d" alt="LOGO-GODO" width="1000" height="500" />
<img src="https://github.com/user-attachments/assets/acaca4fd-4094-4c29-a917-e81d2e7d605a" alt="LOGO-GODO" width="1000" height="500" />
  </details>

  <details>
    <summary>&nbsp;&nbsp;&nbsp;&nbsp;🛜 <b>Diagrama de red</b></summary>
    <br>
    <p>El diagrama de red que presentamos en este proyecto es mucho más sencillo que el anterior. En el diagrama previo, todas las máquinas virtuales se encontraban en un entorno Proxmox, lo que generaba una dispersión mayor, incluso dentro de la simplicidad que Proxmox nos ofrece. En esta nueva versión, hemos optado por utilizar contenedores para reemplazar las máquinas virtuales, lo que nos permite una mayor unificación y organización, todo alojado en nuestra máquina con Alpine Linux. Además, hemos configurado un firewall en pfSense, el cual está ajustado para permitir el acceso a los recursos de los contenedores Docker en Alpine a través de puertos específicos, así como a la web alojada en Nginx.</p>
    <img src="https://github.com/Rusta4/Godofredos/blob/main/fotos_memoria/Diagrama-Red-Proyecto.png" alt="Diagrama de red" width="1375" height="735" />
  </details>


  <details>
    <summary>&nbsp;&nbsp;&nbsp;&nbsp;📋 <b>Diagrama Web</b></summary>
    <br>
    <p>El mapa del sitio presenta una estructura técnica organizada alrededor de la página principal (HOME), que actúa como nodo central para acceder a cinco secciones clave: recursos técnicos, gestión de usuarios y páginas informativas. Los recursos técnicos incluyen Hacking tools, Docker, y ISO files, que enlazan a un foro de hacking, una página sobre Docker y descargas de archivos ISO, respectivamente. La gestión de usuarios se centra en la sección INICIAR SESIÓN, que permite autenticarse, registrarse o recuperar contraseñas mediante un código de verificación. Además, desde diferentes áreas del sitio se puede acceder al Perfil de usuario, donde es posible modificar credenciales como el usuario, la contraseña o el correo. La sección About Us proporciona información sobre el sitio, con enlaces hacia la autenticación y registro. La estructura facilita un flujo de navegación eficiente, priorizando tanto el acceso a recursos técnicos como la administración de la cuenta del usuario de manera clara y modular.</p>
<img src="https://github.com/user-attachments/assets/e90dfc7f-f809-465d-98d9-5063af0227a1" alt="LOGO-GODO" width="900" height="500" />
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
    <p>La primera pantalla es la de bienvenida, diseñada para captar la atención del usuario con un video de fondo que hace que la página sea visualmente atractiva. El mensaje principal invita a los usuarios a explorar el foro con repositorios destacados, acompañado de un botón de llamada a la acción que los lleva a descubrir los servicios ofrecidos. Además, se presentan categorías populares como Docker, Hacking tools e ISO files, que permiten a los usuarios elegir temas de interés de forma rápida y sencilla. Al final, se incluyen enlaces a redes sociales y la información legal, cumpliendo con las normativas y facilitando la conexión con la comunidad.</p>

  <p>La segunda pantalla está enfocada en la exploración de contenido mediante una barra de búsqueda con filtros. Este diseño en formato de cuadrícula presenta resultados organizados en tarjetas visuales que muestran imágenes, texto y enlaces, brindando una vista previa clara del contenido antes de que el usuario acceda a más detalles. Los filtros permiten a los usuarios personalizar la búsqueda según sus necesidades, haciendo que la navegación sea más eficiente y rápida.</p>

  <p>Por último, la tercera pantalla está dedicada a ofrecer información sobre el proyecto. Aquí se destaca un carrusel de imágenes que resalta características clave o actualizaciones del proyecto, acompañado de un bloque de texto que proporciona una breve descripción. Además, se muestran estadísticas importantes como descargas, usuarios activos y la experiencia en el sector, lo que ayuda a generar confianza en los visitantes mostrando el impacto y alcance del proyecto.</p>

  <p>En general, el diseño está pensado para ofrecer una experiencia de usuario fluida, con una interfaz limpia y bien organizada. Cada sección tiene un propósito claro, facilitando la navegación y asegurando que los usuarios encuentren la información que buscan sin sentirse abrumados.</p>

  <img src="https://github.com/Rusta4/Godofredos/blob/main/mokcups/conjunto-mockup%C3%A7.png" alt="LOGO-GODO" width="1000" height="500" />
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
  <img src="https://github.com/user-attachments/assets/37a57af5-b507-4c2a-ad87-854c6c390611" alt="LOGO-GODO" width="1000" height="550" />
  <img src="https://github.com/user-attachments/assets/750eb6fb-18b9-49af-bc89-a224408ab418" alt="LOGO-GODO" width="1000" height="550" />
  <img src="https://github.com/user-attachments/assets/abc825ac-d3d8-4b15-a1c8-1d5af8564ee5" alt="LOGO-GODO" width="1000" height="550" />
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
<p>Nuestra arquitectura está basada en una red virtual (10.20.30.0/24), compuesta por una máquina virtual (MV) que actúa como host para los contenedores Docker y otra MV con pfSense instalado. El pfSense gestiona la conexión a Internet para la red interna mediante reglas y reenvío de puertos, permitiendo que los usuarios externos accedan a los recursos internos a través de puertos específicos. Para ello, hemos configurado dos adaptadores de red: ens18 con una IP de clase 100.77.20.0/24 y ens19 con una IP dentro del rango de la red interna (10.20.30.0/24). En Proxmox, definimos estas dos redes mediante VMBR1 para la red interna (10.20.30.0/24) y VMBR0, que actúa como puente para la red de clase (100.77.20.0/24). A continuación, se muestra un diagrama con la configuración de Proxmox.</p>

![image](https://github.com/Rusta4/Godofredos/blob/main/fotos_memoria/Diagrama-Proxmox.png)

<h2>¿Qué es un servidor web?</h2>
<p>Un servidor web es un software que gestiona las solicitudes HTTP/HTTPS de los navegadores de los usuarios y responde con recursos, como páginas HTML, imágenes o archivos, que están alojados en el servidor. Básicamente, su función es recibir las peticiones de los clientes y entregarles los contenidos solicitados.</p> 
<br>

<h2>¿Qué es un hosting?</h2>
<p>El hosting, o alojamiento web, es el servicio que permite almacenar los archivos de un sitio web en un servidor para que sean accesibles a través de internet. Los Hosting ofrecen espacio en sus servidores para que los sitios web, correos electrónicos y bases de datos estén disponibles las 24 horas del día. Los servicios de hosting pueden ser compartidos, dedicados o en la nube.</p> 
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
  </details>

  <details>
    <summary>&nbsp;&nbsp;&nbsp;&nbsp;📥 <b>Docker-Compose</b></summary>
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
        <td>Baja</td>
        <td>Poder acceder al pfsense sin tener que deshabilitar el firewall</td>
        <td>Configurar una regla del pfsense para poder acceder a su configuración sin necesidad de desactivar el firewall</td>
        <td>No hay disparador, simplemente acceder por el navegador</td>
        <td>14/02/2025</td>
        <td>Pendiente</td>
      </tr>
      <tr>
        <td>ID2</td>
        <td>Media</td>
        <td>Retocar pequeños detalles de la web</td>
        <td>Retocar pequeños errores y bugs de la web. Principalmente con los archivos .js</td>
        <td>Unos pop ups que se hacen js que a veces se bugean</td>
        <td>20/02/2025</td>
        <td>Pendiente</td>
      </tr>
      <tr>
        <td>ID3</td>
        <td>Media</td>
        <td>Optimizar la base de datos</td>
        <td>Optimizar la base de datos para que funcione mejor de lo que funcionaba antes, ya que también presentaba fallos.</td>
        <td>-</td>
        <td>28/02/2025</td>
        <td>Pendiente</td>
      </tr>
      <tr>
        <td>ID4</td>
        <td>Media</td>
        <td>Conexión a internet en la red interna</td>
        <td>Permitir a la máquina Alpine que alberga todos los dockers tener acceso a internet.</td>
        <td>-</td>
        <td>28/02/2025</td>
        <td>Pendiente</td>
      </tr>
      <tr>
        <td>ID5</td>
        <td>Baja</td>
        <td>Poder hacer que el usuario suba archivos a la web</td>
        <td>Hacer un pequeño uploader en la web para que el usuario pueda subir archivos al apartado de documentos</td>
        <td>Un pequeño uploader con selector de archivos y un botón verde para subir el archivo</td>
        <td>05/03/2025</td>
        <td>Pendiente</td>
      </tr>
      <tr>
        <td>ID6</td>
        <td>Alta</td>
        <td>Desplegar una MV en nuestra web</td>
        <td>Que el usuario pueda ejecutar una MV en la web para que no tenga que ejecutarlo en local</td>
        <td>Un botón verde que ponga “start” y que al darle se despliegue una MV.</td>
        <td>31/03/2025</td>
        <td>Pendiente</td>
      </tr>
      <tr>
        <td>ID7</td>
        <td>Alta</td>
        <td>Que el usuario pueda elegir las especificaciones con las que quiere la MV</td>
        <td>Desplegar una MV con las especificaciones elegidas por el usuario</td>
        <td>Unos selectores desplegables con diferentes opciones para que el usuario pueda elegir</td>
        <td>20/04/2025</td>
        <td>Pendiente</td>
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
    <summary><u>Objetivo 3: Acabar de configurar el pfsense</u></summary>
    <ul>
      <li>3.1 <b>[Adrià]</b> Aplicar las configuraciones necesarias para trabajar mejor. A parte de las que ya hay.</li>
      <li>CP1.2 – A pesar de que se han configurado algunas reglas para que se vea la web por el puerto 8082, hay que acabar de configurar el pfsense para que haya internet en la red interna y se pueda acceder a la interfaz de configuración de este.</li>
    </ul>
  </details>

  <details>
    <summary><u>Objetivo 4: Acabar de configurar la base de datos</u></summary>
    <ul>
      <li>4.1 <b>[Nico]</b> Solventar ciertos errores de la base de datos</li>
      <li>CP1.2 – Hay que acabar de matizar y de concretar ciertos puntos con la BBDD para que todo funcione bien y se definan bien las configuraciones.</li>
    </ul>
  </details>

  <details>
    <summary><u>Objetivo 5: Actualizar el github</u></summary>
    <ul>
      <li>5.1 <b>[Murphy]</b> Poner al día la memoria del GitHub.</li>
      <li>CP1.2 – A medida que vayamos acabando todas las tareas anteriores, las iremos actualizando en el GitHub.</li>
    </ul>
  </details>

  <details>
    <summary><u>Objetivo 6: Mejorar la web del proyecto</u></summary>
    <ul>
      <li>6.1 <b>[Murphy]</b> Reparar los bugs, errores y otras funciones.</li>
      <li>CP1.2 – A pesar de tener la web en un estado muy avanzado, tenemos aún ciertos puntos que mejorar, así como algunos archivos js que presentan algunos problemas.</li>
    </ul>
  </details>

  <details>
    <summary><u>Objetivo 7: Desplegar una MV en la web</u></summary>
    <ul>
      <li>7.1 <b>[Nico, Adrià y Murphy]</b> Investigar cómo desplegar una MV para que el usuario pueda iniciarla en la web</li>
      <li>CP1.2 – La idea principal del proyecto es que el usuario pueda desplegar una MV en la web, sin necesidad de estar ejecutándola en local y, que además pueda elegir las especificaciones de la MV que quiera. Sin embargo, primero probaremos de desplegar la MV con unas características predefinidas y posteriormente le añadiremos la personalización.</li>
    </ul>
  </details>

  <details>
    <summary><u>Objetivo 8: Personalizar la MV de la web</u></summary>
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
        <td>Proxmox, Alpine, 2 Adaptadores de red (Proxmox), Pfsense</td>
        <td>Proxmox: 8.3.1, Alpine: 3.21.2</td>
        <td>Ens19:10.20.30.0, Ens18:100.77.20.0</td>
        <td>Usaremos un proxmox para almacenar el pfsense y el Alpine. Dentro de este Alpine guardaremos los Docker. El proxmox lo configuraremos con dos adaptadores de red, uno para la red interna y otro para la externa.</td>
        <td>Documentación oficial de Proxmox, Alpine y Pfsense</td>
      </tr>
      <tr>
        <td>Sistema operativo</td>
        <td>Proxmox, Alpine (Linux), Pfsense</td>
        <td>Proxmox: 8.3.1, Alpine: 3.21.2</td>
        <td>No</td>
        <td>Proxmox para almacenar la MV de alpine y Pfsense. Alpine para almacenar los Docker.</td>
        <td>Documentación oficial de Proxmox y Alpine</td>
      </tr>
      <tr>
        <td>Interfaz de usuario (Frontend)</td>
        <td>HTML, CSS, JS</td>
        <td>HTML5, CSS3, ES1</td>
        <td>No</td>
        <td>Usaremos HTML para la estructura de la web, CSS para darle estilos y JS para que la web sea mucho más interactiva con el usuario.</td>
        <td>Documentación de HTML, CSS y JS</td>
      </tr>
      <tr>
        <td>Lógica de negocio (Backend)</td>
        <td>Node.js, PHP</td>
        <td>Node.js: 23.7.0, PHP: 8.4.3</td>
        <td>3000</td>
        <td>Para desplegar las MV necesitamos un backend, por lo que usaremos PHP y Node.js. Además, este backend también lo necesitamos para que el usuario pueda subir archivos a la web.</td>
        <td>Documentación oficial de Node.js y PHP</td>
      </tr>
      <tr>
        <td>Servidor web</td>
        <td>Nginx</td>
        <td>Nginx: 1.26.3</td>
        <td>8082</td>
        <td>Usamos un Docker con el S.O. de Nginx, y para llegar a la web hay que conectarse al pfsense a través del puerto 8082, donde opera el Docker de Nginx.</td>
        <td>Documentación oficial de Nginx</td>
      </tr>
      <tr>
        <td>Base de datos</td>
        <td>MongoDB</td>
        <td>8.0</td>
        <td>Pendiente de configuración</td>
        <td>Usaremos MongoDB para que los usuarios puedan registrarse, iniciar sesión y subir archivos a la web.</td>
        <td>Documentación oficial de MongoDB</td>
      </tr>
      <tr>
        <td>Sistema gestor de base de datos</td>
        <td>MongoDB Shell</td>
        <td>2.3.8</td>
        <td>No</td>
        <td>Usaremos la terminal para configurar toda la base de datos.</td>
        <td>Documentación oficial de MongoDB Shell</td>
      </tr>
      <tr>
        <td>Servicios de APIs</td>
        <td>Pendiente de investigación</td>
        <td>Pendiente</td>
        <td>Pendiente</td>
        <td>Aún estamos investigando qué podemos usar para configurar y desplegar una MV en la web, ya que es un proceso complicado. Lo único que tenemos claro hasta el momento es el backend y dónde se ejecutarán las configuraciones.</td>
        <td>Pendiente de información</td>
      </tr>
    </tbody>
  </table>
</details>


