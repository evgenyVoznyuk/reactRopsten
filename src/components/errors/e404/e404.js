import React from 'react';
import { Link } from 'react-router-dom';


function E404(){
		return <div className="container">
			<h1>Error 404</h1>
			<p>Page not found</p>
			<p>
				Try start from
				<Link to="/"> homepage</Link>
			</p>
		</div>
}

export default E404;
