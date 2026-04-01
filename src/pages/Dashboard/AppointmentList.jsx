import React, { useEffect, useState } from "react";
import axios from "axios";
import { Eye, Pencil } from "lucide-react";

const AppointmentList = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    axios.get("/appointments.json").then((res) => {
      setAppointments(res.data);
    });
  }, []);

  const getAvatarColor = (color) => {
    switch (color) {
      case "green":
        return "bg-[#D1EAE3] text-[#3BA58B]";
      case "orange":
        return "bg-[#FCD5CE] text-[#E76F51]";
      case "dark":
        return "bg-[#3BA58B] text-white";
      default:
        return "bg-gray-200 text-gray-600";
    }
  };

  return (
    <div className="min-h-full bg-[#f6f8f9] px-4 lg:px-8 py-10 font-sans">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4 pt-4">
          <div>
            <h1 className="text-[26px] font-extrabold text-[#2F3337]">
              Appointment List
            </h1>
            <p className="text-[#737F90] text-[14px] font-medium mt-1">
              Manage your schedule for today and tomorrow.
            </p>
          </div>

          <button className="bg-[#4DA7B0] text-white px-5 py-2.5 rounded-full text-[14px] font-semibold shadow-sm hover:bg-[#43969F] transition">
            + New Appointment
          </button>
        </div>

        {/* TABLE */}
        <div className="bg-white rounded-3xl p-8 shadow-[0_2px_20px_-4px_rgba(0,0,0,0.04)]">

          {/* HEAD */}
          <div className="hidden md:grid grid-cols-[minmax(0,2fr)_minmax(0,1.5fr)_minmax(0,1.5fr)_minmax(0,1.5fr)_minmax(0,1fr)] text-[12px] font-bold text-[#A0AAB5] tracking-wider mb-4 px-2">
            <span>PATIENT NAME</span>
            <span>DATE</span>
            <span>TIME</span>
            <span>STATUS</span>
            <span>ACTIONS</span>
          </div>

          {/* ROWS */}
          <div className="flex flex-col">
            {appointments.map((item, index) => (
              <div
                key={item.id}
                className={`grid grid-cols-1 md:grid-cols-[minmax(0,2fr)_minmax(0,1.5fr)_minmax(0,1.5fr)_minmax(0,1.5fr)_minmax(0,1fr)] gap-4 md:gap-0 items-center py-5 px-2 ${index !== appointments.length - 1 ? 'border-b border-[#F1F3F5]' : ''}`}
              >

                {/* NAME */}
                <div className="flex items-center gap-4">
                  <div
                    className={`w-10 h-10 flex items-center justify-center rounded-full text-[13px] font-bold ${getAvatarColor(item.color)}`}
                  >
                    {item.initials}
                  </div>
                  <span className="text-[15px] font-bold text-[#2F3337]">
                    {item.name}
                  </span>
                </div>

                {/* DATE */}
                <span className="text-[14px] text-[#64748B] font-medium">
                  {item.date}
                </span>

                {/* TIME */}
                <div>
                  <span className="text-[12px] font-bold text-[#2F3337] bg-[#F1F3F5] px-3 py-1.5 rounded-full inline-block">
                    {item.time}
                  </span>
                </div>

                {/* STATUS */}
                <span
                  className={`text-[13px] font-bold flex items-center gap-2 ${
                    item.status === "Confirmed"
                      ? "text-[#4DA7B0]"
                      : item.status === "Pending"
                        ? "text-[#4DA7B0]" // using teal for both based on image visually unless specified. Actually confirmed goes green, pending teal? Let's use teal for confirmed as Figma shows light green dot and green text.
                        : "text-[#64748B]"
                  }`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${item.status === "Confirmed" ? "bg-[#34D399]" : "bg-[#4DA7B0]"}`}></span>
                  {item.status}
                </span>

                {/* ACTIONS */}
                <div className="flex items-center gap-4 text-[#A0AAB5]">
                  <Eye size={18} strokeWidth={2.2} className="cursor-pointer hover:text-[#2F3337] transition-colors" />
                  <Pencil size={18} strokeWidth={2.2} className="cursor-pointer hover:text-[#2F3337] transition-colors" />
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* FOOTER */}
        <div className="grid md:grid-cols-[1fr_2fr] gap-6 mt-8 mb-10">

          <div className="bg-[#EAF5F3] rounded-[24px] p-6">
            <p className="text-[11px] font-bold text-[#3BA58B] tracking-wider mb-2 mt-1">TODAY</p>
            <h3 className="text-[22px] font-bold text-[#2F3337]">
              12 Appointments
            </h3>
          </div>

          <div className="bg-[#E8EDF2] rounded-[24px] p-6 lg:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <p className="text-[16px] font-bold text-[#2F3337] mb-1">
                Need assistance with the schedule?
              </p>
              <p className="text-[14px] font-medium text-[#64748B]">
                Contact the administration desk for overrides.
              </p>
            </div>

            <button className="text-[#3BA58B] font-bold text-[14px] hover:text-[#2d826d] transition-colors whitespace-nowrap">
              Contact Admin
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AppointmentList;