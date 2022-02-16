import { useContext } from "react";
import { useEffect } from "react";
import QueueContext from "../Contexts/QueueContext";
import Characters from "./Characters";
import "../Stylesheets/QueueWindow.css";

const QueueWindow = (props) => {
  const { viewQueue, useQueue } = props;
  const { queue } = useContext(QueueContext);

  useEffect(() => {
    console.log(viewQueue);
  }, [viewQueue]);

  return (
    <div>
      <div className={"queue-bg" + (viewQueue ? " active" : "")}></div>
      <div className={"queue-window" + (viewQueue ? " active" : "")}>
        <p className="display-6 queue-header">Character Queue</p>

        {useQueue ? (
          queue.length ? (
            <Characters queue={queue} />
          ) : (
            "No Queue"
          )
        ) : (
          <p>Please enable the queue to use this window!</p>
        )}
      </div>
    </div>
  );
};

export default QueueWindow;
