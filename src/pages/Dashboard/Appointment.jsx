import React, { useEffect, useState } from "react";
import axios from "axios";
import AppointmentModal from "../../components/AppointmentModal";
;

const Appointment = () => {
  const [slots, setSlots] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Fetch slots
  useEffect(() => {
    axios.get("/slots.json").then((res) => {
      setSlots(res.data);
    });
  }, []);

  // Calendar logic
  const currentMonth = selectedDate.getMonth();
  const currentYear = selectedDate.getFullYear();

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  const handleDayClick = (day) => {
    setSelectedDate(new Date(currentYear, currentMonth, day));
  };

  const handleNext = () => {
    if (!selectedTime) return;
    setShowModal(true);
  };

  return (
    <div className="min-h-full bg-[#f6f8f9] flex flex-col items-center pt-16 px-4">

      <div className="w-full max-w-xl lg:max-w-2xl">

        {/* HEADER */}
        <div className="mb-8">
          <h1 className="text-[28px] font-extrabold text-[#2F3337]">
            Select a time
          </h1>
          <p className="text-[#64748B] text-[14px] mt-1">
            Choose your preferred date and available slot for your next consultation.
          </p>
        </div>

        {/* CALENDAR */}
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-[14px] font-semibold text-[#2F3337]">
              {selectedDate.toLocaleString("default", { month: "long" })} {currentYear}
            </h3>
          </div>

          <div className="grid grid-cols-7 gap-2 text-center">
            {[...Array(daysInMonth)].map((_, i) => {
              const day = i + 1;
              const isSelected = day === selectedDate.getDate();

              return (
                <button
                  key={day}
                  onClick={() => handleDayClick(day)}
                  className={`text-sm py-2 rounded-full transition ${
                    isSelected
                      ? "bg-[#4DA7B0] text-white"
                      : "text-[#64748B] hover:bg-gray-100"
                  }`}
                >
                  {day}
                </button>
              );
            })}
          </div>
        </div>

        {/* SLOTS */}
        <div className="mt-6">
          <h4 className="text-[14px] font-semibold text-[#2F3337] mb-3">
            Available Slots
          </h4>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {slots.map((slot) => (
              <button
                key={slot.id}
                disabled={slot.status === "booked"}
                onClick={() => setSelectedTime(slot.time)}
                className={`rounded-xl p-4 text-left transition ${
                  slot.status === "booked"
                    ? "bg-[#EAD7A4] text-gray-500 cursor-not-allowed"
                    : selectedTime === slot.time
                    ? "bg-[#4DA7B0] text-white"
                    : "bg-white shadow-sm hover:shadow-md"
                }`}
              >
                <p className="text-xs opacity-70">{slot.period}</p>
                <p className="text-sm font-semibold">{slot.time}</p>
              </button>
            ))}
          </div>
        </div>

        {/* FOOTER */}
        <div className="flex justify-between items-center mt-10">
          <p className="text-[13px] text-[#3BA58B] font-semibold">
            {selectedDate.toDateString()} {selectedTime && `- ${selectedTime}`}
          </p>

          <button
            onClick={handleNext}
            className="bg-[#4DA7B0] text-white px-6 py-2.5 rounded-full text-sm font-semibold shadow-sm hover:bg-[#43969F] transition"
          >
            Next →
          </button>
        </div>
      </div>

      {/* MODAL */}
      <AppointmentModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        selectedDate={selectedDate}
        selectedTime={selectedTime}
      />
    </div>
  );
};

export default Appointment;