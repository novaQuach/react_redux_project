import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import CoursesPage from './components/course/CoursesPage';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="about" component={AboutPage} />
        <Route path="courses" component={CoursesPage} />
    </Route>
);
// in this file, we are storing all the routes
// all the routes need to be wrapped in a  'Route Daddy"
// NB at the top the App component is part of the Route , therefore always load the App component and nest the other two routes and be passed in as children  into App by react router
//  --> recall : on the app page we have {this.props.children}; if the user types /about as indicated oby the route path, the App.js will end up getting the 'about component' and compose whatever is present on that page there.

// IndexRoute component is set to Homepage, meaning if someone just goes to / it will laod the Homepage
// otherwise if someone goes to /about ; it will load the Aboutpage
