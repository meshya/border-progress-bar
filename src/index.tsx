import React from "react";
import type { elementProps } from "./props";
import Border from "./border";
import {  borderContainer, container, elementContainer, balancer, type myCSS } from "./styles";


const BorderedElement:React.FC<elementProps> = ({children, hidden, ...borderProps})=>{
    borderProps.rounded = borderProps.rounded || 0
    borderProps.border = borderProps.border || 5
    borderProps.width = borderProps.width || 100
    borderProps.height = borderProps.height || 100
    borderProps.percent = borderProps.percent || 25
    borderProps.color = borderProps.color || '#050'
    borderProps.bgColor = borderProps.bgColor || '#ff5'
    borderProps.noneColor = borderProps.noneColor || '#fff'    

    const getCSSvars:()=>myCSS = ()=>{
        return {
            '--width': `${borderProps.width}px`,
            '--height': `${borderProps.height}px`,
            '--cont-width': `${borderProps.width + borderProps.border*2}px`,
            '--element-move': `translateX(${borderProps.border}px) translateY(${borderProps.border}px)`,
            '--border':`${borderProps.border}`
        } as myCSS
    }
    if (hidden){
        return children
    }
    return (
        <div  style={{...getCSSvars(),...balancer}}>
            <div  style={{...container}}>
                <div style={borderContainer}>
                    <Border {...borderProps} />
                </div>
                <div style={elementContainer}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default BorderedElement