import React from "react";
import { CalendarDays, User, Phone, ShieldCheck } from "lucide-react";

const CreateAppointment = () => {
    return (
        <div className="min-h-full bg-[#f6f8f9] flex flex-col items-center pt-24 px-4 font-sans relative">
            <div className="w-full max-w-lg lg:max-w-3xl">
                {/* HEADER */}
                <div className="mb-10">
                    <h1 className="text-[32px] font-extrabold text-[#2F3337] mb-3 font-sans">
                        Almost there.
                    </h1>
                    <p className="text-[#64748B] text-[15px] leading-relaxed font-medium">
                        Please provide your contact information to finalize
                        <br />
                        the booking for your upcoming session.
                    </p>
                </div>

                {/* SERVICE CARD */}
                <div className="flex items-center gap-4 bg-[#F1F3F5] rounded-[14px] p-4 mb-8">
                    <div className="bg-[#D1EAE3] p-3 rounded-xl flex-shrink-0">
                        <CalendarDays className="text-[#3BA58B]" size={22} />
                    </div>
                    <div>
                        <p className="text-[13px] text-[#64748B] font-medium mb-0.5">Scheduled Service</p>
                        <h3 className="text-[16px] font-bold text-[#2F3337]">
                            Discovery Conversation
                        </h3>
                    </div>
                </div>

                {/* FORM */}
                <div className="space-y-6">
                    {/* FULL NAME */}
                    <div>
                        <label className="text-[11px] font-bold text-[#3BA58B] tracking-wider block mb-2">
                            FULL NAME
                        </label>
                        <div className="flex items-center bg-white rounded-xl px-4 py-3.5 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)]">
                            <User size={18} className="text-[#A0AAB5] mr-3" />
                            <input
                                type="text"
                                placeholder="e.g. Julianne Sterling"
                                className="w-full bg-transparent outline-none text-[15px] text-[#2F3337] placeholder-[#A0AAB5] font-medium"
                            />
                        </div>
                    </div>

                    {/* PHONE */}
                    <div>
                        <label className="text-[11px] font-bold text-[#3BA58B] tracking-wider block mb-2">
                            PHONE NUMBER
                        </label>
                        <div className="flex items-center bg-white rounded-xl px-4 py-3.5 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)]">
                            <Phone size={18} className="text-[#A0AAB5] mr-3" />
                            <input
                                type="text"
                                placeholder="+1 (555) 000-0000"
                                className="w-full bg-transparent outline-none text-[15px] text-[#2F3337] placeholder-[#A0AAB5] font-medium"
                            />
                        </div>
                    </div>

                    {/* INFO BOX */}
                    <div className="flex items-start gap-3 bg-[#EAF5F3] text-[#3BA58B] rounded-xl p-4">
                        <ShieldCheck size={18} className="mt-0.5 flex-shrink-0" />
                        <p className="text-[13px] leading-relaxed font-medium">
                            Your information is used only for booking confirmation and reminders. We respect
                            your privacy in this sanctuary.
                        </p>
                    </div>
                </div>

                {/* BUTTON */}
                <button className="mt-8 w-full bg-[#4DA7B0] text-white py-4 rounded-full text-[15px] font-semibold hover:bg-[#43969F] transition-colors shadow-sm">
                    Confirm Booking →
                </button>

                {/* CANCEL */}
                <div className="text-center mt-6">
                    <p className="inline-block text-[14px] font-semibold text-[#3BA58B] cursor-pointer hover:text-[#2d826d] transition-colors">
                        Cancel and return
                    </p>
                </div>
            </div>

            {/* FLOAT BUTTON */}
            <div className="fixed bottom-8 right-8">
                <div className="bg-white shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] rounded-2xl w-12 h-12 flex items-center justify-center cursor-pointer hover:shadow-lg transition-shadow">
                    <span className="text-[#3BA58B] font-bold text-lg border-2 border-[#3BA58B] rounded-full w-6 h-6 flex items-center justify-center">?</span>
                </div>
            </div>
        </div>
    );
};

export default CreateAppointment;
