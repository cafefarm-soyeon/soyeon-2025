const HistoryContent = ( { company, position, service, team, work, set }) => {
  return(
    <>
      <div className="history-cont">
        <h2>
          <span className="company">{company}  </span>
          | <span className="position">{position}</span>
          <p className="date">{service.date} ( {service.sum} )</p>
        </h2>
        <ul className="flex flex-column">
          <li className="team"><p className="s-title">부서</p> {team}</li>
          <li className="work"><p className="s-title">주요업무</p> {work}</li>
          <li className="use">
            <p className="s-title">작업환경</p>
            <p className="flex flex-wrap">
            {set.map((item)=> <span key={item}>{item}</span>)}
            </p>
            </li>
        </ul>
      </div>
    </>
  );
}

export default HistoryContent;