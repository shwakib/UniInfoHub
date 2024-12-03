import React from 'react';
import Navbar from '../../header/navbar';
import Footer from '../../footer/footer';
import '../../../css/drivinglicense.css';
import StudentHub from '../../../helper/StudentHub.js';
import { useRef } from 'react';

function DrivingPage() {

  // const myRef = useRef<HTMLElement | null>(null);

  const scrollAction = (elemenetId) => {
    const headerOffset = 100;
    const element = document.getElementById(elemenetId);
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }

  return (
    <>
      <Navbar />
      <div className="driving-page">
        <div className="driving-sidebar">
          <h2>ON THIS PAGE</h2>
          <ul>
            <li><a className="link_hand" onClick={() => scrollAction("requirements")}>Requirements for driving in Ontario</a></li>
            <li><a className="link_hand" onClick={() => scrollAction("classification-chart")}>Driver’s Licence Classification Chart</a></li>
            <li><a className="link_hand" onClick={() => scrollAction("kind-of-licence")}>What kind of licence?</a></li>
            <li><a className="link_hand" onClick={() => scrollAction("graduated-licensing")}>Graduated licensing</a></li>
            <li><a className="link_hand" onClick={() => scrollAction("applying-for-licence")}>Applying for a licence</a></li>
            <li><a className="link_hand" onClick={() => scrollAction("licensing-requirements")}>Graduated licensing requirements</a></li>
            <ul>
              <li><a className="link_hand" onClick={() => scrollAction("level-one")}>Level One (Class G1)</a></li>
              <li><a className="link_hand" onClick={() => scrollAction("g1-knowledge-test")}>G1 knowledge test – checklist</a></li>
              <li><a className="link_hand" onClick={() => scrollAction("g1-exit-test")}>G1 exit test – checklist</a></li>
              <li><a className="link_hand" onClick={() => scrollAction("level-two")}>Level Two (Class G2)</a></li>
              <li><a className="link_hand" onClick={() => scrollAction("road-tests")}>Road tests</a></li>
              <li><a className="link_hand" onClick={() => scrollAction("g2-exit-test")}>G2 exit test – checklist</a></li>
              <li><a className="link_hand" onClick={() => scrollAction("understanding_drivers_licence_classes")}>Understanding Driver’s Licence Classes and Their Requirements</a></li>
            </ul>
          </ul>
        </div>
        <div className="driving-content">
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
            <p>Allowed to drive any car, van or small truck or combination of vehicle and towed vehicle up to 11,000 kilograms provided the vehicle towed is not over 4,600 kilograms. A pickup truck towing a house trailer exceeds 4,600 kilograms, but the total combined weight of the truck and trailer does not exceed 11,000 kilograms is deemed a Class G vehicle.</p>
            <h3>Class G1</h3>
            <p>Level One of graduated licensing. Holders may drive Class G vehicles with an accompanying fully licensed driver with at least four years driving experience. Subject to certain conditions.</p>
            <h3>Class G2</h3>
            <p>Level Two of graduated licensing. Holders may drive Class G vehicles without accompanying driver but are subject to certain conditions.</p>
          </section>

          <section id="kind-of-licence">
            <h2>What kind of licence?</h2>
            <p>In Ontario, there are 12 different classes of licences. Each one qualifies you to drive a different type of vehicle. The class of licence you have must match the type of vehicle you are driving. You need a Class G licence to drive a car, van or small truck. You must have a Class G licence before you can be licensed to drive any other type of vehicle. The only exception is motorcycles. You may get a motorcycle licence (Class M) without first getting a Class G licence. The Driver’s Licence Classification Chart shows you what class of licence you need to drive different vehicles.

              For information on the skills and knowledge you'll need to get a Class M motorcycle licence, study the Official MTO Motorcycle Handbook. You can get information on other kinds of licences - classes A, B, C, D, E and F - in the Official MTO Truck Handbook and the Official MTO Bus Handbook. If you want to drive a vehicle equipped with air brakes, the Official MTO Air Brake Handbook tells you how to qualify.

              Some recreational vehicles have special licence requirements. If you plan to drive an off-road vehicle or snowmobile, read the Off-Road Vehicles section in this handbook.

              You do not need a licence to ride a bicycle in Ontario; however bicycles are defined as vehicles in the Highway Traffic Act and bicyclists have rights and responsibilities similar to other vehicle operators under the Act. Information on safe cycling can be found in the Ministry of Transportation publications Cycling Skills and the Young Cyclist Guide.</p>
          </section>

          <section id="graduated-licensing">
            <h2>Graduated licensing</h2>
            <p>New drivers applying for their first car or motorcycle licence enter Ontario’s graduated licensing system. Graduated licensing lets new drivers get driving experience and skills gradually. The two-step licensing process takes at least 20 months to complete.

              To apply for a licence, you must be at least 16 years old, pass a vision test and pass a test of your knowledge of the rules of the road and traffic signs. After you pass these tests, you will enter Level One and get a Class G1 licence.

              You must pass two road tests to become fully licensed. Passing the first road test lets you move to Level Two (Class G2), and the second one gives you full Class G driving privileges.</p>
          </section>

          <section id="applying-for-licence">
            <h2>Applying for a licence</h2>
            <p>To apply for a licence, you must show proof of your legal name and date of birth (showing day, month and year of birth). Documents must be original and valid. Photocopies and expired documents are not acceptable.

              Bring the documents to a DriveTest Centre or Travel Point (a temporary DriveTest Centre where there is no regional centre). Phone ahead to find out where the nearest Travel Point is and when it is open. You can also find it on the Internet at www.drivetest.ca.

              You must pay a fee when you apply. This fee includes the cost of the knowledge test, your first road test and a five-year licensing fee. There are more charges for your second road test and for any retests you may need to take. To schedule a road-test appointment, you must prepay the fee.

              When you apply for your licence, you will be asked questions about your health. People with certain physical or medical conditions are not allowed to drive for safety reasons. If your physical or medical condition means you cannot be licensed, you will be told when you apply.

              Once you have a licence, you should report any change in your medical condition that may affect your ability to drive safely. By law, doctors and optometrists must report the name and address of anyone over 16 who has a condition that may make it unsafe for him or her to drive.

              For further details on applying for a licence, visit the Ministry of Transportation website.</p>
          </section>
          <section id="applying-for-licence">
            <h2>Proof of identification</h2>
            <p>
              Any one of the following documents may be used to satisfy the requirement to provide proof of legal name and
              complete date of birth:
            </p>
            <div className="driving-container">
              <h3>Temporary Immigration Documents</h3>
              <ul className="driving-document-list">
                <li>Student Authorization (IMM 1442)</li>
                <li>Employment Authorization (IMM 1442)</li>
                <li>Visitor Record (IMM 1442)</li>
                <li>Temporary Resident's Permit (IMM 1442)</li>
                <li>Report Pursuant to the Immigration Act (IMM 1442 with photo)</li>
              </ul>
            </div>
          </section>

          <section id="licensing-requirements">
            <h2>Graduated licensing requirements</h2>
            <div className="driving-g1-container">
              <h2 id="level-one">Level One (Class G1)</h2>
              <p>
                Level One lasts 12 months. The Ministry of Transportation encourages all new drivers to take an approved
                driver-education course to help learn the proper driving skills and knowledge. You should begin your training as
                soon as you become a Level One driver so you can get as much driving experience as possible. If you pass an
                approved course, you can complete Level One in eight months.
              </p>
              <p>While at Level One, the following rules apply:</p>
              <ul>
                <li>You must not drive if you have been drinking alcohol. Your blood-alcohol level must be zero.</li>
                <li>
                  You must not drive alone; an accompanying driver must sit in the front passenger seat. This is the only person
                  who can be in the front seat with you while you drive. The accompanying driver must have a valid Class G (or
                  higher) licence, at least four years of driving experience and a blood-alcohol level of less than .05% when
                  accompanying you.
                </li>
                <li>Each person in the vehicle must have a working seatbelt.</li>
                <li>
                  You must not drive on 400-series highways with a posted speed limit over 80 km/h. Also, you must not drive on
                  certain high-speed roads. However, if your accompanying driver is a driving instructor, you may drive on any
                  road.
                </li>
                <li>You must not drive between midnight and 5 a.m.</li>
              </ul>
              <p>
                You must pass a road test of your driving skills to move to Level Two. At this time, you will be given a Class G2
                licence.
              </p>
              <h3 id="g1-knowledge-test">G1 Knowledge Test – Checklist</h3>
              <p>
                Before taking the G1 knowledge test, make sure you have studied the official{' '}
                <a href="https://canada.vn/wp-content/uploads/2020/09/Drivers-Handbook-Study-Guide-Ontario-Canada.pdf">MTO Driver’s Handbook</a>.
              </p>
              <p>Bring the following items to the test:</p>
              <ul>
                <li>Two pieces of identification</li>
                <li>Money for test fees – cash, debit or credit card</li>
                <li>Glasses or contact lenses (if you need them to see well to drive)</li>
                <li>A parent’s or guardian’s consent (if you are under 18 years of age)</li>
              </ul>
              <h3 id="g1-exit-test">G1 exit test – checklist</h3>
              <ul>
                <li>Vehicle in good working order</li>
                <li>Money for test fees (if applicable)</li>
                <li>Glasses or contact lenses (if you need to wear them to drive)</li>
                <li>Arrive at least 30 minutes before Road Test appointment</li>
              </ul>
            </div>

            <div className="driving-level-two-container">
              <h2 id="level-two">Level Two (Class G2)</h2>
              <p>
                Level Two lasts at least 12 months. At this level, you have more privileges because of your driving experience.
              </p>
              <h3>At Level Two:</h3>
              <ul>
                <li>You must not drive if you have been drinking alcohol. Your blood-alcohol level must be zero.</li>
                <li>Each person in the vehicle must have a working seatbelt.</li>
              </ul>
              <p>
                In addition, the following restrictions apply between the hours of midnight and 5 a.m. to G2 drivers aged 19
                years and under:
              </p>
              <ul>
                <li>
                  In the first six months after receiving your G2 licence, you are allowed to carry only one passenger aged 19 or
                  under.
                </li>
                <li>
                  After six months with your G2 licence and until you obtain your full G licence or turn 20, you are allowed to
                  carry up to three passengers aged 19 or under.
                </li>
              </ul>
              <h3>Exemptions:</h3>
              <p>
                The passenger restrictions for G2 drivers aged 19 and under do not apply if you are accompanied by a{' '}
                <strong>fully-licensed driver</strong> in the front passenger seat, or if the passengers are members of your
                immediate family.
              </p>
              <p>
                After 12 months at Level Two, you may take a road test to qualify for full licence privileges. You must pass this
                test to get a Class G licence.
              </p>
            </div>

            <div className="driving-road-tests-container">
              <h2 id="road-tests">Road tests</h2>
              <p>
                Road tests check your driving skills in the vehicle and in traffic. You will be tested on your ability to follow
                the rules of the road and safe driving practices.
              </p>
              <p>
                When you feel qualified to drive safely and confident enough to take your road test, schedule an appointment by
                internet, phone or in-person at any DriveTest Centre. You can contact the DriveTest Centre at{' '}
                <strong>647-776-0331 </strong>or <strong>1-888-570-6110</strong>, or go online to{' '}
                <a href="https://drivetest.ca/" target="_blank" rel="noopener noreferrer">
                  DriveTest.ca
                </a>
                .
              </p>
              <p>
                You must bring the appropriate vehicle to your road test. The vehicle must be fit, in proper working condition,
                plated and insured.
              </p>
              <p>
                If you are a Level One driver, an accompanying driver must come with you to the test centre. If you are a Level
                Two driver, be prepared to take alternate transportation home in case you fail your road test and are unqualified
                to drive.
              </p>
              <p>
                No pets or passengers other than the driver examiner are allowed in the vehicle during a road test. Driving
                instructors, friends, relatives and translators may not accompany you during the test.
              </p>
              <h3 id="g2-exit-test">G2 exit test – checklist</h3>
              <p>
                You must have highway driving experience (experience driving on highways with speed limits of at least 80 km/h)
                before taking the G2 exit test. Bring the following items to the test:
              </p>
              <ul>
                <li><strong>Vehicle in good working order</strong></li>
                <li>Money for test fees (if applicable)</li>
                <li>Glasses or contact lenses (if you need to wear them to drive)</li>
                <li>Arrive at least 30 minutes before Road Test appointment</li>
              </ul>
            </div>
            <div>
            <h3 id="understanding_drivers_licence_classes">Understanding Driver’s Licence Classes and Their Requirements</h3>
            <p>If you're looking to understand the types of vehicles you can drive with different licence classes, here’s a quick overview. <strong>Class A</strong> licences allow you to operate any tractor-trailer combination, while <strong>Class B</strong> licences are designated for school buses and also permit driving vehicles under several other classes. <strong>Class C</strong> licences cover regular buses, and <strong>Class D</strong> licences are required for heavy trucks exceeding 11,000 kg gross weight. For smaller school buses with a maximum capacity of 24 passengers, you’ll need a <strong>Class E</strong> licence, and for ambulances or buses with the same capacity, a <strong>Class F </strong>licence is required. Everyday cars, vans, and small trucks up to 11,000 kg fall under a <strong>Class G</strong> licence, which includes graduated learning stages with <strong>G1 and G2 levels</strong>. Motorcycles, including scooters, mopeds, and tricycles, are covered under <strong>Class M</strong>, with specific restrictions for limited-speed motorcycles and motor tricycles. Additionally, a "Z" air brake endorsement is required to operate vehicles equipped with air brakes.</p>
            </div>
          </section>
          <section>
            <div>
              <p>For more information about any licences, either for motor bike, car or truck, go to <a href="https://www.ontario.ca/document/official-mto-drivers-handbook/getting-your-drivers-licence">Licence Information</a> </p>
            </div>
          </section>
          
         {/* NEW THING */}


         <section id="students-driving-license">
            <h2>Driving Licence Process for Students in Canada</h2>
            <div className="student-license-process">
              <h3>1. No Prior Driving Licence</h3>
              <p>If students have never held a driver’s licence, they can choose between two options:</p>
              <div className="driving-option">
                <h4>Option 1:</h4>
                <ul>
                  <li>Pass the G1 exam, wait 1 year, and then take the G2 road test.</li>
                  <li>After holding a G2 licence for 1 year, they can take the G road test.</li>
                </ul>
              </div>
              <div className="driving-option">
                <h4>Option 2 (Accelerated Path):</h4>
                <ul>
                  <li>Pass the G1 exam, attend a Ministry-approved driving school, and complete the program to receive a certificate.</li>
                  <li>Reduces the wait time to 8 months for the G2 road test.</li>
                  <li>After holding the G2 license for 1 year, they can take the G road test.</li>
                </ul>
              </div>
              <h3>2. Driving Licence with 2+ Years of Experience in Home Country</h3>
              <ul>
                <li>Students with a driver’s licence and at least 2 years of experience in their home country only need to pass the G1 exam.</li>
                <li>They can then skip the G2 test and proceed directly to the G road test.</li>
              </ul>
              <h3>3. Driving Licence with 1+ Years of Experience in Home Country</h3>
              <ul>
                <li>Students with a driver’s licence and 1+ years of experience in their home country must pass the G1 exam.</li>
                <li>They do not have to wait to take the G2 road test.</li>
                <li>After holding the G2 licence for 1 year, they can take the G road test.</li>
              </ul>
            </div>
          </section>
       
           



        </div>
      </div>
      <StudentHub/>
      <Footer />
    </>
  );
};

export default DrivingPage;
