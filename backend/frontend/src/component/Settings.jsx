import React, { useEffect, useState } from "react";

const Settings = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [autosave, setAutosave] = useState(true);

  // Load settings
  useEffect(() => {
    const savedTheme = localStorage.getItem("darkMode") === "true";
    const savedNotifications = localStorage.getItem("notifications") !== "false";
    const savedAutosave = localStorage.getItem("autosave") !== "false";

    setDarkMode(savedTheme);
    setNotifications(savedNotifications);
    setAutosave(savedAutosave);

    document.documentElement.classList.toggle("dark", savedTheme);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("darkMode", newMode);
    document.documentElement.classList.toggle("dark", newMode);
  };

  const toggleNotifications = () => {
    const value = !notifications;
    setNotifications(value);
    localStorage.setItem("notifications", value);
  };

  const toggleAutosave = () => {
    const value = !autosave;
    setAutosave(value);
    localStorage.setItem("autosave", value);
  };

  const clearHistory = () => {
    localStorage.removeItem("history");
    alert("History cleared");
  };

  // 🔘 Toggle Switch Component
  const Toggle = ({ enabled }) => (
    <div
      className={`w-12 h-6 flex items-center rounded-full p-1 transition ${
        enabled ? "bg-green-500" : "bg-gray-400"
      }`}
    >
      <div
        className={`bg-white w-4 h-4 rounded-full shadow-md transform transition ${
          enabled ? "translate-x-6" : ""
        }`}
      />
    </div>
  );

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1501785888041-af3ef285b470')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Card */}
      <div className="relative bg-white/10 backdrop-blur-xl border border-white/10 p-10 rounded-3xl shadow-2xl w-[340px] text-white">

        <h1 className="text-3xl font-bold mb-8 text-center">
          ⚙️ Settings
        </h1>

        {/* Dark Mode */}
        <div
          onClick={toggleDarkMode}
          className="flex justify-between items-center mb-6 cursor-pointer hover:opacity-80 transition"
        >
          <span className="text-lg">🌙 Dark Mode</span>
          <Toggle enabled={darkMode} />
        </div>

        {/* Notifications */}
        <div
          onClick={toggleNotifications}
          className="flex justify-between items-center mb-6 cursor-pointer hover:opacity-80 transition"
        >
          <span className="text-lg">🔔 Notifications</span>
          <Toggle enabled={notifications} />
        </div>

        {/* Auto Save */}
        <div
          onClick={toggleAutosave}
          className="flex justify-between items-center mb-6 cursor-pointer hover:opacity-80 transition"
        >
          <span className="text-lg">💾 Auto Save</span>
          <Toggle enabled={autosave} />
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 my-6"></div>

        {/* Delete History */}
        <button
          onClick={clearHistory}
          className="w-full bg-red-500 hover:bg-red-600 py-3 rounded-xl font-semibold transition-all"
        >
          🗑 Delete History
        </button>
      </div>
    </div>
  );
};

export default Settings;