document.addEventListener('DOMContentLoaded', function() {
    const startDateInput = document.getElementById('dateDebut');
    const startTimeInput = document.getElementById('heureDebut');
    const endDateInput = document.getElementById('dateFin');
    const endTimeInput = document.getElementById('heureFin');
    const calculateButton = document.querySelector('.btnn');

    calculateButton.addEventListener('click', calculateHalfDuration);

    function calculateHalfDuration() {
      const startDate = new Date(startDateInput.value + 'T' + startTimeInput.value);
      const endDate = new Date(endDateInput.value + 'T' + endTimeInput.value);

      if (isNaN(startDate) || isNaN(endDate)) {
        alert('Veuillez sélectionner vos dates et vos horaires  ');
        return;
      }

      const duration = endDate - startDate;
      const halfDuration = duration / 2;

      const middleDate = new Date(startDate.getTime() + halfDuration);

      const resultContainer = document.getElementById('resultContainer');
      resultContainer.innerText = 'Le milieu des vacances est le : ' + middleDate.toLocaleString();
    }
  });