import React from 'react'
import './index.css'

export default function Modal(props) {
    let defaultProps = {
        bg: 'rgba(0,0,0,.5)',
    }
    let data = Object.assign({}, defaultProps, props)

    return (
        <div
            onClick={e => {
                if (e.target.className === 'modal') {
                    data.onClose()
                }
            }}
            className="modal"
            style={{ background: data.bg }}
        >
            <div className="modal-center">{props.children}</div>
        </div>
    )
}
