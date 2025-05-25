import React, { useEffect, useState } from "react";
import { getHighScore } from "../utils/highScoreManager";
import "../css/Progress.css"

const unitNames = {
  1: "Number Recognition and Counting",
  2: "Basic Addition",
  3: "Long Addition",
  4: "Basic Subtraction",
  5: "Long Subtraction",
  6: "Basic Multiplication",
  7: "Long Multiplication",
  8: "Basic Division",
  9: "Division with Remainders",
  10: "Long Division",
  11: "Fractions",
  12: "Decimals",
};

const Progress = () => {
  const [scores, setScores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchScores = async () => {
      try {
        const results = await Promise.all(
          Object.keys(unitNames).map(async (unit) => {
            const result = await getHighScore(Number(unit));
            return {
              unit: Number(unit),
              name: unitNames[unit],
              score: result.highScore ?? 0,
              success: result.success,
            };
          })
        );
        setScores(results);
      } catch (err) {
        setError("Failed to load scores.");
      } finally {
        setLoading(false);
      }
    };

    fetchScores();
  }, []);

  if (loading) return <p>Loading progress...</p>;

  return (
    <div className="progress-container">
      <h2>Your High Scores</h2>
      <table className="progress-table">
        <thead>
          <tr>
            <th>Unit</th>
            <th>Unit Name</th>
            <th>High Score</th>
          </tr>
        </thead>
        <tbody>
          {scores.map(({ unit, name, score, success, errorMessage }) => (
            <tr key={unit}>
              <td>{unit}</td>
              <td>{name}</td>
              <td>{success ? score : `Error: ${errorMessage}`}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Progress;