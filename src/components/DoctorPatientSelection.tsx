import { useNavigate } from "react-router-dom";

function DoctorPatientSelection() {
  const navigate = useNavigate();

  const handleRoleSelection = (selectedRole: string) => {
    if (selectedRole === "patient") {
      navigate("/patient");
    } else if (selectedRole === "doctor") {
      navigate("/doctor");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <div className="bg-blue-500 w-full h-24 flex justify-center items-center">
        <h1 className="text-4xl font-bold text-white">Welcome to Our Health Care Platform</h1>
      </div>

      {/* Main Content */}
      <div className="flex justify-center items-center flex-grow">
        {/* Role Selection Cards */}
        <div className="flex justify-center mt-8">
          {/* Patient Card */}
          <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden mx-4 mb-8 w-72 transition duration-300 ease-in-out transform hover:scale-105" onClick={() => handleRoleSelection("patient")}>
            <div className="flex flex-col h-full justify-between">
              <div className="px-6 py-8">
                <div className="font-bold text-xl mb-4">I'm a Patient</div>
                <div className="h-24 overflow-y-auto">
                  <p className="text-gray-700 text-base">Book an Appointment by talking with our receptionist.</p>
                </div>
              </div>
              <div className="flex justify-center pb-4">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline" onClick={() => handleRoleSelection("patient")}>Select</button>
              </div>
            </div>
          </div>

          {/* Doctor Card */}
          <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden mx-4 mb-8 w-72 transition duration-300 ease-in-out transform hover:scale-105" onClick={() => handleRoleSelection("doctor")}>
            <div className="flex flex-col h-full justify-between">
              <div className="px-6 py-8">
                <div className="font-bold text-xl mb-4">I'm a Doctor</div>
                <div className="h-24 overflow-y-auto">
                  <p className="text-gray-700 text-base">Set your availability by adding time slots.</p>
                </div>
              </div>
              <div className="flex justify-center pb-4">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline" onClick={() => handleRoleSelection("doctor")}>Select</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoctorPatientSelection;
