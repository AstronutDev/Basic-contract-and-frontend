import { FC } from "react";
import { NavPropsType } from "../types/nav";

const Nav: FC<NavPropsType> = ({ connect, user }) => {
  const address = !user ? "" : user.slice(0, 5) + "..." + user.slice(-3);

  return (
    <>
      <div className="flex justify-between p-4 shadow-md">
        <div className="flex items-center">
          <span className="text-2xl sm:text-4xl pb-1 font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-800 to-yellow-300">
            Pokedex master
          </span>
        </div>
        <div>
          <button
            onClick={connect}
            className="p-2 bg-gradient-to-r from-yellow-400 to-blue-500 rounded-lg"
          >
            {!user ? "Connect Wallet" : address}
          </button>
        </div>
      </div>
    </>
  );
};
export default Nav;
