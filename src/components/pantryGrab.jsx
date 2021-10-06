import React, { Component, useState, useEffect } from 'react'
import "./../App.css";
import axios from 'axios';
import { Button } from 'react-bootstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';

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
        for(let i=0; i<5; i++)
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
            // ingredients.substring()
            console.log(finalIngredients)
        }
        this.setState({ ingredientList: finalIngredients})
    }
    componentDidUpdate() {
        
    }
    handleFormSubmit = (e) => {
        e.preventDefault()
        // let ingredients = [];
        console.log(this.state.ingredientList)
        // axios.get('https://api.spoonacular.com/recipes/716429/information?apiKey=af2bd30b44424d368d723beb5ca12fce&includeNutrition=true')
        axios.get(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=af2bd30b44424d368d723beb5ca12fce&ingredients=${this.state.ingredientList}`)
                .then(res =>
                    this.setState({ recipes: res.data })    
                )
                .then(res =>
                    console.log(this.state.recipes)
            )
        
    }

    render() {
        const columns = [
            { dataField: "title", text: '' },
            { dataField: "image", text: '' },
            { dataField: "missedIngredientCount", text: '' },
        ]
        return (
            <div>
                <h2 className="pantryHeader">enter your ingredients</h2>
                <div>
                    <input name="0" onChange={this.myChangeHandler} defaultValue="ingredient1"></input>
                    <input name="1" onChange={this.myChangeHandler} defaultValue="ingredient2"></input>
                    <input name="2" onChange={this.myChangeHandler} defaultValue="ingredient3"></input>
                    <input name="3" onChange={this.myChangeHandler} defaultValue="ingredient4"></input>
                    <input name="4" onChange={this.myChangeHandler} defaultValue="ingredient5"></input>
                    <Button onClick={this.handleFormSubmit}>Find Recipe</Button>
                </div>
                <div className="recipeList">
                    <div className="tables">
                        <BootstrapTable
                            keyField="name"
                            data={this.state.ingredients}
                            columns={columns}
                            pagination={paginationFactory()}
                        />
                    </div>
                </div>
            </div>
        )
    }
}
