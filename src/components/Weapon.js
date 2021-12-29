import React, { Component } from 'react';
import '../css/Weapons.css'

class Weapon extends Component {
    render() {
        return (
            <div v-for="card in cardData" className="column is-4">
            <div id="column" className="cardlarge">
                <div className="card-image">
                    <figure className="image is-16by9">
                        <img src={this.props.image} alt="Image" />
                    </figure>
                </div>
                <div className="card-content">
                    <div className="media">
                        <div className="media-content">
                            <p className="title is-4 no-padding">{this.props.name}</p>
                            <br></br>
                            <p className="subtitle is-6">{this.props.bonfire}</p>
                        </div>
                    </div>
                    <div className="content">
                    <br></br>
                    {this.props.description}
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default Weapon