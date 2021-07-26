import React from 'react';

import './index.scss';


function CustomLink({ href, icon,  children, variant, dashed}) {
    return (
        <div className={`custom-link ${variant === 'medium' ? "link-medium" : "link-small"}`}>
            {icon &&
              <div className='custom-link__icon'>
                  <i className={icon}></i>
              </div>
            }
            <a
                href={href}
                className={`custom-link__link 
                ${dashed ? "link-dashed" : ""}`}>
                {children}
            </a>
        </div>
                );
            }

export default CustomLink;