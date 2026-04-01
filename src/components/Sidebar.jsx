// import React from "react";
// import { NavLink } from "react-router";
// import {
//   MessageSquare,
//   Calendar,
//   ClipboardList,
// } from "lucide-react";

// const Sidebar = () => {
//   const menu = [
//     {
//       path: "/",
//       icon: <MessageSquare size={20} />,
//     },
//     {
//       path: "/appointment",
//       icon: <Calendar size={20} />,
//     },
//     {
//       path: "/appointment-list",
//       icon: <ClipboardList size={20} />,
//     },
//   ];

//   return (
//     <div className="flex h-full">

//       {/* 🔹 LEFT ICON BAR */}
//       <div className="w-16 bg-base-100 border-r flex flex-col items-center py-4 gap-6">

//         {/* Logo */}
//         <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">
//           C
//         </div>

//         {/* Menu */}
//         <div className="flex flex-col gap-4">
//           {menu.map((item, i) => (
//             <NavLink
//               key={i}
//               to={item.path}
//               className={({ isActive }) =>
//                 `p-3 rounded-xl transition-all duration-200 ${
//                   isActive
//                     ? "bg-primary text-white shadow-md"
//                     : "text-gray-400 hover:bg-base-200"
//                 }`
//               }
//             >
//               {item.icon}
//             </NavLink>
//           ))}
//         </div>
//       </div>

//       {/* 🔹 RIGHT PANEL (OPTIONAL: CHAT LIST / MENU TITLE) */}
//       <div className="w-64 bg-base-100 border-r p-4 hidden lg:block">

//         <h2 className="text-sm font-semibold text-gray-400 mb-4">
//           Clinic Assistant
//         </h2>

//         {/* Example Content (you can make dynamic later) */}
//         <div className="space-y-3">

//           <div className="flex items-center gap-3 p-2 rounded-xl bg-base-200 cursor-pointer">
//             <div className="w-10 h-10 rounded-full bg-accent"></div>
//             <div>
//               <p className="text-sm font-semibold">Anik</p>
//               <p className="text-xs text-accent">AI Assistant Online</p>
//             </div>
//           </div>

//           <div className="flex items-center gap-3 p-2 rounded-xl hover:bg-base-200 cursor-pointer">
//             <div className="w-10 h-10 rounded-full bg-gray-300"></div>
//             <div>
//               <p className="text-sm font-semibold">Clinic Assistant</p>
//               <p className="text-xs text-gray-400">Offline</p>
//             </div>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;