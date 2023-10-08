<h1 align="center">A Marketplace for Open Science Projects</h1>
![imagen](https://github.com/Fran4002/static_web/blob/main/src/images/logo.png)

# High-Level Summary
"LabLink Network" is a global hub for scientific collaboration, connecting researchers worldwide and fostering interdisciplinary projects. Our platform empowers researchers to showcase their expertise and find skilled collaborators, driving advancements through open science principles.
![Static Badge](https://img.shields.io/badge/open-source-blue)
![Static Badge](https://img.shields.io/badge/python-yellow)
![Static Badge](https://img.shields.io/badge/open-blue_science-red)


# Project Details
## 🌐 What does it do exactly?

LabLink Network connects global professionals, fostering collaboration on interdisciplinary research projects, creating a worldwide impact.
## 🤝 How does it work?

Our platform empowers users to find teams matching their skills for seamless collaboration on multidisciplinary projects.
## What are the benefits?

Forge connections with thousands of research teams spanning all scientific domains. Discover how your skills can contribute to diverse projects, expanding your expertise.
## 🌍 What do we hope to achieve?

Establish an open-access global hub for researchers and collaborators across every scientific field. Share ongoing project information, enabling skill-driven collaborations from anywhere.
## 🧠 Cutting-Edge Technology:

LabLink Network utilizes Artificial Intelligence and natural language models, to identify skill compatibility.
![imagen](https://github.com/hermes76/Navigation-system-for-an-intelligent-electric-wheelchair/assets/44623908/72fbb988-3577-4982-a088-cd3ca28945b0)


# Requisitos
- [Ubuntu 17.04]
- [ROS Melodic](http://wiki.ros.org/melodic/Installation/Ubuntu)
- [Create robot](https://github.com/AutonomyLab/create_robot)

# Instalación
Para clonar este repositorio utiliza los siguientes comandos
```
$ cd catkin_ws
$ cd src
$ git clone <este repositorio>
$ cd ..
$ catkin_make
```

# Módulo de mapeo
Para mapear una habitación o algun lugar usando el kinect es necesario ejecutar los siguientes paquetes,abre una nueva terminal y escribre lo siguiente:
```
$ cd catkin_ws
$ source devel/setup.bash
$ roslaunch ewc_slam ewc_slam.launch slam_methods:=gmapping
```
Para mover el create con el teclado ejecuta los siguientes comandos en una nueva terminal:
```
$ cd catkin_ws
$ source devel/setup.bash
$ rosrun ewc_teleop ewc_teleop_key
```

# Módulo de navegación
Para ejecutar el módulo de navegación se deben de ejecutar los siguientes comandos
```
$ cd catkin_ws
$ source devel/setup.bash
$ roslaunch ewc_navigation configuration.launch
```
Una vez que cargue el mapa en la herramienta de Rviz deberás de colocar los puntos delimitantes para la navegación con el botón 
![imagen](https://github.com/hermes76/Navigation-system-for-an-intelligent-electric-wheelchair/assets/44623908/f9088f31-c3b3-44f6-96e3-dd8572ea36e3)



Para colocar los 2 puntos siempre debes de empezar desde la esquina inferior derecha y poner el punto de la esquina superior izquierda.
![imagen](https://github.com/hermes76/Navigation-system-for-an-intelligent-electric-wheelchair/assets/44623908/bc624732-cfa5-4d95-868e-3fec833baebd)



listo después solo introduce la posición estimada y la posición a donde deseas llegar :shipit:
![imagen](https://github.com/hermes76/Navigation-system-for-an-intelligent-electric-wheelchair/assets/44623908/ea776b91-d236-402e-922a-65f4fc0c593e)





