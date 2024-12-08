import { dataSkills } from "../util/dataSkills"

const Skills = () => {
  return(
    <>
    <section className="part skills">
      <p className="title">skills</p>
      <div className="skills-wrap flex flex-column gap-20">
        { dataSkills.map((item) => {
          return(
            <ul key={item.id} className="flex gap-20">
              <li className="fs-26">{item.group}</li>
              <li className="flex gap-15">
                {item.list.map((lists)=> {
                  return(
                    <span key={lists}>{lists}</span>
                  )
                })}
              </li>
            </ul>
          )
        })}
      </div>
      </section>
    </>
  );
}

export default Skills;