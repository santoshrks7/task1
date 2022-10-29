import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCard, removeCard, removeList } from "../redux/cardListSlice";
import Forms from "./Forms";

const ListItems = () => {
  const { cardListItem } = useSelector((state) => state.cardlist);
  console.log(cardListItem);

  const dispatch = useDispatch();

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
                      </div>
                      <div className="card-subtitle">{subItem.desc}</div>
                    </div>
                  </div>
                );
              })}

              <Forms listId={item.listId} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ListItems;
