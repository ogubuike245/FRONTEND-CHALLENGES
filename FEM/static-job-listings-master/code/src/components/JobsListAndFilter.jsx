import JobComponent from "./JobComponent.jsx";

import jobs from "../data.json";

console.log(
  jobs.map((job) => {
    return job.company;
  })
);

const JobsListAndFilter = () => {
  return (
    <>
      <header class="header container">
        <input type="text" name="filter-input" id="filter-input" />
      </header>

      <div class="job-list container">
        <h1>TEST</h1>
        {jobs.map((job) => {
          return <JobComponent {...job} key={job.id} />;
        })}
      </div>
    </>
  );
};

export default JobsListAndFilter;
