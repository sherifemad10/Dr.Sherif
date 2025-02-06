"use client";
import { useState, useMemo } from "react";
import "./bmi.modules.scss";
import Image from "next/image";

const Bmi = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [result, setResult] = useState(null);
  const [status, setStatus] = useState("");
  const [advice, setAdvice] = useState("");

  const calculateBMI = (e) => {
    e.preventDefault();

    if (weight && height) {
      const bmi = weight / Math.pow(height / 100, 2);
      setResult(bmi.toFixed(2));

      const bmiStatus =
        bmi <= 18.5
          ? "Underweight"
          : bmi <= 24.9
          ? "Normal weight"
          : bmi <= 29.9
          ? "Overweight"
          : bmi <= 35
          ? "Obese"
          : bmi <= 40
          ? "Obese type 2"
          : "Extremely obese";

      const bmiAdvice =
        bmi <= 18.5
          ? "Maintaining a healthy weight is essential for overall health. If you are underweight, a proper diet can help prevent health risks such as low energy and nutrient deficiencies."
          : bmi <= 24.9
          ? "Your weight is within a healthy range. To maintain it, focus on a balanced diet, regular exercise, and a healthy lifestyle."
          : bmi <= 29.9
          ? "You are now in the obesity stage, which increases the risk of serious health issues. It's essential to follow a proper diet and lifestyle changes."
          : bmi <= 35
          ? "It is essential to take action now to prevent health complications. Follow a balanced diet, exercise regularly, and monitor your health from time to time."
          : bmi <= 40
          ? "You need to lose weight now to prevent serious health issues. If your weight continues to increase, surgical intervention may become necessary."
          : "Surgical intervention must occur immediately to lose weight. This is not optional. It is mandatory for you to maintain your health.";

      const additionalAdvice =
        bmi <= 18.5
          ? "Consult a nutritionist for a personalized plan to gain weight healthily."
          : bmi <= 24.9
          ? "Keep up the good work! Regular check-ups can help you stay on track."
          : bmi <= 29.9
          ? "A personalized workout plan can help you safely lose weight. Consider working with a fitness coach."
          : bmi <= 35
          ? "You can start by joining a weight loss program to get personalized coaching."
          : "Consult a medical professional immediately to discuss potential medical interventions.";

      setStatus(bmiStatus);
      setAdvice(bmiAdvice);
      setExtraAdvice(additionalAdvice);
    } else {
      setResult(null);
      setStatus("");
      setAdvice("");
      setExtraAdvice("");
      setShowExtraAdvice(false);
    }
  };

  const bmiImage = useMemo(() => {
    if (result > 0) {
      if (result <= 18.5) return "/underwight.png";
      if (result <= 24.9) return "/loss-wight.png";
      if (result <= 29.9) return "/fat.png";
      if (result <= 35) return "/obasty.png";
      return "/obasty3.png";
    }
    return null;
  }, [result]);

  return (
    <section className="Bmi">
      <div className="bmiContainer">
        <div className="bmi-form">
          <h5 data-aos="fade-down">Body Mass Index (BMI)</h5>
          <p data-aos="fade-down">
            The Body Mass Index (BMI) is a simple calculation that can be used
            to gauge whether someone is overweight or underweight.
          </p>
          <form onSubmit={calculateBMI} data-aos="fade-down">
            <label htmlFor="weight">Weight (kg):</label>
            <input
              type="number"
              id="weight"
              name="weight"
              required
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />

            <label htmlFor="height">Height (cm):</label>
            <input
              type="number"
              id="height"
              name="height"
              required
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />

            <button type="submit" className="submit" data-aos="fade-down">
              Calculate BMI
            </button>

            {result && (
              <>
                <div id="result" data-aos="fade-down">
                  <p>Your BMI is {result}</p>
                </div>

                {bmiImage && (
                  <div id="result-img" data-aos="fade-down">
                    <img src={bmiImage} alt="BMI Result" />
                  </div>
                )}

                <div id="status" data-aos="fade-down">
                  <p>Status: {status}</p>
                </div>

                <div id="advice" data-aos="fade-down">
                  <p>Advice: {advice}</p>
                </div>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Bmi;
