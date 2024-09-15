import React from 'react';
import "./about.css";

export default function About(){

return (
    <div class="Margin">
        <h1>AiroScents - Hack the North 2024</h1>

<h2>Project Description</h2>
<p>AiroScents is an innovative project that combines hardware and software to create a fully functional, remotely controlled drone designed to enhance indoor environments by dispersing pleasant scents. The project demonstrates advanced engineering, seamless integration of IoT devices, and a focus on both user experience and practical utility.</p>

<h2>Hardware</h2>
<p>The drone is custom-built, featuring an Arduino system connected to a Bluetooth HC-05 module for communication with the web application. Equipped with motors for mobility and a dispensing mechanism for aromatic products, the drone can efficiently move through indoor spaces, spraying scents based on user input. The system is designed for stability, efficiency, and functionality, ensuring smooth operation during flight and precise scent dispersion.</p>

<h2>Software</h2>
<p>The accompanying web application, built using React and TypeScript, serves as the control center for the drone. It features several key capabilities:</p>

<h3>Mappedin API Integration</h3>
<p>This allows users to map out routes for the drone to navigate within indoor spaces, ensuring efficient coverage of any area.</p>

<h3>Manual Control Panel</h3>
<p>A user-friendly interface allows real-time manual control of the drone, providing flexibility for customized operations.</p>

<h3>Pathfinding Exploration in C++</h3>
<p>Separate research into optimizing the drone’s pathfinding algorithms in C++ aims to improve autonomous navigation, ensuring the drone can navigate complex environments without manual input.</p>

<h2>Project Motivation</h2>
<p>AiroScents addresses the need for innovative solutions in enhancing the ambiance of indoor environments. Whether for commercial spaces, homes, or events, the project offers a unique combination of automation and customization, improving air quality while adding a touch of luxury with tailored scents. The integration of hardware and software highlights the potential for drone-based systems in daily life and opens the door to further applications in air quality management and environmental enhancements.</p>
    </div>  
);

}