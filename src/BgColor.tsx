import React, { useState, useEffect } from 'react';

const BgColor: React.FC = () => {
    const [color, setColor] = useState<string>();

    const getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    const changeColor = () => {
        const newColor = getRandomColor();
        setColor(newColor);
    };

    useEffect(() => {
        if (color) {
            document.body.style.backgroundColor = color;
        }
    }, [color]);

    return (
        <div style={{ textAlign: 'center', margin: '20px' }}>
            <button onClick={changeColor}>
                Změnit barvu
            </button>
            <p>Aktuální barva: <strong>{color || 'výchozí'}</strong></p>
        </div>
    );
};

export default BgColor;
