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
    <div className="flex h-screen overflow-hidden bg-[#F7F5F3]">

      {/* ============ DESKTOP SIDEBAR ============ */}
      <aside
        className={`
          hidden lg:flex flex-col flex-shrink-0
          bg-[#F7F5F3] border-r border-gray-100
          transition-all duration-300 ease-in-out
          ${sidebarExpanded ? "w-56" : "w-14"}
        `}
      >
        {/* Nav items */}
        <nav className="flex flex-col gap-1 p-2 pt-15 mt-2">
          {navLinks.map(({ to, icon: Icon, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-150
                ${isActive
                  ? "bg-[#089BAB]/10 text-[#089BAB]"
                  : "text-gray-500 hover:bg-gray-100 hover:text-gray-700"
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
          fixed top-0 left-0 h-full w-56 bg-white z-40 flex flex-col
          border-r border-gray-100 shadow-xl
          transition-transform duration-300 ease-in-out
          lg:hidden
          ${mobileOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="flex items-center justify-end h-14 px-4 border-b border-gray-100">
          
          <button
            onClick={() => setMobileOpen(false)}
            className="text-gray-400 hover:text-gray-600"
          >
            <X size={20} />
          </button>
        </div>
        <nav className="flex flex-col gap-1 p-2 pt-5 mt-2">
          {navLinks.map(({ to, icon: Icon, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-150
                ${isActive
                  ? "bg-[#089BAB]/10 text-[#089BAB]"
                  : "text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <Icon size={20} className="flex-shrink-0" strokeWidth={isActive ? 2.2 : 1.8} />
                  <span>{label}</span>
                </>
              )}
            </NavLink>
          ))}
        </nav>
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
        <div className="flex-1 overflow-hidden">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Root;