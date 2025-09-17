import React, { useState, useContext } from "react";
import { DashboardContext } from "../Context/DashboardContext";

const AddWidgetForm = ({ categoryId }) => {
  const { addWidget } = useContext(DashboardContext);
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    if (!name || !text) return;

    addWidget(categoryId, { id: Date.now(), name, text });
    setName("");
    setText("");
    setOpen(false);
  };

  if (!open) {
    return (
      <button className="add-btn" onClick={() => setOpen(true)}>
        + Add Widget
      </button>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="add-form">
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
      <button type="submit">Save</button>
      <button type="button" onClick={() => setOpen(false)}>Cancel</button>
    </form>
  );
};

export default AddWidgetForm;
