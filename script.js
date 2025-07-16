const steps = document.querySelectorAll('.form-step');
const progressSteps = document.querySelectorAll('.progress-bar .step');
let currentStep = 0;

function showStep(index) {
  steps.forEach((step, i) => {
    step.classList.toggle('active', i === index);
    progressSteps[i].classList.toggle('active', i <= index);
  });
}

function nextStep() {
  if (currentStep < steps.length - 1) {
    currentStep++;
    showStep(currentStep);
  }
}

function resetForm() {
  currentStep = 0;
  showStep(currentStep);
}

document.getElementById('newFileBtn').addEventListener('click', () => {
  document.getElementById('formPanel').style.display = 'block';
  currentStep = 0;
  showStep(currentStep);
});

