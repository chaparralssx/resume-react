import React, { Component } from 'react';
import logo from './rscottblamey-professional.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      
            <section class="view-resume container" itemscope itemtype="http://schema.org/Person">

                <header>
                    <h1>R. Scott Blamey's Resume</h1>
                </header>

                <div class="resume-sheet">

                    <div class="resume-overview">

                        <div class="resume-headshot">
                            <img src={logo} itemprop="image" class="contact-image" alt="R. Scott Blamey" />
                        </div>

                        <resume-contact contact="contact"></resume-contact>

                        <resume-summary summary="summary"></resume-summary>

                        <resume-specialties specialties="specialties"></resume-specialties>

                    </div>

                    <div class="resume-main">

                        <div class="resume-masthead">

                            <resume-contact contact="contact"></resume-contact>

                        </div>


                        <div class="resume-body">

                            <resume-experience experience="experience"></resume-experience>

                            <resume-education education="education"></resume-education>

                            <resume-volunteer volunteer="volunteer"></resume-volunteer>

                        </div>

                    </div>

                </div>

            </section>

            <div class="container">
                <section class="resume-technical">
                    <h2>Do cool stuff to this resume</h2>
                    <ul>
                        <li><a href="https://gsnedders.html5.org/outliner/" target="_blank">See the HTML5 outline ('cause that's what geeks do)</a></li>
                        <li><a href="https://search.google.com/structured-data/testing-tool" target="_blank">Show the structured data (like cookies for SEO - eat up, yum yum!)</a></li>
                        <li><a href="" target="_blank">WCAG Test (accessibility is important!)</a></li>
                        <li><a href="" target="_blank">Toggle Theme (some sense of how a screen reader would see it)</a></li>
                        <li><a href="" target="_blank">Switch Theme (not impressed yet? maybe you need to see me differently)</a></li>
                    </ul>
                </section>
            </div>
      </div>
    );
  }
}

export default App;
