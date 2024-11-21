import React from 'react';
import Navbar from '../../header/navbar';
import Footer from '../../footer/footer';
import '../../../css/drivinglicense.css'; 
//import '../../../css/refillbuspass.css';


function DrivingPage () {
    return (
        <div>
            <Navbar />

  
    <div className="driving-page">
      <div className="sidebar">
        <h2>ON THIS PAGE</h2>
        <ul>
          <li><a href="#requirements">Requirements for driving in Ontario</a></li>
          <li><a href="#classification-chart">Driver’s Licence Classification Chart</a></li>
          <li><a href="#kind-of-licence">What kind of licence?</a></li>
          <li><a href="#graduated-licensing">Graduated licensing</a></li>
          <li><a href="#applying-for-licence">Applying for a licence</a></li>
          <li><a href="#licensing-requirements">Graduated licensing requirements</a></li>
          <ul>
            <li><a href="#level-one">Level One (Class G1)</a></li>
            <li><a href="#g1-knowledge-test">G1 knowledge test – checklist</a></li>
            <li><a href="#g1-exit-test">G1 exit test – checklist</a></li>
            <li><a href="#level-two">Level Two (Class G2)</a></li>
            <li><a href="#road-tests">Road tests</a></li>
            <li><a href="#g2-exit-test">G2 exit test – checklist</a></li>
          </ul>
        </ul>
      </div>
      <div className="content">
        <section id="requirements">
          <h2>Requirements for driving in Ontario</h2>
          <p>Ontario residents:</p>
          <ul>
            <li>must be at least 16 years old</li>
            <li>must have a valid Ontario driver's licence</li>
          </ul>
          <p>If you have just become an Ontario resident, you have 60 days to continue to use your existing driver’s licence and apply for an Ontario driver’s licence.</p>
          <p>Visitors to Ontario:</p>
          <ul>
            <li>must be at least 16 years old</li>
            <li>must have a valid driver's licence from your home province, state or country</li>
            <li>must have an international driver’s permit from your own country if visiting Ontario for more than 3 months</li>
            <li>are <strong>not</strong> eligible for an Ontario driver’s licence</li>
          </ul>
        </section>

        <section id="classification-chart">
          <h2>Driver’s Licence Classification Chart</h2>
          <h3>Class G</h3>
          <p>Allowed to drive any car, van or small truck or combination of vehicle and towed vehicle up to 11,000 kilograms...</p>
          <h3>Class G1</h3>
          <p>Level One of graduated licensing. Holders may drive Class G vehicles with an accompanying fully licensed driver...</p>
          <h3>Class G2</h3>
          <p>Level Two of graduated licensing. Holders may drive Class G vehicles without accompanying driver but are subject to certain conditions...</p>
        </section>

        <section id="kind-of-licence">
          <h2>What kind of licence?</h2>
          <p>In Ontario, there are 12 different classes of licences. Each one qualifies you to drive a different type of vehicle...</p>
        </section>

        <section id="graduated-licensing">
          <h2>Graduated licensing</h2>
          <p>New drivers applying for their first car or motorcycle licence enter Ontario’s graduated licensing system...</p>
        </section>

        <section id="applying-for-licence">
          <h2>Applying for a licence</h2>
          <p>To apply for a licence, you must show proof of your legal name and date of birth...</p>
        </section>

        <section id="licensing-requirements">
          <h2>Graduated licensing requirements</h2>
          <h3 id="level-one">Level One (Class G1)</h3>
          <p>Level One lasts 12 months. The Ministry of Transportation encourages all new drivers...</p>

          <h4 id="g1-knowledge-test">G1 knowledge test – checklist</h4>
          <ul>
            <li>Two pieces of identification</li>
            <li>Money for test fees – cash, debit or credit card</li>
            <li>Glasses or contact lenses (if you need to wear them to drive)</li>
          </ul>

          <h4 id="g1-exit-test">G1 exit test – checklist</h4>
          <ul>
            <li>Vehicle in good working order</li>
            <li>Money for test fees (if applicable)</li>
            <li>Glasses or contact lenses (if you need to wear them to drive)</li>
          </ul>

          <h3 id="level-two">Level Two (Class G2)</h3>
          <p>Level Two lasts at least 12 months. At this level, you have more privileges because of your driving experience...</p>

          <h3 id="road-tests">Road tests</h3>
          <p>Road tests check your driving skills in the vehicle and in traffic. You will be tested on your ability to follow the rules of the road...</p>

          <h4 id="g2-exit-test">G2 exit test – checklist</h4>
          <ul>
            <li>Vehicle in good working order</li>
            <li>Money for test fees (if applicable)</li>
            <li>Glasses or contact lenses (if you need to wear them to drive)</li>
          </ul>
        </section>
      </div>
    </div>



            <Footer />
        </div>
    );
};

export default DrivingPage;
