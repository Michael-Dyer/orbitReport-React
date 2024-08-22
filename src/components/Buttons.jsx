import satData from "./satData"
import "./styling.css"


const Buttons = ({ filterByType, setSat, displaySats }) => {
  return (
    <div className="flex-container">
      {/* creates a button for each unique orbit type */}
      {displaySats.map((sat, id) => {
        return (
          <button onClick={() => filterByType(sat)} key={id}>
            {sat} Orbit
          </button>
        );
      })}
      
      
      <button onClick={() => setSat(satData)}>        
        All Orbits
      </button>
    </div>
  );
};

export default Buttons;