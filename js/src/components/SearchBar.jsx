import React from 'react';

class SearchBar extends React.Component{
	render ()
	{
		return (
			<form className="navbar-form navbar-right" role="search">
				<div className="form-group toolbar">
					<span className='glyphicon glyphicon-search icon' aria-label='Busqueda' aria-hidden='true' />
					<input type="text" className="form-control" placeholder="Buscar" />
				</div>
			</form>
			);
	};
}

export default SearchBar;