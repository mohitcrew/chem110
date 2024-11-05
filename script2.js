document.getElementById('ewasteForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const item = document.getElementById('item').value;
    const quantity = document.getElementById('quantity').value;
    const location = document.getElementById('location').value;

    const ewasteList = document.getElementById('ewasteList');
    const li = document.createElement('li');
    li.textContent = `Item: ${item}, Quantity: ${quantity}, Location: ${location}`;
    ewasteList.appendChild(li);

    
    document.getElementById('ewasteForm').reset();
});
