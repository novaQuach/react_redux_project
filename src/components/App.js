import React, { Component, PropTypes } from 'react';
// PropTypes is a component from React, in the dev build it will check the property type
import Header from './common/Header';

class App extends Component {
    render() {
        return (
            <div className="container-fluid">
                <Header />
                {this.props.children}
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired,
};

export default App;

// line 9 . passing down chilren it receives as props, children will be passed in from react router,
