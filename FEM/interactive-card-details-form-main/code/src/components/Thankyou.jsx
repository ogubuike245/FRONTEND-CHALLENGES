const Thankyou = ({ setIsSubmitted }) => {
  return (
    <div className="thankyou">
      <div className="image">
        <img src="../../public/images/icon-complete.svg" alt="" />
      </div>

      <h1>Thank you!</h1>

      <span>We've added your card details</span>

      <button onClick={() => setIsSubmitted(false)}>Continue</button>
    </div>
  );
};

export default Thankyou;
