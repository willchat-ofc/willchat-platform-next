export const Header = () => {
  //"",
  return (
    <nav className="flex justify-between h-16 align-middle font-bossa-regular">
      <div className="flex items-center h-full">
        <span className="mx-10 text-xl font-semibold">
          <button>WILLCHAT</button>
        </span>
        <div className="flex h-full gap-6 items-center [&_li]:h-full [&_li]:flex hover:[&_li_button]:text-[#ffffffab] justify-center">
          <li className="h-full flex">
            <button>Home</button>
          </li>
          <li className="h-full flex">
            <button>Docs</button>
          </li>
          <li className="h-full flex">
            <button>Support</button>
          </li>
        </div>
      </div>
      <div className="flex mx-10 gap-6 hover:[&_button]:text-[#ffffffab]">
        <button>Sign In</button>
        <button>Try Free</button>
      </div>
    </nav>
  );
};
