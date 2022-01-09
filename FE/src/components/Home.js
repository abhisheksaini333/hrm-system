import React, { Component } from 'react'
import Wallpaper from './Wallpaper';
import QuickSearches from './QuickSearches';

import axios from 'axios';

export default class Home extends Component {

    constructor() {
        super();
        this.state = {
            locations: [],
            propertyTypes: [],
            error: {}
        }
    }

    componentDidMount() {
        // API calls (FE <---(Axios)---> BE)
        // get the available locations 
        
        axios.get(`http://localhost:5454/getAllLocations`)
            .then(resp => {
                this.setState({
                    locations: resp.data.locations
                });
            })
            .catch(error => {
                this.setState({
                    error
                });
            });
        /*
        // get the property types
        axios.get(`<URL>`)
            .then(resp => {
                this.setState({
                    propertyTypes: resp.data.propertyTypes
                });
            })
            .catch(error => {
                this.setState({
                    error
                });
            });
            */
    }

    render() {
        const { propertyTypes, locations } = this.state;
        return (
            <React.Fragment>
                <Wallpaper locationData={locations} />
                <QuickSearches qsData={propertyTypes} />
            </React.Fragment>
        )
    }
}
