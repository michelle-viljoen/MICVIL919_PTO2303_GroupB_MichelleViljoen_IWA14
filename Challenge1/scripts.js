firstName = 'John';
age = 35;
hobby = 'Coding';

function logTwice(parameter) {
  console.log(parameter)
  console.log(parameter)

}
const hobbys = () => {
  logTwice(`Hello, ${firstName} (${age}). I love ${hobby}!`)
}

hobbys()

