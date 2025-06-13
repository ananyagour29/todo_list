// import NetflixSeries from "./components/NetflixSeries";
// import styles from "./components/Netflix.module.css";
import React from 'react';
// import {EventHandling} from "./components/EventHandling"
// import {EventPropagation} from "./components/EventPropagation";
import{State} from "./components/hooks/State";
// import {DerivedState} from "./components/DerivedState";
// import {LiftState} from "./components/LiftState";
import {Todo} from "./project/todo/Todo";
export const App = () => {
  return (
    <section className="container">
      {/* <h1 className={styles.card_heading}>List Of Best Netflix Series</h1> */}
      {/* <NetflixSeries /> */}
      {/* <EventHandling/> */}
{/* <EventPropagation/> */}
<Todo/>
    </section>
  );
};
