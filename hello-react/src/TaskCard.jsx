import React from 'react';
import PropTypes from 'prop-types';
import './TaskCard.css';

const TaskCard = ({ title, dueDate, completedAtDate, assigneeName, status }) => {
  return (
    <div className="TaskItem p-4 border rounded-lg shadow-md mb-4">
      <h2 className="text-xl font-bold">{title}</h2>

      {/* Conditionally render due date or completed date */}
      {status === 'pending' ? (
        <p className="text-gray-500">Due Date: {dueDate}</p>
      ) : (
        <p className="text-gray-500">Completed on: {completedAtDate}</p>
      )}

      <p className="text-gray-600">Assignee: {assigneeName}</p>
    </div>
  );
};

TaskCard.propTypes = {
  title: PropTypes.string.isRequired,
  dueDate: PropTypes.string,
  completedAtDate: PropTypes.string,
  assigneeName: PropTypes.string.isRequired,
  status: PropTypes.oneOf(['pending', 'done']).isRequired,
};

export default TaskCard;
