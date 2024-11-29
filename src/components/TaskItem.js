import React, { useState } from "react";

const TaskItem = ({ task, updateTask, deleteTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  const handleUpdate = () => {
    updateTask(task.id, newText);
    setIsEditing(false);
  };

  return (
    <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
      {isEditing ? (
        <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          style={{ flex: 1, padding: "5px" }}
        />
      ) : (
        <span style={{ flex: 1 }}>{task.text}</span>
      )}

      {isEditing ? (
        <button onClick={handleUpdate} style={{ marginLeft: "5px" }}>
          Save
        </button>
      ) : (
        <button onClick={() => setIsEditing(true)} style={{ marginLeft: "5px" }}>
          Edit
        </button>
      )}
    </div>
  );
};

export default TaskItem;
