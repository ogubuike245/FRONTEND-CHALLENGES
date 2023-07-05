const InfoItem = ({ heading, description }) => {
  return (
    <div className="item">
      <h1>{heading}</h1>
      <span>{description}</span>
    </div>
  );
};

export default InfoItem;
