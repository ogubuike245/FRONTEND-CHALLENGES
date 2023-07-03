const Modal = ({ dialogRef, closeDialog }) => {
  return (
    <>
      <dialog ref={dialogRef} className="dialog">
        <div onClick={closeDialog} className="close-modal">
          <img
            src="../../public/images/icon-close-modal.svg"
            alt="close modal icon"
          />
        </div>

        <div className="wrapper">
          <h1>Back this project</h1>

          <p>
            Want to support us in bringing Mastercraft Bamboo Monitor Riser out
            in the world?
          </p>

          <div className="editions">
            <article>
              <div>
                <input type="radio" name="" id="" />
              </div>
              <div>
                <h3>Pledge with no reward</h3>
                <p>
                  Choose to support us without a reward if you simply believe in
                  our project. As a backer, you will be signed up to receive
                  product updates via email.
                </p>
              </div>
            </article>
            <article>
              <div>
                <input type="radio" name="" id="" />
              </div>
              <div>
                <div className="heading">
                  <h3>Bamboo Stand</h3>
                  <a href="#"> Pledge $25 or more</a>
                  <div className="amount-left">
                    <strong>101</strong>
                    <span>left</span>
                  </div>
                </div>
                <p>
                  You get an ergonomic stand made of natural bamboo. You've
                  helped us launch our promotional campaign, and you’ll be added
                  to a special Backer member list. 101 left
                </p>
              </div>
            </article>
            <article>
              <div>
                <input type="radio" name="" id="" />
              </div>
              <div>
                <div className="heading">
                  <h3>Black Edition Stand</h3>
                  <a href="#"> Pledge $75 or more</a>
                  <div className="amount-left">
                    <strong>64</strong>
                    <span>left</span>
                  </div>
                </div>
                <p>
                  You get a Black Special Edition computer stand and a personal
                  thank you. You’ll be added to our Backer member list. Shipping
                  is included.
                </p>
              </div>
            </article>
            <article>
              <div>
                <input type="radio" name="" id="" />
              </div>
              <div>
                <div className="heading">
                  <h3>Mahogany Special Edition</h3>
                  <a href="#"> Pledge $200 or more</a>
                  <div className="amount-left">
                    <strong>0</strong>
                    <span>left</span>
                  </div>
                </div>
                <p>
                  get two Special Edition Mahogany stands, a Backer T-Shirt, and
                  a personal thank you. You’ll be added to our Backer member
                  list. Shipping is included. 0 left
                </p>
              </div>
            </article>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default Modal;
