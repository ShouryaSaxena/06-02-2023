const sname = document.getElementById('name');
const delay = document.getElementById('delay');
const button = document.getElementById('set-alarm');
const output = document.getElementById('output');

function alarm(person, delay) {

// Promise is the best way for handling multiple asynchronous operations.

  return new Promise((resolve, reject) => {       
    if (delay < 0) {
      throw new Error('Alarm delay must not be negative');
    }
    setTimeout(() => {
      resolve(`Wake up, ${person}!`);
    }, delay);
  });
}

button.addEventListener('click', async () => {
  try {
    const message = await alarm(sname.value, delay.value);
    output.textContent = message;
  }
  catch (error) {
    output.textContent = `Couldn't set alarm: ${error}`;
  }
});

//----------------------------------------------------------------------

let p1 = new Promise((resolve, reject)=>{
    setTimeout(() =>{
        resolve("Task-1 Completed");
    },5000);
});

let p2 = new Promise((resolve, reject)=>{
    setTimeout(() =>{
        resolve("Task-2 Completed.");
    },1000);
});

let p3 = new Promise((resolve, reject)=>{
    setTimeout(() =>{
        resolve(new Error("Error"));        // Error Thrown resolved.
    },2000);
});

let p4 = new Promise((resolve, reject)=>{
    setTimeout(() =>{
        resolve("Task-4 Completed.");
    },4000);
});

/*--------------------Promise.all()----------------------------*/
let promise_all = Promise.all([p1,p2,p3,p4]);
promise_all.then((value)=>{
    console.log(value);
})

/*--------------------Promise.allSettled()----------------------------*/
let promise_allset = Promise.allSettled([p1,p2,p3,p4]);
promise_allset.then((value)=>{
    console.log(value);
})

/*--------------------Promise.race()----------------------------*/
let promise_race = Promise.race([p1,p2,p3,p4]);
promise_race.then((value)=>{
    console.log(value);
})
/*--------------------Promise.any()----------------------------*/
let promise_any = Promise.any([p1,p2,p3,p4]);
promise_any.then((value)=>{
    console.log(value);
})
