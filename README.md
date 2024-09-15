# AiroScents: Project Story

## Inspiration
The idea behind AiroScents was born from the desire to merge technology with environmental enhancement. We wanted to create a solution that could improve the atmosphere in indoor spaces using technology in a way that was both practical and unique. As we explored possibilities, we realized that scent plays a significant role in setting moods and enhancing spaces, whether in a home, office, or event setting. This led us to the concept of an autonomous drone that could navigate spaces while dispersing pleasant fragrances, creating a seamless blend of hardware innovation and software control.

## What We Learned
Throughout the development process, we gained a deeper understanding of hardware-software integration. We learned about the complexities of working with Bluetooth modules like the HC-05, the challenges of creating stable flight systems for drones, and the importance of seamless communication between devices. On the software side, we explored React and TypeScript more thoroughly, learning how to integrate external APIs like Mappedin, and how to optimize user interaction for controlling a drone in real-time. The pathfinding research taught us the value of algorithmic efficiency and how crucial it is for navigating complex spaces autonomously.

## How We Built It
The project was built in two main phases: hardware and software.

### Hardware:
- We custom-built the drone, integrating an Arduino UNO microcontroller alongside a Speedybee f405 v4 Stack Flight Controller and a HC-05 Bluetooth module to communicate with our web app. 
-All code was written with the Arduino IDE, and Serial data was tested using the Serial Monitor tool.
- The motors were set up for mobility, while a scent-dispensing mechanism was installed to allow the drone to release fragrances at intervals.
- A secondary automatic scent dispensing system was built using a stepper motor and custom 3D printed arm attachment.
- Sensors can be used to ensure stable flight and accurate navigation through indoor spaces. In the future, we intend to integrate a ToF sensor in order to allow the drone to locate itself in real space.

### Software:
- The web application was developed using **React JS**, **Node JS** and **TypeScript**. 
- In the main landing page there are two buttons :
      1) **Connect to Drone** that allows the web application to connect to drone via Bluetooth
      2) The other one is **Fly Manually** which opens up the controller 
- We  implemented the **Mappedin API** to enable users to define the route the drone would take, mapping out spaces for efficient coverage.
- A manual control panel was also built into the web app, allowing users to control the drone in real-time.
- We separately explored the potential for **C pathfinding algorithms** to allow the drone to navigate autonomously in the future.

## Challenges We Faced
One of the main challenges was ensuring stable communication between the drone and the web app. The Bluetooth module presented issues with range and reliability, which required us to troubleshoot and optimize its performance. On the hardware side, building a stable and efficient drone was a major task, as we had to balance weight, flight stability, and the addition of the scent-dispensing mechanism. On the software side, integrating the Mappedin API presented its own challenges, particularly with mapping complex indoor environments and ensuring the drone would follow precise routes. 

## Conclusion
AiroScents was a challenging yet highly rewarding project that pushed our skills. We are proud to have built a product that combines technology with a unique, practical application, and we look forward to exploring further improvements and features for future iterations.


