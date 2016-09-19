import React, { Component } from 'react';
import logo from './rscottblamey-professional.png';
import './Person.css';

class Person extends Component {
  render() {
    return (
        <section className="Person">
            <h2 className="section-title">Person</h2>
            <img src={logo} itemProp="image" className="person-image" alt="R. Scott Blamey" />
            <div itemProp="name" className="person-name">firstName middleName lastName</div>
            <div itemProp="jobTitle" className="person-jobtitle">jobtitle</div>
            <div itemProp="address" itemScope itemType="http://schema.org/PostalAddress" className="person-address">
                <span itemProp="streetAddress" className="person-address">streetAddress</span>,
                <span itemProp="addressLocality" className="person-city">addressLocality</span>,&nbsp;<span itemProp="addressRegion" className="person-state">addressRegion</span>
                <span itemProp="postalCode" className="person-zip">postalCode</span>
            </div>
            <a itemProp="telephone" className="person-telephone" href="tel:+telephone">telephone</a>
            <a href="mailto:email" itemProp="email" className="person-email">email</a>
            <a href="http://url" itemProp="url" className="person-url">url</a>
        </section>
    );
  }
}

export default Person;
