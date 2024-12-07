import { dataProject } from "../util/dataProject";

const Project = () => {
  return(
    <>
      <section className="part project">
        <p className="title">project</p>
        <div className="flex flex-column project-wrap">
          {dataProject.map((item)=>{
            return(
            <ul className="flex" key={item.id}>
              <li>{item.title}</li>
              <li>{item.date}</li>
              <li>{item.order}</li>
              <li>{item.work}</li>
            </ul>
            )
          })}
        </div>
      </section>
    </>
  );
}

export default Project;