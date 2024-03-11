import React from 'react'

export interface ButtonProps {
    children: JSX.Element;
}

export const Button = (props: ButtonProps) => {
    const { children = 'THE REUSABLE BUTTON' } = props;

    return (
        <div style={{ border: '1px solid grey', height: '100px', width: '500px' }}>{children}</div>
    )
}