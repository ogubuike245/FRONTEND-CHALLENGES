import { useState } from "react";
import ModalEdition from "./ModalEdition";
import modalEditionsData from "./modalEditions.json";

const ModalEditionList = ({ handleSubmit }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemSelect = (title) => {
    setSelectedItem(title);
  };

  return (
    <div className="editions">
      {modalEditionsData.map((edition, index) => (
        <ModalEdition
          key={index}
          {...edition}
          selected={selectedItem === edition.title}
          onSelect={handleItemSelect}
          handleSubmit={handleSubmit}
        />
      ))}
    </div>
  );
};

export default ModalEditionList;
