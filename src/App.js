import React from "react";
import "./App.css";

import Header from "./components/Header";
import Popup from "./components/Popup";
import Footer from "./components/Footer";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <main>
        <div className='container'>
          <div className='container-item'>
            <h2>Why?</h2>
            <p>
              <strong>React portals</strong> allow us to render an html element in a different place
              than it’s normally can be rendered in the DOM hierarchy of the parent component.
            </p>
            <br />
            <p>It can be used in class-based components and functional components.</p>
            <br />
            <p>
              ReactDOM has more methods other than the <strong>render</strong> one.
            </p>
            <h2>How?</h2>
            <ol>
              <li>Create a new place in the html file to render the portal content.</li>
              <li>Import ReactDOM package in the component where you want to make the portal.</li>
              <li>Assign the content that you want to use in the portal to a variable</li>
              <li>
                return the createPortal method of ReactDOM, passing the content as a first argument
                and selector on the document object as the second argument.
              </li>
            </ol>
          </div>
          <Popup />
        </div>
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default App;
