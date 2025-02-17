import { useState } from "react";
import PhotoAlbum from "./PhotoAlbum";
import "./MainOptions.css";

const MainOptions = () => {
  const [activeOption, setActiveOption] = useState(null);
  const [hoveredOption, setHoveredOption] = useState(null);

  const handleClick = (option) => {
    setActiveOption((prev) => (prev === option ? null : option));
  };

  return (
    <div className="main-options-wrapper">
      <div className={`main-options-container ${activeOption ? "active" : ""}`}>
        {["album", "carta", "nosotros"].map((option, index) => (
          <div
            key={option}
            className={`option-card ${option} ${
              hoveredOption === option ? "hovered" : ""
            } ${activeOption === option ? "selected" : ""}`}
            onMouseEnter={() => setHoveredOption(option)}
            onMouseLeave={() => setHoveredOption(null)}
            onClick={() => handleClick(option)}
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <div className="circle">{index + 1}</div>
            <div className="option-content">
              {option.charAt(0).toUpperCase() + option.slice(1)}
            </div>
            {hoveredOption === option && (
              <div className="preview">
                {option === "album"
                  ? "📷 Ver álbum"
                  : option === "carta"
                  ? "📜 Ver carta"
                  : "ℹ️ Sobre nosotros"}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Componente Expandido */}
      {activeOption && (
        <div className="expanded-component">
          {activeOption === "album" ? (
            <PhotoAlbum />
          ) : activeOption === "carta" ? (
            <h2>Carta</h2>
          ) : (
            <h2>Nosotros</h2>
          )}
        </div>
      )}
    </div>
  );
};

export default MainOptions;
