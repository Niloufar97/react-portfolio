import "./skill.css";
function Skill({ tech, percentage }) {
  return (
    <div className="skills-container">
      <h4>{tech}:</h4>
      <div className="skill-bar">
        <div className="skill-percentage" style={{ width: `${percentage}%` }}>
          
        </div>
      </div>
    </div>
  );
}

export default Skill;
