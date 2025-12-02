import { useState } from "react";

const QueueForm = ({ onAddData }) => {
  const [name, setName] = useState("");
  const [option, setOption] = useState("");

  const addDataInQueue = () => {

    if (!name.trim() || !option) {
      return;
    }

    onAddData(name.trim(), option, "waiting");
    setName("");
    setOption("");
  };

  return (
    <div className="w-[320px] p-6 rounded-xl border bg-gray-800 text-white flex flex-col gap-4 shadow-md">
      <h2 className="text-lg font-semibold">Join the Queue</h2>

      <label className="text-sm text-gray-300">Your name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
        className="w-full rounded px-3 py-2 bg-gray-700 border border-gray-600 focus:outline-none"
      />

      <label className="text-sm text-gray-300">Service</label>
      <select
        name="option"
        id="option"
        className="w-full rounded px-3 py-2 bg-gray-700 border border-gray-600"
        value={option}
        onChange={(e) => setOption(e.target.value)}
      >
        <option value="" disabled>
          -- Select a service --
        </option>
        <option value="consultation">Consultation</option>
        <option value="payment">Payment</option>
        <option value="support">Support</option>
      </select>

      <button
        onClick={addDataInQueue}
        className="mt-2 bg-purple-600 hover:bg-purple-700 transition-colors rounded py-2 font-medium"
      >
        Submit
      </button>
    </div>
  );
};

export default QueueForm;
