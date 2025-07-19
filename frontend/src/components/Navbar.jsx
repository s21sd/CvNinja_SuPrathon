import { Link } from "react-router-dom";
import { ProfileInfoCard } from "./Cards";
import logo from "../../public/cvninja.png";
const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-amber-100/50 py-3 px-4 md:px-8">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-5">

        <Link to="/" className="flex items-center gap-3">
          <div className="flex items-center pb-6 gap-3">

            <div className="w-10 h-10 bg-gradient-to-br from-teal-600 to-amber-500 rounded-2xl flex items-center justify-center shadow-lg shadow-amber-200">
              <img src={logo} alt="CvNinja Logo" className="w-16 h-10 rounded-full" />
            </div>

            <span className="text-xl sm:text-2xl font-black bg-gradient-to-r from-teal-600 to-amber-500 bg-clip-text text-transparent">
              CvNinja
            </span>
          </div>
        </Link>

        <ProfileInfoCard />
      </div>
    </div>
  );
};

export default Navbar;
