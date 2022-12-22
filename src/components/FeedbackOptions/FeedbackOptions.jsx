import React from "react";

function FeedbackOptions({ options, onLeaveFeedback }) {
    return (
      <div>
        {options.map(option => {
          return (
            <div key={option}>
              <button type="button" onClick={() => onLeaveFeedback(option)}>
                {option}
              </button>
            </div>
          );
        })}
      </div>
    );
};

export default FeedbackOptions;