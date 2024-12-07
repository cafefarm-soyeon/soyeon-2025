const HistoryContent = ( { company, position, service, team, work, set }) => {
  return(
    <>
      <div className="history-cont">
        <h2 className="fs-18 fw-bold pt_10">{company}</h2>
        <ul className="flex flex-column">
          <li>{position}</li>
          <li>{service.date} | {service.sum}</li>
          <li></li>
          <li>{team}</li>
          <li>{work}</li>
          <li>{set.map((item)=> <p className="fs-14" key={item}>{item}</p>)}</li>
        </ul>
      </div>
    </>
  );
}

export default HistoryContent;