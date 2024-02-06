import React, {useState, useEffect} from "react";
import {line, lineProgress, lineContainer, mover, barContainer, type myCSS} from './styles.ts'
import type { lineBarProps } from "./props.ts";

const LineBar:React.FC<lineBarProps> = (arg)=>{
    const getCSSVars:()=>myCSS = ()=>(
        {
            '--color':arg.color,
            '--width':`${arg.size}px`,
            '--height':`${arg.border}px`,
            '--rounded':`${arg.rounded||0}px`,
            '--bg-color':arg.bgColor,
            '--progress':`${arg.size*(arg.percent/100)}px`,
            '--rotate':`rotate(${{'r2l':180,'l2r':0,'t2b':90,'b2t':270}[arg.type]}deg)`,
            '--translate': ((x)=>(`translateX(${x}px) translateY(${x}px)`)) (((x)=>({'t2b':x, 'b2t':-x, 'l2r':0, 'r2l':0}[arg.type]))((arg.size-arg.border)/2)),
            '--move':arg.move,
            '--z':arg.z||20
        }
    )
    return(
        <div style={{...getCSSVars(), ...barContainer}}>
            <div style={{...mover}}>
                <div style={{...line, ...lineContainer}}>
                    <div style={{...line, ...lineProgress}}>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LineBar