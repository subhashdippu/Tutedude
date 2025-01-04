import React from "react";
import Image from "./Image.png";
const FriendList = () => {
  return (
    <div className="px-6 py-2">
      <div className="card card-side bg-blue-100 shadow-xl">
        <figure>
          <img src={Image} alt="Movie" className="w-32 h-32 object-cover" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">New movie is released!</h2>
          <p>Click the button to watch on Jetflix app.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Message</button>
            <button className="btn btn-primary">Unfriend</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendList;
