<h1>ASIX2 Proyecto - Godofredo`s                          ®️</h1>

<details>
  <summary><h2>Proyecto🍆</h2></summary>
  <h1>ASIX2 Proyecto - Godofredo`s</h1>

<h2>ÍNDICE</h2>
<ul>
    <li><b><a href="#Explicación idea del proyecto">Explicación idea del proyecto</a></b></li>
    <li><b><a href="#Nuestros Objetivos">Nuestros Objetivos</a></b></li>
    <li><b><a href="#Tecnologías Usadas">Tecnologías Usadas</a></b></li>
    <li><b><a href="#Organización">Organización:</a></b></li>
    <ul>
        <li><a href="#Diagrama Gantt">Diagrama Gantt</a></li>
        <li><a href="#Diagrama NoSql">Diagrama NoSql</a></li>
    </ul>
    <li><b><a href="#Página Web">Página Web:</a></b></li>
    <ul>
        <li><a href="#Mockup">Mockup</a></li>
        <li><a href="#Diagrama Web">Diagrama Web</a></li>
        <li><a href="#Paleta Colores">Paleta Colores</a></li>
        <li><a href="#Logo">Logo</a></li>
        <li><a href="#Funcionalidades Web">Funcionalidades Web</a></li>
    </ul>
    <li><b><a href="#Proxmox">Proxmox:</a></b></li>
    <ul>
        <li><a href="#Imagen Arquitectura">Imagen Arquitectura</a></li>
    </ul>
    <li><b><a href="#Router">Router</a></b></li>
    <li><b><a href="#DHCP">DHCP</a></b></li>
    <li><b><a href="#Firebase">Firebase</a></b></li>
    <li><b><a href="#DNS">DNS</a></b></li>
    <li><b><a href="#NGINX (Web)">NGINX (Web)</a></b></li>
    <li><b><a href="#FTP">FTP</a></b></li>
    <li><b><a href="#Cloudflared">Cloudflared</a></b></li>
    <li><b><a href="#Docker">Docker</a></b></li>
    <li><b><a href="#Instalaciones">Instalaciones:</a></b></li>
    <ul>
        <li><a href="#Instalación Proxmox">Instalación Proxmox</a></li>
        <li><a href="#Instalación Router">Instalación Router</a></li>
        <li><a href="#Instalación DHCP">Instalación DHCP</a></li>
        <li><a href="#Instalación Firebase">Instalación Firebase</a></li>
        <li><a href="#Instalación DNS">Instalación DNS</a>
        <li><a href="#Instalación NGINX">Instalación NGINX y SSL</a></li>
        <li><a href="#Instalación FTP">Instalación FTP</a></li>
        <li><a href="#Instalación Cloudflared">Instalación Cloudflared</a></li>
        <li><a href="#Instalación Docker">Instalación Docker</a></li>
    </ul>
</ul>



<h2 id="Explicación idea del proyecto">Explicación idea del proyecto</h2>
<p>Estamos creando una plataforma web similar a GitHub, pero totalmente enfocada en el campo de la ciberseguridad. Como equipo, nuestra misión es ofrecer un espacio donde los profesionales de la seguridad informática puedan colaborar, compartir herramientas, scripts y proyectos que aborden distintas áreas de ciberseguridad, desde la evaluación de vulnerabilidades hasta la automatización de auditorías.

Una de las características clave de nuestra plataforma es el uso de imágenes Docker, lo que permitirá a los usuarios crear y compartir entornos preconfigurados de manera rápida y sencilla. Con esto, cualquier miembro de la comunidad podrá replicar de forma precisa estos entornos para realizar pruebas de seguridad, sin necesidad de configuraciones complejas. Además, esto facilitará la colaboración entre profesionales, ya que los entornos Docker garantizan que todo el mundo trabaje en el mismo entorno aislado y seguro.</p>


<h2 id="Nuestros Objetivos">Nuestros Objetivo</h2>
<p>Nuestro objetivo es proporcionar una herramienta que no solo centralice el desarrollo en ciberseguridad, sino que también fomente una colaboración más efectiva entre expertos y entusiastas de la seguridad informática. Al concentrar los recursos, herramientas y proyectos en un solo lugar, buscamos facilitar el acceso a soluciones innovadoras y prácticas que puedan ser utilizadas por toda la comunidad.</p>
<img src="https://github.com/user-attachments/assets/222bf100-c324-4f2e-86e5-ef21598cb985" alt="LOGO-GODO" width="800" height="600" />

<h2 id="Tecnologias Usadas">Tecnologias Usadas</h2>
<p>En este proyecto, se han seleccionado las siguientes tecnologías para crear un entorno virtualizado y una aplicación web efectiva:</p>

<h4>1. Proxmox</h4>
<p>Proxmox es una plataforma de virtualización de código abierto que combina la gestión de máquinas virtuales y contenedores en un entorno centralizado. Ofrece una solución integral para optimizar el uso de los recursos del servidor, permitiendo administrar múltiples entornos desde una única interfaz. Además, facilita la creación de copias de seguridad, la migración en vivo de máquinas y la gestión avanzada de almacenamiento, lo que la convierte en una herramienta robusta para centros de datos y servidores privados.</p>

<h4>2. Máquinas Virtuales (VM)</h4>
<p>Las máquinas virtuales permiten ejecutar varios sistemas operativos independientes en un único hardware físico. Esto es útil tanto para pruebas como para la implementación de aplicaciones en entornos aislados, garantizando que los fallos o cambios en una máquina no afecten a las demás. Además, las VM mejoran la seguridad y flexibilidad del sistema, permitiendo la asignación dinámica de recursos y facilitando la escalabilidad según las necesidades del proyecto.</p>

<h4>3. BOOTSTRAP</h4>
<p>Bootstrap es un framework de diseño front-end que facilita la creación de interfaces web responsivas y modernas. Proporciona un conjunto predefinido de componentes de diseño, como botones, formularios, tablas y menús, que permiten a los desarrolladores construir sitios web atractivos con menos esfuerzo. Su uso de un sistema de rejillas y su enfoque "mobile-first" aseguran que los sitios web se adapten adecuadamente a cualquier dispositivo, mejorando la experiencia del usuario.</p>

<h4>4. HTML (HyperText Markup Language)</h4>
<p>HTML es el lenguaje de marcado fundamental para la creación de páginas web. Define la estructura básica del contenido mediante etiquetas, como encabezados, párrafos, imágenes y enlaces, que los navegadores web interpretan para mostrar el contenido de manera visual. Es el pilar de cualquier sitio web, proporcionando la base sobre la cual se construyen elementos interactivos y visuales mediante otras tecnologías como CSS y JavaScript.</p>

<h4>5. CSS (Cascading Style Sheets)</h4>
<p>CSS es el lenguaje utilizado para controlar la presentación y diseño de las páginas web. Permite separar el contenido (HTML) de la presentación, facilitando el mantenimiento y la actualización del estilo visual de un sitio. Con CSS se puede ajustar el diseño, los colores, las fuentes y el espaciado de los elementos, asegurando que las páginas web sean atractivas y responsivas, adaptándose a diferentes tamaños de pantalla y dispositivos.</p>

<h4>6. Firebase</h4>
<p>Firebase es una plataforma de desarrollo de aplicaciones basada en la nube, que incluye una base de datos NoSQL en tiempo real. Es ideal para aplicaciones que requieren un manejo eficiente de grandes volúmenes de datos, ya que permite almacenar, sincronizar y recuperar información de forma rápida y escalable. Además, proporciona herramientas para la autenticación, hosting y analítica, lo que facilita el desarrollo completo de aplicaciones web y móviles.</p>

<h4>6. Dockers</h4>
<p>Docker es una plataforma que utiliza contenedores para simplificar el desarrollo, despliegue y ejecución de aplicaciones. Permite empaquetar una aplicación y todas sus dependencias en una "imagen", asegurando que funcione de manera consistente en diferentes entornos. Al usar Docker, se reduce la necesidad de configurar entornos específicos en cada servidor, lo que agiliza la implementación y mejora la escalabilidad y portabilidad de las aplicaciones.</p>

<h4>Conclusión</h4>
<p>Estas tecnologías garantizan un entorno sólido y flexible, permitiendo el desarrollo de una aplicación web dinámica y eficiente que cumple con los objetivos del proyecto.</p>

<br>

<h2 id="Organizacion">Organizacion</h2>

<h4>Nicolás Guerra</h4>
<h5>  - Proxmox</h5>
<h5>  - DOCKERS</h5>
<h5>  - Firebase</h5>

<h4>Adrià Trillo</h4>
<h5>  - Máquinas Virtuales (VM)</h5>
<h5>  - HTML (HyperText Markup Language)</h5>

<h4>Edward Murphy</h4>
<h5>  - CSS (Cascading Style Sheets)</h5>
<h5>  - BOOTSTRAP</h5>

<h2 id="Diagrama Gantt">Diagrama Gantt</h2>
<img src="https://github.com/Rusta4/Godofredos/blob/main/fotos_memoria/diagrama-grantt.png" alt="LOGO-GODO" width="800" height="500" />

<h2 id="Diagrama NoSql">Diagrama NoSql</h2>
<p>Al haber utilizado Firebase, que tal como hemos comentado anteriormente, es un tipo de base de datos <b>NOSQL</b>. Así que la manera de realizar el diagrama es totalmente distinto, y en nuestro caso, lo hemos realizado desde el mismo cloud de Firebase. A continuación, os vamos a mostrar como han quedado estructuradas el conjunto de colecciones (tablas) con todos sus documentos y campos.</p>

<img src="https://github.com/user-attachments/assets/56b66400-d640-4b77-87d8-6df387f9c247" alt="LOGO-GODO" width="1000" height="500" />
<img src="https://github.com/user-attachments/assets/1c5a2ee1-1f9f-4540-858a-4dd2a3334718" alt="LOGO-GODO" width="1000" height="500" />
<img src="https://github.com/user-attachments/assets/4ea8488b-9647-413d-b05f-04bcfa4805bc" alt="LOGO-GODO" width="1000" height="500" />
<img src="https://github.com/user-attachments/assets/b3020efc-6d73-4622-aa33-34a2ffb66727" alt="LOGO-GODO" width="1000" height="500" />
<img src="https://github.com/user-attachments/assets/1ad4121e-51dd-4f97-bd8e-cfc334f9510d" alt="LOGO-GODO" width="1000" height="500" />
<img src="https://github.com/user-attachments/assets/acaca4fd-4094-4c29-a917-e81d2e7d605a" alt="LOGO-GODO" width="1000" height="500" />


<h1 id="Pagina Web">Pagina Web</h1>

<h2 id="Mockup">Mockup</h2>
<p>La primera pantalla es la de bienvenida, diseñada para captar la atención del usuario con un video de fondo que hace que la página sea visualmente atractiva. El mensaje principal invita a los usuarios a explorar el foro con repositorios destacados, acompañado de un botón de llamada a la acción que los lleva a descubrir los servicios ofrecidos. Además, se presentan categorías populares como Docker, Hacking tools e ISO files, que permiten a los usuarios elegir temas de interés de forma rápida y sencilla. Al final, se incluyen enlaces a redes sociales y la información legal, cumpliendo con las normativas y facilitando la conexión con la comunidad.</p>

<p>La segunda pantalla está enfocada en la exploración de contenido mediante una barra de búsqueda con filtros. Este diseño en formato de cuadrícula presenta resultados organizados en tarjetas visuales que muestran imágenes, texto y enlaces, brindando una vista previa clara del contenido antes de que el usuario acceda a más detalles. Los filtros permiten a los usuarios personalizar la búsqueda según sus necesidades, haciendo que la navegación sea más eficiente y rápida.</p>

<p>Por último, la tercera pantalla está dedicada a ofrecer información sobre el proyecto. Aquí se destaca un carrusel de imágenes que resalta características clave o actualizaciones del proyecto, acompañado de un bloque de texto que proporciona una breve descripción. Además, se muestran estadísticas importantes como descargas, usuarios activos y la experiencia en el sector, lo que ayuda a generar confianza en los visitantes mostrando el impacto y alcance del proyecto.</p>

<p>En general, el diseño está pensado para ofrecer una experiencia de usuario fluida, con una interfaz limpia y bien organizada. Cada sección tiene un propósito claro, facilitando la navegación y asegurando que los usuarios encuentren la información que buscan sin sentirse abrumados.</p>

<img src="https://github.com/Rusta4/Godofredos/blob/main/mokcups/conjunto-mockup%C3%A7.png" alt="LOGO-GODO" width="1000" height="500" />

<h2 id="Diagrama Web">Diagrama Web</h2>
<p>El mapa del sitio presenta una estructura técnica organizada alrededor de la página principal (HOME), que actúa como nodo central para acceder a cinco secciones clave: recursos técnicos, gestión de usuarios y páginas informativas. Los recursos técnicos incluyen Hacking tools, Docker, y ISO files, que enlazan a un foro de hacking, una página sobre Docker y descargas de archivos ISO, respectivamente. La gestión de usuarios se centra en la sección INICIAR SESIÓN, que permite autenticarse, registrarse o recuperar contraseñas mediante un código de verificación. Además, desde diferentes áreas del sitio se puede acceder al Perfil de usuario, donde es posible modificar credenciales como el usuario, la contraseña o el correo. La sección About Us proporciona información sobre el sitio, con enlaces hacia la autenticación y registro. La estructura facilita un flujo de navegación eficiente, priorizando tanto el acceso a recursos técnicos como la administración de la cuenta del usuario de manera clara y modular.</p>
<img src="https://github.com/user-attachments/assets/e90dfc7f-f809-465d-98d9-5063af0227a1" alt="LOGO-GODO" width="900" height="500" />

<h2 id="Paleta Colores">Paleta Colores</h2>
<p>Esta paleta de colores combina el blanco, gris claro, azul oscuro y verde fuerte para equilibrar simplicidad, profesionalismo y dinamismo. El blanco aporta claridad y limpieza, mientras que el gris claro ofrece neutralidad y elegancia sin desentonar. El azul oscuro transmite confianza y seriedad, siendo ideal para entornos corporativos, y el verde fuerte añade energía y frescura, destacando elementos clave como llamadas a la acción. En conjunto, crean una armonía visual que es funcional y atractiva.</p>
<img src="https://github.com/user-attachments/assets/4a00d276-8ad7-4cf6-a7fb-11ecbbd096f1" alt="LOGO-GODO" width="900" height="250" />

<h2 id="Logo">Logo</h2>
<p>Usaremos el primer logo para nuestra web porque refleja simplicidad y profesionalismo, alineándose con el estilo minimalista de marcas tecnológicas modernas. El diseño en blanco y negro aporta una estética limpia y elegante, lo que facilita su integración en diferentes plataformas. Además, el animal icónico en el logo le da personalidad y un toque distintivo sin sobrecargar el diseño.</p>
<img src="https://github.com/user-attachments/assets/a8580f0e-db47-4891-bf4a-0d3fd1cccb1d" alt="LOGO-GODO" width="400" height="400" />

<h2 id="Funcionalidades Web">Funcionalidades Web</h2>
<img src="https://github.com/user-attachments/assets/37a57af5-b507-4c2a-ad87-854c6c390611" alt="LOGO-GODO" width="1000" height="550" />
<img src="https://github.com/user-attachments/assets/750eb6fb-18b9-49af-bc89-a224408ab418" alt="LOGO-GODO" width="1000" height="550" />
<img src="https://github.com/user-attachments/assets/abc825ac-d3d8-4b15-a1c8-1d5af8564ee5" alt="LOGO-GODO" width="1000" height="550" />

<br>
    
<h1 id="Proxmox">Proxmox</h1>

<h2 id="Imagen Arquitectura">Imagen Arquitectura</h2>
<p>Nuestra arquitectura esta basada en una red virtual, la cual consta de un cliente (MV CLIENTE) que se conecta a Firebase mediante una máquina virtual que funciona como router (MV ROUTER) y un router físico conectado a Internet. Dicho enrutador consta con una dirección IP pública dinámica (100.77.20.X), la cual permite la conexión a Internet. MV ROUTER administra dos interfaces: una (VMBR0) externa con IP pública (100.77.20.120) conectada al router físico y otra (VMBR1) interna con IP privada (10.20.40.1) para la comunicación en la red local con el cliente (IP 10.20.40.2). La creación de estas dos redes permite al cliente el acceso a servicios externos, como Firebase, mediante la infraestructura virtual y física. Nosotros lo hemos realizado de la siguiente manera, </p>.
<img src="https://github.com/user-attachments/assets/fe519f3a-bd52-4966-bbc3-93b77aabf96b" alt="LOGO-GODO" width="900" height="600" />


<h1 id="Router">Router</h1>
<p>La incorporación de un router en nuestro proyecto es fundamental para su desarrollo, ya que necesitamos un dispositivo que actúe como puente y permita la conexión entre la red interna y el internet. Para lograr esto, configuraremos dos adaptadores: el primero establecerá la conexión con una red que tenga acceso a internet, mientras que el segundo se comunicará con la red interna. A través de la utilización de iptables, podremos habilitar el reenvío de paquetes, permitiendo así que los dispositivos de la red interna accedan a internet.</p>



<h1 id="DHCP">DHCP</h1>
<p>La integración de un servidor DHCP en nuestro proyecto es esencial para facilitar la gestión de direcciones IP en la red. Este dispositivo se encargará de asignar automáticamente direcciones IP a los dispositivos que se conectan a la red, simplificando así la configuración de cada uno. Al establecer un rango de direcciones disponibles y configurar el tiempo de concesión, el servidor DHCP asegura que cada dispositivo reciba una IP única sin conflictos</p>



<h1 id="Firebase">Firebase</h1>
<p>Firebase Database es una base de datos NoSQL alojada en la nube. Los datos se almacenan en formato JSON y se sincronizan en tiempo real con cada cliente conectado, manteniéndose disponibles incluso cuando la aplicación no tiene conexión. Nosotros utilizamos Firebase para tener la BBDD ahí dentro. Firebase utiliza scripts de .JSON para poder hacer consultas a la página web.</p> 

<p>Entre sus características principales, destaca la sincronización en tiempo real, la escalabilidad para manejar grandes volúmenes de datos y una estructura flexible que facilita la organización. Además, ofrece ventajas como la fácil integración con otros servicios de Firebase, reglas de seguridad para controlar el acceso a los datos y la capacidad de almacenamiento offline, permitiendo a los usuarios interactuar con la aplicación sin conexión a Internet. Este servicio es ideal para aplicaciones de chat, sistemas de gestión de contenidos y juegos multijugador, garantizando una experiencia fluida y dinámica.</p>


<h1 id="DNS">DNS</h1>
<p>Un servidor DNS es una herramienta muy importante en un proyecto de IT, ya que nos permite realizar funciones como la resolución de nombres directa o inversa. Además, nos permitirá tener acceso a la web del proyecto mediante el nombre de dominio o la IP, ya que lo configuraremos para que el servidor DNS y WEB funcionen al unísono.</p> 

<p>El DNS actúa como un directorio telefónico de Internet, traduciendo nombres de dominio amigables (como www.ejemplo.com) a direcciones IP que las computadoras pueden entender. Esto no solo facilita el acceso a sitios web, sino que también mejora la experiencia del usuario al evitar la necesidad de recordar direcciones IP numéricas. Además, los servidores DNS pueden proporcionar características adicionales como la redundancia, aumentando la disponibilidad y fiabilidad del servicio. También permiten gestionar registros de tipo A, CNAME, MX, entre otros, lo que es esencial para configurar correos electrónicos y otros servicios asociados. En resumen, un servidor DNS bien configurado es fundamental para asegurar el funcionamiento eficiente y accesible de cualquier proyecto web.</p>


<h1 id="NGINX (Web)">NGINX (WEB)</h1>
<p>NGINX es un servidor web y un proxy inverso muy importante en un proyecto de IT, ya que ofrece funcionalidades clave como la gestión de solicitudes HTTP, balanceo de carga y terminación de SSL. Su arquitectura asíncrona permite manejar múltiples conexiones simultáneamente, lo que lo hace ideal para aplicaciones con alto tráfico. Además, NGINX puede servir contenido estático de manera eficiente y también funciona como un servidor de proxy para aplicaciones dinámicas. Lo utilizamos para tener nuestro codigo de la web ahi y que la gente pueda verlo desde sus casas</p> 

<p>Una de las principales ventajas de NGINX es su capacidad para optimizar el rendimiento y reducir la latencia en la entrega de contenido. También se integra fácilmente con otros servicios, como servidores de aplicaciones, bases de datos y herramientas de almacenamiento en caché. A través de su configuración, puedes implementar reglas para la redirección de URLs, optimizar la compresión de archivos y habilitar características de seguridad como el filtrado de solicitudes. En resumen, NGINX no solo mejora la eficiencia y velocidad de las aplicaciones web, sino que también ofrece un alto grado de flexibilidad y control sobre el tráfico, siendo una herramienta esencial para cualquier proyecto web moderno.</p>


<h2>¿Qué es un servidor web?</h2>
<p>Un servidor web es un software que gestiona las solicitudes HTTP/HTTPS de los navegadores de los usuarios y responde con recursos, como páginas HTML, imágenes o archivos, que están alojados en el servidor. Básicamente, su función es recibir las peticiones de los clientes y entregarles los contenidos solicitados.</p> 
<br>

<h2>¿Qué es un hosting?</h2>
<p>El hosting, o alojamiento web, es el servicio que permite almacenar los archivos de un sitio web en un servidor para que sean accesibles a través de internet. Los Hosting ofrecen espacio en sus servidores para que los sitios web, correos electrónicos y bases de datos estén disponibles las 24 horas del día. Los servicios de hosting pueden ser compartidos, dedicados o en la nube.</p> 
<br>
<h2>¿Qué es un hosting?</h2>
<p>El hosting, o alojamiento web, es el servicio que permite almacenar los archivos de un sitio web en un servidor para que sean accesibles a través de internet. Los Hosting ofrecen espacio en sus servidores para que los sitios web, correos electrónicos y bases de datos estén disponibles las 24 horas del día. Los servicios de hosting pueden ser compartidos, dedicados o en la nube.</p> 
<br>
<h2>Comparativa entre Nginx y Apache</h2>

<h3>Arquitectura:</h3>

<ul>
<li><b>Apache:</b> Basado en un modelo de procesos o hilos, ya que cada solicitud es gestionada por un proceso o hilo separado.</li>

<li><b>Nginx: </b>Basado en un modelo asincrónico y basado en eventos, donde puede manejar muchas conexiones simultáneas con menos recursos. </li>

</ul>

<h3>Rendimiento:</h3>

<ul>
<li><b>Apache:</b> Menos eficiente en el manejo de muchas conexiones concurrentes debido a su modelo basado en procesos/threads.</li>

<li><b>Nginx: </b>Más eficiente para manejar grandes volúmenes de tráfico concurrente, con un menor uso de recursos.</li>

</ul>



<h3><u>Manejo de solicitudes:</u></h3>

<ul>
<li><b>Apache:</b> Cada solicitud requiere un nuevo hilo o proceso, lo que puede llevar a un mayor consumo de memoria.</li>

<li><b>Nginx: </b>Usa un enfoque no bloqueante y maneja solicitudes de manera asíncrona, lo que le permite procesar más solicitudes con menos memoria.</li>

</ul>

<h3>Soporte de PHP:</h3>

<ul>
<li><b>Apache:</b> Soporte nativo para PHP mediante mod_php.</li>

<li><b>Nginx: </b>No soporta PHP de forma nativa, requiere PHP-FPM (FastCGI Process Manager) para ejecutar PHP.</li>

</ul>

<h3>Configuración y Flexibilidad:</h3>

<ul>
<li><b>Apache:</b> Más flexible, con una amplia gama de módulos y configuraciones. </li>

<li><b>Nginx: </b>Configuración más sencilla y optimizada para rendimiento, pero con menos módulos que Apache.</li>

</ul>


<h3>Compatibilidad:</h3>

<ul>
<li><b>Apache:</b> Compatible con una gran cantidad de tecnologías y módulos, lo que lo hace versátil para muchos tipos de aplicaciones. </li>

<li><b>Nginx: </b>Aunque menos compatible con ciertos módulos que Apache, es excelente en configuraciones específicas de alto rendimiento.</li>

</ul>

<h3>Escalabilidad:</h3>

<ul>
<li><b>Apache:</b>  Menos escalable en entornos de alta carga debido a su modelo de procesos. </li>

<li><b>Nginx: </b>Mejor escalabilidad para manejar tráfico de alto volumen gracias a su modelo de procesamiento eficiente.</li>

</ul>
<br>

<h1 id="FTP">FTP</h1>
<p>FTP es un protocolo de red fundamental en un proyecto de IT, ya que permite la transferencia de archivos entre un cliente y un servidor de manera eficiente. A través de FTP, los usuarios pueden cargar y descargar archivos, facilitando la gestión de contenido en servidores web y otros entornos de almacenamiento. Además, este protocolo soporta la transferencia de archivos grandes y la posibilidad de reanudar cargas interrumpidas. Nosotros utilizaremos el ftp para que se almacenen ahi los archivos de la gente y la gente pueda descargarlos.</p> 


<p>Una de las principales ventajas de FTP es su simplicidad y amplia compatibilidad con diferentes sistemas operativos y plataformas. Permite la autenticación mediante credenciales, lo que garantiza la seguridad en la transferencia de datos. Además, con la variante SFTP (SSH File Transfer Protocol), se puede añadir una capa de cifrado, protegiendo así la información sensible durante el tránsito. FTP también ofrece funciones como la posibilidad de cambiar permisos de archivos y directorios, lo que permite una gestión más granular del acceso a los datos. En resumen, FTP es una herramienta esencial para la administración de archivos en proyectos web, asegurando una transferencia eficiente y segura de datos.</p>

<h1 id="Cloudflared">Cloudflared</h1>
<p>En mi proyecto, utilizo Cloudflared con NGINX para gestionar el tráfico de mi web, que está alojada en godo y accesible a través del dominio tallerdekirby.es. Hay varias razones por las que decidí integrar estas herramientas:

- Seguridad mejorada (Zero Trust)
Al utilizar Cloudflared, me aseguro de que no exponga directamente mi servidor a internet. Con Cloudflare Tunnel, puedo crear un túnel seguro entre mi servidor y los servicios de Cloudflare, lo que elimina la necesidad de abrir puertos en mi red. Esto mejora la seguridad al permitir que todo el tráfico pase a través de Cloudflare, que filtra amenazas antes de que lleguen a mi servidor. Además, Cloudflare protege mi aplicación de ataques DDoS, fuerza bruta, bots maliciosos, entre otros, lo que me da una capa adicional de protección.


- Configuración sencilla de SSL/TLS
Cloudflare me ofrece certificados SSL gratuitos y gestionados, lo cual me ahorra el trabajo de gestionar certificados SSL/TLS en mi servidor. Al usar Cloudflared con NGINX, el tráfico entre los usuarios y mi servidor está protegido de forma transparente, ya que Cloudflare maneja el cifrado en el túnel, garantizando una comunicación segura sin necesidad de configuraciones adicionales en mi parte.

En resumen, al usar Cloudflared con NGINX, puedo asegurarme de que mi sitio web godo en tallerdekirby.es esté bien protegido, funcione rápidamente y sea fácilmente escalable. Estas herramientas me ofrecen una solución eficiente y segura, lo que me permite centrarme más en el desarrollo y contenido de mi web sin preocuparme tanto por los aspectos técnicos de infraestructura y seguridad.
</p>

<h1 id="Docker">Dockers</h1>
<p>En mi proyecto, quiero implementar Docker de una manera que permita a los usuarios interactuar con una imagen Docker dentro de mi web, todo en un servidor externo. Mi objetivo es ofrecerles una experiencia donde puedan utilizar esta imagen de Docker sin necesidad de tener conocimientos técnicos ni hacer configuraciones complejas. Básicamente, quiero que puedan acceder y usar la imagen directamente desde el navegador.

- ¿Cómo lo voy a lograr?
Configuración de Docker en el servidor externo: Para lograrlo, voy a configurar un servidor externo que ejecute Docker. En ese servidor, cargaré una imagen Docker específica que permita a los usuarios ejecutar aplicaciones o herramientas dentro de un entorno aislado. La imagen Docker será preconfigurada con todo lo necesario, por lo que los usuarios no tendrán que hacer nada más que interactuar con la interfaz web.

- Interfaz web fácil de usar: 
Crearé una interfaz sencilla en mi web para que los usuarios puedan interactuar con la imagen Docker. Desde esta interfaz, podrán enviar comandos o realizar acciones dentro del contenedor, todo sin necesidad de instalar Docker o ejecutar configuraciones en su propio sistema. La comunicación con el servidor externo será transparente para ellos; simplemente usarán la web como si fuera una aplicación más.

- Seguridad y control: 
Para garantizar la seguridad de los usuarios y de mi infraestructura, controlaré el acceso a los contenedores Docker mediante permisos y restricciones. Esto me permitirá asegurarme de que los usuarios solo tengan acceso a lo que necesiten, evitando riesgos innecesarios.

- Escalabilidad y rendimiento:
Al usar Docker, puedo gestionar y escalar fácilmente los contenedores para soportar una mayor cantidad de usuarios sin afectar el rendimiento. Docker me permitirá lanzar instancias de la imagen de manera eficiente según la demanda, sin tener que preocuparme por la gestión manual de recursos.

- Experiencia sin complicaciones: 
Al final, el objetivo es que los usuarios de mi web puedan acceder a un contenedor Docker, utilizar las herramientas o servicios dentro de él, y todo esto sin necesidad de hacer configuraciones complejas. Quiero que la experiencia sea lo más sencilla posible, de modo que puedan enfocarse en lo que necesitan hacer dentro del contenedor, sin complicaciones.

En resumen, con esta solución basada en Docker, espero ofrecer a los usuarios una experiencia interactiva en mi web donde puedan utilizar una imagen Docker en un servidor externo, todo a través de una interfaz web amigable y sin necesidad de configuraciones adicionales.</p>

<img src="https://github.com/user-attachments/assets/ee34a6f1-98e1-4fd3-9f9d-3d241e743c9f" alt="LOGO-GODO" width="1000" height="500" />
<img src="https://github.com/user-attachments/assets/0601cb1f-1ec7-4787-9279-f89a1a109557" alt="LOGO-GODO" width="1000" height="500" />

<h1 id="Instalaciones">Instalaciones</h1>
<h1 id="Instalación Proxmox">Instalación Proxmox</h1>
<p> Aqui podrá encontrar presente toda la información sobre la instalación que hemos llevado a curso con Proxmox</p>
<h2>IP`s PROXMOX (Interna y Externa)</h2>
<p>Estas son las siguientes IP's dentro de los bridges de nuestra red, las cuales la <b>VMBR0</b> y la <b>VMBR1</b> iran en el Router y la <b>VMBR1</b> solo ira en el cliente (estas ip`s la hemos generado nosotros para que sea la red interna).</p>
<img src="https://github.com/user-attachments/assets/d3b779ba-4444-4fef-8b57-d859c45d2e1b" alt="LOGO-GODO" width="1000" height="400" />


<h2>Configuracion Netplan Cliente</h2>
<p>Hemos creado una <b>red interna</b> en Proxmox, con el fin de poder manejar la conectividad de las VM. Esta es la configuracion del el <b>Cliente</b> con la que ponemos la ip que en nuestro caso es <b>10.20.40.2/24</b>. Despues ponemos la via que seria la ip del router que en nuestro caso es <b>10.20.40.1/24</b> </p>
<img src="https://github.com/user-attachments/assets/2eab6a67-2fdb-49d8-b8ac-9dbb79721d44" alt="LOGO-GODO" width="900" height="400" />

<h2>Configuracion Netplan Router</h2>
<p>Hemos añadido un <b>router virtual</b> en Proxmox. Actúa como un punto central para gestionar el tráfico de la red interna y también para mantener la comunicación por fuera de la red interna creada.</p>
<img src="https://github.com/user-attachments/assets/85217131-03cd-4772-a3a0-dcf624145ae9" alt="LOGO-GODO" width="900" height="500" />

<h2>Conexion Entre Maquinas</h2>
<p> Hemos configurado las interfaces de red tanto en el router como en el cliente. Gracias a dicha configuración, las máquinas virtuales y otros dispositivos en la red interna pudieran conectarse entre sí y con el router. Tras conseguir la conexión entre las máquinas hemos realizado ping entre ellas para ver que funciona la configuracion del netplan. Tambien el router deberia tener conexion hacia fuera, para eso hacemos un ping a Google.com desde el router para ver que funciona</p>
<img src="https://github.com/user-attachments/assets/f95da3ba-bfc4-4488-a961-08f3ab36d132" alt="LOGO-GODO" width="1100" height="600" />

<h2>Configuración de IPTables</h2>
<p>Para la configuración de las reglas del firewall y redirección de tráfico, hemos utilizado IPTables y hemos modificado el archivo "/etc/sysctl.conf" descomentando la linea <b>net.ipv4.ip_forward=1</b>. Este ajuste nos ha permitido a que el router establecido en Proxmox reenvíe tráfico entre diferentes interfaces de red.</p>
<img src="https://github.com/user-attachments/assets/d062a00a-aaae-4e64-a2c4-17988b710dc6" alt="LOGO-GODO" width="900" height="600" />

<br>
<br>

<p>Una vez realizada la modificación, mediante el comando <b>sudo sysctl -p</b>
También hemos configurado una regla para permitir que el tráfico desde la red interna fluya hacia el exterior (Internet) a través de la interfaz de red especificada:
<b>sudo iptables -A FORWARD -i ens19 -o ens18 -j ACCEPT </b> </p>
<img src="https://github.com/user-attachments/assets/980bf8bf-f41f-4b93-a915-bccffde9d45e" alt="LOGO-GODO" width="600" height="300" />

<br>
<br>

<p>Además, se añadió una regla para permitir que las respuestas a las solicitudes que se originan desde la red interna puedan regresar sin problemas. Esta regla es esencial para la comunicación bidireccional. Hacemos el comando <b>sudo iptables -A FORWARD -i ens18 -o ens19 -m state --state ESTABLISHED,RELATED -j ACCEPT</b> para aceptar las reglas que hemos puesto. Después de configurar las reglas necesarias, hemos guardado los cambios realizados mediante el comando <b>sudo iptables-save</b>.</p> Una vez hecho esto deberia funcionar la conexion entre maquina Router - Cliente y el Cliente deberia tener conexion hacia fuera. Para comprobarlo podemos hacer un ping a Google.com desde la maquina cliente.
<img src="https://github.com/user-attachments/assets/eccf8c13-227f-44d6-901c-a7e328effdb8" alt="LOGO-GODO" width="1200" height="400" />

<h2>Reglas Permanentes</h2>
<p>Para que las reglas de IPTables se mantuvieran después de reiniciar el sistema, hemos procedido a instalar el paquete <b>iptables-persistent</b> mediante el siguiente comando <b>sudo apt install iptables-persistent -y</b></p>
<img src="https://github.com/user-attachments/assets/f7bc6414-ad7c-4fba-8651-15f21ec70b74" alt="LOGO-GODO" width="900" height="400" />

<h2>Configuracion QEMU Cliente</h2>
<p>En la máquina cliente, se instaló el paquete <b>qemu-guest-agent</b> mediante el comando <b>sudo apt install qemu-guest-agent</b>. Esta herramienta es útil para la administración de máquinas virtuales y su integración con el sistema Proxmox. Tras la instalación del qemu-guest-agent, hemos realizado ajustes en las opciones de configuración de la máquina virtual cliente en Proxmox.</p>
<img src="https://github.com/user-attachments/assets/aba1ca56-4c0f-403b-9ad9-fdb9fe35e1ad" alt="LOGO-GODO" width="1000" height="500" />

<h1 id="Instalación Router">Instalación del Router</h1>
<p>Para la instalación del router no tenemos que extendernos mucho, ya que únicamente hay que configurar el netplan y el iptables.</p>

<h2>Configuración del ens19</h2>
<p>En primer lugar, configuraremos la interfaz de red ens19 para poder tener conexión con el exterior. Para ello, aplicaremos la siguiente configuración del netplan:</p>
<img src="https://github.com/Rusta4/Godofredos/blob/main/fotos_memoria/netplan-ens19.png" alt="LOGO-GODO" width="468" height="239" />

<p>Hemos configurado el ens19 con la IP 100.77.20.20, que, está dentro de la red que nos permite la conexión con internet. Además, le indicamos que no queremos coger la IP por DHCP para evitar que el router tenga una IP diferente cada vez que se inicia. </p>

<h2>Configuración del ens18</h2>
<p>En segundo lugar, configuaremos el adaptador de red en18 para que se comunique con la red interna. Esta red es la 10.20.40.0/24 y, tiene como gateway el gateway de la red real que nos permite la conexión a internet ( 100.77.20.1 ). </p>

<img src="https://github.com/Rusta4/Godofredos/blob/main/fotos_memoria/netplan-ens18.png" alt="LOGO-GODO" width="513" height="238" />

<h2>Resultado final del netplan del router</h2>

<img src="https://github.com/Rusta4/Godofredos/blob/main/fotos_memoria/netplan-router-all.png" alt="LOGO-GODO" width="635" height="525" />

<h2>Iptables y forwarding</h2>
<p>Una vez configurado los adaptadores de red, hay que configurar el iptables para que los clientes de la red interna tenga acceso a internet.</p>

<h2>Archivo sysctl.conf</h2>
<p>La primera configuración es el arcvhivo "/etc/sysctl.conf", donde descomentaremos la línea <b>net.ipv4.ip.forward=1</b> para permitir el reenvío de tráfico entre las diferentes interaces de red.</p>
<img src="https://github.com/Rusta4/Godofredos/blob/main/fotos_memoria/sysctl-cong.png" alt="LOGO-GODO" width="247" height="93" />

<h2>Conexión de la red interna con el exterior</h2>
<p>Una vez realizada esta configuración, utilizaremos ip tables para que el tráfico de la red interna fluya hacia el exterior a través de la red especificada. </p>

<pre>
<code>
<b>sudo iptables -A FORWARD -i ens19 -o ens18 -j ACCEPT</b>
</code>
</pre>

<p>Además, se añadió una regla para permitir que las respuestas a las solicitudes que se originan desde la red interna puedan regresar sin problemas. Esta regla es esencial para la comunicación bidireccional.</p>

<pre>
<code>
<b>sudo iptables -A FORWARD -i ens18 -o ens19 -m state --state ESTABLISHED,RELATED -j ACCEPT</b>
</code>
</pre>

<p>Una vez hecho esto, reiniciamos el router y comrpobamos la conexión.</p>
<pre>
<code>
<b>ping 8.8.8.8</b>
</code>
</pre>
<img src="https://github.com/Rusta4/Godofredos/blob/main/fotos_memoria/ping-nginx.png" alt="LOGO-GODO" width="509" height="175" />
<br>
<h2>Reglas permanentes</h2>
<p>Para que las reglas de IPTables se mantengan después de reiniciar el sistema, instalamos el paquete iptables-persistent</p>

<pre>
<code>
<b>sudo apt install iptables-persistent -y</b>
</code>
</pre>

<h1 id="Instalación DHCP">Instalación del DHCP </h1>
<p>Ahora que ya hemos configurado el router, es hora de configurar el servicio DHCP para que brinde las IP a todos los clientes que vayamos agregando a lo largo del proyecto.</p>

<h2>Actualización del sistema e instalador del servicio DHCP</h2>
<p>Nos aseguramos de que nuestro router está actualizado y le instalamos el DHCP</p>

<pre>
<code>
<b>sudo apt update && sudo apt upgrade -y</b>
</code>
</pre>

y 

<pre>
<code>
<b>sudo apt install isc-dhcp-server</b>
</code>
</pre>

<h2>Configuración del dhcpd.conf</h2>
<p>Una vez instalado el servicio DHCP nos dirigimos al archivo de configuración,que se encuentra en la ruta <b>"/etc/dhcp/dhcpd.conf"</b>. En este archivo delcararemos la siguiente configuración: </p>

<ul>
<li><b>El rango de IPs</b></li>

<li><b>El gateway de la red interna</b></li>

<li><b>La IP del servidor DNS</b></li>

<li><b>El nombre de dominio </b>( Godofredo.com) </li>

<li><b>La resolución inversa del DNS</b></li>

</ul>

<h2>Direcciones estáticas por MAC</h2>
<p>Durante la configuración de algunos servidores, hemos tenido problemas con las direcciones IP, ya que se cambiaban las IP cada día y no podíamos establecer ninguna configuración definitiva en ningún servidor. Para que esto no pase, hemos configurado algunas direcciones por MAC, de esta forma el DHCP siempre le brindará la misma dirección IP a los servidor.</p>

<p>Para aplicar esto debemos de indicar el nombre del servidor, su MAC address y qué IP queremos que el DHCP le asigne cada vez que se enciende. </p>

<img src="https://github.com/Rusta4/Godofredos/blob/main/fotos_memoria/mac-dhcp.png" alt="LOGO-GODO" width="380" height="299" />

<h2>Reiniciamos el servidior y miramamos el estado</h2>
<pre>
<code>
<b>sudo systemctl restart isc-dhcp-server</b>
</code>
</pre>
<p>y</p>
<pre>
<code>
<b>sudo systemctl status isc-dhcp-server</b>
</code>
</pre>


<h1 id="Instalación Firebase">Instalación Firebase</h1>
<h2>Funcionamiento interno</h2>
<p>Primero tenemos que intslar una maquina ubuntu y actualizarla. Para actualizarla tenemos que utilizar el comando <b>update && upgrade</b>. Despues de eso la maquina ya estaria actualizada para poder instalar el firebase.</p>
<pre>
<code>
<b>sudo apt update && sudo apt upgrade -y</b>
</code>
</pre>
<br>
<p>Despues de todo necesitamos instalar el nodejs para que funcione (la version importa). Para tener la version mas nueva de nodejs necesitamos ejecutar el siguiente comando:</p>
<pre>
<code>
<b>sudo apt-get install nodejs -y</b>
</code>
</pre>
<p>Como bien hemos mencionado en el comando anterior, este conjunto de comandos garantiza que se utilicen versiones específicas y compatibles de Node.js y npm, evitando posibles fallos debidos a incompatibilidades entre versiones.</p>
<pre>
<code>
# installs fnm (Fast Node Manager)
<b>curl -fsSL https://fnm.vercel.app/install | bash</b>
# activate fnm
<b>source ~/.bashrc</b>
# download and install Node.js
<b>fnm use --install-if-missing 20</b>
# verifies the right Node.js version is in the environment
<b>node -v # should print `v20.18.0`</b>
# verifies the right npm version is in the environment
<b>npm -v # should print `10.8.2`</b>
</code>
</pre>

<br>
<p>Despues de que ya se haya intalado el node js necesitaremos intsalar el npm para poder instalar el firebase-tools. Tendremos que ejecutar el siguiente comando:</p>
<pre>
<code>
<b>sudo apt install npm -y</b>
</code>
</pre>
<br>
<p>Una vez intnstalado el npm solo queda una instalacion mas para que funcione el fire base que es el <b>firebase-tools</b>. Se intala con el siguiente comando:</p>
<pre>
<code>
<b>npm install -g firebase-tools</b>
</code>
</pre>
<br>
<p>Despues de haber instalado el firebase, tenemos que comprobar si es compatible ambas versiones. Para ver que la version sea compatible con nodejs es:</p>
<pre>
<code>
<b>firebase --version</b>
</code>
</pre>
<img src="https://github.com/user-attachments/assets/dedc83ef-6b2c-475f-9a1a-43854b50cc0b" alt="LOGO-GODO" width="800" height="200" />
<br>
<p>Una vez todo esta instalado y hemos comrobado que las versiones son compatibles tenemos que loguearnos con nuestra cuenta. Para eso tenemos que escribir lo siguiente:</p>
<pre>
<code>
<b>firebase login --no-localhost</b>
</code>
</pre>
<img src="https://github.com/user-attachments/assets/b6d07467-ddda-4377-ac9b-f4bc4284e849" alt="LOGO-GODO" width="800" height="100" />

<br>

<p>Una vez logueado tenemos que inicializarlo con el siguiente comando:</p>
<pre>
<code>
<b>firebase init</b>
</code>
</pre>
<img src="https://github.com/user-attachments/assets/4e502ffc-d1b1-4d7f-8934-62c71aebd739" alt="LOGO-GODO" width="1000" height="500" />

<br>

<p>Para ver los proyectos que tienes en firebase puedes utilizar el comando:</p>
<pre>
<code>
<b>firebase projects:list</b>
</code>
</pre>

<br>

<h3>Mas comandos Firebase Ubuntu</h3>
<p>Despues de saber los proyectos que tenemos lo que hacemos es subir los archivos html a nuestra carpeta public y iniciamos el host para poder subir nuestra pagina web con la base de datos subida que se modifica con scripts.</p>
<img src="https://github.com/user-attachments/assets/f75b8951-c442-4734-97a4-f8ae2b5dd3aa" alt="LOGO-GODO" width="1000" height="500" />
<img src="https://github.com/user-attachments/assets/519e8939-ee60-4a38-ae6b-e80cbfb70cdd" alt="LOGO-GODO" width="1000" height="500" />



<h1 id="Instalación DNS">Instalación DNS</h1>
<h2>Actualización del sistema e instalación de Bind9</h2>
<pre>
<code>
<b>sudo apt update && sudo apt upgrade -y</b>
</code>
</pre>

<pre>
<code>
<b>sudo apt install bind9 bind9utils bind9-doc</b>
</code>
</pre>
<br>

<h2>Configuración del netplan</h2>

<p>Accedemos al archivo "/etc/netplan/00-network-manager-all.yaml" y le indicamos que coja la dirección IP con el dhcp4 que ya hemos configurado. <br>
<img src="https://github.com/Rusta4/Godofredos/blob/main/fotos_memoria/netplan-dns.png" alt="LOGO-GODO" width="500" height="300" />

<br>
<br>
<h2>Configuración named.conf.options</h2>

<p>Accedemos al archivo "/etc/bind/named.conf.options" y editamos los forwardes para agregar el servidor de google como un servidor externo. <br>
<img src="https://github.com/Rusta4/Godofredos/blob/main/fotos_memoria/forwarders.png" alt="LOGO-GODO" width="500" height="200" />
    
<p>Añadimos una pequeña configuración para permitir consultas de cualquier IP:</p></p>

<pre>
<code>
<b>allow-query { any; };</b>
</code>
</pre>
<br>
<h2>Edición del archivo named.conf.local</h2>
<p>Una vez editado este archivo procederemos a editar el siguiente "sudo nano /etc/bind/named.conf.local". En este archivo declararemos las zonas ( dominios ) tanto directas como inversas y declararemos el servidor como autoritativo.</p>

<p>Además, aunque no hayamos creado aún el archivo de configuración de la zona vamos adelatando trabajo y declaramos que dicho archivo de configuración se llamará db.godofredo.com y db.10.20.40</p>

<img src="https://github.com/Rusta4/Godofredos/blob/main/fotos_memoria/archivo-conf.local.png" alt="LOGO-GODO" width="550" height="500" />

<br>
<h2>Configuración de la zona directa e inversa</h2>

<p>El siguiente paso crearemos una carpeta ( para tenerlo todo mejor organizado ) donde pondremos los archivos de configuración de la zona directa e inversa, esta carpeta se llamará "zones"</p>

<pre>
<code>
<b>sudo mkdir /etc/bind/zones</b>
</code>
</pre>
<h4>Zona directa</h4>
<p>Además, copiaremos un archivo de configuración de zona directa e inversa que viene con una configuración predeterminada con la instalación de Bind9 para utilizarlo como prototipo y editarlo a nuestro gusto.</p>

<pre>
<code>
<b>sudo cp /etc/bind/db.local /etc/bind/zones/db.godofredo.com</b>
</code>
</pre>

<p>En este archivo configuramos nuestro dominio ( nombre de la zona ) y además le indicamos que tiene que ser el servidor autotitavio con "ns.godofredo.com".</p>

<p>Además, aunque lo hemos dejado con la configuración default, se puede configurar parámetros para el registro SOA como: el Serial, el Refresh de los servidores o el tiempo que se almacena una repuesta negativa en la caché, entre muchos otros.</p>

<p>Por último, realizamos el registro de nombre. Estos, registros son necesários para que el servidor asocie la dirección IP con el nombre de dominio y el nombre de dominio con la IP. También, adelantamos trabajo a futuro y le indicamos que asocie el subdominio www.godofred.com con la dirección IP del servidor WEB.</p>

<img src="https://github.com/Rusta4/Godofredos/blob/main/fotos_memoria/zona-directa.png" alt="LOGO-GODO" width="700" height="400" />
<p> </p>
<p> </p>
<h4>Zona inversa</h4>

<p>A continuación, editaremos el archivo de zona inversa, que es muy similar a la configuración de la zona directa.</p>

<p>En este archivo podemos configurar exactamente los mismo parámetros que en el de la zona directa. Sin embargo, sólo configuraremos registros PTR y NS para que el servidor asocie la IP del servidor DNS al nombre de dominio godofredo.com, es decir la resolución inversa.</p>

<img src="https://github.com/Rusta4/Godofredos/blob/main/fotos_memoria/zona-inversa.png" alt="LOGO-GODO" width="700" height="400" />


<br>
<h2>Edición del archivo named</h2>
<p>Ya casi finalizamos, pero antes debemos de modificar un pequeño parámetro del archivo "/etc/default/named", donde especificaremos la opción -4, por lo que obliga al servidor a utilizar IPv4 y evitar errores de red por direccionamiento de IPv6.</p>

<img src="https://github.com/Rusta4/Godofredos/blob/main/fotos_memoria/-4.png" alt="LOGO-GODO" width="500" height="200" />

<br>

<h2>Edición del archivo resolv.conf y enlaces simbólicos</h2>
<p>Llegados a este punto si le hacemos un nslookup a godofredo.com nos dará error y nos devolvera 127.0.0.1 . Para que esto no pase, debemos de configurar el archivo "/run/systemd/resolve/resolv.conf" con la IP de nuestro servidor y el nombre de dominio.</p>

<img src="https://github.com/Rusta4/Godofredos/blob/main/fotos_memoria/resolv.conf.png" alt="LOGO-GODO" width="400" height="200" />


<p>Para finalizar la configuración, creamos un enlace simbólico al archivo de configuración de resolución de nombres de systemd-resolved en el archivo /etc/resolv.conf</p>

<pre>
<code>
<b>sudo ln -sf /run/systemd/resolve/resolv.conf /etc/resolv.conf</b>
</code>
</pre>
<br>
<h3>Verificación de la configuración</h3>

<p>Una vez editado todos los archivos comprobamos que todos los archivos están bien configurados.</p>

<pre>
<code>
<b>Verificar sintxis: sudo named-checkconf</b>
</code>
</pre>


<pre>
<code>
<b>sudo named-checkzone godofredo.com /etc/bind/zones/db.godofredo.com</b>
</code>
</pre>


<pre>
<code>
<b>sudo named-checkzone 40.20.10.in-addr.arpa /etc/bind/db.10.20.40</b>
</code>
</pre>

<br>
<h2>Reiniciamos Bind9</h2>

<p>Reiniciamos el bind9 para aplicar los cambios</p>

 <pre>
<code>
<b>sudo systemctl restart bind9</b>
</code>
</pre>

<p>Y miramos el estado del servidor</p>

 <pre>
<code>
<b>sudo systemctl restart bind9</b>
</code>
</pre>

<h1 id="Instalación NGINX">Instalación NGINX</h1>
<h3>Actualización del sistema e instalación de Nginx</h3>
<pre>
<code>
<b>sudo apt update && sudo apt upgrade -y</b>
</code>
</pre>

<pre>
<code>
<b>sudo apt install nginx</b>
</code>
</pre>
<br>

<h2>Creación de la carpeta de nuestro dominio</h2>

<p>Creamos una carpeta en el directorio <b>/var/www/html/godofredo.com</b></p><br>
<pre>
<code>
<b>sudo mkdir -p /var/www/html/godofredo.com</b>
</code>
</pre>

<br>
<br>
<h3>Cambiamos los permisos de la carpeta</h3>

<p>Para que, en el momento de acceder a la web desde nuestro navegador, no nos devuleva un error 403 ( forbidden ) deberemos de otorgarle permisos a la carpeta recién creada. Además, cambiar la propiedad del directorio a nuestro usuario permite que se pueda gestionar los archivos sin necesidad de privilegios de superusuario.</p> <br>
<pre>
<code>
<b>sudo chown -R godofredo:godofredo /var/www/godofredo.com</b>
</code>
</pre>
    

<h2>Creación del archivo de configuración de Nginx</h2>
<p>Este archivo es un punto clave a la hora de de configurar Nginx, ya que con este archivo definiremos la manera en cómo Nginx maneja las solicitudes que lleguen al dominio o la dirección IP</p>
<p><br>
<pre>
<code>
<b>sudo nano godofredo.com</b>
</code>
</pre>

<p>Con la siguiente configuración:</p>
<img src="https://github.com/Rusta4/Godofredos/blob/main/fotos_memoria/sites-available.png" alt="LOGO-GODO" width="450" height="300" />

<h2>Creación del enlace simbólico</h2>

<p>Creamos un enlace simbólico en sites-enables para indicarle a Nginx que incluya automáticamente la configuración que estamos aplicando al inciar el servicio.</p>

<pre>
<code>
<b>sudo ln -s /etc/nginx/sites-available/godofredo.com /etc/nginx/sites-enabled/</b>
</code>
</pre>

<p>Nos debería de quedar algo así:</p>

<img src="https://github.com/Rusta4/Godofredos/blob/main/fotos_memoria/enlace-simbolico.png" alt="LOGO-GODO" width="650" height="70" />

<h2>Verificación de la configuración</h2>

<p>Para asegurarnos que no hemos cometido ningún error, aplicaremos el sigueinte comando:</p>

<pre>
<code>
<b>sudo nginx -t</b>
</code>
</pre>
<p>Si nos devuelve un "Successful", singificará que no hay ningún error en la configuración. Sin embargo, para asegurarnos de que todo está bien ejecutaremos otro comando.</p>

<pre>
<code>
<b>systemctl restart nginx</b>
</code>
</pre>

<p>y</p>

<pre>
<code>
<b> systemctl status nginx</b>
</code>
</pre>


<h2>Configuración visual de nuestra web</h2>

<p>Ahora que ya hemos configurado el servidor, tenemos que añadir los archivos de nuestra web para que, al buscarla en el navegador, aparezca directamente la web que hemos desarrollado.</p>
<p>Para ello, deberemos de ir a la ruta <b>/var/www/html/godofredo.com</b> y añadimos todos los archivos de nuestra web, tanto .html, .css, .jpg ......</p>

<img src="https://github.com/Rusta4/Godofredos/blob/main/fotos_memoria/archivos-web.png" alt="LOGO-GODO" width="650" height="70" />
<br>

<h2>Resultado final</h2>
<img src="https://github.com/Rusta4/Godofredos/blob/main/fotos_memoria/resultado-nginx.png" alt="LOGO-GODO" width="750" height="650" />
<br>

<h1>Implementación de un certificado SSL</h1>

<h2>¿Qué es un certificado SSL?</h2>
<p>Ahora que ya hemos configurado nuestra página web, tnemos que garantizar que el acceso a esta sea lo más seguro posible. Hasta el momento hemos estado estableciendo la conexión mediante http ( puerto 80 ), una muy mala práctica, ya que no tenemos seguridad alguna. Para añadir esta pequeña capa de seguridad extra a nuestro sitio web añadiremos un certificado ssl, que no es más que un archivo que asegura que la conexión entre el navegador web y el servidor es totalmente seguro.</p>

<p>Mediante la utilización de este tipo de certificados, podemos cifrar la información que se transmite, así como los datos personales y contraseñas, para que no puedan ser interceptados. Por últimio, nos permite autenticar que el sitio web es legítimo, por lo que los usuarios podrán navegar tranquilamente y aumentaremos la confianza de los visitantes.</p>
<br>
<h2>Creación de la carpeta "ssl-certs"</h3>
<p>El primer paso y, el más importante de todos es crear una carpeta donde poder guardar nuestros certificados, de esta forma podemos trabajar en un entorno mucho más organizado y, a la hora de definir el path en el archivo de configuración será todo mucho más sencillo.</p>

<pre>
<code>
<b> sudo mkdir /ec/nginx/ssl-certs/</b>
</code>
</pre>
<br>
<h2>openssl</h2>
<p>Una vez que ya tenemos nuestro entorno organizado, crearemos un certificado autofirmado junto con la clave mediante la utilización de openssl. Para ello, ejecutaremos el siguiente comando: </p>

<pre>
<code>
<b> sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout /etc/nginx/ssl-certs/godofredo.com.key -out /etc/nginx/ssl-certs/godofredo.com.crt</b>
</code>
</pre>

<ul>
<li><b>req</b> -x509: indica que estamos generando un certificado en formato X.509, que es un estándar utilizado para certificados digitales.</li>

<li><b>-nodes:</b> significa "no cifrar la clave privada", lo que implica que la clave generada no estará protegida por una contraseña.</li>

<li><b>-days 365:</b> establece la duración de validez del certificado, en este caso, un año (365 días).</li>

<li><b>-newkey rsa:2048:</b> indica que se generará una nueva clave utilizando el algoritmo RSA, y que la longitud de esta clave será de 2048 bits.</li>

<li><b>-keyout /etc/nginx/ssl-certs/kirby.com.key:</b> define la ubicación completa donde se guardará la clave RSA generada.</li>

<li><b>-out /etc/nginx/ssl-certs/kirby.com.crt:</b> especifica la ubicación completa del archivo donde se almacenará el certificado creado.</li>

</ul>
<br>
<h2>Configuración del archivo de dominio </h2>
<p>Una vez que ya hemos generado nuestro certificado privado debemos indicarle a nginx que utilice este arhivo. Para ello, abriremos el archivo ""etc/nginx/sites-enabled/godofredo.com" y aplicaremos la siguiente configuración:</p>
<img src="https://github.com/Rusta4/Godofredos/blob/main/fotos_memoria/conf-ssl.png" alt="LOGO-GODO" width="594" height="316" />
<br>
<h2>Comprobación y reinicio</h2>

<p>Una vez realizada toda la configuración comprobamos que todo esté bien con el siguiente comando:</p>
<pre>
<code>
<b> nginx -t</b>
</code>
</pre>

<p>Si nos devuelve todo "Successful" significará que tenemos toda la configuración bien y que ya podemos reiniciar</p>
<pre>
<code>
<b> sudo systemctl restart nginx</b>
</code>
</pre>
<br>
<h2>Resultado final</h2>
<p>Una vez que ya hemos hecho todo esto, comprobamos que funciona todo correctamente accediendo a nuestra web con https://godofredo.com</p>
<img src="https://github.com/Rusta4/Godofredos/blob/main/fotos_memoria/ssl-evidencia-web.png" alt="LOGO-GODO" width="1205" height="770" />
<br>

<h1 id="Instalación FTP">Instalación FTP</h1>
<p>Para instalar el FTP en tu maquina tenemos que poner este comando:</p>
<pre>
<code>
<b>sudo apt install vsftpd</b>
</code>
</pre>

<br>

<p>Una vez ya instalado para ver si esta activo y va todo bien ponemos el siguente comando:</p>
<pre>
<code>
<b>sudo systemctl status vsftpd</b>
</code>
</pre>
<img src="https://github.com/user-attachments/assets/44fa31d8-f648-41b3-8c44-991a0dd55ea1" alt="LOGO-GODO" width="900" height="500" />

<br>

<p>Para ver si funciona la conexion desde la maquina cliente tenemos que poner el siguente comando para ver si accede a nustro FTP:</p>
<pre>
<code>
<b>ftp 10.20.40.6</b>
</code>
</pre>
<img src="https://github.com/user-attachments/assets/d6d7caba-3324-4a0e-a4c5-3ef7ee8c3afb" alt="LOGO-GODO" width="600" height="200" />

<br>

<p>Para poder acceder tenemos que crear un usuario desde la maquina donde tenemos el FTP. Para eso utilizamos el siguiente comando:</p>
<pre>
<code>
<b>sudo adduser redeszone</b>
</code>
</pre>

<br>

<p>Desde la maquina Cliente acedemos al ftp como antes y con el usuario que creamos en el apartado anterior y lo utilizamos.</p>
<img src="https://github.com/user-attachments/assets/237b3758-89e7-469c-89f4-12aa462d5f71" alt="LOGO-GODO" width="800" height="300" />

<h1 id="Instalación Cloudflared">Instalación Cloudflared</h1>
<p></p>


<h1 id="Instalación Docker">Instalación Docker</h1>
<p>Primero instalamos docker desktop desde su pagina oficial</p>
<p>Despues miramos la version</p>
<p>Despues miramos si va el hello-world con el comando "Docker run hello-world"</p>
<p>El instalador lo puedes ejecutar las veces que quieras y cada uno tiene un puerto</p>
<p>Si todo funciona ahora descargaremos imagenes pra despues convertirlas en contenedores</p>
<p>ejecutamos este comando para que funcione mysql, en el apartado de contraseña ponemos la contraseña que queramos y en el apartado de mymysql tambien podemos escribir lo que uqeramos: docker run -e MYSQL_ROOT_PASSWORD=contraseña --named mymysql mysql</p>
<p>Para ejecutar en modo iterctivo hay que hacer el sigiente comando: "docker exec -it mymysql bash" recuerda que el mymysql lo decides tu. El bash es porque la imagen se ejecuta desde un sistema operativo linux</p>
<p>Entraremos en una terminal linux. Si hacemos "ls" es para ver los archivos que hay dentro. Despues para entrar como root tenemos que ejcutar el sigiente comendo "mysql -u root -p" y cuando te pida la contraseña tendremos que poner la que definimos anterior mente</p>
<p>Para ver las bbdd que hay dentro tenemos que ejecutar el siguente comendo "show databases;"</p>
<p>Para crear una bbdd tenemos que hacer el sigiente comando "create database NOMBRE"</p>
<p>Para crear otro run debemos de hacer lo sigiente: "docker run --name otroNombre -p 7777:3306 -e MYSQL_ROOT_PASSWORD=11111111 mysql" Esto lo que hace es que creamos otro contenedor con otro nombre y por el puerto que le pongamos. Se creara otra intalacion</p>
<p>Intslar docker en visual studio code</p>




  
</details>
