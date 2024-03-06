import { ReactMediaRecorder } from "react-media-recorder";
import RecordIcon from "./RecordIcon";
import React, { useState } from "react";

type Props = {
  handleStop: any;
};

const RecordMessage: React.FC<Props> = ({ handleStop }) => {
  const [isRecording, setIsRecording] = useState(false);

  const startRecording = () => {
    setIsRecording(true);
  };

  const stopRecording = () => {
    setIsRecording(false);
  };

  return (
    <ReactMediaRecorder
      audio
      onStop={handleStop}
      render={({ status }) => (
        <div className="mt-2">
          <button
            onMouseDown={startRecording}
            onMouseUp={stopRecording}
            className="bg-white p-4 rounded-full"
            disabled={isRecording}
          >
            <RecordIcon
              classText={
                isRecording
                  ? "animate-pulse text-red-500"
                  : "text-sky-500"
              }
            />
          </button>
          <p className="mt-2 text-white font-light">{status}</p>
        </div>
      )}
    />
  );
};

export default RecordMessage;
