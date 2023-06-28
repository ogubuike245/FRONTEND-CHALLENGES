const Item = ({ item, timeFrame }) => {
  const backgroundImageStyle = {
    backgroundImage: `url(/images/icon-${item.icon}.svg)`,
    backgroundColor: `${item.bgColor}`,
  };

  return (
    <div className="image-bg" style={backgroundImageStyle}>
      <div className="content">
        <div className="heading">
          <h2>{item.title}</h2>

          <div>
            <img src="/images/icon-ellipsis.svg" alt="" />
          </div>
        </div>

        <div className="duration">
          <h1>{item.timeFrames[timeFrame].current}hrs</h1>
          <p>Last Week - {item.timeFrames[timeFrame].previous}hrs</p>
        </div>
      </div>
    </div>
  );
};

export default Item;
