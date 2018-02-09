import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from "./components/App";
import HomePage from "./components/home/HomePage";
import  AboutPage from "./components/about/AboutPage";
import coursePage from './components/courses/coursePage';

export default (
    <Route path="/" component={App} >
        <IndexRoute component={HomePage} />
        <Route path="courses" component={coursePage} />
        <Route path="about" component={AboutPage} />
    </Route>
);