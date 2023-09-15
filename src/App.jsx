import React from "react";
import { Canvas } from "@react-three/fiber";
import Experience from "./components/Experience";
import Sidebar from "./components/Sidebar";

// import Home from './pages/home';
import './App.css'


// function App() {
//   return (
    // <body className="bg-white h-full overflow-hidden flex flex-col">


    //   <nav className="bg-white border-gray-200 fixed top-0 w-full shadow-lg rounded-b-sm">
    //     <div className="flex flex-wrap items-center justify-between mx-auto p-5">
          
    //       <a href="#" className="flex items-center px-10">
    //         <h1 className="self-center text-4xl font-semibold whitespace-nowrap font-montserrat text-black">hsts</h1>
    //       </a>

    //       <div className="hidden w-full md:block md:w-auto">
    //         <ul className="flex flex-col md:flex-row bg-inherit rounded-md p-2 mx-4">
    //           <li>
    //             <a href="./pages/working.jsx" className="text-black bg-inherit font-montserrat text-sm mx-1">
    //               test
    //             </a>
    //           </li>
    //           <li>
    //             <a href="#" className="text-black bg-inherit font-montserrat text-sm mx-1">
    //               test
    //             </a>
    //           </li>
    //         </ul>
    //       </div>


    //       {/* <a href="http://localhost:5173/" class="flex items-center p-2 bg-green-100 rounded-md">
    //           <span class="self-center text-4xl font-semibold whitespace-nowrap font-montserrat text-white ">hstff</span>
    //       </a>

    //       <div class="hidden w-full md:block md:w-auto" id="navbar-default">
    //         <ul class="bg-inherit font-medium p-4 mx-3 rounded-lg flex flex-col md:flex-row">
    //           <li>
    //             <a href="#" class="block py-2 pl-3 pr-4 text-white text-2xl font-montserrat rounded hover:bg-green-200" aria-current="page">1</a>
    //           </li>
    //           <li>
    //             <a href="#" class="block py-2 pl-3 pr-4 text-white text-2xl font-montserrat rounded hover:bg-green-200">2</a>
    //           </li>
    //           <li>
    //             <a href="#" class="block py-2 pl-3 pr-4 text-white text-2xl font-montserrat rounded hover:bg-green-200">3</a>
    //           </li>
    //         </ul>
    //       </div> */}

    //     </div>  
    //   </nav>
    //   <div className="bg-white mt-20 flex flex-row">
    //       <div className="bg-blue-100 w-5/12 h-full p-10">
    //         <h1 className="font-montserrat text-white text-6xl mt-32">make</h1>
    //       </div>
    //       <div className="bg-red-100 w-7/12 h-full p-10">teset</div>
    //   </div>
      
    // </body>
//   );
// }

export default App;

// function Layout() {
//   return (
//     <div>
//       <nav>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/working">Working</Link>
//           </li>
//         </ul>
//       </nav>
//       <hr />
//       <Outlet />
//     </div>
//   );
// }



function App() {
  return (
    <body className="h-screen w-screen bg-white flex flex-col">
      <header className="container border-green-500 border-4 bg-neutral-200 max-w-full h-[9vh] flex flex-row justify-between p-[1vw]">
        <a href="#">
          <h1 className="text-black font-montserrat text-[3vw] bg-purple-300">
            Room Maker
          </h1>
        </a>
        <nav className="bg-red-300 p-[1vw]">
          <ul className="flex flex-col md:flex-row rounded-md">
            <li>
              <a href="#" class="block px-[0.5vw] py-[0.75vh] bg-amber-600 text-black text-[1vw] font-montserrat hover:bg-green-200" aria-current="page">Home</a>
            </li>
            <li>
              <a href="#" class="block px-[0.5vw] py-[0.75vh] bg-amber-600 text-black text-[1vw] font-montserrat hover:bg-green-200">Design</a>
            </li>
            <li>
              <a href="#" class="block px-[0.5vw] py-[0.75vh] bg-amber-600 text-black text-[1vw] font-montserrat hover:bg-green-200">About</a>
            </li>
          </ul>
        </nav>
      </header>
      {/* <main className="container border-red-600 border-4"> 
          <article className="bg-purple-100 w-full p-32 flex flex-col justify-evenly">
            <section className="bg-purple-200 text-8xl font-montserrat w-fit">room maker</section>
            <section className="bg-inherit text-[2rem] font-montserrat">design your room!</section>
          </article>
        <section className="bg-red-100 w-full h-full p-16">
          <Canvas className="bg-inherit">
            <Experience />
          </Canvas>
        </section>
      </main> */}
{/*className="h-full flex flex-row bg-gradient-to-r from-neutral-500 to-neutral-300"*/}

      
      {/* <div className="bg-blue-100 h-[90%] w-[5%] fixed top-[10%]">
        <Sidebar />
      </div>
      <div className="h-[85%] w-[85%] bg-red-200 drop-shadow-lg fixed inset-[10%] left-[5%]">
        <Canvas>
          <color attach="background" args={["#983322"]} />
          <Experience />
        </Canvas> 
      </div> */}
    </body>
  )
}




/*<fog attach="background" args={["#101010", 10, 20]} />*/