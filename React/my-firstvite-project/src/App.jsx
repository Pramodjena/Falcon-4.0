/* eslint-disable no-unused-vars */
import "./App.css";
import Card from "./components/Card";

function App() {
  // object literal method
  // const user = {
  //   name: "Pramod Kumar Jena",
  //   age: 26,
  //   role: "Full Stack Developer",
  //   city: "Cuttack",
  // };

  // constructor method
  const User = function (name, age, role, city) {
    this.name = name;
    this.age = age;
    this.role = role;
    this.city = city;
  };

  const user1 = new User("Pramod", 25, "FSD", "Cuttack");
  const user2 = new User("Sudeshna", 22, "Backend", "Baripda");

  return (
    <div>
      <h1 className="heading">Hello React People!!! Wel Come!</h1>
      <h2 className="sub_heading">We are learning props and components</h2>
      <div className="main_container">
        <Card user={user1} />
        <Card user={user1} />
        <Card user={user1} />
      </div>
    </div>
  );
}

export default App;
