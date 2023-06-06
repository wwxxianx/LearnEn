import React from 'react'
import ErrorStyles from "./error.module.css"

function ErrorText({ show, text }) {
  if (show) {
    return (
        <p className={ErrorStyles.container}>
            <span class="material-symbols-outlined">error</span>
            <span>{text}</span>
        </p>
    )
  }
}

export default ErrorText