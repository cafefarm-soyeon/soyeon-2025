import { dataSkills } from "../util/dataSkills"

const Skills = ({mouseClassOn, mouseClassOff}) => {
  return(
    <>
    <section className="part skills">
      <p className="title">skills</p>
      <div className="skills-wrap flex flex-wrap">
        { dataSkills.map((item) => {
          return(
            <ul 
              key={item.id} 
              className="skills-cont flex flex-column"
              onMouseEnter={mouseClassOn}
              onMouseLeave={mouseClassOff}>
              <li className="flex just-cont-center group">{item.group}</li>
              <li className="flex flex-column list">
                {item.list.map((lists)=> {
                  return(
                    <span className="flex just-cont-center" key={lists}>{lists}</span>
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