import { useState } from "react";
import "./App.css";
import QueueForm from "./components/QueueForm";

function App() {
  const [queue, setQueue] = useState([]);

  const addQueueData = (name, service, status) => {
    setQueue([...queue, { name, service, status, id: Date.now() }]);
  };

  const removeData = (id) => {
    const newData = queue.filter((data) => data.id != id);
    setQueue(newData);
  };

  const changeStatus = (id, status) => {
    const updatedQueue = queue.map((data) => {
      if (data.id == id) {
        return { ...data, status: status };
      }
      return data;
    });
    setQueue(updatedQueue);
  };

  return (
    <>
      <div className="min-h-screen bg-gray-900 text-white p-6">
        <div className="max-w-5xl mx-auto">
          <header className="mb-6 flex items-center justify-between">
            <h1 className="text-2xl font-bold">Queue Management</h1>
          </header>

          <main className="flex gap-8 items-start">
            <QueueForm onAddData={addQueueData} />
            <QueueDisplay
              queue={queue}
              removeData={removeData}
              changeStatus={changeStatus}
            />
          </main>
        </div>
      </div>
    </>
  );
}

function QueueDisplay({ queue, removeData, changeStatus }) {
  const ondelete = (id) => {
    removeData(id);
  };
  const updateStatus = (id, status) => {
    if (status == "waiting") {
      status = "serving";
    } else if (status == "serving") {
      status = "completed";
    }

    changeStatus(id, status);
  };

  return (
    <>
      <div className="w-[680px] rounded-xl border border-gray-700 bg-gray-800 p-4">
        <div className="flex flex-col gap-3">
          {queue?.length === 0 && (
            <div className="text-gray-400">No one is in the queue.</div>
          )}

          {queue?.map((data) => (
            <div
              key={data.id}
              className="bg-gray-700 p-3 rounded-lg flex justify-between items-center"
            >
              <div className="flex flex-col">
                <span className="font-medium">{data.name}</span>
                <span className="text-xs text-gray-400">
                  Service: {data.service}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span
                  className={`text-xs px-2 py-1 rounded-full text-black font-medium ${
                    data.status === "waiting"
                      ? "bg-yellow-300"
                      : data.status === "serving"
                      ? "bg-green-300"
                      : "bg-gray-400"
                  }`}
                >
                  {data.status}
                </span>

                <div className="flex gap-2">
                  {data.status !== "completed" && (
                    <button
                      onClick={() => updateStatus(data.id, data.status)}
                      className="bg-indigo-600 hover:bg-indigo-700 text-sm px-3 py-1 rounded"
                    >
                      Serve
                    </button>
                  )}

                  <button
                    onClick={() => ondelete(data.id)}
                    className="bg-red-500 hover:bg-red-600 text-sm px-3 py-1 rounded"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
