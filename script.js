document.getElementById('ewasteForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const itemName = document.getElementById('itemName').value;
    const quantity = document.getElementById('quantity').value;
    const condition = document.getElementById('condition').value;

    const ewasteList = document.getElementById('ewasteList');
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('item');
    itemDiv.innerHTML = `<strong>Item:</strong> ${itemName} <br>
                         <strong>Quantity:</strong> ${quantity} <br>
                         <strong>Condition:</strong> ${condition}`;
    
    ewasteList.appendChild(itemDiv);


    document.getElementById('ewasteForm').reset();
});