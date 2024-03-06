import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

type Props = {
  setMessages: any;
};

function Title({ setMessages }: Props) {
  const [isResetting, setIsResetting] = useState(false);
  const navigate = useNavigate();

  // Reset conversation
  const resetConversation = async () => {
    setIsResetting(true);

    try {
      const res = await axios.get("http://localhost:8000/reset", {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.status === 200) {
        setMessages([]);
      }
    } catch (err) {
      console.error("Error resetting conversation:", err);
    }

    setIsResetting(false);
  };

  // Navigate to the home page
  const goHome = () => {
    navigate("/");
  };

  return (
    <div className="flex justify-between items-center w-full p-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-bold shadow-md">
      <div className="text-2xl font-bold">Book An Appointment</div>
      <div>
        <button
          onClick={goHome}
          className="transition-all duration-300 bg-white text-blue-500 hover:bg-blue-300 hover:text-white px-4 py-2 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 mr-4"
        >
          Back
        </button>
        <button
          onClick={resetConversation}
          className={
            "transition-all duration-300 bg-white text-blue-500 hover:bg-blue-300 hover:text-white px-4 py-2 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          }
          disabled={isResetting} // Disable the button while resetting
          aria-label="Reset Conversation"
        >
          Reset Conversation
        </button>
      </div>
    </div>
  );
}

export default Title;
