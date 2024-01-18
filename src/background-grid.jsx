import PropTypes from "prop-types";
import c from "classnames";
import "./background-grid.css";

const backgroundColors = [
  "#e9e9e9",
  "#dddddd",
  "#d1d1d1",
  "#3498db",
  "#007bff",
  "#2ecc71",
  "#28a745",
  "#ffd700",
  "#f39c12",
];

export function BackgroundGrid({ selectedColor, onClick }) {
  return (
    <div className="background-grid">
      {backgroundColors.map((color, index) => (
        <span
          key={index}
          className={c(
            "bg-color",
            color === selectedColor && "bg-color--selected"
          )}
          style={{ backgroundColor: color }}
          onClick={() => onClick(color)}
        />
      ))}
    </div>
  );
}

BackgroundGrid.propTypes = {
  onClick: PropTypes.func.isRequired,
  selectedColor: PropTypes.string,
};
