import React from 'react';
import { Switch, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage';
import About from '../pages/About'
import Services from '../pages/Services'
import Retail from '../pages/Retail'
import FAQ from '../pages/FAQ'
import PhotoGallery from '../pages/PhotoGallery'

export default () => {
    return (
        <Switch>
            {/* Home Page  */}
            <Route exact path='/' component={HomePage} />
            <Route path='/about' component={About} />
            <Route path='/services' component={Services} />
            <Route path='/retail' component={Retail} />
            <Route path='/faq' component={FAQ} />
            <Route path='/gallery' component={PhotoGallery} />
        </Switch>
    )
}