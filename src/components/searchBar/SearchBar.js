import React from "react";

class SearchBar extends React.Component {
  state = {
    term: "",
  };

  onFormSubmit = (e) =>  {
      e.preventDefault()
      this.props.onSearch(this.state.term)
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <label htmlFor="videoSearch">Video Search</label>
          <input
            type="text"
            id="videoSearch"
            onChange={(e) => {
              this.setState({ term: e.target.value });
            }}
            value={this.state.term} 
          />
        </form>
        <button onClick={() => this.setState({term:""})}>Clear</button>
      </div>
    );
  }
}

export default SearchBar;
