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
                <li className="project-name">{item.title}</li>
                <li className="date">진행기간: {item.date}</li>
                <li className="order">고객사: {item.order}</li>
                <li className="work">담당업무: {item.work}</li>
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