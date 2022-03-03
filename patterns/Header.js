import Image from "next/image";
import HeaderIcon from '../components/HeaderIcon';

import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  HomeIcon,
  UserGroupIcon,
  ViewGridIcon } from '@heroicons/react/solid';

import {
  FlagIcon,
  PlayIcon,
  SearchIcon,
  ShoppingCartIcon
} from '@heroicons/react/outline';

function Header() {
  return (
    <div className="sticky top-0 z-50 bg-white flex flex-row items-center p-2 ls:px-5 shadow-md-gray-100">

      {/* Left */}
      <div className="flex flex-row items-center">
        <Image
          alt=""
          src="https://links.papareact.com/5me"
          width={40}
          height={40}
          layout="fixed"
        />
        <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
          <SearchIcon className="h-6 text-gray-600" />
          <input
            className="flex ml-2 items-center bg-gray-500 outline-none placeholder-gray-500"
            type="text"
            placeholder="Search Facebook"
          />
        </div>
      </div>

      {/* Center */}
      <div className="flex flex-row items-center flex-grow">
        <div className="flex space-x-6 md:space-x-2">
          <HeaderIcon active Icon={ HomeIcon } />
          <HeaderIcon Icon={ FlagIcon } />
          <HeaderIcon Icon={ PlayIcon } />
          <HeaderIcon Icon={ ShoppingCartIcon } />
          <HeaderIcon Icon={ UserGroupIcon } />
        </div>
      </div>

      {/* Right */}
      <div className="flex justify-end flex-row items-center sm:space-x-2">
        {/* Profile pic */}

        <p className="whitespace-nowrap font-semibold pr-3">Lucas Pinheiro</p>
        <ViewGridIcon className="icon" />
        <ChatIcon className="icon" />
        <BellIcon className="icon" />
        <ChevronDownIcon className="icon" />
      </div>
    </div>
  );
}

export default Header;