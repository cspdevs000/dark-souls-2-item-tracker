import React, { Component } from 'react';
import '../css/Weapons.css'

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
                <h1>All Weapons</h1>
                <br></br>
                <div className="container">
                    <div className="section">
                        <div id="app" className="row columns is-multiline">
                            <div v-for="card in cardData" className="column is-4">
                                <div id="column" className="cardlarge">
                                    <div className="card-image">
                                        <figure className="image is-16by9">
                                            <img src="https://darksouls2.wiki.fextralife.com/file/Dark-Souls-2/Majestic%20Greatsword.png" alt="Image" />
                                        </figure>
                                    </div>
                                    <div className="card-content">
                                        <div className="media">
                                            <div className="media-content">
                                                <p className="title is-4 no-padding">Majestic Greatsword</p>
                                                <br></br>
                                                <p className="subtitle is-6"> Brume Tower - Foyer </p>
                                            </div>
                                        </div>
                                        <div className="content">
                                        <br></br>
                                        In a metal treasure chest at the bottom of a cursed tower, across the chain bridge before you go to the Foyer bonfire in Brume Tower (where you get invaded by Maldron the Assassin).
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div v-for="card in cardData" className="column is-4">
                                <div id="column" className="cardlarge">
                                    <div className="card-image">
                                        <figure className="image is-16by9">
                                            <img src="http://darksouls2.wikidot.com/local--files/_straightswords/broadsword-lg.png" alt="Image" />
                                        </figure>
                                    </div>
                                    <div className="card-content">
                                        <div className="media">
                                            <div className="media-content">
                                                <p className="title is-4 no-padding">Broadsword</p>
                                                <br></br>
                                                <p className="subtitle is-6"> Majula - Far Fire </p>
                                            </div>
                                        </div>
                                        <div className="content">
                                        <br></br>
                                        Sold by Blacksmith Lenigrast for 1,700 souls
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div v-for="card in cardData" className="column is-4">
                                <div id="column" className="cardlarge">
                                    <div className="card-image">
                                        <figure className="image is-16by9">
                                            <img src="https://darksouls2.wiki.fextralife.com/file/Dark-Souls-2/Large%20Club.png" alt="Image" />
                                        </figure>
                                    </div>
                                    <div className="card-content">
                                        <div className="media">
                                            <div className="media-content">
                                                <p className="title is-4 no-padding">Large Club</p>
                                                <br></br>
                                                <p className="subtitle is-6"> Lost Bastille - Servants' Quarters </p>
                                            </div>
                                        </div>
                                        <div className="content">
                                        <br></br>
                                        <div class="background-icon"><span class="icon-twitter"></span></div>
                                        Treasure from a Corpse next to chest in the corner beneath the Servants' Quarters bonfire, further duplicates can be obtained via the use of Bonfire Ascetic.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Weapons;