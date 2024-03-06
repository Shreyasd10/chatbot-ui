import React, { useState } from "react";
import axios from "axios"; // Import Axios library

const DoctorAvailability: React.FC = () => {
  const [doctorName, setDoctorName] = useState<string>("");
  const [availability, setAvailability] = useState<string[]>([]);

  const handleAddAvailability = () => {
    const newAvailability = [...availability, ""]; // Add an empty string for a new time slot
    setAvailability(newAvailability);
  };

  const handleRemoveAvailability = (index: number) => {
    const newAvailability = [...availability];
    newAvailability.splice(index, 1); // Remove the time slot at the specified index
    setAvailability(newAvailability);
  };

  const handleTimeSlotChange = (index: number, value: string) => {
    const newAvailability = [...availability];
    newAvailability[index] = value; // Update the time slot at the specified index
    setAvailability(newAvailability);
  };

  const handleSetAvailability = async () => {
    try {
      const timeSlots = availability // Join the availability array into a hyphen-separated string
      const url = `http://localhost:8000/set_availability/?doctor_name=${doctorName}&time_slot=${timeSlots}`;
      
      const response = await axios.post(url);
      
      console.log(response.data);
      // Optionally, you can handle success and update UI accordingly
    } catch (error) {
      console.error("Error setting availability:", error);
      // Optionally, you can handle errors and show a message to the user
    }
  };

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">Doctor Availability Scheduling</h1>

      <div className="flex justify-center mb-8">
        <input
          type="text"
          value={doctorName}
          onChange={(e) => setDoctorName(e.target.value)}
          placeholder="Enter doctor's name"
          className="input w-64 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
        />
      </div>

      <div className="flex justify-center mb-8">
        <button onClick={handleAddAvailability} className="btn px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600">
          Add Availability
        </button>
      </div>

      <div className="flex flex-col items-center space-y-4">
        {availability.map((timeSlot, index) => (
          <div key={index} className="flex items-center">
            <input
              type="text"
              value={timeSlot}
              onChange={(e) => handleTimeSlotChange(index, e.target.value)}
              className="input mr-4 w-64 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
              placeholder="Enter time slot"
            />
            <button onClick={() => handleRemoveAvailability(index)} className="btn bg-red-500 hover:bg-red-600 text-white rounded-full focus:outline-none focus:ring-2 focus:ring-red-600">
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <button onClick={handleSetAvailability} className="btn px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-full focus:outline-none focus:ring-2 focus:ring-green-600">
          Set Availability
        </button>
      </div>
    </div>
  );
};

export default DoctorAvailability;
