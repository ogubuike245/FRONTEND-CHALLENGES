const ToggleSwitch = ({ isAnnually, onToggle }) => {
  return (
    <div className="toggle-switch-container">
      <span>Annually</span>
      <div
        className={`toggle-switch ${isAnnually ? "annually" : "monthly"}`}
        onClick={onToggle}
      >
        <div className="thumb"></div>
      </div>
      <span>Monthly</span>
    </div>
  );
};

export default ToggleSwitch;
