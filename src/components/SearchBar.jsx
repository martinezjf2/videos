import React from "react";

export default class SearchBar extends React.Component {
    state = { term: '' };

    render() {
        return (
            <div className="ui segment search-bar">
                <form className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input type="text" value={this.state.term} id="Submit"/>
                        
                    </div>
                </form>
            </div>
        )
    }
}