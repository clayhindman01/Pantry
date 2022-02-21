import React, { useState, useEffect } from 'react'
import "./pantryGrab.css"

export default function FunctionalRecipeView(props) {

    const [id, setId] = useState(props.id);
    const [popClass, setPopClass] = useState(props.popClass);
    const [popClassCheck, setPopClassCheck] = useState(props.popClassCheck);
    const [hide, setHide] = useState("");

    const onClick = (e) => {
        e.preventDefault();

        if (hide !== popClassCheck) {
            if (popClassCheck == false) {
                setHide(false);
                setPopClassCheck(true);
            }
            else if (popClassCheck == true) {
                setHide(true);
                setPopClassCheck(false);
            }

            setPopClassCheck(hide)
        }
    }

    return (
        <div className={props.popClass}>
            <button className='submit' onClick={onClick}>{props.id}</button>
        </div>
    )
}


// !!!This is from the deleted recipeView.jsx file. I moved it into here incase we need it later.

// import "./recipeView.css"
// import "./pantryGrab.css"
// import axios from "axios";
// import React from "react"

// export default class RecipeView extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             recipe: this.props.recipes,
//             // recipe: this.props.recipe.title,
//             popClass: this.props.popClass,
//             popClassCheck: false,
//             hide: this.props.hide
//         }
//     }

//     // handleClick = e => {
//     //     axios.get(`https://api.spoonacular.com/recipes/${this.state.id}/analyzedInstructions?apiKey=af2bd30b44424d368d723beb5ca12fce`)
//     //         .then(res => {
//     //             console.log(res.data)
//     //             this.setState({ recipes: res.data[0] })
//     //         })
//     //     console.log(this.state.recipes.steps)
//     // }\
//     componentDidMount() {
//         // this.setState({popClass: "popUpDivShow"})
//         // console.log(this.state)
//     }

//     componentDidUpdate() {
      
//     }
//     onClick = (e) => {
//         // console.log(e.target.value);
//         e.preventDefault()
//         // console.log("hello");
//         console.log(this.state.hide)
//         console.log(this.state.popClassCheck)
//         if (this.props.hide !== this.state.popClassCheck) {
//             // this.setState({popUpClass: this.props.recipe.popUpClass})
//             if (this.state.popClassCheck == false) {
//                 this.setState({ hide: false }, function stateUpdateComplete() {
//                 this.setState({ popClassCheck: true })
//                 }.bind(this));
//             }
//             else if (this.state.popClassCheck == true) {
//                 this.setState({ hide: true }, function stateUpdateComplete() {
//                     this.setState({ popClassCheck: false })
//                 }.bind(this));

//                 this.setState({ popClassCheck: this.state.hide })
//             }
//         }
//         if(this.state.hide === true) {
//             this.setState({popClass: "popUpDivHide"})
//         }
//         else if(this.state.hide !== true) {
//             this.setState({popClass: "popUpDivShow"})
//         }
//     }
//     render() {

//         return (
//             <div className={this.state.popClass}>
//                 {/* <h1>Hello</h1> */}
//                 <button className="submit" onClick={this.onClick}>{this.state.recipe}</button>
//             </div>
//         )
//     }
// }