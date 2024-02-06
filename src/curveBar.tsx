import React from "react";
import { circle, progressCircle, afterCircle, circleContainer, mover, barContainer } from "./styles"
import type { myCSS } from "./styles";
import type { curveBarProps } from "./props";

const CurveBar:React.FC<curveBarProps> = ({size, percent, border, side, color, bgColor, noneColor, type, ...arg})=>{
    const getStyleVars = () => (
        {
            '--width':`${size*2}px`,
            '--height':`${size*2}px`,
            '--border':`${border*2}px`,
            '--color': color,
            '--progress': `${percent*(0.9)}deg`,
            '--bg-color': bgColor,
            '--none-color': noneColor,
            '--rotate': `rotate(${{'tr':0,'bl':180,'br':90,'tl':270}[side]}deg)`,
            '--move':arg.move,
            '--z':arg.z||15
        } as myCSS
    )

    return (
        <div style={{...getStyleVars(), ...barContainer}}>
            <div style={{...mover}}>
                <div style={{...circle, ...circleContainer}}>
                    <div style={{...circle, ...progressCircle}}>
                        <div style={{...circle, ...afterCircle}}>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CurveBar