// task 1 = Create a function that returns a Promise and resolves after 2 seconds with the message "Hello after delay".
function hello() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("hello after delay ");
    }, 2000);
  });
}
hello().then((res) => {
  console.log(res);
});


// task 2 = Goal: Create a function checkEven(number) that returns a Promise.

// 	Resolve with "Even number" if even.

// 	Reject with "Odd number" if odd.

function checkEven() {
  let number = Math.floor(Math.random() * 1000);

  console.log(number);
  return new Promise((res, rej) => {
    if (number % 2 === 0) {
      res("even number ");
    } else {
      rej("odd number ");
    }
  });
}
checkEven()
  .then((res) => console.log(res))
  .catch((rej) => console.log(rej));
// task 3 = Simulate a fake API call that takes 3 seconds and returns a list of users
function fakeApiCall() {
  let users = ["anuj", "gautam", "yash", "virat"];

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(users);
    }, 3000);
  });
}

fakeApiCall()
  .then((users) => {
    for (const element of users) {
      console.log(element);
    }
    console.log("API Success");
  })
  .catch(() => {
    console.log("API Error");
  });

// task 4 = Create 3 functions:

// 	startTask() → resolves "Task started"

// 	processTask() → resolves "Task in progress"

// 	endTask() → resolves "Task completed"

// 	Call them in sequence using .then() chaining.
function startTask() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Task started");
    }, 1000);
  });
}

function processTask() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Task in progress");
    }, 1000);
  });
}

function endTask() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Task completed");
    }, 1000);
  });
}

// Promise chaining
startTask()
  .then((res) => {
    console.log(res);
    return processTask();
  })
  .then((res) => {
    console.log(res);
    return endTask();
  })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log("Error:", err);
  });

// task 5=Step 1: User places an order — takes 1 second.

// 	Step 2: Check if the item is in stock — takes 2 seconds.

// 		If item is "pizza", it's available.

// 		For any other item, reject with "Item not available".

// 	Step 3: Process payment — takes 1.5 seconds.

// 	Step 4: Confirm order.
let items = ["pizza", "burger", "garlic bread"];
let number = Math.floor(Math.random() * items.length);
function placeorder() {
  return new Promise((res, rej) => {
    setTimeout(
      () => {
        res("user placing order ");
      },

      1000
    );
  });
}

function isInStock(items, number) {
  return new Promise((res, rej) => {
    setTimeout(() => {
        console.log("item orderd  ",items[number]);
      if (items[number] === "pizza") {
        res("item is available");
      } else {
        rej("item is not available");
      }
    }, 2000);
  });
}
function processOrder() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("processing payment ");
    }, 1500);
  });
}
function confirmOrder() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("confirmation order ");
    }, 500);
  });
}
placeorder()
  .then((res) => {
    console.log(res);
    return isInStock(items, number);
  })
  
  .then((res) => {
    console.log(res);
    return processOrder()
  })
  
  .then((res) => {
    console.log(res);
    return confirmOrder()
  })
  .then((res) => console.log(res) )

.catch((rej) => {
    console.log(rej);
  })