import "./recipeView.css"
import "./pantryGrab.css"
import axios from "axios";
import React from "react"

export default class RecipeView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.id,
            // recipe: this.props.recipe.title,\
            recipes: [],
            popClass: "popUpDivHide",
            popClassCheck: false,
            hide: this.props.hide,
            recipe: ""
        }
    }

    // handleClick = e => {
    //     axios.get(`https://api.spoonacular.com/recipes/${this.state.id}/analyzedInstructions?apiKey=af2bd30b44424d368d723beb5ca12fce`)
    //         .then(res => {
    //             console.log(res.data)
    //             this.setState({ recipes: res.data[0] })
    //         })
    //     console.log(this.state.recipes.steps)
    // }\
    componentDidMount() {
        // this.setState({popClass: "popUpDivShow"})
        // console.log(this.state)
        console.log("mounted")
        this.setState({recipes: this.props.recipes}, function stateUpdateComplete() {
            const recipes = this.state.recipes
            console.log(recipes)
            // const recipe = recipes[0].id
            // this.setState({recipe: recipe});
        }
        .bind(this));  

    }

    componentDidUpdate() {
        // console.log(this.props.recipe.id)
      console.log(this.state.popClass);
      console.log(this.state.recipe)
    }
    onClick = (e) => {
        // console.log(e.target.value);
        e.preventDefault()
        console.log("hello");
        console.log(this.state.hide)
        console.log(this.state.popClassCheck)
        if (this.props.hide !== this.state.popClassCheck) {
            // this.setState({popUpClass: this.props.recipe.popUpClass})
            if (this.state.popClassCheck == false) {
                this.setState({ hide: false }, function stateUpdateComplete() {
                this.setState({ popClassCheck: true })
                }.bind(this));
            }
            else if (this.state.popClassCheck == true) {
                this.setState({ hide: true }, function stateUpdateComplete() {
                    this.setState({ popClassCheck: false })
                }.bind(this));

                this.setState({ popClassCheck: this.state.hide })
            }
        }
        if(this.state.hide === true) {
            this.setState({popClass: "popUpDivHide"})
        }
        else if(this.state.hide !== true) {
            this.setState({popClass: "popUpDivShow"})
        }
    }
    render() {

        return (
            <div className={this.state.popClass}>
                {/* <h1>Hello</h1> */}
                <button className="submit" onClick={this.onClick}>{this.state.recipes[0]}</button>
            </div>
        )
    }
}