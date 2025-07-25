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


let tankLevels = {
            main: 65,
            small1: 45,
            small2: 85
        };

        function init() {
            updateTanks();
            startAnimation();
            createBubbles();
            
            // Show alert after 2 seconds
            setTimeout(() => {
                showAlert();
            }, 2000);
        }

        function updateTanks() {
            // Main tank
            document.getElementById('mainLiquid').style.height = tankLevels.main + '%';
            document.getElementById('mainLevel').textContent = tankLevels.main + '%';

            // Small tank 1
            document.getElementById('smallLiquid1').style.height = tankLevels.small1 + '%';
            document.getElementById('smallLevel1').textContent = tankLevels.small1 + '%';

            // Small tank 2
            document.getElementById('smallLiquid2').style.height = tankLevels.small2 + '%';
            document.getElementById('smallLevel2').textContent = tankLevels.small2 + '%';
        }

        function startAnimation() {
            setInterval(() => {
                // Simulate liquid transfer and level changes
                tankLevels.main += (Math.random() - 0.5) * 2;
                tankLevels.small1 += (Math.random() - 0.5) * 1.5;
                tankLevels.small2 += (Math.random() - 0.5) * 1;

                // Keep levels in realistic bounds
                tankLevels.main = Math.max(60, Math.min(75, tankLevels.main));
                tankLevels.small1 = Math.max(40, Math.min(55, tankLevels.small1));
                tankLevels.small2 = Math.max(80, Math.min(90, tankLevels.small2));

                updateTanks();
            }, 3000);
        }

        function createBubbles() {
            ['mainBubbles', 'smallBubbles1', 'smallBubbles2'].forEach(id => {
                const container = document.getElementById(id);
                for (let i = 0; i < 6; i++) {
                    const bubble = document.createElement('div');
                    bubble.className = 'bubble';
                    bubble.style.left = Math.random() * 80 + 10 + '%';
                    bubble.style.width = bubble.style.height = (Math.random() * 4 + 2) + 'px';
                    bubble.style.animationDelay = Math.random() * 4 + 's';
                    bubble.style.animationDuration = (3 + Math.random() * 2) + 's';
                    container.appendChild(bubble);
                }
            });
        }

        function showAlert() {
            document.getElementById('alertPopup').classList.add('show');
        }

        function closeAlert() {
            document.getElementById('alertPopup').classList.remove('show');
        }

        // Initialize on page load
        window.onload = init;

