import { dataHistory } from "../util/dataHistory";
import HistoryContent from "./HistoryContent";

const History = ({mouseOn, mouseOff}) => {
  return(
    <>
      <section className="part history">
        <p className="title">history</p>
        <div className="flex history-wrap">
          {dataHistory.map((item) => {
            return <HistoryContent key={item.id} {...item} mouseOn={mouseOn} mouseOff={mouseOff}   />
          })}
        </div>
      </section>
    </>
  );
}

export default History;