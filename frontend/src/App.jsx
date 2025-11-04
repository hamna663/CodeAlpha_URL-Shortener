import React, { useState } from "react";

export default function App() {
  const [longURL, setLongURL] = useState("");
  const [shortURL, setShortURL] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [totalClicks, setTotalClicks] = useState(null);
  const [clickHistory, setClickHistory] = useState(null);

  const backendURL = "http://localhost:4000";

  // Simple URL validator
  const isValidURL = (str) => {
    try {
      new URL(str);
      return true;
    } catch {
      return false;
    }
  };

  // Create short URL
  const createShortURL = async () => {
    if (!isValidURL(longURL)) {
      setErrorMsg("Enter valid URL!");
      return;
    }
    setLoading(true);
    setErrorMsg("");
    setShortURL(null);
    setTotalClicks(null);
    setClickHistory(null);

    try {
      const response = await fetch(`${backendURL}/shortURL`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ longURL: longURL.trim() }),
      });

      const data = await response.json();
      if (!response.ok) {
        setErrorMsg(data.message || "Failed to create short URL");
        setLoading(false);
        return;
      }
      setShortURL(data.shortURL);
    } catch (err) {
      setErrorMsg("Network error");
    }
    setLoading(false);
  };

  const fetchTotalClicks = async () => {
    if (!shortURL) return;
    setErrorMsg("");
    setTotalClicks(null);
    try {
      const response = await fetch(
        `${backendURL}/${shortURL
          .replace(backendURL, "")
          .replaceAll("/", "")}/totalClicks`
      );
      const data = await response.json();
      if (!response.ok) {
        setErrorMsg(data.message || "Failed to fetch total clicks");
        return;
      }
      setTotalClicks(data.totalClicks);
    } catch {
      setErrorMsg("Network error");
    }
  };

  // Fetch click history for a short URL
  const fetchClickHistory = async () => {
    if (!shortURL) return;
    setErrorMsg("");
    setClickHistory(null);
    try {
      const response = await fetch(
        `${backendURL}/${shortURL
          .replace(backendURL, "")
          .replaceAll("/", "")}/clickHistory`
      );
      const data = await response.json();
      if (!response.ok) {
        setErrorMsg(data.message || "Failed to fetch click history");
        return;
      }
      console.log(data.history)
      setClickHistory(data.history);
    } catch {
      setErrorMsg("Network error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-xl w-full p-8 shadow-lg rounded bg-white">
        <h1 className="text-2xl font-bold mb-6 text-center">URL Shortener</h1>
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Long URL</label>
          <input
            type="text"
            value={longURL}
            onChange={(e) => setLongURL(e.target.value)}
            placeholder="Enter the long URL"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring"
          />
        </div>
        <button
          onClick={createShortURL}
          disabled={loading || !longURL}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? "Creating..." : "Create Short URL"}
        </button>
        {errorMsg && <p className="text-red-600 mt-4">{errorMsg}</p>}
        {shortURL && (
          <div className="mt-6 p-4 bg-gray-100 rounded">
            <p className="mb-2">
              Short URL:{" "}
              <a
                href={`${shortURL}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                {`${shortURL}`}
              </a>
            </p>
            <div className="flex space-x-4 mt-4">
              <button
                onClick={fetchTotalClicks}
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
              >
                Get Total Clicks
              </button>
              <button
                onClick={fetchClickHistory}
                className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
              >
                Get Click History
              </button>
            </div>
            {totalClicks !== null && (
              <p className="mt-3">Total Clicks: {totalClicks}</p>
            )}
            {clickHistory !== null && (
              <div className="mt-3">
                <p>Click History:</p>
                <ul className="list-none list-inside max-h-40 overflow-auto bg-white border rounded p-2">
                  {(!clickHistory || clickHistory?.length === 0) && (
                    <li>No clicks yet</li>
                  )}
                  {clickHistory &&
                    clickHistory.map((ts, i) => (
                      <li key={i}>{new Date(ts).toLocaleString()}</li>
                    ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

