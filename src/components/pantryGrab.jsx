import React, { Component } from 'react'
import "./pantryGrab.css"
import axios from 'axios';
//import { Button } from 'react-bootstrap';
// import BootstrapTable from 'react-bootstrap-table-next';
// import paginationFactory from 'react-bootstrap-table2-paginator';
// import * as ReactBootstrap from 'react-bootstrap';

export default class pantryGrab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
            url: null,
            ingredients: ["", "", "", "", ""],
            ingredientList: '',
            recipes: [],
            id: 1,
        }
        // this.handleChange = this
        //     .handleChange
        //     .bind(this);
        // this.handleUpload = this.handleUpload.bind(this);
    }

    handleChange = e => {
        if (e.target.files[0]) {
            const url = e.target.files[0];
            this.setState(() => ({ url }));
        }
    }

    myChangeHandler = (e) => {
        //handles state change in input fields
        const { value, name } = e.target;
        let newArray = this.state.ingredients;
        newArray[parseInt(name)] = value;
        this.setState({
            ingredients: newArray
        })
        // handles state change for finished ingredient list based on input fields
        let ingredients = "";
        let finalIngredients = "";
        for(let i=0; i<6; i++)
        {
            let ingredient = this.state.ingredients[i];
            console.log(ingredient)
            if(ingredient != "")
            {
                ingredients += `${ingredient},+`;
            }
            else
            {
                continue;
            }
            finalIngredients = ingredients.substring(ingredients[0], ingredients.length - 2)
            console.log(finalIngredients)
        }
        this.setState({ ingredientList: finalIngredients})
    }
    componentDidUpdate() {
        
    }
    handleFormSubmit = (e) => {
        e.preventDefault()
        console.log(this.state.ingredientList)
        // axios.get('https://api.spoonacular.com/recipes/716429/information?apiKey=af2bd30b44424d368d723beb5ca12fce&includeNutrition=true')
        axios.get(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=af2bd30b44424d368d723beb5ca12fce&ingredients=${this.state.ingredientList}&number=10`)
                .then(res =>
                    this.setState({ recipes: res.data })    
                )
                .then(res =>
                    console.log(this.state.recipes.map((item) => item.title))
            )
    }

    render() {
        // const columns = [
        //     { dataField: "title", text: '' },
        //     { dataField: "image", text: '' },
        //     { dataField: "missedIngredientCount", text: '' },
        // ]
        
        return (
            <div>
                <div className="main-cont">
                    <div className="selection-container">
                        <div className="pantryHeader-cont">
                            <h3 className="pantryHeader">Quick Search</h3>
                            <p className="pantry-h-text">Enter a few ingredients to get a short list of recipes</p>
                        </div>
                        <div className="list-holder">
                            <ul className="selection-List">
                                <li className="list-piece"><input name="0" onChange={this.myChangeHandler} defaultValue=""></input></li>
                                <li className="list-piece"><input name="1" onChange={this.myChangeHandler} defaultValue=""></input></li>
                                <li className="list-piece"><input name="2" onChange={this.myChangeHandler} defaultValue=""></input></li>
                            </ul>
                            <ul className="selection-List">
                                <li className="list-piece"><input name="3" onChange={this.myChangeHandler} defaultValue=""></input></li>
                                <li className="list-piece"><input name="4" onChange={this.myChangeHandler} defaultValue=""></input></li>
                                <li className="list-piece"><input name="5" onChange={this.myChangeHandler} defaultValue=""></input></li>
                            </ul>
                        </div>
                        <button onClick={this.handleFormSubmit} className="submit">FIND RECIPES</button>
                    </div>
                </div>
                <div className="pantry-container">
                    {/* { this.state.recipes.map(recipe => {
                    return (
                        <div key={recipe.id} className="outerCard">
                        <div className="innerCard">
                            <img src={recipe.image} className="innerImg"></img>
                            <div className="textBox">
                                <h3>{ recipe.title }</h3>
                            </div>
                            <div className="textBox">
                                <p className="pText">Missing Ingredients: {recipe.missedIngredientCount } { recipe.missedIngredients.map(ingredient => {
                                    return (
                                        <div className="textBox">
                                            <p>{ ingredient.name }</p>
                                        </div>
                                    )
                                    })}</p>
                            </div>
                        </div>
                        </div>
                    )
                    })} */}
                    {this.state.recipes.map((item) => (
                        <div key={item.id} className="outerCard">
                        <div className="innerCard">
                            <img src={item.image} className="innerImg"></img>
                            <div className="textBox">
                                <h3>{ item.title }</h3>
                            </div>
                            <div className="textBox">
                                <p className="pText">Missing Ingredients: {item.missedIngredientCount } { item.missedIngredients.map(ingredient => {
                                    return (
                                        <div className="textBox">
                                            <p>{ ingredient.name }</p>
                                        </div>
                                    )
                                    })}</p>
                            </div>
                        </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}
