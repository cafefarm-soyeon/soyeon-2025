import { dataProject } from "../util/dataProject";

const Project = () => {
  return(
    <>
      <section className="part project">
        <div className="project-wrap">
          <p className="title">project</p>
          <div className="project-cont flex flex-column">
            {dataProject.map((item)=>{
              return(
              <ul key={item.id}>
                <li className="fw-bold">{item.title}</li>
                <li>{item.date}</li>
                <li>{item.order}</li>
                <li>{item.work}</li>
              </ul>
              )
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Project;