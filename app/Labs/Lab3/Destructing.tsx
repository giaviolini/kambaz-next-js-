export default function Destructing() {
  const person = { name: "John", age: 25 };
  const { name, age } = person;
  const numbers = ["one", "two", "three"];
  const [first, second, third] = numbers;

  return (
    <div id="wd-destructing">
      <h2>Destructing</h2>
      <h3>Object Destructing</h3>
      <div>{`const { name, age } = { name: "John", age: 25 }`}</div>
      <br />
      <div>name = {name}</div>
      <div>age = {age}</div>

      <h3>Array Destructing</h3>
      <div>{`const [first, second, third] = ["one", "two", "three"]`}</div>
      <br />
      <div>first = {first}</div>
      <div>second = {second}</div>
      <div>third = {third}</div>
      <hr />
    </div>
  );
}

   