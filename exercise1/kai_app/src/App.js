import React from 'react';
import './App.css';
import HsHead from './components/HsExerciseHead';
import HsNot from './components/HsExerciseNot';
import HsSide from './components/HsExerciseSideScroll';
import HsMain from './components/HsExerciseMainScroll'

function App() {
  return (
    <div>
      <HsHead/>
      <HsNot topic="Hävittäjä" news="Vastaako yksi suomalainen kymmentä venäläistä"/>
      <HsNot topic="Korona" news="Iso korona kaikkialla paljon tartuntoja"/>
      <HsNot topic="Jääkiekko" news="Kärpät voittivat kaikki mahdolliset palkinnot"/>
      <HsMain/>
      <HsSide/>
    </div>
  );
}

export default App;
