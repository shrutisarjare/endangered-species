import { useState } from "react";

const EditProfile = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");

  const handleSave = () => {
    const updatedUser = { ...user, name, email };
    localStorage.setItem("user", JSON.stringify(updatedUser));
    alert("Profile updated!");
  };

  return (
    <div className="p-8 text-white">
      <h1>Edit Profile</h1>

      <input value={name} onChange={(e) => setName(e.target.value)} className="text-black p-2 block mb-2"/>
      <input value={email} onChange={(e) => setEmail(e.target.value)} className="text-black p-2 block mb-2"/>

      <button onClick={handleSave} className="bg-green-600 px-4 py-2 rounded">
        Save
      </button>
    </div>
  );
};

export default EditProfile;