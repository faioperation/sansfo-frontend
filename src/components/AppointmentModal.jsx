import React from "react";
import { Check, Clock, CalendarDays, CheckCircle2, User } from "lucide-react";

const AppointmentModal = ({ isOpen, onClose, selectedDate, selectedTime }) => {
  if (!isOpen) return null;

  return (
    <div className="w-full flex flex-col items-center justify-center animate-[fadeIn_.3s_ease-out]">
      
      <div className="w-full max-w-xl text-center flex flex-col items-center relative">

        {/* CLOSE BUTTON */}
        <button 
          onClick={onClose} 
          className="absolute -top-12 -right-2 text-[#A0AAB5] hover:text-[#2F3337] transition-colors rounded-full p-2 hover:bg-black/5 z-50"
          aria-label="Back"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        {/* TOP ICON: Teal circle, white sub-circle, teal check */}
        <div className="relative mb-6">
          <div className="absolute inset-0 bg-[#4DA7B0] blur-[16px] opacity-30 rounded-full w-[72px] h-[72px] scale-110"></div>
          <div className="relative w-[72px] h-[72px] bg-[#4DA7B0] rounded-full flex items-center justify-center shadow-lg shadow-[#4DA7B0]/20 z-10 pb-0.5 pr-0.5">
            <div className="w-[36px] h-[36px] bg-white rounded-full flex items-center justify-center">
              <Check size={22} className="text-[#4DA7B0]" strokeWidth={3.5} />
            </div>
          </div>
        </div>

        {/* TITLE AND SUBTITLE */}
        <h2 className="text-[28px] font-extrabold text-[#2F3337] mb-2 tracking-tight">
          Appointment Confirmed
        </h2>
        <p className="text-[15px] font-semibold text-[#8B98A5] mb-8">
          Your session has been successfully booked.
        </p>

        {/* WHITE CARD FOR DETAILS */}
        <div className="bg-white rounded-[32px] p-8 w-full shadow-[0_4px_30px_-10px_rgba(0,0,0,0.05)] mb-10">
          
          <div className="flex flex-col sm:flex-row gap-4 mb-4">
            {/* TIME BLOCK */}
            <div className="flex-1 bg-[#F4F6F8] rounded-[24px] p-5 flex items-start gap-4 text-left">
              <div className="w-9 h-9 rounded-full bg-[#E5F3F0] text-[#3BA58B] flex items-center justify-center flex-shrink-0 mt-0.5">
                <Clock size={16} strokeWidth={2.5} />
              </div>
              <div>
                <p className="text-[10px] font-bold text-[#A0AAB5] tracking-widest uppercase mb-1.5">Time</p>
                <p className="text-[15px] font-bold text-[#2F3337] leading-tight flex flex-col">
                  <span>{selectedTime?.split(' ')[0]} {selectedTime?.split(' ')[1]} —</span>
                  <span>11:30 AM</span> {/* Hardcoded end time to match figma visually */}
                </p>
              </div>
            </div>

            {/* DATE BLOCK */}
            <div className="flex-1 bg-[#F4F6F8] rounded-[24px] p-5 flex items-start gap-4 text-left">
              <div className="w-9 h-9 rounded-full bg-[#E5F3F0] text-[#3BA58B] flex items-center justify-center flex-shrink-0 mt-0.5">
                <CalendarDays size={18} strokeWidth={2.5} />
              </div>
              <div>
                <p className="text-[10px] font-bold text-[#A0AAB5] tracking-widest uppercase mb-1.5">Date</p>
                <p className="text-[15px] font-bold text-[#2F3337] leading-tight flex flex-col">
                  <span>{selectedDate?.toLocaleDateString('en-US', { weekday: 'long' })},</span>
                  <span>{selectedDate?.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                </p>
              </div>
            </div>
          </div>

          {/* PROFESSIONAL BLOCK */}
          <div className="bg-[#F4F6F8] rounded-[24px] p-5 flex items-center justify-between text-left">
            <div className="flex items-center gap-4">
              <div className="w-[42px] h-[42px] rounded-full bg-[#9AB1B3] relative overflow-hidden flex-shrink-0">
                 {/* Head */}
                 <div className="absolute top-[9px] left-1/2 -translate-x-1/2 w-[11px] h-[11px] rounded-full bg-[#758E91]"></div>
                 {/* Shoulders */}
                 <div className="absolute -bottom-[8px] left-1/2 -translate-x-1/2 w-[26px] h-[26px] rounded-full bg-[#758E91]"></div>
              </div>
              <div>
                <p className="text-[10px] font-bold text-[#A0AAB5] tracking-widest uppercase mb-1">Professional</p>
                <p className="text-[16px] font-bold text-[#2F3337] flex items-center gap-2">
                  Dr. Sarah Jenkins <span className="w-1.5 h-1.5 rounded-full bg-[#34D399]"></span>
                </p>
              </div>
            </div>
            
            <CheckCircle2 size={24} className="fill-[#3BA58B] text-white flex-shrink-0" />
            
          </div>

        </div>

        {/* BOTTOM TEXT */}
        <p className="text-[12px] font-semibold text-[#A0AAB5] leading-relaxed max-w-lg mb-8">
          A confirmation email and WhatsApp message have been sent to your registered
          contact. You can reschedule up to 24 hours before the appointment.
        </p>

      </div>
    </div>
  );
};

export default AppointmentModal;