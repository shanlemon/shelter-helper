import React, { Component } from 'react'
import shelterlist from '../test-data/shelters.json';
import TextResults from "../components/search-components/TextResults"
import SearchInput from "../components/search-components/SearchInput"

class Give extends Component {

  constructor(props){
    super(props);
    this.state = {
      filteredInput: filterText('', 20)
    }
  }
    
  handleSearchChange = (event) => {
    this.setState({
      filteredInput: filterText(event.target.value, 20),
    });
  } 


  render() {
    return (
      <div>
        <SearchInput
          textChange={this.handleSearchChange}
        />
        <TextResults
          textData={this.state.filteredInput}
        />
      </div>
    )

  }

}

function filterText(searchText, maxResults){
  return shelterlist.filter((input) => {
    if (input.name.toLowerCase().includes(searchText.toLowerCase())) {
      return true;
    }
    // if (input.keywords.includes(searchText)) {
    //   return true;
    // }
    return false;
  }).slice(0, maxResults);
}

export default Give