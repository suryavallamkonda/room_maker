import { BiMenu } from "react-icons/bi";

function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-none">
        <button className="btn btn-square btn-ghost">
          <BiMenu size="1.5rem" />
        </button>
      </div>
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">room maker</a>
      </div>
    </div>
  );
}

export default function Layout({ children }) {
  return (
    <>
      {/* <Nav  bar /> */}
      <main>{children}</main>
    </>
  );
}
