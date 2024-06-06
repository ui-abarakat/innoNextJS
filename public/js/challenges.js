
// Get challenges from assets/data/challenges.json

//remaining time calculation function
function calculateRemainingTime(endDate, endTime) {
  let end = new Date(`${endDate} ${endTime}`);
  let remainingTime = (end - currentDate) / 36e5;
  let remainingDays = Math.floor(remainingTime / 24);
  let remainingHours = Math.floor(remainingTime % 24);

  return remainingTime;
}

// duration calculation function
function calculateDuration(startDate, startTime, endDate, endTime) {
  let start = new Date(`${startDate} ${startTime}`);
  let end = new Date(`${endDate} ${endTime}`);
  let durationHours = (end - start) / 36e5;
  let duration = Math.floor(durationHours / 24);
  return duration;
}
// colculate progress function
function calculateProgress(duration, remainingTime) {
  let remainingTimeNum = parseInt(remainingTime) / 24;
  let durationNum = parseInt(duration);
  let progress = 100 - ((remainingTimeNum / durationNum) * 100);
  if (progress < 0) progress = 100;
  return progress;
}










