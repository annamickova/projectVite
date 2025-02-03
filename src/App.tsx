import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from "./Counter";
import BgColor from "./BgColor";
import Title from "./Title";
import {UserCard} from "./UserCard";
import {User} from "./types";

const user1: User = {
    age: 20,
    email: "email1",
    isStudent: true,
    name: "Tomas",
    address: "jecna 30",
    hobbies: ["fotbal ", "hra na kytaru ", "vareni "]
}
const user2: User = {
    age: 30,
    email: "email2",
    name: "Jan",
    address: "jecna"
}


function App() {
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
        <Counter /> {}
        <Counter /> {}
        <BgColor />
        <div>
            <Title text="Můj první nadpis" color="blue" />
            <Title text="Druhý nadpis" color="green" />
            <Title text="Třetí nadpis" color="red" />
            <Title text="Tento nadpis nemá definovanou barvu" />
        </div>
        <UserCard user={user1}/>
        <UserCard user={user2}/>
      <div className="card">
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
