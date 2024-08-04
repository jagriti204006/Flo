// import React from 'react';
// import { Outlet, Link } from 'react-router-dom';

// function Layout() {
//   return (
//     <div className="bg-zinc-900 w-screen h-screen font-sans">
//       <nav>
//         <div className="flex gap-5 justify-end py-3 px-3">
//           <div className="px-5 py-3 rounded-xl bg-sky-300 w-max font-medium">
//             <Link to="/">Home</Link>
//           </div>
//           <div className="px-5 py-3 rounded-xl bg-sky-300 w-max font-medium">
//             <Link to="/about">About</Link>
//           </div>
//           <div className="px-5 py-3 rounded-xl bg-sky-300 w-max font-medium">
//             <Link to="/calendar">Calendar</Link>
//           </div>
//           <div className="px-5 py-3 rounded-xl bg-sky-300 w-max font-medium">
//             <Link to="/reproductive-health">Reproductive Health</Link>
//           </div>
//           <div className="px-5 py-3 rounded-xl bg-sky-300 w-max font-medium">
//             <Link to="/information">Information</Link>
//           </div>
//           <div className="px-5 py-3 rounded-xl bg-sky-300 w-max font-medium">
//             <Link to="/Quiz">Quiz</Link>
//           </div>
//           <div className="px-5 py-3 rounded-xl bg-sky-300 w-max font-medium">
//             <Link to="/profile">Profile</Link>
//           </div>
//         </div>
//       </nav>
//       <hr />
//       <div className="mt-8">
//         <Outlet />
//       </div>
//     </div>
//   );
// }

// export default Layout;







import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';

function Layout() {
  const location = useLocation();

  return (
    <div className="bg-gray-900 min-h-screen font-sans text-white">
      <header className="bg-gray-800 shadow-md">
        <nav className="container mx-auto px-4">
          <ul className="flex justify-end items-center space-x-2 py-4">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About" },
              { to: "/calendar", label: "Calendar" },
              { to: "/reproductive-health", label: "Reproductive Health" },
              { to: "/information", label: "Information" },
              { to: "/Quiz", label: "Quiz" },
              { to: "/profile", label: "Profile" },
            ].map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ease-in-out
                    ${location.pathname === link.to
                      ? 'bg-indigo-600 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                    }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <main className="container mx-auto px-4 py-8">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;