import { useState } from "react";
import "./bmr.modules.scss";

const Bmr = () => {
  const [gender, setGender] = useState("");
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [age, setAge] = useState();
  const [activity, setActivity] = useState("");
  const [result, setResult] = useState(null);

  // BMR calculation logic
  const calculateBmr = (e) => {
    e.preventDefault(); 

    // Early validation
    if (!gender || !weight || !height || !age || !activity) {
      setResult("Please fill all the required fields");
      return;
    }

    let bmr;

    // Calculate BMR based on gender
    if (gender === "male") {
      bmr = 66.5 + 13.75 * weight + 5 * height - 6.78 * age;
    } else if (gender === "female") {
      bmr = 655 + 9.56 * weight + 1.85 * height - 4.68 * age;
    } else {
      setResult("Invalid gender selection");
      return;
    }

    // Apply activity level multiplier
    let multiplier = 1;
    if (activity === "Low") multiplier = 1.2;
    if (activity === "Medium") multiplier = 1.3;
    if (activity === "High") multiplier = 1.4;

    setResult((bmr * multiplier).toFixed(2)); // Set the result
  };

  return (
    <section className="Bmr">
      <div className="bmr-container">
        <form onSubmit={calculateBmr}>
          <h4>
            Calculate Your Basal Metabolic Rate (BMR)
          </h4>

          <div className="form-group">
            <label htmlFor="gender">Gender:</label>
            <select
              id="gender"
              name="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="" hidden>
                Gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>

            <label htmlFor="weight">Weight (kg):</label>
            <input
              type="number"
              id="weight"
              name="weight"
              placeholder="kg"
              required
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />

            <label htmlFor="height">Height (cm):</label>
            <input
              type="number"
              id="height"
              name="height"
              placeholder="cm"
              required
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />

            <label htmlFor="age">Age (years):</label>
            <input
              type="number"
              id="age"
              name="age"
              placeholder="years"
              required
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />

            <label htmlFor="activity">Activity Level:</label>
            <select
              id="activity"
              name="activity"
              value={activity}
              onChange={(e) => setActivity(e.target.value)}
            >
              <option value="" hidden>
                Choose your activity level
              </option>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>

            <button type="submit">Calculate BMR</button>
          </div>

          {result && (
            <div id="bmr-result">
              <p>Your BMR is: {result} calories</p>
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Bmr;
