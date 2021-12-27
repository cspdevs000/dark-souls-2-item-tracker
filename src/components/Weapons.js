import React, { Component } from 'react';
import '../css/Home.css'

class Weapons extends Component {
    render() {
        return (
            <div className="master">
                 <div className="navbar is-inline-flex is-transparent">
                    <div className="navbar-brand">
                        <div className="navbar-item">
                            <div className="control has-icons-left">
                                <input className="input is-small has-text-centered" type="text" placeholder="search" />
                                <span className="icon is-left is-small">
                                    <i className="material-icons">search</i>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="navbar-item is-flex-touch">
                        <a href="/" className="navbar-item">
                            <span>Home</span>
                        </a>
                        <a href="/weapons" className="navbar-item">
                            <span>Weapons</span>
                        </a>
                    </div>
                </div>
                <br></br><br></br>
                <h1>All Weapons</h1>
            </div>
        );
    }
}

export default Weapons;