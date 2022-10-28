import React from "react";
import { useSelector } from "react-redux";

const ListItems = () => {
  const { cardListItem } = useSelector((state) => state.cardlist);

  return (
    <div className="row g-2 ">
      {cardListItem?.map((item, i) => {
        return (
          <div className="col-12 col-md-6 card" key={i}>
            <div className="card-body">{item}</div>
          </div>
        );
      })}
    </div>
  );
};

export default ListItems;
