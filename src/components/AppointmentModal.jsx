import React from "react";
import { CheckCircle } from "lucide-react";

const AppointmentModal = ({ isOpen, onClose, selectedDate, selectedTime }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm">
      
      <div className="bg-white rounded-2xl p-8 w-[400px] text-center shadow-lg animate-[fadeIn_.2s_ease-in-out]">

        {/* ICON */}
        <div className="flex justify-center mb-4">
          <div className="bg-[#4DA7B0] p-3 rounded-full text-white">
            <CheckCircle size={24} />
          </div>
        </div>

        {/* TITLE */}
        <h3 className="text-lg font-bold text-[#2F3337]">
          Appointment Confirmed
        </h3>

        <p className="text-sm text-gray-500 mb-6">
          Your session has been successfully booked.
        </p>

        {/* DETAILS */}
        <div className="bg-[#F1F3F5] rounded-xl p-4 text-left space-y-2">
          <p className="text-sm">
            <strong>Time:</strong> {selectedTime}
          </p>

          <p className="text-sm">
            <strong>Date:</strong>{" "}
            {selectedDate?.toDateString()}
          </p>

          <p className="text-sm">
            <strong>Doctor:</strong> Dr. Sarah Jenkins
          </p>
        </div>

        {/* CLOSE */}
        <button
          onClick={onClose}
          className="mt-6 text-[#3BA58B] font-semibold hover:underline"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default AppointmentModal;