import React, { useRef, useState } from "react";

import Modal from "./Modal.jsx";
const Main = () => {
  const dialogRef = useRef(null);

  const openDialog = () => {
    dialogRef.current.showModal();
    document.body.classList.add("modal-open"); // Add the "modal-open" class to the body
  };

  const closeDialog = () => {
    dialogRef.current.close();
    document.body.classList.remove("modal-open"); // Remove the "modal-open" class from the body
  };
  return (
    <>
      <main>
        <section className="container">
          <article className="article-first">
            <div className="image">
              <img src="../../public/images/logo-mastercraft.svg" alt="" />
            </div>
            <h1>Mastercraft Bamboo Monitor Riser</h1>
            <p>
              A beautiful & handcrafted monitor stand to reduce neck and eye
              strain.
            </p>

            <div className="btn-action">
              <a href="#" onClick={openDialog}>
                Back this project
              </a>
              <button>
                <div>
                  <img src="../../public/images/icon-bookmark.svg" alt="" />
                </div>
                <span>Bookmark</span>
              </button>
            </div>
          </article>
          <article className="article-second row-2">
            <div className="content">
              <div className="item">
                <h1>$89,914</h1>
                <span>of $100,000 backed</span>
              </div>
              <div className="item">
                <h1>5,007</h1>
                <span>total backers</span>
              </div>
              <div className="item">
                <h1>56</h1>
                <span>days left</span>
              </div>
            </div>
            <div className="progress">
              <div className="bar"></div>
            </div>
          </article>
          <article className="article-third">
            <h1>About this project</h1>

            <p>
              The Mastercraft Bamboo Monitor Riser is a sturdy and stylish
              platform that elevates your screen to a more comfortable viewing
              height. Placing your monitor at eye level has the potential to
              improve your posture and make you more comfortable while at work,
              helping you stay focused on the task at hand.
            </p>
            <p>
              Featuring artisan craftsmanship, the simplicity of design creates
              extra desk space below your computer to allow notepads, pens, and
              USB sticks to be stored under the stand.
            </p>

            <div className="editions">
              <div className="item">
                <div className="heading">
                  <h3>Bamboo Stand</h3>
                  <a href="#"> Pledge $25 or more</a>
                </div>
                <p>
                  You get an ergonomic stand made of natural bamboo. You've
                  helped us launch our promotional campaign, and you’ll be added
                  to a special Backer member list.
                </p>

                <div className="actions">
                  <div className="amount-left">
                    <strong>101</strong>
                    <span>left</span>
                  </div>
                  <button> Select Reward</button>
                </div>
              </div>
              <div className="item">
                <div className="heading">
                  <h3>Black Edition</h3>
                  <a href="#"> Pledge $75 or more</a>
                </div>
                <p>
                  You get a Black Special Edition computer stand and a personal
                  thank you. You’ll be added to our Backer member list. Shipping
                  is included.
                </p>

                <div className="actions">
                  <div className="amount-left">
                    <strong>64</strong>
                    <span>left</span>
                  </div>
                  <button> Select Reward</button>
                </div>
              </div>
              <div className="item">
                <div className="heading">
                  <h3>Mahogany Special Edition</h3>
                  <a href="#"> Pledge $200 or more</a>
                </div>
                <p>
                  You get two Special Edition Mahogany stands, a Backer T-Shirt,
                  and a personal thank you. You’ll be added to our Backer member
                  list. Shipping is included.
                </p>

                <div className="actions">
                  <div className="amount-left">
                    <strong>0</strong>
                    <span>left</span>
                  </div>
                  <button> Out of Stock</button>
                </div>
              </div>
            </div>
          </article>
        </section>
        <Modal
          openDialog={openDialog}
          closeDialog={closeDialog}
          dialogRef={dialogRef}
        />
      </main>
    </>
  );
};

export default Main;
