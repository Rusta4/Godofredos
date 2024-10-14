

<h1>ASIX2 Primer Proyecto Pagina Web - Godofredo`s</h1>

<h2>Explicacion idea del proyecto</h2>
<p>Estamos creando una plataforma web similar a GitHub, pero totalmente enfocada en el campo de la ciberseguridad. Como equipo, nuestra misión es ofrecer un espacio donde los profesionales de la seguridad informática puedan colaborar, compartir herramientas, scripts y proyectos que aborden distintas áreas de ciberseguridad, desde la evaluación de vulnerabilidades hasta la automatización de auditorías.

Una de las características clave de nuestra plataforma es el uso de imágenes Docker, lo que permitirá a los usuarios crear y compartir entornos preconfigurados de manera rápida y sencilla. Con esto, cualquier miembro de la comunidad podrá replicar de forma precisa estos entornos para realizar pruebas de seguridad, sin necesidad de configuraciones complejas. Además, esto facilitará la colaboración entre profesionales, ya que los entornos Docker garantizan que todo el mundo trabaje en el mismo entorno aislado y seguro.</p>


<h2>Nuestros Objetivo</h2>
<p>Nuestro objetivo es proporcionar una herramienta que no solo centralice el desarrollo en ciberseguridad, sino que también fomente una colaboración más efectiva entre expertos y entusiastas de la seguridad informática. Al concentrar los recursos, herramientas y proyectos en un solo lugar, buscamos facilitar el acceso a soluciones innovadoras y prácticas que puedan ser utilizadas por toda la comunidad.</p>
<img src="https://github.com/user-attachments/assets/222bf100-c324-4f2e-86e5-ef21598cb985" alt="LOGO-GODO" width="800" height="600" />

<h2>Tecnologias Usadas</h2>
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

<h2>Organizacion</h2>

<h4>Nicolás Guerra</h4>
<h5>  - Proxmox</h5>
<h5>  - DOCKERS</h5>

<h4>Adrià Trillo</h4>
<h5>  - Máquinas Virtuales (VM)</h5>
<h5>  - HTML (HyperText Markup Language)</h5>

<h4>Edward Murphy</h4>
<h5>  - CSS (Cascading Style Sheets)</h5>
<h5>  - Firebase</h5>
<h5>  - BOOTSTRAP</h5>


<h1>Pagina Web</h1>

<h2>Mockup</h2>
<img src="https://github.com/Rusta4/Godofredos/blob/main/mokcups/conjunto-mockup%C3%A7.png" alt="LOGO-GODO" width="1000" height="500" />

<h2>Diagrama Web</h2>
<p>El mapa del sitio presenta una estructura técnica organizada alrededor de la página principal (HOME), que actúa como nodo central para acceder a cinco secciones clave: recursos técnicos, gestión de usuarios y páginas informativas. Los recursos técnicos incluyen Hacking tools, Docker, y ISO files, que enlazan a un foro de hacking, una página sobre Docker y descargas de archivos ISO, respectivamente. La gestión de usuarios se centra en la sección INICIAR SESIÓN, que permite autenticarse, registrarse o recuperar contraseñas mediante un código de verificación. Además, desde diferentes áreas del sitio se puede acceder al Perfil de usuario, donde es posible modificar credenciales como el usuario, la contraseña o el correo. La sección About Us proporciona información sobre el sitio, con enlaces hacia la autenticación y registro. La estructura facilita un flujo de navegación eficiente, priorizando tanto el acceso a recursos técnicos como la administración de la cuenta del usuario de manera clara y modular.</p>
<img src="https://github.com/user-attachments/assets/e90dfc7f-f809-465d-98d9-5063af0227a1" alt="LOGO-GODO" width="900" height="500" />

<h2>Paleta Colores</h2>
<p>Esta paleta de colores combina el blanco, gris claro, azul oscuro y verde fuerte para equilibrar simplicidad, profesionalismo y dinamismo. El blanco aporta claridad y limpieza, mientras que el gris claro ofrece neutralidad y elegancia sin desentonar. El azul oscuro transmite confianza y seriedad, siendo ideal para entornos corporativos, y el verde fuerte añade energía y frescura, destacando elementos clave como llamadas a la acción. En conjunto, crean una armonía visual que es funcional y atractiva.</p>
<img src="https://github.com/user-attachments/assets/4a00d276-8ad7-4cf6-a7fb-11ecbbd096f1" alt="LOGO-GODO" width="900" height="250" />

<h2>Logo</h2>
<p>Usaremos el primer logo para nuestra web porque refleja simplicidad y profesionalismo, alineándose con el estilo minimalista de marcas tecnológicas modernas. El diseño en blanco y negro aporta una estética limpia y elegante, lo que facilita su integración en diferentes plataformas. Además, el animal icónico en el logo le da personalidad y un toque distintivo sin sobrecargar el diseño.</p>
<img src="https://github.com/user-attachments/assets/a8580f0e-db47-4891-bf4a-0d3fd1cccb1d" alt="LOGO-GODO" width="400" height="400" />

<br>
    
<h1>Proxmox</h1>

<h2>Imagen Arquitectura</h2>
<p>Nuestra arquitectura esta basada en una red virtual, la cual consta de un cliente (MV CLIENTE) que se conecta a Firebase mediante una máquina virtual que funciona como router (MV ROUTER) y un router físico conectado a Internet. Dicho enrutador consta con una dirección IP pública dinámica (100.77.20.X), la cual permite la conexión a Internet. MV ROUTER administra dos interfaces: una (VMBR0) externa con IP pública (100.77.20.120) conectada al router físico y otra (VMBR1) interna con IP privada (10.20.40.1) para la comunicación en la red local con el cliente (IP 10.20.40.2). La creación de estas dos redes permite al cliente el acceso a servicios externos, como Firebase, mediante la infraestructura virtual y física. Nosotros lo hemos realizado de la siguiente manera <a href="#instalacion">blabla</a></p>
<img src="https://github.com/user-attachments/assets/a285de31-caa5-445e-b36f-88f0eb6e404c" alt="LOGO-GODO" width="900" height="500" />


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

<h1>Firebase</h1>
<p>Firebase Realtime Database es una base de datos NoSQL alojada en la nube. Los datos se almacenan en formato JSON y se sincronizan en tiempo real con cada cliente conectado y se mantienen disponibles cuando la aplicación no tiene conexión.</p>
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
<img src="https://github.com/user-attachments/assets/a0f1dd28-3f3e-4572-8b6f-0860a6c2dba7" alt="LOGO-GODO" width="1000" height="500" />
<img src="https://github.com/user-attachments/assets/20df8c32-8a2c-4b21-84a8-ea318b2f604a" alt="LOGO-GODO" width="1000" height="600" />
<img src="https://github.com/user-attachments/assets/3cba3967-6794-47de-9d6d-8fba99f35991" alt="LOGO-GODO" width="1000" height="700" />



<h1>DNS</h1>


<h1>NGINX (WEB)</h1>
<p>Una vez logueado tenemos que inicializarlo con el siguiente comando:</p>
<pre>
<code>
<b>sudo apt install nginx</b>
</code>
</pre>
<br>
<p>Una vez logueado tenemos que inicializarlo con el siguiente comando:</p>
<pre>
<code>
<b>sudo systemctl status nginx</b>
</code>
</pre>
<img src="https://github.com/user-attachments/assets/1e6851e1-c1b4-4b9c-a475-e40e7e256d56" alt="LOGO-GODO" width="1000" height="500" />
<br>
<p>Desde otra maquina renemos que poner el siguente codigo para saber si funciona. Nosotros hemos utilizado la nuestra de cliente. Nosotros hemos utilizado nustra ip donde esta el NGINX con el puerto 80.</p>
<pre>
<code>
<b>curl 10.20.40.6:80</b>
</code>
</pre>
<img src="https://github.com/user-attachments/assets/854199e9-fe1d-4be1-b4a7-74cf63c45f8a" alt="LOGO-GODO" width="1000" height="500" />


<h1>FTP</h1>
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


<li><a href="#instalacion">blabla</a></li>
<h2 id="instalacion">blabla</h2>
