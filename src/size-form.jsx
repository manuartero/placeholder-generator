import { useState } from "react";
import PropTypes from "prop-types";

export function Size({ onClick }) {
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");

  return (
    <div className="size-form">
      <label>
        Width:
        <input
          type="number"
          value={width}
          onChange={(e) => setWidth(e.target.value)}
        />
      </label>
      <label>
        Height:
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </label>
      <button
        onClick={() => {
          onClick({ width, height });
        }}
      >
        GO
      </button>
    </div>
  );
}

Size.propTypes = {
  onClick: PropTypes.func.isRequired,
};
