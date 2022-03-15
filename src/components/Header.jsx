import React, { useState } from 'react';
import "./Header.css"

export default function Header() {

    return (
        <div className="headerMain">
            <div className="header">
                <div className="logoCont"><a href="#"><img src="../pantry-icon2.png" className="logo" /><img src="../../pantry-icon2.png" className="logo2"></img></a></div>
               
                <div className="linkCont">
                    <h1 className='h1-pantry'>PANTRY</h1>
                </div>
            </div>
        </div>
    )
}