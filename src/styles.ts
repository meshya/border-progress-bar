import React from "react"


export interface myCSS extends React.CSSProperties {
    [key:`--${string}`] : string | number
}


export const circle:myCSS = {
    position     : 'relative',
    borderRadius : 'calc(var(--width) / 2)',
    float:'left'
}

export const circleContainer:myCSS = {
    width        : 'var(--width)',
    height       : 'var(--height)',
    background   : 'conic-gradient(var(--bg-color) 90deg, var(--none-color) 0.0deg)',
    transform:'var(--rotate)',
    float:'left'
}

export const afterCircle:myCSS = {
    width         : 'calc(var(--width) - var(--border))',
    height        : 'calc(var(--height) - var(--border))',
    background    : 'var(--none-color)',
    float:'left'
}
export const progressCircle:myCSS = {
    width        : 'var(--width)',
    height       : 'var(--height)',
    background   : 'conic-gradient(var(--color) var(--progress), #0000 0.0deg)',
    display       : 'flex',
    justifyContent: 'center',
    alignItems    : 'center',
    float:'left'
}
export const line:myCSS = {
    position:'relative',
    borderRadius:'var(--rounded)',
    height:'var(--height)',
    float:'left'
}

export const lineContainer:myCSS = {
    width:'var(--width)',
    backgroundColor:'var(--bg-color)',
    transform:'var(--rotate) var(--translate)',
    float:'left'
}

export const lineProgress:myCSS = {
    width:'var(--progress)',
    backgroundColor:'var(--color)',
    float:'left'
}

export const mover:myCSS = {
    transform:'var(--move)',
    position:'relative',
    zIndex:'var(--z)',
    float:'left'
}

export const barContainer:myCSS = {
    height:'0px',
    float:'left'
}

export const borderContainer:myCSS = {
    position:"relative",
    zIndex:50,
    float:'left'
}

export const 
elementContainer:myCSS = {
    position:"relative",
    width:'var(--width)',
    height:'var(--height)',
    transform:'var(--element-move)',
    zIndex:100,
    float:'left'
}

export const container:myCSS = {
    position:"relative",
    width:"var(--cont-width)",
    height:"calc(var(--height) + ( var(--border) ) * 2 )",
    float:'left'
}

export const balancer:myCSS = {
    ...container,
    width:'100%',
    float:'none',
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
}