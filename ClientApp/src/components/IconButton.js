import React from 'react'

function IconButton({ onClick, type = "button", className, iconUrl, label }) {
  return (
      <button
          className={`${className} icon_button`}
          onClick={onClick}
          type={type}
      >
          <img
              src={iconUrl}
              alt={label}
              style={{ width: '24px', marginBottom: '6px' }}
          />
      </button>
  )
}

export default IconButton