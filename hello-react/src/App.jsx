import TaskCard from "./TaskCard";

function App() {
  const pendingTasks = [
    { title: "Build the website", dueDate: "2024-10-01", assigneeName: "John Doe", status: "pending" },
    { title: "Add Blog", dueDate: "2024-10-05", assigneeName: "Jane Smith", status: "pending" },
  ];

  const doneTasks = [
    { title: "Design the mockup", completedAtDate: "2024-09-25", assigneeName: "Mike Johnson", status: "done" },
    { title: "Get approval from Principal", completedAtDate: "2024-09-22", assigneeName: "Emily Clark", status: "done" },
  ];

  return (
    <div className="p-6">
      <div>
        <h1 className="text-2xl font-bold mb-4">Pending Tasks</h1>
        {pendingTasks.map((task, index) => (
          <TaskCard
            key={index}
            title={task.title}
            dueDate={task.dueDate}
            assigneeName={task.assigneeName}
            status={task.status}
          />
        ))}
      </div>

      <div className="mt-8">
        <h1 className="text-2xl font-bold mb-4">Done Tasks</h1>
        {doneTasks.map((task, index) => (
          <TaskCard
            key={index}
            title={task.title}
            completedAtDate={task.completedAtDate}
            assigneeName={task.assigneeName}
            status={task.status}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
