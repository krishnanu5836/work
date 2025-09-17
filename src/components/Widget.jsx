import React, { useContext } from "react";
import { DashboardContext } from "../Context/DashboardContext";

const Widget = ({ widget, categoryId }) => {
  const { removeWidget } = useContext(DashboardContext);

  return (
    <div className="widget">
      <button
        className="remove-btn"
        onClick={() => removeWidget(categoryId, widget.id)}
      >
        ✕
      </button>
      <h4>{widget.name}</h4>
      <p>{widget.text}</p>
    </div>
  );
};

export default Widget;
