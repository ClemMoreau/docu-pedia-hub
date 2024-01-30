import React from 'react'
import './style.css'

interface HighlightProps {
  children: JSX.Element
  color?: string
}

const Highlight = ({ children, color }: HighlightProps) => {
  return (
    <span className="highlight-text" style={{ color: color }}>
      {children}
    </span>
  )
}

export default Highlight
