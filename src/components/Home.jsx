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
                                <ul className="outerList">
                                    <li className="list1">
                                        <h4 className="listText">Find Recipes</h4>
                                    </li>
                                    <li className="list2">
                                        <h4 className="listText">Use items in your pantry</h4>
                                    </li>
                                    <li className="list1">
                                        <h4 className="listText">Save your favorite recipes</h4>
                                    </li>
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
