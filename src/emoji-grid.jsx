import PropTypes from "prop-types";
import c from "classnames";
import "./emoji-grid.css";

const emojis = [
  "👾",
  "💃",
  "🐞",
  "🍺",
  "🌈",
  "🚀",
  "🍕",
  "🎉",
  "🐼",
  "🎸",
  "🌍",
  "🚲",
];

export function EmojiGrid({ selectedEmoji, onClick }) {
  return (
    <div className="emoji-grid">
      {emojis.map((emoji, index) => (
        <span
          key={index}
          className={c("emoji", emoji === selectedEmoji && "emoji--selected")}
          onClick={() => onClick(emoji)}
        >
          {emoji}
        </span>
      ))}
    </div>
  );
}

EmojiGrid.propTypes = {
  onClick: PropTypes.func.isRequired,
  selectedEmoji: PropTypes.string,
};
