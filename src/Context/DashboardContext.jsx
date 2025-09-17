import React, { createContext, useState } from "react";
import dashboardData from "../Data/DashboardContext";

export const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
  const [categories, setCategories] = useState(dashboardData.categories);
  const [search, setSearch] = useState("");

  const addWidget = (categoryId, widget) => {
    const updatedCategories = categories.map(e => {
      if (e.id === categoryId) {
        return { ...e, widgets: [...e.widgets, widget] };
      }
      return e;
    });
    setCategories(updatedCategories);
  };

  const removeWidget = (categoryId, widgetId) => {
    const updatedCategories = categories.map(e => {
      if (e.id === categoryId) {
        return { ...e, widgets: e.widgets.filter(w => w.id !== widgetId) };
      }
      return e;
    });
    setCategories(updatedCategories);
  };

  return (
    <DashboardContext.Provider
      value={{ categories, search, setSearch, addWidget, removeWidget }}
    >
      {children}
    </DashboardContext.Provider>
  );
};
