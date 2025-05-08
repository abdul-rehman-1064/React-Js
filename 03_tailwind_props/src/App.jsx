
import "./App.css";
import Cards from "./components/cards";

function App() {
  
  let Myobj ={
    name:"Abdul Rehman",
    Uni:"PUGC",
  }
  let arr=[1,2,3,4]

  return (
    <>
      <h1 className="bg-green-400 text-400px text-black rounded-lg px-3 py-3 mb-5">
        Tailwind CSS
      </h1>
      <div className="flex">
      {/* <Cards username={Myobj} /> */}
      {/* <Cards username={arr} /> */}
      <Cards username="Abdul Rehman" study="PUGC" Rollno="Bscs 22026" CGPA="3.56" />
      <Cards username="Luqman" study="PUGC" Rollno="Bscs 22009" CGPA="3.58" />
      <Cards username="Usman" study="PUGC" Rollno="Bscs 22008" CGPA="3.46" />
      <Cards username="Hussain" study="PUGC" Rollno="Bscs 22005" CGPA="3.16" />
      <Cards />

      
      </div>
    </>
  );
}

export default App;
