<h1>ASIX2 Proyecto - Godofredo`s                          ®️</h1>


<!-- Explicacion idea del proyecto -->
<details>
  <summary><h2>📖 Explicacion idea del proyecto</h2></summary>
  <br>
<p>Estamos creando una plataforma web similar a Hack The Box, pero totalmente enfocada en el campo de la ciberseguridad. Como equipo, nuestra misión es ofrecer un espacio donde los profesionales de la seguridad informática puedan colaborar, compartir herramientas, scripts y proyectos que aborden distintas áreas de ciberseguridad, desde la evaluación de vulnerabilidades hasta la automatización de auditorías.

El proyecto que desarrollaremos durante el segundo y tercer trimestre es una continuación directa del trabajo realizado en el primer proyecto. En esta nueva fase, implementaremos de manera completa tecnologías clave como Docker, con el objetivo de crear un despliegue de contenedores. Esta red permitirá a los usuarios desarrollar y compartir entornos avanzados para pruebas de seguridad, maximizando la eficiencia y precisión mediante configuraciones reproducibles y escalables.

Una de las redes de contenedores contará con un firewall implementado mediante pfSense, configurado en un contenedor gateway para la red privada. Este firewall permitirá definir y aplicar políticas estrictas para controlar el tráfico entrante, saliente y lateral, asegurando el aislamiento de servicios sensibles y ofreciendo un control avanzado mediante su interfaz gráfica o configuración mediante scripts automatizados.

Por otro lado, un contenedor basado en Ubuntu gestionará los backups, utilizando un script personalizado con rsync para realizar copias incrementales programadas mediante cron, con almacenamiento en destinos locales. 

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

<h4>5. Firebase</h4>
<p>Firebase es una plataforma de desarrollo de aplicaciones basada en la nube, que incluye una base de datos NoSQL en tiempo real. Es ideal para aplicaciones que requieren un manejo eficiente de grandes volúmenes de datos, ya que permite almacenar, sincronizar y recuperar información de forma rápida y escalable. Además, proporciona herramientas para la autenticación, hosting y analítica, lo que facilita el desarrollo completo de aplicaciones web y móviles.</p>

<h4>6. Dockers</h4>
<p>Docker es una plataforma que utiliza contenedores para simplificar el desarrollo, despliegue y ejecución de aplicaciones. Permite empaquetar una aplicación y todas sus dependencias en una "imagen", asegurando que funcione de manera consistente en diferentes entornos. Al usar Docker, se reduce la necesidad de configurar entornos específicos en cada servidor, lo que agiliza la implementación y mejora la escalabilidad y portabilidad de las aplicaciones.</p>

<h4>Conclusión</h4>
<p>Estas tecnologías garantizan un entorno sólido y flexible, permitiendo el desarrollo de una aplicación web dinámica y eficiente que cumple con los objetivos del proyecto.</p>
</details>
<!-- -------------------------------------------------------------------------- -->

<!-- Organización: -->

<details>
  <summary><h2>📁 Organización:</h2></summary>
  
  | Responsable       | Tareas        | 
|---------------|---------------|
| 🟡 **Nicolás Guerra** | - Proxmox  | 
|                        | - Firebase      | 
|                        | - DOCKERS | 
| 🟠 **Adrià Trillo**    | - Máquinas Virtuales (VM)  | 
|                         | - HTML (HyperText Markup Language)  | 
| 🟢 **Edward Murphy**   | - CSS (Cascading Style Sheets)  | 
|                         | - Responsive  | 

</details>
<!-- -------------------------------------------------------------------------- -->



<!-- Diagramas -->
<details>
  <summary><h2>📈 Diagramas</h2></summary>

  <details>
    <summary>&nbsp;&nbsp;&nbsp;&nbsp;🎓 <b>Diagrama Gantt</b></summary>
    <br>
    <img src="https://github.com/Rusta4/Godofredos/blob/main/fotos_memoria/diagrama-grantt.png" alt="Diagrama Gantt" width="700" height="600" />
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
    <summary>&nbsp;&nbsp;&nbsp;&nbsp;📋 <b>Diagrama Web</b></summary>
    <br>
    <p>El mapa del sitio presenta una estructura técnica organizada alrededor de la página principal (HOME), que actúa como nodo central para acceder a cinco secciones clave: recursos técnicos, gestión de usuarios y páginas informativas. Los recursos técnicos incluyen Hacking tools, Docker, y ISO files, que enlazan a un foro de hacking, una página sobre Docker y descargas de archivos ISO, respectivamente. La gestión de usuarios se centra en la sección INICIAR SESIÓN, que permite autenticarse, registrarse o recuperar contraseñas mediante un código de verificación. Además, desde diferentes áreas del sitio se puede acceder al Perfil de usuario, donde es posible modificar credenciales como el usuario, la contraseña o el correo. La sección About Us proporciona información sobre el sitio, con enlaces hacia la autenticación y registro. La estructura facilita un flujo de navegación eficiente, priorizando tanto el acceso a recursos técnicos como la administración de la cuenta del usuario de manera clara y modular.</p>
<img src="https://github.com/user-attachments/assets/e90dfc7f-f809-465d-98d9-5063af0227a1" alt="LOGO-GODO" width="900" height="500" />
  </details>
---
</details>
<!-- -------------------------------------------------------------------------- -->


<!-- Pagina Web -->
<details>
  <summary><h2>💻 Pagina Web</h2></summary>
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
  <summary><h2>☄️ pfSense</h2></summary>
<p>

  1 -->Instalación de pfSense y configuración de 2 tarjetas de red 
      WAN: 100.77.20.38/24
      LAN: 10.20.30.1/24 Dentro del rango de la .100 - .150

  2 --> Desactivamos el firewall de pfSense mediante "pfctl -d" y configuramos mediante una Rule WAN para poder entrar a la web-page con la ip de el aula.

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


  <details>
  <summary><h2>🤖 Proxmox</h2></summary>
  <h2>Imagen Arquitectura</h2>
<p>Nuestra arquitectura esta basada en una red virtual, la cual consta de un cliente (MV CLIENTE) que se conecta a Firebase mediante una máquina virtual que funciona como router (MV ROUTER) y un router físico conectado a Internet. Dicho enrutador consta con una dirección IP pública dinámica (100.77.20.X), la cual permite la conexión a Internet. MV ROUTER administra dos interfaces: una (VMBR0) externa con IP pública (100.77.20.120) conectada al router físico y otra (VMBR1) interna con IP privada (10.20.40.1) para la comunicación en la red local con el cliente (IP 10.20.40.2). La creación de estas dos redes permite al cliente el acceso a servicios externos, como Firebase, mediante la infraestructura virtual y física. Nosotros lo hemos realizado de la siguiente manera, </p>.

![image](https://github.com/user-attachments/assets/194e9e44-7b82-4afe-943f-0832058dda4f)

<h2>¿Qué es un servidor web?</h2>
<p>Un servidor web es un software que gestiona las solicitudes HTTP/HTTPS de los navegadores de los usuarios y responde con recursos, como páginas HTML, imágenes o archivos, que están alojados en el servidor. Básicamente, su función es recibir las peticiones de los clientes y entregarles los contenidos solicitados.</p> 
<br>

<h2>¿Qué es un hosting?</h2>
<p>El hosting, o alojamiento web, es el servicio que permite almacenar los archivos de un sitio web en un servidor para que sean accesibles a través de internet. Los Hosting ofrecen espacio en sus servidores para que los sitios web, correos electrónicos y bases de datos estén disponibles las 24 horas del día. Los servicios de hosting pueden ser compartidos, dedicados o en la nube.</p> 
<br>
  </details>


<details>
<summary><h2>🐳 Dockers</h2></summary>

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

</details>

<details>
  <summary><h2>📖 Backups</h2></summary>
  <br>
<p>Creamos un docker-compose.yml dentro de una carpeta llamada "Backup". Dentro de /Backup aparte del ya nombrado docker-compose.yml, esta la carpeta "Scripts" en la cual se ecuentra: backup.log (que contiene todos los logs del backup), backup.sh (que contiene un script que realiza el backup), también tenemos la configuración del "crontab" que regula cada cuanto se realizan los backups, ya que en el propio docker no se ejecuta dicho crontab y fintalmente contamos con "init.sh" que genera el archivo de crontab, inicia el servicio de cron y mantiene el contenedor desplegado.
  
<b>backup.sh:</b>
    
        #!/bin/bash
        
        # Configuración
        
        REMOTE_USER="godo"                             # Usuario del servidor remoto
        
        REMOTE_HOST="100.77.20.26"                    # IP o hostname del servidor remoto
        
        REMOTE_PATH="/root/loginRegister"          # Ruta del proyecto en el servidor remoto
        
        LOCAL_BACKUP_DIR="/storage"                   # Carpeta local para guardar backups
        
        BACKUP_NAME="backup-$(date +%Y-%m-%d)"        # Nombre del directorio de backup
        
        # Crea el directorio local de backup si no existe
        
        mkdir -p "$LOCAL_BACKUP_DIR/$BACKUP_NAME"
        
        # Sincroniza la carpeta remota al directorio local
        
        rsync -avz -e "ssh -i /root/.ssh/id_rsa" "$REMOTE_USER@$REMOTE_HOST:$REMOTE_PATH" "$LOCAL_BACKUP_DIR/$BACKUP_NAME"
        
        # Verifica si el backup fue exitoso
        
        if [ $? -eq 0 ]; then
        
          echo "Backup completado: $(date)" >> "$LOCAL\_BACKUP\_DIR/backup.log"
        
        else
        
          echo "Error al realizar el backup: $(date)" >> "$LOCAL\_BACKUP\_DIR/backup.log"
        
        fi



</p>
  

</details>


<details>
  <summary><h2>🔌 Instalaciones</h2></summary>
    <details>
    <summary>&nbsp;&nbsp;&nbsp;&nbsp;📥 <b>Proxmox</b></summary>
  </details>

  <details>
    <summary>&nbsp;&nbsp;&nbsp;&nbsp;📥 <b>pfSense</b></summary>
  </details>

  <details>
    <summary>&nbsp;&nbsp;&nbsp;&nbsp;📥 <b>Docker-Compose</b></summary>
  </details>
</details>
