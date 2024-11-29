import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, updateTask, deleteTask }) => {
  return (
    <div>
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            updateTask={updateTask}
          />
        ))
      ) : (
        <p>No tasks yet! Add one above.</p>
      )}
    </div>
  );
};

export default TaskList;
