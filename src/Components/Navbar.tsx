import Image from "next/image";
import logo from "../img/logo-dark.svg"
export default function Navbar() {
  return (
    <div>
        <header>
            <section>
                <div className="big-container  p-7">
                    <nav className="container  flex justify-between items-center">
                        <Image src={logo} alt="logo"></Image>
                        <ul className="flex gap-5">
                            <li className="font-bold text-gray-400">Home</li>
                            <li className="font-bold text-gray-400">About</li>
                            <li className="font-bold text-gray-400">Contact</li>
                            <li className="font-bold text-gray-400">Blog</li>
                            <li className="font-bold text-gray-400">Careers</li>
                        </ul>
                        <button className="p-3 border rounded-4xl font-bold bg-gradient-to-tr text-white px-7 from-[#2bbac7] to-[#30c889]">
                            Request Invite
                        </button>
                    </nav>
                </div>
            </section>
        </header>
    </div>
  )
}
