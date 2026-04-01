import React, { useState } from "react";
import { Outlet, NavLink } from "react-router";
import {
  Home,
  Calendar,
  ClipboardList,
  Menu,
  MessageSquareText,
  X,
  PlusSquare,
} from "lucide-react";

const navLinks = [
  { to: "/", icon: MessageSquareText, label: "Chat" },
  { to: "/appointment", icon: Calendar, label: "Appointments" },
  { to: "/create-appointment", icon: PlusSquare, label: "Create Appointments" },
  { to: "/appointment-list", icon: ClipboardList, label: "Appointments List" },
];

const Root = () => {
  const [sidebarExpanded, setSidebarExpanded] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-[#f6f8f9]">

      {/* ============ DESKTOP SIDEBAR ============ */}
      <aside
        className={`
          hidden lg:flex flex-col justify-between flex-shrink-0
          bg-[#F7F5F3] border-r border-gray-100
          transition-all duration-300 ease-in-out
          ${sidebarExpanded ? "w-[240px]" : "w-20"}
        `}
      >
        <div className="flex-1 overflow-y-auto">
          {/* Nav items */}
          <nav className="flex flex-col gap-1 p-3 pt-12 mt-2">
            {/* eslint-disable-next-line no-unused-vars */}
            {navLinks.map(({ to, icon: Icon, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === "/"}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-3 rounded-xl text-[14px] font-medium transition-all duration-150
                  ${isActive
                    ? "text-[#4DA7B0]"
                    : "text-[#737A86] hover:bg-white hover:text-[#2F3337] hover:shadow-[0_2px_8px_-4px_rgba(0,0,0,0.05)]"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <Icon size={20} className="flex-shrink-0" strokeWidth={isActive ? 2.2 : 1.8} />
                    {sidebarExpanded && (
                      <span className="whitespace-nowrap overflow-hidden">{label}</span>
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Desktop Profile Section */}
        <div className={`bg-[#4DA7B0] text-white flex items-center gap-3 transition-all duration-300 ease-in-out ${sidebarExpanded ? "p-4" : "p-3 justify-center"} overflow-hidden`}>
          <div className="w-10 h-10 rounded-full bg-[#1AA9B8]/40 flex items-center justify-center font-bold flex-shrink-0 border border-white/20">
            DA
          </div>
          {sidebarExpanded && (
            <div className="min-w-0">
              <h4 className="text-[14px] font-semibold truncate leading-tight">Dr. Admin</h4>
              <p className="text-[12px] text-white/80 truncate">admin@medai.com</p>
            </div>
          )}
        </div>
      </aside>

      {/* ============ MOBILE OVERLAY SIDEBAR ============ */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-30 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}
      <aside
        className={`
          fixed top-0 left-0 h-full w-[260px] bg-[#f6f8f9] z-40 flex flex-col justify-between
          border-r border-gray-100 shadow-2xl
          transition-transform duration-300 ease-in-out
          lg:hidden
          ${mobileOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="flex-1 overflow-y-auto">
          <div className="flex items-center justify-end h-14 px-4 border-b border-gray-200 bg-white">
            <button
              onClick={() => setMobileOpen(false)}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X size={20} />
            </button>
          </div>
          <nav className="flex flex-col gap-1 p-3 pt-6">
            {/* eslint-disable-next-line no-unused-vars */}
            {navLinks.map(({ to, icon: Icon, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === "/"}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-3 rounded-xl text-[15px] font-medium transition-all duration-150
                  ${isActive
                    ? "text-[#4DA7B0]"
                    : "text-[#737A86] hover:bg-white hover:text-[#2F3337] hover:shadow-[0_2px_8px_-4px_rgba(0,0,0,0.05)]"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <Icon size={22} className="flex-shrink-0" strokeWidth={isActive ? 2.2 : 1.8} />
                    <span>{label}</span>
                  </>
                )}
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Mobile Profile Section */}
        <div className="bg-[#4DA7B0] p-4 text-white flex items-center gap-4">
          <div className="w-11 h-11 rounded-full bg-[#1AA9B8]/40 flex items-center justify-center font-bold text-[15px] border border-white/20 flex-shrink-0">
            DA
          </div>
          <div className="min-w-0">
            <h4 className="text-[15px] font-semibold truncate leading-tight">Dr. Admin</h4>
            <p className="text-[13px] text-white/80 truncate">admin@medai.com</p>
          </div>
        </div>
      </aside>

      {/* ============ MAIN CONTENT ============ */}
      <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
        {/* Navbar */}
        <div className="flex items-center h-14 bg-white border-b border-gray-100 px-4 flex-shrink-0">
          {/* Desktop: toggles sidebar expand. Mobile: opens overlay drawer */}
          <button
            onClick={() => {
              if (window.innerWidth >= 1024) {
                setSidebarExpanded((prev) => !prev);
              } else {
                setMobileOpen(true);
              }
            }}
            className="text-gray-500 hover:text-[#4FA9B0] transition"
          >
            <Menu size={24} />
          </button>
        </div>

        {/* Page content */}
        <div className="flex-1 overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Root;