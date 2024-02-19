
const bankTransaction = {
    amount: 820, // сумма в руб.
    date: "2024-09-02",
    sender: "Александр Полянский",
    receiver: "Карина Жильцова",
    description: "Приятного аппетита!",
};

for (let i in bankTransaction) {
    console.log(`${i}: ${bankTransaction[i]}`);
}

if (bankTransaction.amount > 1000) {
    console.log("Это крупная транзакция!");
} else {
    console.log("Это небольшая транзакция.");
}
