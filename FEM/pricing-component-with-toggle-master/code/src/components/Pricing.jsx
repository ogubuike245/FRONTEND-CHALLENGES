import Card from "./Card";

const Pricing = ({ cardData, isAnnually }) => {
  return (
    <div className="pricing-container">
      <div className="cards">
        {cardData.map((card, index) => (
          <Card key={index} card={card} isAnnually={isAnnually} />
        ))}
      </div>
    </div>
  );
};

export default Pricing;
