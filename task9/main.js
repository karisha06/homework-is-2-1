const addContract = () => { 
    const contractNumber = document.getElementById('contractNumber').value; 
    const contractDate = document.getElementById('contractDate').value; 
    const contractDescription = document.getElementById('contractDescription').value; 
    const contractStatus = document.getElementById('contractStatus').value; 
    const contractImage = document.getElementById('contractImage').value; 
 
    const contractCard = ` 
        <div class="contract-card"> 
            <p><strong>Номер контракта:</strong> ${contractNumber}</p> 
            <p><strong>Дата:</strong> ${contractDate}</p> 
            <p><strong>Описание:</strong> ${contractDescription}</p> 
            <p><strong>Статус контракта:</strong> ${contractStatus}</p> 
            <img src="${contractImage}" alt="Contract Image"> 
        </div> 
    `; 
 
    document.getElementById('contractList').innerHTML += contractCard; 
}
