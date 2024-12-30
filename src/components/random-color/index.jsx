import { useEffect, useState } from "react"

export default function RandomColor() {

    const [typeOfColor, setTypeOfColor] = useState('hex');
    const [color, setColor] = useState('#000000')
    

    function utilityRandomNumberPicker(max) {
       return Math.floor(Math.random()*max) 
    };

    function generateRandomHexColor() {
        const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
        let hexColor = '#';
        
        for (let i = 0; i < 6; i++){
            hexColor += hex[utilityRandomNumberPicker(hex.length)]
        }

        setColor(hexColor)
    }

    function generateRandomRgbColor() {
        const r = utilityRandomNumberPicker(256);
        const g = utilityRandomNumberPicker(256);
        const b = utilityRandomNumberPicker(256);

        const rgbColor = `rgb(${r}, ${g}, ${b})`;
        setColor(rgbColor);
    }

    useEffect(() => {
        if (typeOfColor === 'rgb') generateRandomRgbColor()
        else generateRandomHexColor() 
    }, [typeOfColor])

    return <div style={{
        width: '100vw',
        height: '100vh',
        background: color,
    }}>
        <button onClick={()=>setTypeOfColor('hex')}>Create HEX color</button>
        <button onClick={()=>setTypeOfColor('rgb')}>Create RGB color</button>
        <button onClick={typeOfColor === 'hex' ? generateRandomHexColor : generateRandomRgbColor}>Generate random color</button>

        <div>
            <h1>{typeOfColor}</h1>
            <h2>{color}</h2>
        </div>
    </div>
}