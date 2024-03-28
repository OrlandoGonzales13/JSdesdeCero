//EJERCICIOS TRANSACCION DE ANALISIS

const transactions = [
    {id: 1, description: 'Grocery', amount: -50},
    {id: 2, description: 'Salary', amount: 2000},
    {id: 3, description: 'Utility Bill Payment', amount: -100},
    {id: 4, description: 'Online', amount: -30}
]

//1.Calculate total balance

const totalBalance = transactions.reduce((acc, transaction) => acc + transaction.amount, 0)
console.log('Total Balance: ', totalBalance)

//2.Find tjje ;argest transactions (income or expense)

const largestTransaction = transactions.reduce((maxTransaction, transaction) =>{

    return Math.abs(transaction.amount) > Math.abs(maxTransaction.amount) ? transaction : maxTransaction
}, transactions[0]) 


console.log('LargestTransaction: ', largestTransaction)


//3. Filter Purcjase Transactions

const purchaseTransactions = transactions.filter(transaction => transaction.amount <0)
console.log('Purchase Transactions ' ,purchaseTransactions)

//4.Find a Transaction by Description

const specificTransaction = transactions.find(transaction => transaction.description ==='Grocery')
console.log('Specific Transaaction: ', specificTransaction)

// 5. Find the index of a Transaction by Amount

const indexTransactionWhitAmount = transactions.findIndex(transaction => transaction.amount===2000)
console.log('Index Transaction Whit Amount 2000' ,indexTransactionWhitAmount)

//6.Update transaction Descriptions
transactions.forEach(transaction => {
    if (transaction.amount <0){
        transaction.description = `Expense: ${transaction.description}`
    } else {
        transaction.description = `Income: ${transaction.description}`
    }
})

console.log('Update Transatons : ', transactions)

