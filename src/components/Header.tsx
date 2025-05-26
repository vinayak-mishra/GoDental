import Image from "next/image";
import dentalLogo from "../../public/images/dental_logo.png";
const Header = () => (
  <div>
    <div className="bg-blue-800 p-4 flex gap-8 items-center">
      <div className="flex-1 text-center text-white">info@zerodental.in</div>
      <div className="flex-1 text-center text-white">detalcare@example.com</div>
      <div className="flex-1"></div>
    </div>
    <header className="bg-white py-4 px-6 shadow flex justify-between items-center">
      <div className="text-2xl font-bold text-blue-600">
        <Image
          src={dentalLogo}
          alt="Dental Background"
          // fill
          // width={60}
          className="z-20 absolute top-4 left-4 md:top-8 md:left-8 w-28 h-28 object-contain"
          // className="object-cover -scale-x-100 "
          priority
        />
      </div>
      <nav className="space-x-6 hidden md:block">
        <a href="#" className="hover:underline">
          Home
        </a>
        <a href="#" className="hover:underline">
          About
        </a>
        <a href="#" className="hover:underline">
          Services
        </a>
        <a href="#" className="hover:underline">
          Contact
        </a>
      </nav>
      <div className="text-white font-semibold text-sm rounded-4xl bg-blue-400 px-8 py-4 hidden md:block">
        📞 +91-960-000-0000
      </div>
    </header>
  </div>
);

export default Header;
