import { dataHistory } from "../util/dataHistory";
import HistoryContent from "./HistoryContent";

const History = ({mouseClassOn, mouseClassOff}) => {
  return(
    <>
      <section className="part history">
        <p className="title">history</p>
        <div className="flex history-wrap">
          {dataHistory.map((item) => {
            return <HistoryContent key={item.id} {...item} mouseClassOn={mouseClassOn} mouseClassOff={mouseClassOff}   />
          })}
        </div>
      </section>
    </>
  );
}

export default History;