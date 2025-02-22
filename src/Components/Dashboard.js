
import { useState } from "react";
import { FaBars, FaTimes, FaUserCircle, FaTachometerAlt, FaShoppingCart, FaGem, FaChartLine, FaGlobe, FaBook, FaCalendar, FaFolder, FaBell, FaEnvelope, FaCog, FaPowerOff } from "react-icons/fa";

export default function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const toggleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  return (
    <div className={`page-wrapper ${isSidebarOpen ? "toggled" : ""} flex h-screen`}> 
      {/* Sidebar */}
      <nav className="sidebar-wrapper bg-gray-900 text-white w-64 flex flex-col h-screen fixed top-0 left-0 transition-transform transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0">
        <div className="sidebar-brand flex justify-between items-center p-4 border-b border-gray-700">
          <a href="#" className="text-xl font-bold">Pro Sidebar</a>
          <FaTimes className="cursor-pointer md:hidden" onClick={toggleSidebar} />
        </div>
        
        <div className="sidebar-header p-4 flex flex-col items-center">
          <FaUserCircle className="text-4xl" />
          <span className="font-bold">Joe Chien</span>
          <span className="text-sm text-gray-400">Administrator</span>
        </div>

        <ul className="sidebar-menu p-4">
          <li className="sidebar-dropdown">
            <a href="#" className="flex justify-between items-center p-2 hover:bg-gray-800" onClick={() => toggleDropdown("dashboard")}> 
              <span><FaTachometerAlt className="inline mr-2" /> Dashboard</span>
            </a>
            {activeDropdown === "dashboard" && (
              <ul className="ml-4 text-sm">
                <li><a href="#">Dashboard 1</a></li>
                <li><a href="#">Dashboard 2</a></li>
              </ul>
            )}
          </li>

          <li className="sidebar-dropdown">
            <a href="#" className="flex justify-between items-center p-2 hover:bg-gray-800" onClick={() => toggleDropdown("ecommerce")}> 
              <span><FaShoppingCart className="inline mr-2" /> E-commerce</span>
            </a>
            {activeDropdown === "ecommerce" && (
              <ul className="ml-4 text-sm">
                <li><a href="#">Products</a></li>
                <li><a href="#">Orders</a></li>
              </ul>
            )}
          </li>
        </ul>
        
        <div className="sidebar-footer flex justify-around p-4 border-t border-gray-700">
          <FaBell />
          <FaEnvelope />
          <FaCog />
          <FaPowerOff />
        </div>
      </nav>
      
      {/* Main Content */}
      <main className="page-content flex-1 ml-64 p-6">
        <button onClick={toggleSidebar} className="md:hidden p-2 bg-gray-900 text-white rounded-lg">
          <FaBars />
        </button>
        <h2 className="text-xl font-bold">Pro Sidebar</h2>
        <hr className="my-4" />
      </main>
    </div>
  );
}
