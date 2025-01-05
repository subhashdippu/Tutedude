import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "./Image.png";

const UserProfile = () => {
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      window.location.href = "/signin";
      return;
    }

    axios
      .get("http://localhost:4001/api/users/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setUserProfile(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.response ? err.response.data.message : err.message);
        setLoading(false);
      });
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/signin";
  };

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-center">Error: {error}</div>;
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
        {userProfile ? (
          <div className="text-center">
            <img
              src={userProfile.profilePicture || Image}
              alt="Profile"
              className="w-32 h-32 rounded-full mx-auto object-cover mb-4"
            />
            <h2 className="text-2xl font-bold">{userProfile.username}</h2>
            <p className="text-gray-600">{userProfile.username}</p>
            <p className="text-gray-500 mt-2">
              {userProfile.bio || "No bio available"}
            </p>
            <div className="mt-4">
              <button
                className="btn btn-primary mx-2"
                onClick={() => alert("Edit profile functionality")}
              >
                Edit Profile
              </button>
              <button className="btn btn-secondary mx-2" onClick={handleLogout}>
                Logout
              </button>
            </div>
          </div>
        ) : (
          <p>No profile data found.</p>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
