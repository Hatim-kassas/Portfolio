import { useState } from "react";
import "./main.css";
import projectsData from "../../assets/json/AllProjects.json";

export default function Main() {
  const [activeBtn, setActiveBtn] = useState("All");
  const [arr, setArr] = useState(projectsData);

  const handleFilter = (event) => {
    setActiveBtn(event);
    if(event === "All"){
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
      <section className="flex  left-section">
        <button
          onClick={() => {
            handleFilter("All");
          }}
          className={activeBtn === "All" ? "active" : null}
        >
          all projects
        </button>
        <button
          onClick={() => {
            handleFilter("Figma");
          }}
          className={activeBtn === "Figma" ? "active" : null}
        >
          Figma Design
        </button>
        <button
          onClick={() => {
            handleFilter("Flutter");
          }}
          className={activeBtn === "Flutter" ? "active" : null}
        >
          Flutter
        </button>
        <button
          onClick={() => {
            handleFilter("React");
          }}
          className={activeBtn === "React" ? "active" : null}
        >
          React & MUI
        </button>
        <button
          onClick={() => {
            handleFilter("PHP");
          }}
          className={activeBtn === "PHP" ? "active" : null}
        >
          PHP & Laravel
        </button>
      </section>

      <section className=" flex right-section">
        {arr.map((index) => {
          return (
            <article key={index.key} className="card">
              <img className="imgSize" src={index.imgPath} alt="" />

              <div style={{ width: "290px" }} className="box">
                <h1 className="title">{index.title}</h1>
                <p className="sub-title">{index.subTitle}</p>

                <div className="flex icons">
                  <div style={{ gap: "11px" }} className="flex">
                    {index.link ? (
                        <a
                          href={index.link}
                          className="icon-link"
                          target="_blank"
                        ></a>
                      ) : (
                        null
                      )
                    }

                    {index.github ? (
                      <a
                      href={index.github}
                      className="icon-github"
                      target="_blank"
                    ></a>
                    ) : (
                      null
                    )
                      
                    }
                  </div>

                  <a className="link flex" href="">
                    more
                    <span
                      style={{ alignSelf: "end" }}
                      className="icon-arrow-right"
                    ></span>
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </main>
  );
}
