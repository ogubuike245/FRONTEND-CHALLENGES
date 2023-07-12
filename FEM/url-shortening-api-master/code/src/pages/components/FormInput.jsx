import React, { useState } from "react";

const FormInput = () => {
  const [inputValue, setInputValue] = useState("");
  const [shortenedLinks, setShortenedLinks] = useState([]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (inputValue.trim() === "") {
      // Show error message if the input field is empty
      alert("Please enter a valid URL");
      return;
    }

    try {
      const response = await fetch(
        `https://api.shrtco.de/v2/shorten?url=${inputValue}`
      );
      const data = await response.json();

      if (response.ok) {
        const shortenedLink = {
          originalLink: inputValue,
          shortenedLink: data.result.short_link,
        };

        setShortenedLinks((prevLinks) => [...prevLinks, shortenedLink]);
        setInputValue("");
      } else {
        alert(data.error);
      }
    } catch (error) {
      alert("An error occurred. Please try again later.");
    }
  };

  const copyToClipboard = (link) => {
    navigator.clipboard.writeText(link);
    alert("Link copied to clipboard!");
  };

  return (
    <div className="form-input">
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Shorten a link here..."
          value={inputValue}
          onChange={handleInputChange}
        />
        <button type="submit">Shorten It!</button>
      </form>

      {shortenedLinks.map((link) => (
        <div key={link.shortenedLink} className="shortened-link">
          <p>{link.originalLink}</p>
          <div>
            <a
              href={link.shortenedLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.shortenedLink}
            </a>
            <button onClick={() => copyToClipboard(link.shortenedLink)}>
              Copy
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FormInput;
