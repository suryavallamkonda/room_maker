


function Navbar() {
    return (
        <nav class="flex items-center justify-between flex-wrap bg-slate-600 p-6">
        <a href="/" class="flex items-center flex-shrink-0 text-white mr-6">
          <span class="font-bold space text-3xl tracking-wider">ROOM MAKER</span>
        </a>
      </nav>
    )
}




export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  )
}