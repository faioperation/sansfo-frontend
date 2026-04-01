import React, { useEffect, useState } from "react";
import axios from "axios";
import AppointmentModal from "../../components/AppointmentModal";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Appointment = () => {
  const [slots, setSlots] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date(2024, 8, 13)); // Defaulting roughly to Figma's Sep 13, 2024 for display accuracy
  const [selectedTime, setSelectedTime] = useState("09:30 AM"); // Example selection to match Figma
  const [showModal, setShowModal] = useState(false);

  // Fetch slots
  useEffect(() => {
    axios.get("/slots.json").then((res) => {
      setSlots(res.data);
    }).catch(err => {
      console.error("Error fetching slots:", err);
    });
  }, []);

  // Calendar logic
  const currentMonth = selectedDate.getMonth();
  const currentYear = selectedDate.getFullYear();

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  
  // Adjusted for Monday start
  const startDay = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;

  const handleDayClick = (day) => {
    setSelectedDate(new Date(currentYear, currentMonth, day));
  };

  const handlePrevMonth = () => {
    setSelectedDate(new Date(currentYear, currentMonth - 1, 1));
  };

  const handleNextMonth = () => {
    setSelectedDate(new Date(currentYear, currentMonth + 1, 1));
  };

  const handleNext = () => {
    if (!selectedTime) return;
    setShowModal(true);
  };

  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const dayNames = ["MO", "TU", "WE", "TH", "FR", "SA", "SU"];

  return (
    <div className="min-h-full bg-[#f6f8f9] flex flex-col items-center justify-center pt-20 px-4 font-sans relative">

      {!showModal && (
        <div className="w-full max-w-lg lg:max-w-3xl">

        {/* HEADER */}
        <div className="mb-10">
          <h1 className="text-[32px] font-extrabold text-[#2F3337] mb-3">
            Select a time
          </h1>
          <p className="text-[#737F90] text-[15px] font-medium leading-relaxed">
            Choose your preferred date and available slot for your<br/>next consultation.
          </p>
        </div>

        {/* CALENDAR */}
        <div className="bg-white rounded-[24px] p-7 shadow-[0_2px_16px_-4px_rgba(0,0,0,0.04)] mb-6">
          <div className="flex justify-between items-center mb-6 px-1">
            <h3 className="text-[17px] font-extrabold text-[#2F3337]">
              {monthNames[currentMonth]} {currentYear}
            </h3>
            <div className="flex items-center gap-2">
              <button onClick={handlePrevMonth} className="w-8 h-8 flex items-center justify-center rounded-full bg-[#F3F4F6] text-[#737F90] hover:bg-gray-200 transition">
                <ChevronLeft size={16} strokeWidth={2.5} />
              </button>
              <button onClick={handleNextMonth} className="w-8 h-8 flex items-center justify-center rounded-full bg-[#F3F4F6] text-[#737F90] hover:bg-gray-200 transition">
                <ChevronRight size={16} strokeWidth={2.5} />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-7 gap-y-4 gap-x-1 text-center mb-2">
            {/* Days of week */}
            {dayNames.map(d => (
              <div key={d} className="text-[10px] font-bold text-[#A0AAB5] tracking-widest uppercase mb-2">
                {d}
              </div>
            ))}

            {/* Empty slots for previous month */}
            {[...Array(startDay)].map((_, i) => {
              const prevMonthDays = new Date(currentYear, currentMonth, 0).getDate();
              return (
                <div key={`prev-${i}`} className="text-[14px] font-bold text-[#D1D5DB] py-2 flex items-center justify-center">
                  {prevMonthDays - startDay + i + 1}
                </div>
              );
            })}

            {/* Current month days */}
            {[...Array(daysInMonth)].map((_, i) => {
              const day = i + 1;
              const isSelected = day === selectedDate.getDate();

              return (
                <div key={day} className="flex items-center justify-center">
                  <button
                    onClick={() => handleDayClick(day)}
                    className={`w-[36px] h-[36px] flex items-center justify-center text-[14px] font-bold rounded-full transition-all ${
                      isSelected
                        ? "bg-[#4DA7B0] text-white shadow-md shadow-[#4DA7B0]/30"
                        : "text-[#2F3337] hover:bg-gray-100"
                    }`}
                  >
                    {day}
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* LEGEND */}
        <div className="flex items-center gap-6 px-2 mb-10">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E5E7EB]"></span>
            <span className="text-[13px] font-semibold text-[#737F90]">Available</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#F5DF81]"></span>
            <span className="text-[13px] font-semibold text-[#737F90]">Booked</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#4DA7B0]"></span>
            <span className="text-[13px] font-semibold text-[#737F90]">Selected</span>
          </div>
        </div>

        {/* SLOTS */}
        <div>
          <div className="flex items-center justify-between mb-5 px-1">
            <h4 className="text-[16px] font-bold text-[#2F3337]">
              Available Slots
            </h4>
            <div className="bg-[#E5E7EB] text-[#737F90] border border-[#d3d8df] text-[10px] font-bold tracking-widest px-3 py-1.5 rounded-full uppercase">
              {selectedDate.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {slots.map((slot) => {
              const isSelected = selectedTime === slot.time;
              return (
                <button
                  key={slot.id}
                  onClick={() => setSelectedTime(slot.time)}
                  className={`rounded-2xl p-4 text-left transition-all ${
                    isSelected
                      ? "bg-[#4DA7B0] text-white shadow-md"
                      : "bg-white text-[#2F3337] hover:shadow-md border border-transparent hover:border-gray-100 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.03)]"
                  }`}
                >
                  <p className={`text-[12px] font-semibold mb-1 ${isSelected ? 'text-white/80' : 'text-[#737F90]'}`}>{slot.period}</p>
                  <p className={`text-[16px] font-bold`}>{slot.time}</p>
                </button>
              );
            })}
          </div>
        </div>

        {/* FOOTER */}
        <div className="flex justify-between items-center mt-12 mb-10 px-1">
          <div>
            <p className="text-[10px] font-bold text-[#A0AAB5] tracking-widest uppercase mb-1">
              Selected Slot
            </p>
            <p className="text-[14px] font-extrabold text-[#3BA58B]">
               {selectedDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} • {selectedTime || "None"}
            </p>
          </div>

          <button
            onClick={handleNext}
            className="bg-[#4DA7B0] text-white px-8 py-3.5 rounded-full text-[15px] font-bold hover:bg-[#43969F] transition-all shadow-md shadow-[#4DA7B0]/20 flex items-center justify-center gap-2"
          >
            Next <span className="text-[17px] font-light leading-none">→</span>
          </button>
        </div>
      </div>
      )}

      {/* CONFIRMATION VIEW (MODAL) */}
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