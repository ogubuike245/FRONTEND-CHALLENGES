import Item from "./Item.jsx";

const JobComponent = ({
  logo,
  company,
  featured,
  newJob,
  position,
  location,
  postedAt,
  contract,
  role,
  level,
  languages,
  tools,
}) => {
  return (
    <>
      <article class="job">
        <div class="job-info">
          <div class="image">
            <img src={logo} alt={company} />
          </div>
          <div class="details">
            <div class="row-one">
              <p>{company}</p>
              <a href="#" class={newJob ? "new" : ""}>
                {newJob ? "new!" : ""}
              </a>
              <a href="#" class={featured ? "featured" : ""}>
                {featured ? "Featured" : ""}
              </a>
            </div>
            <div class="row-two">
              <p class="position">{position}</p>
            </div>
            <div class="row-three">
              <p>{postedAt}</p>
              <div class="dot"></div>
              <p>{contract}</p>
              <div class="dot"></div>
              <p>{location}</p>
            </div>
          </div>
        </div>

        <div class="items">
          <Item title={role} />

          <Item title={level} />
          {languages.map((language) => {
            return <Item title={language} />;
          })}
          {tools.map((tool) => {
            return <Item title={tool} />;
          })}
        </div>
      </article>
    </>
  );
};

export default JobComponent;
