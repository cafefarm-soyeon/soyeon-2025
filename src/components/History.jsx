import { dataHistory } from "../util/dataHistory";
import HistoryContent from "./HistoryContent";

const History = () => {
  return(
    <>
      <section className="part history">
        <p className="title">history</p>
        <div className="flex history-wrap">
          {dataHistory.map((item) => {
            return <HistoryContent key={item.id} {...item} />
          })}
        </div>
      </section>
    </>
  );
}

export default History;