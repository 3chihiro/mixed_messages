const trainingMenu = require('./module/utility');

const upperBodyMuscles = trainingMenu.byMuscleArea([
  'Push-up',
  'Dips',
  'Incline-push-ups',
]);

const coreMuscles = trainingMenu.byMuscleArea([
  'Plank',
  'Side-plank',
  'bridge',
  'Low-plank',
  'Sit-ups',
]);

const lowerBodyMuscles = trainingMenu.byMuscleArea([
  'Squats',
  'Lunges',
  'Leg-raises',
  'Calf-raises',
]);
