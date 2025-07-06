'use client'
import React, { forwardRef } from 'react'

const theme = {
    bordercolor: {
        primary: { blur: '#00faff' },
        secondary: { blur: '#ff00f7' }
    },
    textcolor: {
        primary: { on: '#00faff', off: '#00faff55' },
        secondary: { on: '#ff00f7', off: '#ff00f755' }
    }
}

export const NeonDivider = forwardRef(function NeonDivider(
    { variant = 'primary', thick = '1', disabled = false, orientation = 'horizontal', ...props },
    ref
) {
    const color = disabled
        ? theme.textcolor[variant].off
        : theme.textcolor[variant].on
    const glow = disabled ? 'none' : `0 0 12px 4px ${theme.bordercolor[variant].blur}`

    const styles =
        orientation === 'vertical'
            ? {
                border: 'none',
                borderRight: `${thick}px solid ${color}`,
                boxShadow: glow,
                height: '100%',
                margin: '0 auto'
            }
            : {
                border: 'none',
                borderBottom: `${thick}px solid ${color}`,
                boxShadow: glow,
                width: '100%'
            }

    return <hr ref={ref} style={styles} {...props} />
})
