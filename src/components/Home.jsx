import React, { Component } from 'react';
import Pantry from "./pantryGrab.jsx";
// import hcbgImage from "./veggies.png";

export default class Home extends Component {
    render() {
        return (
            <div>
                <div>
                    <div className="heroCont">
                        <div  className="heroCover">
                            <div className="leftColumn">
                            </div>
                            <div className="rightColumn">
                                <ul>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <Pantry />
            </div>
        )
    }
}
