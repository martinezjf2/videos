import React from "react";
import SearchBar from "./components/SearchBar"

export default class App extends React.Component {

   onTermSubmit = (term) => {

   }
    
    render() {
        return (
            <div className="ui container">
                <h1><SearchBar onFormSubmit={this.onTermSubmit}/></h1>
            </div>
        )
    }
}