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

    handleClick = e => {
        axios.get(`https://api.spoonacular.com/recipes/${this.state.id}/analyzedInstructions?apiKey=af2bd30b44424d368d723beb5ca12fce`)
            .then(res => {
                console.log(res.data)
                this.setState({ recipes: res.data[0] })
            })
        console.log(this.state.recipes.steps)
    }

    render() {

        return (
            null
        )
    }
}