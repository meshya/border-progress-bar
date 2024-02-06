import React from 'react'

export interface barProps {
    size:number,
    percent:number
    border:number,
    color:string,
    bgColor:string,
    move:string,
    z?:number
}
export interface lineBarProps extends barProps {
    type:'r2l'|'l2r'|'t2b'|'b2t',
    rounded?:number,
}
export interface curveBarProps extends barProps {
    side:'tr'|'br'|'bl'|'tl',
    type:'s2e'|'e2s',
    noneColor:string,
}

export interface borderProps {
    width:number,
    height:number,  
    rounded?:number,
    border:number,
    percent:number,
    color:string,
    bgColor:string,
    noneColor:string,
    startFrom?:'t'|'tr'|'r'|'br'|'b'|'bl'|'l'|'tl',
    move:'clockwise'|'counter clockwise'
}

export interface elementProps extends borderProps{
    children?:React.ReactNode
}