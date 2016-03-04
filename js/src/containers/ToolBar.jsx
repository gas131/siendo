import React from 'react';
import SearchBar from '../components/SearchBar.jsx';

class ToolBar extends React.Component {
	render () {
		return (
			<nav className='navbar navbar-default navbar-fixed-top black'>
				<div className='container'>
					<div className='navbar-header'>
						  <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbarCollapse" aria-expanded="false">
					        <span className="sr-only">Toggle navigation</span>
					        <span className="icon-bar"></span>
					        <span className="icon-bar"></span>
					        <span className="icon-bar"></span>
					      </button>
					</div>

					<div className="collapse navbar-collapse" id="navbarCollapse">
				      <ul className="nav navbar-nav navbar-right">
				        <li>
				        	<a href="#">CONTACTO</a>
				        </li>
				        <li>
    			      		<SearchBar />
    			      	</li>
				      </ul>
				    </div>
				</div>
			</nav>
			);
	}
}

export default ToolBar;
