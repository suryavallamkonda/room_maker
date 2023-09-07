import { Canvas } from "@react-three/fiber";
import './App.css'
import Experience from "./Components/Experience";
import Sidebar from "./Sidebar";


function App() {
  return (
    <div className="h-screen w-screen bg-[#3AAFA9] relative">
      <div className="bg-[#3AAFA9] h-[10%]">
        <img src = "./resized_white_logo.svg" className = "bg-[#3AAFA9] h-full w-[5%] resize-y"/>
        <h1 className="font-bold text-6xl uppercase fixed top-7 left-[5%] drop-shadow-md text-[#FEFFFF] font-mono">
          Room Maker
        </h1>
      </div>
      <div className="bg-blue-100 h-[90%] w-[5%] fixed top-[10%]">
        <Sidebar />
      </div>
      <div className="h-[85%] w-[85%] bg-red-200 drop-shadow-lg fixed inset-[10%] left-[5%]">
        <Canvas>
          <color attach="background" args={["#983322"]} />
          <Experience />
        </Canvas> 
      </div>
    </div>
  )
}

export default App;


/*<fog attach="background" args={["#101010", 10, 20]} />*/