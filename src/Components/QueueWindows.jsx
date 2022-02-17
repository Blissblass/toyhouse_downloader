import { useContext } from "react";
import QueueContext from "../Contexts/QueueContext";
import QueueDownload from "./QueueDownload";
import Characters from "./Characters";
import "../Stylesheets/QueueWindow.css";

const QueueWindow = (props) => {
  const { viewQueue, useQueue } = props;
  const { queue } = useContext(QueueContext);

  return (
    <div>
      <div className={"queue-bg" + (viewQueue ? " active" : "")}></div>
      <div className={"queue-window" + (viewQueue ? " active" : "")}>
        <p className="display-6 queue-header">Character Queue</p>

        {useQueue ? (
          queue.length ? (
            <Characters queue={queue} />
          ) : (
            "No characters in queue!"
          )
        ) : (
          <p>Please enable the queue to use this window!</p>
        )}

        <QueueDownload />
      </div>
    </div>
  );
};

export default QueueWindow;
