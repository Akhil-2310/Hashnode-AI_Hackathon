import React from 'react'

const Workout = () => {
  return (
    <>
      <div>
        <select className="select select-bordered w-full max-w-xs">
          <option disabled selected>
            How are you feeling?
          </option>
          <option>Cheerful</option>
          <option>Stessed</option>
        </select>
      </div>
      <div>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
        <button className="btn btn-active btn-primary">Primary</button>
      </div>
    </>
  );
};

export default Workout
