import './App.css';
import Person from './Person';
import Button from './Button';
import Header from './Header';
import List from './List';
import Hello from './Fun';

function App() {
  return (
    <div className="App">
    <Person name="Abhi" age="24"/>
    <Button onClick = {Hello} text="click me" />
    <Header title="React-App" />
    <List ul="unordered list" item1="item1" item2="item2" item3="item"/>
    </div>
  );
}

export default App;


