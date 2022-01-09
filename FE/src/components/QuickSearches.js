import React, { Component } from 'react'
import QuickSearch from './QuickSearch';
import '../Styles/QuickSearches.css';

export default class QuickSearches extends Component {
    render() {
        const { qsData } = this.props;
        return (
            <>
                <div className="bottomSection">
                    <h1>Choose Property Type</h1>
                    <h3> Discover your abode </h3>
                    <div className="container qs-boxes-container">
                        {/* {
                            qsData.map((item, index) => {

                            })
                        } */}
                        <QuickSearch />
                        <QuickSearch />
                        <QuickSearch />
                        <QuickSearch />
                        <QuickSearch />
                        <QuickSearch />
                    </div>
                </div>
            </>
        )
    }
}
