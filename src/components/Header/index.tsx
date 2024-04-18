export const Header = () => {
  return (
    <nav className="flex justify-between h-16 align-middle">
      <div className="flex items-center h-full">
        <span className="mx-10">WILLCHAT</span>
        <div className="flex gap-4 items-center justify-center">
          <li className="h-max">Home</li>
          <li>Docs</li>
          <li>Support</li>
        </div>
      </div>
      <div className="flex mx-10 gap-4">
        <button>Sign In</button>
        <button>Try Free</button>
      </div>
    </nav>
  );
};
