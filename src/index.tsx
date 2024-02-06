import React from "react";
import type { elementProps } from "./props.ts";
import Border from "./border.tsx";
import {  borderContainer, container, elementContainer, myCSS } from "./styles.ts";


const BorderedElement:React.FC<elementProps> = ({children, ...borderProps})=>{
    const getCSSvars:()=>myCSS = ()=>{
        return {
            '--width': `${borderProps.width}px`,
            '--height': `${borderProps.height}px`,
            '--element-move': `translateX(${borderProps.border}px) translateY(${borderProps.border}px)`
        } as myCSS
    }
    return (
        <div style={{...getCSSvars(),...container}}>
            <div style={borderContainer}>
                <Border {...borderProps} />
            </div>
            <div style={elementContainer}>
                {children}
            </div>
        </div>
    )
}

export default BorderedElement