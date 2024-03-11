import React from 'react'

export interface ButtonProps {
    children: JSX.Element;
}

export const Button = (props: ButtonProps) => (
    <div style={{ border: '1px solid black', height: '100px', width: '100px' }}>{props.children || 'BUTTON'}</div>
)