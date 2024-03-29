import React from "react";

const ExtensionsArea = () => {
  return (
    <section className="extensions-section">
      <div className="heading">
        <h1>Download the extension</h1>
        <p>
          We’ve got more browsers in the pipeline. Please do let us know if
          you’ve got a favourite you’d like us to prioritize.
        </p>
      </div>

      <div className="cards">
        <article className="card">
          <div className="row-one">
            <div className="image">
              <img src="/images/logo-chrome.svg" />
            </div>
          </div>

          <div className="card-info">
            <h2> Add to Chrome</h2>
            <p> Minimum version 62</p>
          </div>

          <div>
            <img src="/images/bg-dots.svg" alt="" />
          </div>
          <button>Add & Install Extension</button>
        </article>
        <article className="card">
          <div className="row-one">
            <div className="image">
              <img src="/images/logo-firefox.svg" />
            </div>
          </div>
          <div className="card-info">
            <h2>Add to Firefox</h2>
            <p> Minimum version 55</p>
          </div>
          <div>
            <img src="/images/bg-dots.svg" alt="" />
          </div>
          <button> Add & Install Extension</button>
        </article>
        <article className="card">
          <div className="row-one">
            <div className="image">
              <img src="/images/logo-opera.svg" />
            </div>
          </div>
          <div className="card-info">
            <h2> Add to Opera</h2>
            <p> Minimum version 46</p>
          </div>
          <div>
            <img src="/images/bg-dots.svg" alt="" />
          </div>
          <button>Add & Install Extension</button>
        </article>
      </div>
    </section>
  );
};

export default ExtensionsArea;
