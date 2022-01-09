import React, { Component } from 'react';

import '../Styles/Wallpaper.css';

export default class Wallpaper extends Component {

    getPropertiesFOrLocation = (e) => {

    }

    onSearchTextChange = (e) => {
        
    }

    render() {
        const { locationData } = this.props;
        return (
            <>
                <div className="topSection">
                    <img src={require('../Assets/home.jpeg')} alt="home" className="homeImage" />
                    <div className="branding">
                        <div className="logo">H</div>
                        <div className="headerText">Find your perfect Rental home</div>
                    </div>
                    <div className="searchOptions">
                        <span>
                            <select className="locationBox" onChange={this.getPropertiesFOrLocation}>
                                {
                                    locationData.map((item, index) => {
                                        return (
                                            <option key={index} value={item.name}>{ item.name }, {item.city} </option>
                                        )
                                    })
                                }
                            </select>
                        </span>
                        <span>
                            <input type="text" className="searchTextBox" placeholder="Search Properties" onChange={this.onSearchTextChange}/>
                        </span>
                    </div>
                </div>
            </>
        )
    }
}
