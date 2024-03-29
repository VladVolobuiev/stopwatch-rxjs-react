import React from 'react';
import setTimeFormat from './helpers';

export const Controls = ({ time, start, stop, reset, wait }) => (
  <>
    <header className="header">
      <h1 className="stopwatch headline">StopWatch</h1>
      <h1 className="stopwatch indicator">{setTimeFormat(time)}</h1>
    </header>
    <section className="main">
      <div className="container">
        <button type="button" className="button is-dark" onClick={start}>
          Start
        </button>
        <button type="button" className="button is-dark" onClick={stop}>
          Stop
        </button>
        <button type="button" className="button is-dark" onClick={reset}>
          Reset
        </button>
        <button type="button" className="button is-dark" onClick={wait}>
          Wait
        </button>
      </div>
    </section>
  </>
);
