import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addList, clearAllList } from "../redux/cardListSlice";
import ListItems from "./ListItems";

const Home = () => {
  const inputRef = useRef(null);

  const dispatch = useDispatch();

  const handleList = (e) => {
    e.preventDefault();
    dispatch(addList(inputRef.current.value));
    inputRef.current.value = "";
  };
  return (
    <div className="row mt-5 p-5 d-flex flex-column-reverse flex-md-row  justify-content-between">
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
      <div className="col-12 col-md-4  card">
        <div className="card-body">
          <form onSubmit={handleList}>
            <input
              type="text"
              className="form-control"
              placeholder="Enter list title..."
              ref={inputRef}
            />
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
