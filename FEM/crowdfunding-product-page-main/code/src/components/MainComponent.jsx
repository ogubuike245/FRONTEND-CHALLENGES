import React, { useRef, useState } from "react";

import Modal from "./Modal.jsx";
import MainEditionList from "./MainEditionList.jsx";
import InfoItem from "./InfoItem.jsx";
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
              <img src="/images/logo-mastercraft.svg" alt="" />
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
                  <img src="/images/icon-bookmark.svg" alt="" />
                </div>
                <span>Bookmark</span>
              </button>
            </div>
          </article>
          <article className="article-second row-2">
            <div className="content">
              <InfoItem heading="$89,914" description="of $100,000 backed" />
              <InfoItem heading="5,007" description="total backers" />
              <InfoItem heading="56" description="days left" />
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
              <MainEditionList />
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
