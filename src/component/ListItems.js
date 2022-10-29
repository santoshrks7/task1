import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCard, removeCard, removeList } from "../redux/cardListSlice";

const ListItems = () => {
  const { cardListItem } = useSelector((state) => state.cardlist);
  console.log(cardListItem);

  const dispatch = useDispatch();

  const [formVal, setFormVal] = useState({
    title: "",
    desc: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormVal((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleCardSubmit = (e, listId) => {
    e.preventDefault();
    if (formVal.title !== "" && formVal.desc !== "") {
      dispatch(
        addCard({ listId: listId, title: formVal.title, desc: formVal.desc })
      );

      setFormVal({
        title: "",
        desc: "",
      });
    }
  };

  return (
    <div className="row g-md-2">
      {cardListItem.map((item, i) => {
        return (
          <div className="col-12 col-md-6 card" key={i}>
            <div className="card-body">
              <div className="d-flex justify-content-between my-4">
                <h2 className="card-title ">{item.name}</h2>
                <button
                  className="btn btn-close"
                  onClick={() => dispatch(removeList(item.listId))}
                />
                {/* {item.listId} */}
                {/* </button> */}
              </div>
              {item.tasks?.map((subItem, i) => {
                return (
                  <div className="card my-2" key={i}>
                    <div className="card-body">
                      <div className="d-flex justify-content-between my-2">
                        <h4 className="card-title">{subItem.title}</h4>
                        <button
                          className="btn btn-close"
                          onClick={() =>
                            dispatch(
                              removeCard({
                                listId: item.listId,
                                subItemId: subItem.id,
                              })
                            )
                          }
                        />
                        {/* {subItem.id} */}
                        {/* </button> */}
                      </div>
                      <div className="card-subtitle">{subItem.desc}</div>
                    </div>
                  </div>
                );
              })}
              <form onSubmit={(e) => handleCardSubmit(e, item.listId)}>
                <div className="card">
                  <div className="card-body">
                    <input
                      type="text"
                      placeholder="Title"
                      className="form-control my-1"
                      value={formVal.title}
                      name="title"
                      onChange={handleChange}
                    />
                    <input
                      type="text"
                      placeholder="Desc"
                      className="form-control my-1"
                      value={formVal.desc}
                      name="desc"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <button className="btn btn-dark mt-2" type="submit">
                  Add card
                </button>
              </form>
              {/* <button
                className="btn btn-info"
                onClick={() => dispatch(addCard(item.listId))}
              >
                Add card
              </button> */}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ListItems;
