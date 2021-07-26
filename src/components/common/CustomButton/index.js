import React from 'react';
import './index.scss'

function CustomButton({onClick, variant, children, icon}) {
    return (
        <div
            className={`custom-btn ${variant === 'signIn' ? "signIn" : "main"}`}
            onClick={onClick}
            variant={variant}
        >
            {icon &&
            <div className='custom-btn__icon'>
                <i className={icon}></i>
            </div>
            }
            {children}
        </div>
    );
}

export default CustomButton;