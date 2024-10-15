export function getBadgeDetails(score) {
  if (score > 75) {
    return { text: "Optimized", color: "green" };
  } else if (score >= 45 && score <= 74) {
    return { text: "Can Be Improved", color: "yellow" };
  } else {
    return { text: "Needs Work", color: "red" };
  }
}

export const priorityStyles = {
  High: { text: "High Priority", color: "red" },
  Medium: { text: "Medium Priority", color: "orange" },
  Low: { text: "Low Priority", color: "zinc" },
};

// Function to get progress bar color based on percentage
export function getProgressBarColor(percentage) {
  if (percentage > 75) {
    return "green";
  } else if (percentage >= 45 && percentage <= 74) {
    return "yellow";
  } else {
    return "red";
  }
}
