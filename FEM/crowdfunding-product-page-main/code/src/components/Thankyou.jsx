const Thankyou = ({ handleCloseModal }) => {
  return (
    <div className="thankyou">
      <div>
        <img src="../../public/images/icon-check.svg" alt="" />
      </div>
      <h1>Thanks for your support!</h1>
      <p>
        Your pledge brings us one step closer to sharing Mastercraft Bamboo
        Monitor Riser worldwide. You will get an email once our campaign is
        completed.
      </p>

      <button onClick={handleCloseModal}>Got it!</button>
    </div>
  );
};

export default Thankyou;
