import React, {useState} from 'react'
import './Footer.css'



export const Footer = () => {


    return (
        <div className="navigationBottom">
            <div className="navigationIcon">
                <span className="buzzTrending">
                    <svg xmlns="http://www.w3.org/2000/svg" width="70" height="19" fill="currentColor" class="bi bi-lightning-fill" viewBox="0 0 16 16">
                        <path d="M5.52.359A.5.5 0 0 1 6 0h4a.5.5 0 0 1 .474.658L8.694 6H12.5a.5.5 0 0 1 .395.807l-7 9a.5.5 0 0 1-.873-.454L6.823 9.5H3.5a.5.5 0 0 1-.48-.641l2.5-8.5z"/>
                    </svg>
                </span>

                <span className="camera">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="30" fill="currentColor" className="bi bi-camera-reels-fill" viewBox="0 0 16 16">
                        <path d="M6 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                        <path d="M9 6a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                        <path d="M9 6h.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 7.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 16H2a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h7z"/>
                    </svg>
                </span>

            </div>
        </div>
    )
}

export default Footer
