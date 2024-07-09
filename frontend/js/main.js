document.addEventListener('DOMContentLoaded', () => {
    const dashboard = document.getElementById('dashboard');
    const dataForm = document.getElementById('data-form');
    const dataList = document.getElementById('data-list');
  
    // Fetch and display existing data
    fetch('http://localhost:5000/api/data')
      .then(response => response.json())
      .then(data => {
        displayData(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  
    // Handle form submission
    dataForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('name').value;
      const value = document.getElementById('value').value;
  
      fetch('http://localhost:5000/api/data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, value }),
      })
      .then(response => response.json())
      .then(newData => {
        displayData([newData]);
        dataForm.reset();
      })
      .catch(error => console.error('Error adding data:', error));
    });
  
    function displayData(data) {
      data.forEach(item => {
        const div = document.createElement('div');
        div.textContent = `${item.name}: ${item.value}`;
        dataList.appendChild(div);
      });
    }
  });
  