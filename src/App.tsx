import MyHello from "./components/MyHello.tsx";
import Count1 from "./components/Count1.tsx";
import UserList from "./components/UserList.tsx";


function App() {


  return (
      <>
          <h1 className="text-7xl font-bold underline bg-amber-600">
              Hello world!_!
          </h1>

          <UserList></UserList>

          <Count1></Count1>

          <MyHello></MyHello>
      </>
  )
}

export default App
