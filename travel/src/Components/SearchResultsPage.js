import React from 'react';
import ResultCard from './ResultCard.js';
import DATA from '../data.js'
import './SearchResultsPage.css';

class SearchResultsPage extends React.Component {
    render(){
        return (
            <div className="search-result-page">
                <header className="search-page-header"></header>
                <div style={{ fontSize: "20px", margin: "10px"}}>תוצאות חיפוש ...</div>
                <div style={{display:"flex"}}>
                    {DATA.searchResults.map((result) => {
                        return (<ResultCard result={result}></ResultCard>);
                    })}
                </div>
            </div>
        );
    }
}

export default SearchResultsPage;
