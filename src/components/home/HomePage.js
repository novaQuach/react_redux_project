import React, { Component } from 'react';
import { Link } from 'react-router';

class HomePage extends Component {
    render() {
        return (
            <div className="jumbotron">
                <h1>Pluralsight Administration</h1>
                <p>
                    React, Redux, React Router in ES6 for ultra-responsive web
                    apps.
                </p>
                <Link to="about" className="btn btn-primary btn-lg">
                    Learn more
                </Link>
            </div>
        );
    }
}

export default HomePage;

// imported Link component from react-router that'll control the anchor tag Link that'll lead us to the about page
// jumbotron is a class from bootstrap
