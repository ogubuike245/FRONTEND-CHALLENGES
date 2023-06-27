import React from "react";

const HeaderComponent = ({
  filterValue,
  handleFilterChange,
  handleKeyDown,
  tags,
  handleTagRemove,
  handleTagsRemove,
}) => {
  return (
    <header className="header container">
      <article className="header-container">
        <div className="tags">
          {tags.map((tag) => (
            <span className="tag" key={tag}>
              <strong>{tag}</strong>
              <button
                className="remove-tag"
                onClick={() => handleTagRemove(tag)}
              >
                <img src="../../public/images/icon-remove.svg" alt="" />
              </button>
            </span>
          ))}
        </div>
        <input
          type="text"
          name="filter-input"
          id="filter-input"
          value={filterValue}
          onChange={handleFilterChange}
          onKeyDown={handleKeyDown}
        />

        <a onClick={() => handleTagsRemove()}>clear</a>
      </article>
    </header>
  );
};

export default HeaderComponent;
