import React from 'react'

export interface ButtonProps {
    children: JSX.Element;
}

export const Button = (props: ButtonProps) => {
    const { children } = props

    return (
        <div style={{ border: '1px solid black', height: '100px', width: '500px' }}>{children}</div>
    )
}
