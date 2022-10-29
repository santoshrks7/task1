import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { addList, clearAllList } from "../redux/cardListSlice";
import ListItems from "./ListItems";

const Home = () => {
  const inputRef = useRef(null);

  const dispatch = useDispatch();
  const [error, setErrors] = useState(false);

  const handleList = (e) => {
    e.preventDefault();
    if (inputRef.current.value !== "") {
      dispatch(addList(inputRef.current.value));
      inputRef.current.value = "";
      setErrors(!error);
    } else {
      setErrors(!error);
    }
  };
  return (
    <div className="row mt-5 p-3 p-md-5 d-flex flex-column-reverse flex-md-row  justify-content-between">
      <div className="d-flex justify-content-center my-3">
        <button
          className="btn btn-outline-primary"
          onClick={() => dispatch(clearAllList())}
        >
          Remove all list
        </button>{" "}
      </div>
      <div className="col-12 col-md-8">
        <ListItems />
      </div>
      {/* ===== add list ===== */}
      <div className="col-12 col-md-4  card h-25">
        <div className="card-body">
          <form onSubmit={handleList}>
            <input
              type="text"
              className="form-control"
              placeholder="Enter list title..."
              ref={inputRef}
            />
            {error && <div className="text-danger">required</div>}

            <button type="submit" className="btn btn-dark my-2">
              Add List
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
