import React from 'react';
import './Business.css';
import Business from '../Business/Business';
import { ReactReduxContext } from 'react-redux';

class BusinessList extends ReactReduxContext.Component {
    render() {
        return ( <
            div className = "BusinessList" >
            <
            Business / >
            <
            Business / >
            <
            Business / >
            <
            Business / >
            <
            Business / >
            <
            Business / >
            <
            /div >
        )
    }
}

export default BusinessList;