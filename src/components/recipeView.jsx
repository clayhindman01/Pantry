import "./recipeView.css"
import axios from "axios";
import React from "react"

export default class RecipeView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.id,
            recipes: []
        }
    }

    render() {

        return (
            <div>
                <h1>{ this.state.id }</h1>
            </div>
        )
    }
}