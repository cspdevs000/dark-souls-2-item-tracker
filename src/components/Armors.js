import React, { Component } from 'react';
import '../css/Weapons.css';
import Armor from './Armor';
import axios from 'axios';

class Armors extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    componentDidMount(){
        axios.get('http://localhost:3000/armor')
        .then((response) => {
            console.log(response.data);
            this.setState({
                data: response.data.armorArray
            })
        })
        .catch((error) => { 
            console.log('error ERROR error', error)
        })
    }
    
    displayArmors() {
        const display = this.state.data.map((w, idx) => {
            console.log('NAME IS:', w.name);
            console.log('BonFIYA IS:', w.bonfire);
            console.log('desc IS:', w.description);
            return <Armor key={idx} name={w.name} bonfire={w.bonfire} description={w.description} image={w.imageUrl} />
        });
        return display;
    }

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
                        <a href="/armor" className="navbar-item">
                            <span>Armor</span>
                        </a>
                        <a href="/consumables" className="navbar-item">
                            <span>Consumables</span>
                        </a>
                        <a href="/keys" className="navbar-item">
                            <span>Keys</span>
                        </a>
                    </div>
                </div>
                <br></br><br></br>
                <h1>All Armor</h1>
                <br></br>
                <div className="container">
                    <div className="section">
                        <div id="app" className="row columns is-multiline">
                            {this.displayArmors()}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Armors;