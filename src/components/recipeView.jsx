import "./recipeView.css"
import "./pantryGrab.css"
import axios from "axios";
import React from "react"

export default class RecipeView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            recipe: this.props.recipes,
            // recipe: this.props.recipe.title,
            popClass: this.props.popClass,
            hide: this.props.hide
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
        this.setState({popUpClass: this.props.recipe.popUpClass})
        console.log(this.state)
    }    
    
    componentDidUpdate() {
        if(this.props.popClass != this.state.popClass)
        {
            // this.setState({popUpClass: this.props.recipe.popUpClass})
            if(this.state.hide == true){
                this.setState({hide: false})
                this.setState({popClass: "popUpDivShow"})
                
            }
            else if(this.state.popUpHide == false) {
                    this.setState({popClass: "popUpDivHide"})
                    this.setState({hide: true})
            
            }
        }
    }
    onClick = (e) => {
        // console.log(e.target.value);
        e.preventDefault()
        console.log("hello");
        console.log(this.state.hide)
        if(this.state.popUpHide == true){
            this.setState({hide: false}, function stateUpdateComplete() {
                this.setState({popClass: "popUpDivShow"})
            }.bind(this));
        }
        else if(this.state.hide == false) {
            this.setState({hide: true}, function stateUpdateComplete() {
                this.setState({popClass: "popUpDivHide"})
            }.bind(this));
        }
    }
    render() {

        return (
            <div className={this.state.popClass}>
                {/* <h1>Hello</h1> */}
                                <button className="submit"  onClick={this.onClick}>{this.state.recipe}</button>
            </div>
        )
    }
}