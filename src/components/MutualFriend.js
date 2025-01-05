import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "./Image.png";
const MutualFriends = () => {
  const [mutualFriends, setMutualFriends] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token);
    if (!token) {
      window.location.href = "/signin";
      return;
    }
    axios
      .get("http://localhost:4001/api/friends/mutual-friends", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setMutualFriends(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.response ? err.response.data.error : err.message);
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
      {mutualFriends.length > 0 ? (
        <ul>
          {mutualFriends.map((friend) => (
            <li key={friend._id}>
              <p></p>
              <div className="px-6 py-2">
                <div className="card card-side bg-blue-100 shadow-xl">
                  <figure>
                    <img
                      src={Image}
                      alt="Movie"
                      className="w-32 h-32 object-cover"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">Mutual Friends</h2>
                    <p>{friend.username}</p>
                    <div className="card-actions justify-end">
                      <button className="btn btn-primary">Message</button>
                      <button className="btn btn-primary">Add Friend</button>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No mutual friends found.</p>
      )}
    </div>
  );
};

export default MutualFriends;
