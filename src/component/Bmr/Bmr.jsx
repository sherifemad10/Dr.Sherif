import { useState } from "react";
import "./bmr.modules.scss";

const Bmr = () => {
  const [gender, setGender] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [activity, setActivity] = useState("");
  const [result, setResult] = useState(null);

  const calculateBmr = (e) => {
    e.preventDefault();

    if (!gender || !weight || !height || !age || !activity) {
      setResult("Please fill all the required fields");
      return;
    }

    const weightNum = parseFloat(weight);
    const heightNum = parseFloat(height);
    const ageNum = parseInt(age, 10);

    if (isNaN(weightNum) || isNaN(heightNum) || isNaN(ageNum)) {
      setResult("Please enter valid numerical values");
      return;
    }

    let bmr;
    if (gender === "male") {
      bmr = 66.5 + 13.75 * weightNum + 5 * heightNum - 6.78 * ageNum;
    } else if (gender === "female") {
      bmr = 655 + 9.56 * weightNum + 1.85 * heightNum - 4.68 * ageNum;
    } else {
      setResult("Invalid gender selection");
      return;
    }

    const activityMultipliers = {
      Low: 1.2,
      Medium: 1.3,
      High: 1.4,
    };

    const multiplier = activityMultipliers[activity] || 1;
    setResult(`Your BMR is: ${(bmr * multiplier).toFixed(2)} calories`);
  };

  return (
    <section className="Bmr">
      <div className="bmr-container">
        <form onSubmit={calculateBmr}>
          <h4>Calculate Your Basal Metabolic Rate (BMR)</h4>

          <div className="form-group">
            <label htmlFor="gender">Gender:</label>
            <select id="gender" value={gender} onChange={(e) => setGender(e.target.value)}>
              <option value="" hidden>Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>

            <label htmlFor="weight">Weight (kg):</label>
            <input type="number" id="weight" placeholder="kg" value={weight} onChange={(e) => setWeight(e.target.value)} />

            <label htmlFor="height">Height (cm):</label>
            <input type="number" id="height" placeholder="cm" value={height} onChange={(e) => setHeight(e.target.value)} />

            <label htmlFor="age">Age (years):</label>
            <input type="number" id="age" placeholder="years" value={age} onChange={(e) => setAge(e.target.value)} />

            <label htmlFor="activity">Activity Level:</label>
            <select id="activity" value={activity} onChange={(e) => setActivity(e.target.value)}>
              <option value="" hidden>Choose your activity level</option>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>

            <button type="submit">Calculate BMR</button>
          </div>

          {result && <div id="bmr-result"><p>{result}</p></div>}
        </form>
      </div>
    </section>
  );
};

export default Bmr;
