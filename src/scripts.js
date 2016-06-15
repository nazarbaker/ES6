let browsers = ['Chrome', 'Firefox', 'Edge', 'Safari', 'Opera'];

// тут виведе по черзі індекси масиву
for(let browser in browsers) {
  console.log(browser);
}

// а тут вже значення
for(let index in browsers) {
  console.log(browsers[index]);
}

// а тепер новий цикл for of - те саме що і зверху
for(let browser of browsers) {
  console.log(browser);
}
