import { useState } from "react";

import './SkillsSection.css'

const skills = [
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "React", level: 90, category: "frontend" },
  { name: "TypeScript", level: 85, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },
  { name: "Next.js", level: 80, category: "frontend" },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="skills-section">
        <div className="container">
            <h2 className="skills-title">
                My <span>Skills</span>
            </h2>

            <div className="skills-grid">
                {skills.map((skill, index) => (
                <div key={index} className="skill-card">
                    <h3>{skill.name}</h3>
                    <div className="progress-bar">
                    <div
                        className="progress"
                        style={{ width: `${skill.level}%` }}
                    />
                    </div>
                    <p className="level">{skill.level}%</p>
                </div>
                ))}
            </div>
        </div>
    </section>
  );
};