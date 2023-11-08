function App(){
  let msg = " Hello Good Morning"

  let emp ={
              id:101,
              ename:"Srinath",
              salary:85000
           }

  return (
    <>
    <nav className=" navbar navbar-light bg-dark text-light raj">
      <h2>APP component</h2>
      <hr />
    </nav>
    <div>
      <pre>{JSON.stringify(emp)}</pre>
    <h1>App Component</h1>
    <h2>{msg}</h2>
    <h3 className="alret alert-success raju ">{JSON.stringify(emp)}</h3>

    </div>
    </>
         )
}

export default App