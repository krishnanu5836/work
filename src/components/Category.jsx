import React, { useContext } from "react";
import { DashboardContext } from "../Context/DashboardContext";
import Widget from "./Widget";
import AddWidgetForm from "./AddWidgetForm";

const Category = ({ category }) => {
  const { search } = useContext(DashboardContext);

  const filteredWidgets = category.widgets.filter(
    w =>
      w.name.toLowerCase().includes(search.toLowerCase()) ||
      w.text.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="category">
      <h2>{category.name}</h2>
      <div className="widget-grid">
        {filteredWidgets.map(widget => (
          <Widget key={widget.id} widget={widget} categoryId={category.id} />
        ))}
        <div className="widget add-card">
          <AddWidgetForm categoryId={category.id} />
        </div>
      </div>
    </div>
  );
};

export default Category;
