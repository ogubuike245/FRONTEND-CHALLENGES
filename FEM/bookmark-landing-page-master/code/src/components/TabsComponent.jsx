import React from "react";

const TabsComponent = () => {
  return (
    <section>
      <ul className="tabs-list">
        <li> Simple Bookmarking</li>
        <li> Speedy Searching</li>
        <li> Easy Sharing</li>
      </ul>

      <article>
        <div className="image">
          <h1>IMAGE</h1>
        </div>
        <div className="content">
          <h1>Bookmark in one click</h1>
          <p>
            Organize your bookmarks however you like. Our simple drag-and-drop
            interface gives you complete control over how you manage your
            favourite sites.
          </p>
          <button> More Info</button>
        </div>
      </article>
      <article>
        <div className="image">
          <h1>IMAGE</h1>
        </div>
        <div className="content">
          <h1>Intelligent search</h1>
          <p>
            Our powerful search feature will help you find saved sites in no
            time at all. No need to trawl through all of your bookmarks.
          </p>
          <button> More Info</button>
        </div>
      </article>
      <article>
        <div className="image">
          <h1>IMAGE</h1>
        </div>
        <div className="content">
          <h1> Share your bookmarks</h1>
          <p>
            Easily share your bookmarks and collections with others. Create a
            shareable link that you can send at the click of a button.
          </p>
          <button> More Info</button>
        </div>
      </article>
    </section>
  );
};

export default TabsComponent;
