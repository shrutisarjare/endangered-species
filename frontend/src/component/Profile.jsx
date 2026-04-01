const Profile = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="relative min-h-screen text-white">

      {/* Background */}
      <img
        src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
        className="absolute w-full h-full object-cover -z-10"
        alt=""
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 -z-10"></div>

      {/* Content */}
      <div className="flex justify-center items-center h-screen">
        <div className="backdrop-blur-xl bg-white/10 p-8 rounded-2xl border border-white/20 shadow-xl w-96">

          <h1 className="text-2xl font-bold mb-6 text-center">👤 Profile</h1>

          <p className="mb-2"><b>Name:</b> {user?.name || "Not set"}</p>
          <p className="mb-4"><b>Email:</b> {user?.email}</p>

          <button className="w-full bg-green-600 py-2 rounded-lg hover:bg-green-700 transition">
            Edit Profile
          </button>

        </div>
      </div>
    </div>
  );
};

export default Profile;