#!/usr/bin/env node

const readline = require("readline");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

console.log("Загадано число в диапазоне от 0 до 100");

const userNum = Math.floor(Math.random() * 100);

rl.on("line", (data) => {
	const num = Number(data);

	if (isNaN(num) || num < 0 || num > 100) {
		console.log("Введите число от 0 до 100");
		return;
	} else {
    if (userNum > num) {
      console.log("Больше");
    } else if (userNum < num) {
      console.log("Меньше");
    } else {
      console.log(`Отгадано число ${userNum}`);
      rl.close();
    }
  }
});
