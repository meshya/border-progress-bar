import React from "react"
import CurveBar from "./curveBar"
import LineBar from "./lineBar"
import type { borderProps } from "./props"

const Border:React.FC<borderProps> = ({startFrom:type='tl', ...arg})=>{
    const hls = arg.width + arg.border*2 - arg.rounded*2
    const vls = arg.height + arg.border*2 - arg.rounded*2
    const cs = (arg.rounded*3.14) / 2
    const delta = arg.rounded - arg.border

    let all:number = hls*2 + vls*2 + cs*4
    const pob:(n:number)=>number = (n)=>((n/all)*100)
    let blocks:{[key:number]:number} = {
        0:pob(hls/2),
        1:pob(hls/2),
        2:pob(cs),
        3:pob(vls/2),
        4:pob(vls/2),
        5:pob(cs),
        6:pob(hls/2),
        7:pob(hls/2),
        8:pob(cs),
        9:pob(vls/2),
        10:pob(vls/2),
        11:pob(cs)
    }
    const getPercent:(n:number)=>number = (n)=>{
        const map:{[key:string]:number} = {'tl':0, 't':1, 'tr':3, 'r':4, 'br':6, 'b':7, 'bl':9, 'l':10}
        const n2i:(n:number)=>number = (n)=>(n - map[type] < 0 ? n - map[type] + 12 : n - map[type])
        const i2n:(i:number)=>number = (i)=>(i + map[type] > 11 ? i + map[type] - 12 : i + map[type])
        let percent:number = arg.percent
        const lessPercent:(p:number)=>void = (p)=>{percent = Math.max(0,percent-p)}
        for(let i:number=0; i<n2i(n); i++){
            let bp:number = blocks[i2n(i)]
            lessPercent(bp)
        }
        let resault:number = (Math.min(percent, blocks[n]) / blocks[n]) * 100
        return resault
    }

    let bothArg:any={
        bgColor:arg.bgColor,
        color:arg.color,
        border:arg.border
    }
    let lineArg:any = {
        ...bothArg
    }
    let curveArg:any = {
        ...bothArg,
        size:arg.rounded,
        noneColor:arg.noneColor,
    }
    return(
    <>
            <LineBar {...lineArg} size={hls/2} percent={getPercent(0)} type="l2r" move={`translateX(${arg.rounded}px)`}/>
            <LineBar {...lineArg} size={hls/2} percent={getPercent(1)} type="l2r" move={`translateX(${arg.rounded+(hls/2)}px)`} z={20}/>
            <CurveBar {...curveArg} percent={getPercent(2)} side="tr" move={`translateX(${hls}px)`} z={19}/>
            
            <LineBar {...lineArg} size={vls/2} percent={getPercent(3)} type="t2b" move={`translateX(${hls+arg.rounded+delta}px) translateY(${arg.rounded}px)`}/>
            <LineBar {...lineArg} size={vls/2} percent={getPercent(4)} type="t2b" move={`translateX(${hls+arg.rounded+delta}px) translateY(${vls/2+arg.rounded}px)`}/>
            <CurveBar {...curveArg} percent={getPercent(5)} side="br" move={`translateX(${hls}px) translateY(${vls}px)`}/>
            
            <LineBar {...lineArg} size={hls/2} percent={getPercent(6)} type="r2l" move={`translateX(${vls/2+arg.rounded}px) translateY(${vls+arg.rounded+delta}px)`}/>
            <LineBar {...lineArg} size={hls/2} percent={getPercent(7)} type="r2l" move={`translateX(${arg.rounded}px) translateY(${vls+arg.rounded+delta}px)`}/>
            <CurveBar {...curveArg} percent={getPercent(8)} side="bl" move={`translateY(${vls}px)`}/>
            
            <LineBar {...lineArg} size={vls/2} percent={getPercent(9)}  type="b2t" move={`translateY(${vls/2+arg.rounded}px)`}/>
            <LineBar {...lineArg} size={vls/2} percent={getPercent(10)} type="b2t" move={`translateY(${arg.rounded}px)`}/>
            <CurveBar {...curveArg} percent={getPercent(11)} side="tl" move=''/>
    </>)
}

export default Border