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
            <div className="image"></div>
            <h2> Add to Chrome</h2>
            <p> Minimum version 62</p>
          </div>

          <button>Add & Install Extension</button>
        </article>
        <article className="card">
          <div className="row-one">
            <div className="image"></div>
            <h2>Add to Firefox</h2>
            <p> Minimum version 55</p>
          </div>

          <button> Add & Install Extension</button>
        </article>
        <article className="card">
          <div className="row-one">
            <div className="image"></div>
            <h2> Add to Opera</h2>
            <p> Minimum version 46</p>
          </div>

          <button>Add & Install Extension</button>
        </article>
      </div>
    </section>
  );
};

export default ExtensionsArea;
