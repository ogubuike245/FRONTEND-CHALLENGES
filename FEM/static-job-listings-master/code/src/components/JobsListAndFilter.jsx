import React, { useState } from "react";
import JobComponent from "./JobComponent.jsx";
import data from "../data.json";
import HeaderComponent from "./HeaderComponent.jsx";

const JobsListAndFilter = () => {
  const [filterValue, setFilterValue] = useState("");
  const [tags, setTags] = useState([]);

  const handleFilterChange = (event) => {
    setFilterValue(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === " " && filterValue.trim() !== "") {
      event.preventDefault();
      setTags([...tags, filterValue.trim()]);
      setFilterValue("");
    }
  };

  const handleTagRemove = (tag) => {
    setTags(tags.filter((t) => t !== tag));
  };
  const handleTagsRemove = (tag) => {
    setTags([]);
  };

  const filterJobs = (jobs, tags) => {
    if (tags.length > 0) {
      return jobs.filter((job) => {
        const { role, level, languages, tools } = job;
        return tags.every(
          (tag) =>
            role.toLowerCase().includes(tag.toLowerCase()) ||
            level.toLowerCase().includes(tag.toLowerCase()) ||
            languages.some((language) =>
              language.toLowerCase().includes(tag.toLowerCase())
            ) ||
            tools.some((tool) => tool.toLowerCase().includes(tag.toLowerCase()))
        );
      });
    }
    return jobs;
  };

  const filteredJobs = filterJobs(data, tags);

  return (
    <>
      <HeaderComponent
        filterValue={filterValue}
        handleFilterChange={handleFilterChange}
        handleKeyDown={handleKeyDown}
        tags={tags}
        handleTagRemove={handleTagRemove}
        handleTagsRemove={handleTagsRemove}
      />

      <div className="job-list container">
        {filteredJobs.map((job) => (
          <JobComponent {...job} key={job.id} />
        ))}
      </div>
    </>
  );
};

export default JobsListAndFilter;
