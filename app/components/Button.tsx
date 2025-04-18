import React from 'react'
import { forwardRef, ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg';
  [key: string]: any;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { children, size = 'md', ...rest } = props
  
  return (
    <button 
      ref={ref} 
      className={`btn ${size === 'lg' ? 'btn-lg' : size === 'sm' ? 'btn-sm' : ''}`}
      {...rest}
    >
      {children}
    </button>
  )
})

Button.displayName = 'Button'

export default Button
