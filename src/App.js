import React from 'react';
import './App.css';
import LightBulb from './lightbulb/lightbulb.js';

const App = () => {
  return (
    <section class="outerWrap">
        <div class="innerWrap">

            <div class="slideOne">
              <LightBulb />
              </div>
            <div class="slideTwo"></div>
            <div class="slideThree"></div>
            <div class="slideFour"></div>

        </div>
    </section>
  );
}

export default App;
