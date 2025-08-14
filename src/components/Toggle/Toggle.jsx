import './Toggle.css'
import { useEffect, useState } from 'react'

export const Toggle = () => {

    const [isOn, setIsOn] = useState(() => {
        const saved = localStorage.getItem('themeOn');
        return saved === 'true'
    })

    useEffect(() => {
        document.body.style.backgroundColor = isOn ? '#161a20' : '#ffffff';
        document.body.style.color = isOn ? '#ffffff' : '#000000'

        localStorage.setItem('themeOn', isOn.toString())
    }, [isOn])

    const handleToggle = () => {
        setIsOn(prev => !prev)
    }

    return (
        <>
            <div className="carta">
                <div className="switch">
                    <input
                        className="switch-input"
                        type="checkbox"
                        id="demo-toggle"
                        checked={isOn}
                        onChange={handleToggle}
                        role="switch"
                        aria-checked={isOn}
                        aria-label="Activar opciones avanzadas"
                    />
                    <label className="switch-label" htmlFor="demo-toggle"></label>
                </div>

                <div className="texto">
                    <div className="palabra">{!isOn ? 'LightMode' : 'DarkMode'}</div>
                </div>
            </div>
        </>
    )
}