import React from "react";
import "./App.css";

// Reusable TeacherCard component using props
function TeacherCard({ name, subject, experience }) {
  return (
    <div className="teacher-card">
      <h2>{name}</h2>
      <p><strong>Subject:</strong> {subject}</p>
      <p><strong>Experience:</strong> {experience} years</p>
    </div>
  );
}

function App() {
  return (
    <div className="app">
      <h1>Teacher Details</h1>

      <div className="teacher-container">
        <TeacherCard name="Mr. Rahul" subject="Mathematics" experience={8} />
        <TeacherCard name="Ms. Priya" subject="Science" experience={5} />
        <TeacherCard name="Mr. Arjun" subject="English" experience={10} />
      </div>
    </div>
  );
}

export default App;
