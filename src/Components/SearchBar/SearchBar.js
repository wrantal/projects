import React from 'react';
import './SearchBar.css';
class SearchBar extends React.Component {
  constructor(props){
    super(props);
    this.search = this.search.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);

  }
  handleTermChange(e){
      const term = e.target.value;
      this.props.onChange(term);
  }
  search(term){
    this.props.onSearch(this.state.term)
  }
  render(){
    return (
      <div className="SearchBar">
        <input onChange={this.handleTermChange} placeholder="Enter A Song, Album, or Artist" />
        <a>SEARCH</a>
      </div>
    )
  }
}
export default SearchBar;
