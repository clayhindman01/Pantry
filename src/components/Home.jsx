import React, { Component } from 'react';
import Pantry from "./pantryGrab.jsx";

export default class Home extends Component {
    render() {
        return (
            <div>
                <div>
                    <div className="heroCont"><img src="./Food.jpg" className="heroCover"></img></div>
                </div>
                <Pantry />
            </div>
        )
    }
}
