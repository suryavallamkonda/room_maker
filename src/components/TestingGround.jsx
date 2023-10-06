export default function TestingGround() {
  const title = document.getElementById("splash");

  title.onmouseover = console.log("hi");

  return (
    <>
      <main className="bg-black h-screen overflow-hidden py-[50vh]">
        <h1
          id="splash"
          className="w-fit bg-black text-3xl text-white ml-[20vw] rounded-md p-2 tracking-widest
                        transition ease-in-out delay-75  
                       hover:bg-white 
                       hover:text-black 
                       hover:scale-[1.4] 
                       duration-300"
        >
          abacadaba
        </h1>
      </main>
    </>
  );
}
