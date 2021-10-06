import React, { Component } from 'react'
import "./../App.css";
import axios from 'axios';
import { Button } from 'react-bootstrap';

export default class pantryGrab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
            url: null,
            ingredient1: '',
            // progress: 0,
            ingredient2: '',
            ingredient3: '',
            ingredient4: '',
            ingredient5: '',
            ingredient6: '',
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
        const { value, name } = e.target;
        this.setState({
            [name]: value
        })
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        let ingredients = [];
        for(let i=1; i<6; i++){
            let ingredient = this.state.ingredient+i;
            if(ingredient != "")
            {
                ingredients += ingredient;
            }
            else
            {
                continue;
            }
        }
        fetch(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${this.state.ingredient1}generate?apiKey=af2bd30b44424d368d723beb5ca12fce&`,
            {
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8'
                },
            })
            .then(res =>
                res.json()
            )
            .then(res =>
                this.setState({ recipes: res.data })    
            )
    }

    render() {
        return (
            <div>
                <h2 className="pantryHeader">enter your ingredients</h2>
                <div>
                    <input name="ingredient1" onChange={this.myChangeHandler} defaultValue="ingredient1"></input>
                    <input name="ingredient2" onChange={this.myChangeHandler} defaultValue="ingredient2"></input>
                    <input name="ingredient3" onChange={this.myChangeHandler} defaultValue="ingredient3"></input>
                    <input name="ingredient4" onChange={this.myChangeHandler} defaultValue="ingredient4"></input>
                    <input name="ingredient5" onChange={this.myChangeHandler} defaultValue="ingredient5"></input>
                    <Button onClick={this.handleFormSubmit}>Find Recipe</Button>
                </div>
            </div>
        )
    }
}
