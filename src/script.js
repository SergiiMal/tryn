// const propName = "name";
// const user = {
// 	age: 25,
// 	[propName]: "Genri",
// };
// console.log(Object.values(user));
// console.log(Object.keys(user));
// console.log(user);
// console.log(user.name);
// -----------------------------------------------------

// const aprtment = {
// 	descr: "Special",
// 	rating: 4,
// 	price: 2015,
// };
// const values = [];
// const keys = Object.keys(aprtment);
// for (const key of keys) {

// 	console.log(key)

// 	values.push(aprtment[key]);
// }
// console.log(values);
// -----------------------------------------------------

// const user = {
// 	name: "Sergiy",
// 	age: 30,
// };
// console.table(user);
// console.dir(user)
// -----------------------------------------------------


// Метод БАБЕЛСОРТ==========


// const langs = ["python", "javascript", "c++", "php", "ruby"];
// const langeSorted = langs.sort();

// console.log("file: script.js:38  langeSorted:", langeSorted)

// for (const i in langs) {
// 	let wasSwap = false;
// 	console.log("file: script.js:47  wasSwap:", wasSwap)
// 	for (let j = 0; j < langs.length - 1 - i; j++){
// 		if (langs[j].charCodeAt(0) > langs[j + 1].charCodeAt(0)) {
// 			const swap = langs[j];
// 			langs[j] = langs[j + 1];
// 			langs[j + 1] = swap;
// 			wasSwap = true;
// 		}
// 		if (!wasSwap) break;
// 	}
// }

// console.log(langs)
// ----------------------------------------------------

// const arr = ['first', 'second'];
// console.log(arr);

// const swap = arr[0];//'first'
// arr[0] = arr[1];//['second', 'second']
// arr[1] = swap;//['second', 'first']
// console.log(arr)
// ----------------------------------------------------

// const aprtment = {
// 	descr: "Special",
// 	rating: 4,
// 	price: 2015,
// };
// const keys = [];
// const values = [];
// for (const key in aprtment) {
// 	keys.push(key);
// 	values.push(aprtment[key]);
// }
// 	console.log(aprtment)


// const user = {
// 	name: "Mango",
// 	age: 35,
// 	hobby: "html",
// 	premium: true,
// };
// user.mood = "happi";
// user.hobby = "skydiving";
// user.premium = false;
// const userKey = Object.keys(user)

// for (const key of userKey) {
// 	console.log(`${key}:${user[key]}`)
// }
// ----------------------------------------------------

// const salaries = {
// 	Jon: 100,
// 	Ann: 160,
// 	Pete: 130,
// };
// const salarArr = Object.values(salaries);
// let sum = 0;
// for (const salary of salarArr) {
// 	sum += salary;
	
// }
// console.log(sum);
// ----------------------------------------------------

// const stones = [
// 	{ name: "Smaragd", price: 1300, quantity: 4 },
// 	{ name: "Diamand", price: 2700, quantity: 3 },
// 	{ name: "Sapfir", price: 400, quantity: 7 },
// 	{ name: "Schebin", price: 200, quantity: 2 },
// ];

// console.log(calcTotalPrice(stones, 'Schebin'))

// function calcTotalPrice(stounes, stoneName) {
	
// 	for (const stone of stounes) {
// 		if (stone.name === stoneName) {
			
// 		return 	stone.price*stone.quantity
// 			}
// 	}
	
// }
// ----------------------------------------------------

//-------------------------- Internet BANK---------------------
 
// const transactionTypes = {
// 	DEPOSIT: 'deposit',
// 	WITHDRAW: 'withdraw',
// };

// const account = {
// 	balance : 0,
// 	transactions: [],
// 	createTransaction(amount, type) {
// 		return {
// 			id: this.transactions.length,
// 			amount,
// 			type,
// 		}
// 	},
// 	deposit(amount) {
// 		this.balance += amount;
// 		const transaction = this.createTransaction(amount, transactionTypes.DEPOSIT);
// 		this.transactions.push(transaction);
// 	},
// 	withdraw(amount) {
// 		if (amount > this.balance) {
// 			console.log("NO kech")
// 		}
// 		this.balance -= amount;
// 		const transaction = this.createTransaction(amount, transactionTypes.WITHDRAW);
// 		this.transactions.push(transaction);
// 	},
// 	getBalance() {
// 		return this.balance;
// 	},
// 	getTransactionDetailis(id) {
// 		for (const transaction of this.transactions) {
// 			if (id === transaction.id)
// 				return transaction;
// 			}
// 	},
// 	getTransactionTotal(type) {
// 		let total = 0;
// 		for (const transaction of this.transactions) {
// 			if (type === transaction.type) total += transaction.amount;
			
// 		}
// 		return total;
// 	},

// };
// console.log(account.getBalance());

// account.deposit(500);
// console.log(account.getBalance());

// account.withdraw(200);
// account.withdraw(500);

// account.deposit(1000);

// account.withdraw(100);
// account.withdraw(200);
// account.withdraw(300);

// console.log(account.getBalance());

// console.log(account.getTransactionDetailis(1));

// console.log(account.getTransactionTotal(transactionTypes.WITHDRAW));
// console.log(account.getTransactionTotal(transactionTypes.DEPOSIT));

// console.log(account);
