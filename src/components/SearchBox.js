import React from 'react';


const SearchBox = ({searchfield, searchChange}) => {
	return (
		<div className="pa2">
		<input 
		className="pa ba b--blue bg-lightest-blue"
		type="serch"
		placeholder="search robots" 
		onChange={searchChange}
		 />
		 </div>
		);
}

export default SearchBox;