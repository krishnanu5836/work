import React, { useContext, useState } from "react";
import { DashboardContext } from "../Context/DashboardContext";
import Category from "./Category";
import SearchBar from "./SearchBar";

const Dashboard = () => {
  const { categories, addWidget } = useContext(DashboardContext);
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [categoryId, setCategoryId] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!name || !text || !categoryId) return;

    addWidget(Number(categoryId), { id: Date.now(), name, text });
    setName("");
    setText("");
    setCategoryId("");
    setShowForm(false);
  };

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>CNAPP Dashboard</h1>
        <div>
          <button className="top-btn" onClick={() => setShowForm(true)}>
            + Add Widget
          </button>
          <button className="top-btn">⚙️</button>
          <button className="top-btn">🔔</button>
        </div>
      </div>

      {/* Slide-in Add Widget Panel */}
      {showForm && (
        <div className="side-panel">
          <div className="side-panel-content">
            <h3>Add Widget</h3>
            <form onSubmit={handleSubmit}>
              <select
                value={categoryId}
                onChange={e => setCategoryId(e.target.value)}
              >
                <option value="">Select Category</option>
                {categories.map(cat => (
                  <option key={cat.id} value={cat.id}>
                    {cat.name}
                  </option>
                ))}
              </select>
              <input
                type="text"
                placeholder="Widget Name"
                value={name}
                onChange={e => setName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Widget Text"
                value={text}
                onChange={e => setText(e.target.value)}
              />
              <div className="form-buttons">
                <button type="submit">Save</button>
                <button type="button" onClick={() => setShowForm(false)}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <SearchBar />
      {categories.map(cat => (
        <Category key={cat.id} category={cat} />
      ))}
    </div>
  );
};

export default Dashboard;
