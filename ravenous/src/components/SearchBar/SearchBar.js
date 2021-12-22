import React from 'react';
import './SearchBar.css';

const sortByOptions = {
    "Best Match": 'best_match',
    "Highest Rated": 'rating',
    "Most Reviewed": 'review-count'
}

class SearchBar extends React.Component {
    const renderSortByOptions = {
        return Object.keys(sortByOptions).map(sortByOptions) => {
            let sortOptionValue = sortByOptions[sortByOption]
            return <li key = { sortByOptionValue } > { sortByOption } < /li>
        })
    render() {
        return ( <
            div className = "SearchBar" >
            <
            div className = "SearchBar-sort-options" >
            <
            ul >
            <!-- Use .renderSortByOptions() to sort the businesses by their options -->
            <
            /ul> < /
            div > <
            div className = "SearchBar-fields" >
            <
            input placeholder = "Search Businesses" / >
            <
            input placeholder = "Where?" / >
            <
            /div> <
            div className = "SearchBar-submit" >
            <
            a > Let 's Go</a> < /
            div > <
            /div>
        )
    }
}

export default SearchBar;