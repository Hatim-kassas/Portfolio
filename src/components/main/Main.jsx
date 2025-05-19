import { useState } from "react";
import "./main.css";
import projectsData from "../../data/AllProjects.json";


export default function Main() {
  const [activeBtn, setActiveBtn] = useState("All Projects");
  const [arr, setArr] = useState(projectsData);
  const [showMore, setShowMore] = useState(false);

  // Categories for the buttons - extract unique categories from data
  const categories = ["All Projects", ...new Set(projectsData.map(project => project.category))];
  
  // Display limited categories initially, show all when "More" is clicked
  const displayCategories = showMore ? categories : categories.slice(0, 5);

  const handleFilter = (event) => {
    setActiveBtn(event);
    if(event === "All Projects"){
      return setArr(projectsData);
    } else {
      const newArr = projectsData.filter((i) => {
        return i.category === event
      });
      setArr(newArr);
    }
  };

  return (
    <main className="flex" id="Projects">
      <section className="flex left-section">
        {displayCategories.map((category) => (
          <button
            key={category}
            onClick={() => {
              handleFilter(category);
            }}
            className={activeBtn === category ? "active" : null}
          >
            {category === "Api" ? "REST API" : category}
          </button>
        ))}
        
        {categories.length > 5 && (
          <button
            className="more-btn"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? "Less" : "More"}
          </button>
        )}
      </section>

      <section className="flex right-section">
        {arr.map((project) => {
          return (
            <article key={project.key} className="card">
              <img className="imgSize" src={project.imgPath} alt="" />

              <div className="box">
                <h1 className="title">{project.title}</h1>
                <p className="sub-title">{project.subTitle}</p>

                <div className="flex icons">
                  <div style={{ gap: "11px" }} className="flex">
                    {project.link ? (
                        <a
                          href={project.link}
                          className="icon-link"
                          target="_blank"
                          rel="noopener noreferrer"
                        ></a>
                      ) : (
                        null
                      )
                    }

                    {project.github ? (
                      <a
                      href={project.github}
                      className="icon-github"
                      target="_blank"
                      rel="noopener noreferrer"
                    ></a>
                    ) : (
                      null
                    )
                      
                    }
                  </div>

                  {(project.link || project.github) && (
                    <a 
                      className="link flex" 
                      href={project.link || project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      more
                      <span
                        style={{ alignSelf: "end" }}
                        className="icon-arrow-right"
                      ></span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </main>
  );
}