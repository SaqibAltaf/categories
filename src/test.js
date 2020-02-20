import React, {useState} from 'react';
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
function Categories({ props, callback }) {
  return (
    props.map((val, key) => {
      return (
        <li key={key} onClick={()=>callback(key)}>{val.name}</li>
      )
    })
  )
}


function Category({ id }) {
console.log(id)
  return (
    <h1>Detail {id}</h1>

  )
}






function App() {
  const [state, setstate]= useState(0)

  function  callback1(id) {
    setstate(id)
  }

  return (
    <div className="App">
      <Categories props={data} callback={setstate}></Categories>
      <Category id={state} />
    </div>
  );
}

export default App;
