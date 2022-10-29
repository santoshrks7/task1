import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCard } from "../redux/cardListSlice";

const Forms = ({ listId }) => {
  console.log(listId);
  const dispatch = useDispatch();
  const [formVal, setFormVal] = useState({
    title: "",
    desc: "",
  });
  const [errors, setErrors] = useState({});
  console.log(errors);

  const validateForm = () => {
    const { title, desc } = formVal;
    const newErrors = {};
    if (title === "") {
      newErrors.title = "required";
    }
    if (desc === "") {
      newErrors.desc = "required";
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormVal((prev) => {
      return { ...prev, [name]: value };
    });
    console.log(errors, "1");
    console.log(!errors, "2");
    console.log(!!errors, "3");
    if (!!errors[name]) setErrors({ ...errors, [name]: null });
  };

  const handleCardSubmit = (e, listId) => {
    e.preventDefault();

    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      dispatch(
        addCard({ listId: listId, title: formVal.title, desc: formVal.desc })
      );

      setFormVal({
        title: "",
        desc: "",
      });
      // setErrors({});
    }
    // if (formVal.title !== "" && formVal.desc !== "") {
    //   dispatch(
    //     addCard({ listId: listId, title: formVal.title, desc: formVal.desc })
    //   );

    //   setFormVal({
    //     title: "",
    //     desc: "",
    //   });
    // }
  };
  return (
    <form onSubmit={(e) => handleCardSubmit(e, listId)}>
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
          {errors.title && <div className="text-danger">{errors.title}</div>}
          <input
            type="text"
            placeholder="Desc"
            className="form-control my-1"
            value={formVal.desc}
            name="desc"
            onChange={handleChange}
          />
          {errors.desc && <div className="text-danger">{errors.desc}</div>}
        </div>
      </div>
      <button className="btn btn-dark mt-2" type="submit">
        Add card
      </button>
    </form>
  );
};

export default Forms;
