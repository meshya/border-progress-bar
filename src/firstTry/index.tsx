import React ,{useState, useEffect} from "react";
import './index.css'


interface MyCustomCSS extends React.CSSProperties {
    [key: `--${string}`]: string | number
}

const BorderProgressBar:React.FC<{
    children:React.ReactNode, width:number, height:number, border:number, 
    rounded:number, color:string, percent:number, startFrom:number, error?:number
    }> = (
        {children, color ,width, height, border, rounded, percent, error=100}
    )=>{
    let realPercent = Math.round(percent*(error/100))
    let CSSVars = {
        '--color':color,
        '--border':border,
        '--width':`${width+border}px`,
        '--height':`${height+border}px`,
        '--x-translate':`${Math.round(border/2)}px`,
        '--y-translate':`${Math.round(border/2)}px`,
        '--progress':`${400 - Math.round(realPercent)*4}%`
    } as MyCustomCSS
    return (
        <div style={CSSVars}>
            <svg className="shape-container">
                <rect width={width} height={height} rx={rounded} ry={rounded} className="progress-shape"></rect>
            </svg>
        </div>
    )
}

export default BorderProgressBar