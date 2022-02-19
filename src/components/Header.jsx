import React, { useState } from 'react';
import "./Header.css"
import { Redirect, Link, withRouter } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth'
import firebase from 'firebase/compat/app'

const auth = firebase.auth();

export default function Header(props) {

    const [dropToggle, setDrop] = useState("hide");
    const [clickedInside, setClicked] = useState(false);


    const onClick = (event) => {
        if (dropToggle == "hide") {
            setDrop("show");
        } else {
            setDrop("hide");
        }
    }

    const checkOpen = () => {

        if (dropToggle == "show" && clickedInside == false){
            setDrop("hide");
        }
    }

    const [ user ] = useAuthState(auth)

    const logOut = () => {
        auth.signOut()
    }

    const logIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider;
        auth.signInWithPopup(provider);
    }

    return (
        <div className="headerMain">
            <div className="header" onClick={checkOpen}>
                <div className="logoCont"><Link to=''><img src="../pantry-icon2.png" className="logo" /><img src="../../pantry-icon2.png" className="logo2"></img></Link></div>
               
                <div className="linkCont">
                    <Link to='/' className="smallLinkCont">
                        <div>
                            <h3 className="headerLink">Home</h3>
                        </div>
                    </Link>
                    <Link to='' className="smallLinkCont">
                        <div>
                            <h3 className="headerLink">Saved Recipes</h3>
                        </div>
                    </Link>
                    <Link to='portfolio' className="smallLinkCont">
                        <div>
                            <h3 className="headerLink">My Pantry</h3>
                        </div>
                    </Link>
                    <Link to='' className="smallLinkCont">
                        <div>
                            {user?  <img className="headerLink imgIcon" onClick={logOut} src={user.photoURL}></img>:  
                            <h3 className="headerLink" onClick={logIn}>Sign in</h3>}
                        </div>
                    </Link>
                </div>
                <div className="drop">
                    <button className="dropDownButton" onClick={onClick}><div class="bar1"></div>
                        <div class="bar2"></div>
                        <div class="bar3"></div></button>
                </div>
                <div className="dropDownMenu" id={dropToggle} >
                    <div className="dropItem"><Link to="portfolio"><h3 className="dropDownLink">Portfolio</h3></Link></div>
                    <div className="dropItem"><Link to="portfolio"><h3 className="dropDownLink">Products</h3></Link></div>
                    <div className="dropItem"><Link to="portfolio"><h3 className="dropDownLink">About Me</h3></Link></div>
                    <div className="dropItem"><Link to="portfolio"><h3 className="dropDownLink">Contact Me</h3></Link></div>
                </div>
            </div>
        </div>
    )
}