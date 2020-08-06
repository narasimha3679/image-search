import React from 'react';

class SearchBar extends React.Component {

    // initialising state term
    state = {term: ''};

    // wherever user type something in search bar this method will update the state
    onInputChange = (event) => {
        this.setState({term: event.target.value});
    }
    // on submit search term is passed to a function inside its parent component
    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    }


    render() {
        return (
            // this is a search bar form to enter search terms
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search:</label>
                        <input type="text"
                               onChange={this.onInputChange}/>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;