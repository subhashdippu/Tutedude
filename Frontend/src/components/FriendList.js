import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "./Image.png";

const AllFriends = () => {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      window.location.href = "/signin";
      return;
    }

    axios
      .get("http://localhost:4001/api/friends/all-friends", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setFriends(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.response ? err.response.data.message : err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {friends.length > 0 ? (
        <ul>
          {friends.map((friend) => (
            <li key={friend._id}>
              <div className="px-6 py-2">
                <div className="card card-side bg-green-100 shadow-xl">
                  <figure>
                    <img
                      src={Image}
                      alt="Profile"
                      className="w-32 h-32 object-cover"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">Friend</h2>
                    <p>{friend.username}</p>
                    <div className="card-actions justify-end">
                      <button className="btn btn-primary">Message</button>
                      <button className="btn btn-primary">Unfriend</button>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No friends found.</p>
      )}
    </div>
  );
};

export default AllFriends;
