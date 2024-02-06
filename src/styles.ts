import React from "react"


export interface myCSS extends React.CSSProperties {
    [key:`--${string}`] : string | number
}


export const circle:myCSS = {
    position     : 'relative',
    borderRadius : 'calc(var(--width) / 2)'
}

export const circleContainer:myCSS = {
    width        : 'var(--width)',
    height       : 'var(--height)',
    background   : 'conic-gradient(var(--bg-color) 90deg, var(--none-color) 0.0deg)',
    transform:'var(--rotate)'
}

export const afterCircle:myCSS = {
    width         : 'calc(var(--width) - var(--border))',
    height        : 'calc(var(--height) - var(--border))',
    background    : 'var(--none-color)',
}
export const progressCircle:myCSS = {
    width        : 'var(--width)',
    height       : 'var(--height)',
    background   : 'conic-gradient(var(--color) var(--progress), #0000 0.0deg)',
    display       : 'flex',
    justifyContent: 'center',
    alignItems    : 'center',
}
export const line:myCSS = {
    position:'relative',
    borderRadius:'var(--rounded)',
    height:'var(--height)',
}

export const lineContainer:myCSS = {
    width:'var(--width)',
    backgroundColor:'var(--bg-color)',
    transform:'var(--rotate) var(--translate)'
}

export const lineProgress:myCSS = {
    width:'var(--progress)',
    backgroundColor:'var(--color)'
}

export const mover:myCSS = {
    transform:'var(--move)',
    position:'relative',
    zIndex:'var(--z)'
}

export const barContainer:myCSS = {
    height:'0px'
}

export const borderContainer:myCSS = {
    position:"relative",
    zIndex:50
}

export const 
elementContainer:myCSS = {
    position:"relative",
    width:'var(--width)',
    height:'var(--height)',
    transform:'var(--element-move)',
    zIndex:100
}

export const container:myCSS = {
    position:"absolute",
}