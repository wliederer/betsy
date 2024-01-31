import React, { useEffect } from 'react'

const OutsideClickHandler = ({ onOutsideClick, children }) => {
  useEffect(() => {
    const handleClickOutside = (e) => {
      const content = e.target.textContent
      const text = []
      for (const child of children.props.children) {
        if (child.props.children) {
          text.push(child.props.children)
        }
      }

      if (e.target && text.length && text[0] != content) {
        onOutsideClick()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [onOutsideClick, children])

  return <>{children}</>
}

export default OutsideClickHandler
