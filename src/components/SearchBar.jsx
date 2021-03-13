import React from "react";

export default class SearchBar extends React.Component {
    render() {
        return (
            <div className="ui segment search-bar">
                <form className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input type="text" name="" id="Submit"/>
                        
                    </div>
                </form>
            </div>
        )
    }
}