import React, { useState } from 'react';
import './App.css';
import First from './First.jsx';
import Second from './Second.jsx';
import Third from './Third.jsx';
import Fourth from './Fourth.jsx';
import Star from '../images/icon-star.svg';
import DesktopPattern from '../images/background-pattern-desktop.svg';
import MobilePattern from '../images/background-pattern-mobile.svg';
import IconMinus from '../images/icon-minus.svg';
import IconPlus from '../images/icon-plus.svg';


function App() {
  const [firstQA, setFirstQA] = useState(false);
  const [secondQA, setSecondQA] = useState(false);
  const [thirdQA, setThirdQA] = useState(false);
  const [fourthQA, setFourthQA] = useState(false);

  const toggleFirstQA = () => {
    setFirstQA(triggerOne => !triggerOne);
  };

  const toggleSecondQA = () => {
    setSecondQA(triggerTwo => !triggerTwo);
  };

  const toggleThirdQA = () => {
    setThirdQA(triggerThree => !triggerThree);
  };

  const toggleFourthQA = () => {
    setFourthQA(triggerFour => !triggerFour);
  };

  return (
    <>
      <div id="background-img">
        <img id="desktop" src={DesktopPattern} alt="dektop pattern" />
        <img id="mobile" src={MobilePattern} alt="mobile pattern" />
      </div>
      <div id="column">
        <div id="star-faq">
          <img id="star" src={Star} alt="a purple star" />
          <h1>FAQs</h1>
        </div>
        <div id="container">
          <div id="first-q-a">
            <div className="buttons">
              <h2>What is Frontend Mentor, and how will it help me?</h2>
              <button onClick={toggleFirstQA}>
                <img
                  className={firstQA ? 'minus-btn' : 'plus-btn'}
                  src={firstQA ? IconMinus : IconPlus}
                  alt="plus button"
                />
              </button>
            </div>
            {firstQA && <First toggleFirstQA={toggleFirstQA} />}
          </div>
          <hr />
          <div id="second-q-a">
            <div className="buttons">
              <h2>Is Frontend Mentor free?</h2>
              <button onClick={toggleSecondQA}>
                <img
                  className={secondQA ? 'plus-btn' : 'minus-btn'}
                  src={secondQA ? IconMinus : IconPlus}
                  alt="plus button" />
              </button>
            </div>
            {secondQA && <Second toggleSecondQA={toggleSecondQA} /> }
          </div>
          <hr />
          <div id="third-q-a">
            <div className="buttons">
              <h2>Can I use Frontend Mentor projects in my portfolio?</h2>
              <button onClick={toggleThirdQA}>
                <img 
                className={thirdQA ? 'plus-btn' : 'minus-btn'}
                src={thirdQA ? IconMinus : IconPlus}
                alt="plus button" 
                /> 
                </button>
            </div>
            {thirdQA && <Third toggleThirdQA={toggleThirdQA} />}
          </div>
          <hr />
          <div id="fourth-q-a">
            <div className="buttons">
              <h2>How can I get help if I'm stuck on a challenge?</h2>
              <button onClick={toggleFourthQA}>
                <img 
                className={fourthQA ? 'plus-btn' : 'minus-btn'}
                src={fourthQA ? IconMinus : IconPlus}
                alt="plus button" 
                />
                </button>
            </div>
            {fourthQA && <Fourth toggleFourthQA={toggleFourthQA} />}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
