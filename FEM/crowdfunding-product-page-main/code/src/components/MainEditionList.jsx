import Edition from "./Edition";
import editionsData from "./mainEditions.json";

const MainEditionList = () => {
  return (
    <div className="editions">
      {editionsData.map((edition, index) => (
        <Edition key={index} {...edition} />
      ))}
    </div>
  );
};

export default MainEditionList;
