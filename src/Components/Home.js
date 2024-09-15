import React, { useState } from 'react';
import './Home.css';

function Home() {
  const [characteristic, setCharacteristic] = useState(null);
  const[displayController , setdisplayController] = useState(false);
  const connectBluetooth = async () => {
    try {
      const device = await navigator.bluetooth.requestDevice({
        filters: [{ name: 'HC-O5' }],
      });

      const server = await device.gatt.connect();
      const service = await server.getPrimaryService(
        '12345678-1234-5678-1234-56789abcdef0'
      );
      const commandCharacteristic = await service.getCharacteristic('abcd');

      setCharacteristic(commandCharacteristic);
      console.log('Bluetooth device connected');
    } catch (error) {
      console.error('Error connecting to Bluetooth device:', error);
    }
  };

  const FlyManual = async () =>{
    setdisplayController(true);
  }

  const sendCommand = async (command) => {
    if (characteristic) {
      try {
        const encoder = new TextEncoder();
        await characteristic.writeValue(encoder.encode(command));
        console.log('Command sent:', command);
      } catch (error) {
        console.error('Error sending command:', error);
      }
    } else {
      console.log('Bluetooth device not connected');
    }
  };

  return (
    <div className="controller">
      <h1 class="heading">Drone Controller</h1>
      <button onClick={connectBluetooth} className="btn connect-btn">
        Connect to Drone
      </button>

      <button onClick={FlyManual} className="btn connect-btn">
        Fly Manually 
      </button>

      {displayController ? <div className="controls">
        {/* Directional Pad */}
        <div>
          <button onClick={() => sendCommand('F')} className="btn d-pad-btn up margin">
            Pitch Down
          </button>
          <div className="middle-row">
            <button onClick={() => sendCommand('L')} className="btn d-pad-btn left">
              Roll Left
            </button>
            <button onClick={() => sendCommand('R')} className="btn d-pad-btn right margin">
              Roll Right
            </button>
          </div>
          <button onClick={() => sendCommand('B')} className="btn d-pad-btn down margin">
            Pitch Up
          </button>
        </div> 

        {/* Throttle, Yaw, and Aux Controls */}
        <div className="control-group">
          <div className="throttle-controls">
            <button onClick={() => sendCommand('U')} className="btn throttle-btn">
              Throttle Up
            </button>
            <button onClick={() => sendCommand('D')} className="btn throttle-btn">
              Throttle Down
            </button>
          </div>
          <div className="yaw-controls">
            <button onClick={() => sendCommand('T')} className="btn yaw-btn">
              Yaw Left
            </button>
            <button onClick={() => sendCommand('X')} className="btn yaw-btn">
              Yaw Right
            </button>
          </div>
          <div className="aux-controls">
            <button onClick={() => sendCommand('1')} className="btn aux-btn">
              Aux1
            </button>
            {/* Add more auxiliary buttons as needed */}
          </div>
        </div>
      </div>: <div></div> }
    </div>
  );
}

export default Home;
