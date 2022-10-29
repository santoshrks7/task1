import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCard, removeCard, removeList } from "../redux/cardListSlice";

const ListItems = () => {
  const { cardListItem } = useSelector((state) => state.cardlist);
  console.log(cardListItem);

  const dispatch = useDispatch();

  return (
    <div className="row g-2 ">
      {cardListItem.map((item, i) => {
        return (
          <div className="col-12 col-md-6 card" key={i}>
            <div className="card-body">
              <button
                className="btn btn-info"
                onClick={() => dispatch(addCard(item.listId))}
              >
                Add card
              </button>
              <div className="d-flex justify-content-between">
                <div className="card-title">{item.name}</div>
                <button
                  className="btn btn-dark"
                  onClick={() => dispatch(removeList(item.listId))}
                >
                  {item.listId}
                </button>
              </div>
              {item.tasks?.map((subItem, i) => {
                return (
                  <div className="card my-2" key={i}>
                    <div className="card-body">
                      <div className="d-flex justify-content-between">
                        <div className="card-subtitle">{subItem.name}</div>
                        <button
                          className="btn btn-dark"
                          onClick={() =>
                            dispatch(
                              removeCard({
                                listId: item.listId,
                                subItemId: subItem.id,
                              })
                            )
                          }
                        >
                          {subItem.id}
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ListItems;
