import './index.css'

function Sidebar(){
  return (
    <div className="h-screen bg-[#3AAFA9]">
      <nav>
        <ul className='text-center '>
          <li>menu</li>
          <li>open</li>
          <li>save</li>
          <li>undo</li>
          <li>redo</li>
				</ul>
      </nav>
    </div>
  )
}

export default Sidebar;