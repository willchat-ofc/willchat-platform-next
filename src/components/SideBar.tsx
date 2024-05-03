export const SideBar = () => {
  return (
    <nav className="border-r border-[#ffffff23]">
      <ul className="[&_button]:px-12 [&_li]:py-1.5 [&_li]:my-1 ml-1 [&_li]:duration-200 [&_li]:">
        <p></p>
        <li className="group hover:bg-[#7777774d] cursor-pointer">
          <button className="group-hover:border-l group-hover:border-[#bbbbbb]">
            Home
          </button>
        </li>
        <li className="group hover:bg-[#7777774d] cursor-pointer">
          <button className="group-hover:border-l group-hover:border-[#bbbbbb]">
            About
          </button>
        </li>
        <li className="group hover:bg-[#7777774d] cursor-pointer">
          <button className="group-hover:border-l group-hover:border-[#bbbbbb]">
            Contact
          </button>
        </li>
      </ul>
    </nav>
  );
};
