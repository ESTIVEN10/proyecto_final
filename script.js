document.getElementById('nameForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
  
    const response = await fetch('/save', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: `name=${encodeURIComponent(name)}`
    });
  
    const text = await response.text();
    document.getElementById('response').textContent = text;
  });
  