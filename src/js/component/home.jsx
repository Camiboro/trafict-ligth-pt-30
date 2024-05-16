import React, { useState } from "react";
import rigoImage from "../../img/rigo-baby.jpg";

const Home = () => {
    const [color, setColor] = useState("red");

    const trafficLightContainer = {
        width: '80px',
        height: '210px',
        backgroundColor: '#333',
        borderRadius: '10px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: '10px 0',
        margin: '20px auto'
    };

    const lightStyles = (activeColor) => ({
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        backgroundColor: activeColor,
        boxShadow: color === activeColor ? '0 0 15px 5px ' + activeColor : 'none',
        cursor: 'pointer'
    });

    return (
        <div className="text-center mt-5">
            
           
            <div style={trafficLightContainer}>
                <div onClick={() => setColor('red')} style={lightStyles('red')}></div>
                <div onClick={() => setColor('yellow')} style={lightStyles('yellow')}></div>
                <div onClick={() => setColor('green')} style={lightStyles('green')}></div>
            </div>
         
           
        </div>
    );
};

export default Home;