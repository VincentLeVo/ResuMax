export function getBadgeDetails(score) {
  if (score >= 80) {
    return { text: 'Resume is Excellent', color: 'green' }
  } else if (score > 65 && score <= 79) {
    return { text: 'Almost There', color: 'lime' }
  } else if (score >= 45 && score <= 65) {
    return { text: 'Needs Some Improvement', color: 'yellow' }
  } else {
    return { text: 'Significant Updates Needed', color: 'red' }
  }
}

export const priorityStyles = {
  High: { text: 'High Priority', color: 'red' },
  Medium: { text: 'Medium Priority', color: 'yellow' },
  Low: { text: 'Low Priority', color: 'zinc' },
}

// Function to get progress bar color based on percentage
export function getPercentageColor(percentage) {
  if (percentage >= 85) {
    return 'green'
  } else if (percentage >= 70) {
    return 'lime'
  } else if (percentage >= 55) {
    return 'yellow'
  } else if (percentage >= 30) {
    return 'orange'
  } else {
    return 'red'
  }
}
