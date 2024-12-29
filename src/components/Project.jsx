import { dataProject } from "../util/dataProject";

const Project = ({mouseClassOn, mouseClassOff}) => {
  return(
    <>
      <section className="part project">
        <div>
          <p className="title">project</p>
          <div className="project-wrap flex flex-wrap">
            {dataProject.map((item)=>{
              return(
              <ul 
                className="project-cont" 
                key={item.id} 
                onMouseEnter={mouseClassOn}
                onMouseLeave={mouseClassOff}
              >
                <li className="s-title">{item.title}</li>
                <li className="date">{item.date}</li>
                <li className="order">{item.order}</li>
                <li className="work">{item.work}</li>
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