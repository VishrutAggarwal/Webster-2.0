import React, { Component } from 'react';
import AboutPage from './AboutPage';
import ExpPage from './ExpPage';
import EduPage from './EduPage';
import ProjectPage from './ProjectPage';
import ContactPage from './ContactPage';

class Body extends Component {
  render() {
    return (
        <div>
            <AboutPage/>
            <ExpPage/>
            <EduPage/>
            <ProjectPage/>
            <ContactPage/>
        </div>
    )
  }
}

export default Body;
