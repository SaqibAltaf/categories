import React from 'react';
import './App.css';


const data = [
  {
    name: "Apple",
    desc: "Apple category"
  }, {
    name: "Mango",
    desc: "Mango category"
  }, {
    name: "Banana",
    desc: "Banana category"
  }, {
    name: "Orange ",
    desc: "Orange category"
  }, {
    name: "Grapes",
    desc: "Grapes category"
  },
]
function Categories({ props }) {
  return (
    props.map((val, key) => {
      return (
        <li key={key} onClick={() => this.callback(key)}>{val.name}</li>
      )
    })
  )
}


function Category({ callback }) {
const id = (id)=>callback(id);
console.log(id)
  return (
    <h1></h1>

  )
}



const callback1 = (id) => {
  return id
}


function App() {
  return (
    <div className="App">
      <Categories props={data}></Categories>
      <Category callback={callback1} />
    </div>
  );
}

export default App;
