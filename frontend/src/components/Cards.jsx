import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/userContext";
import { Clock, TrendingUp, Award, Trash2, Edit, Check, Zap } from "lucide-react";
import { cardStyles } from "../assets/dummystyle";

// ProfileInfoCard Component
export const ProfileInfoCard = () => {
  const navigate = useNavigate();
  const { user, clearUser } = useContext(UserContext);

  const handleLogout = () => {
    localStorage.clear();
    clearUser();
    navigate("/");
  };

  return (
    user && (
      <div className={cardStyles.profileCard}>
        <div className="bg-gradient-to-br from-amber-500 to-amber-500 w-12 h-12 rounded-full flex items-center justify-center text-white text-xl font-bold">
          {user.name ? user.name.charAt(0).toUpperCase() : ""}
        </div>
        <div>
          <div className="text-lg font-semibold text-gray-800">{user.name || ""}</div>
          <button className="mt-1 text-sm text-amber-600 hover:underline" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    )
  );
};

// ResumeSummaryCard Component
export const ResumeSummaryCard = ({
  title = "Untitled Resume",
  createdAt = null,
  updatedAt = null,
  onSelect,
  onDelete,
  completion = 85,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const formattedCreatedDate = createdAt
    ? new Date(createdAt).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      })
    : "—";

  const formattedUpdatedDate = updatedAt
    ? new Date(updatedAt).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      })
    : "—";

  const getCompletionColor = () => {
    if (completion >= 90) return "from-green-400 to-green-600";
    if (completion >= 70) return "from-yellow-300 to-yellow-500";
    return "from-red-300 to-red-500";
  };

  const getCompletionIcon = () => {
    if (completion >= 90) return <Award size={12} />;
    if (completion >= 70) return <TrendingUp size={12} />;
    return <Zap size={12} />;
  };

  const handleDeleteClick = (e) => {
    e.stopPropagation();
    onDelete && onDelete();
  };

  const generateDesign = () => {
    const colors = [
      "from-indigo-200 to-indigo-400",
      "from-amber-200 to-amber-400",
      "from-emerald-200 to-emerald-400",
      "from-orange-200 to-orange-400",
      "from-sky-200 to-sky-400",
    ];
    return colors[title.length % colors.length];
  };

  const designColor = generateDesign();

  return (
    <div
      onClick={onSelect}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative rounded-xl overflow-hidden shadow-md border border-gray-200 hover:shadow-xl transition-transform hover:scale-[1.01] duration-300"
    >
      {/* Completion */}
      <div className="absolute top-2 left-2 flex items-center gap-1 text-sm text-white px-2 py-1 rounded-full bg-gradient-to-r from-violet-500 to-amber-500">
        <div className="w-2 h-2 rounded-full bg-white animate-ping" />
        {getCompletionIcon()}
        <span>{completion}%</span>
      </div>

      {/* Preview */}
      <div
        className={`h-40 bg-gradient-to-br ${designColor} flex flex-col items-center justify-center text-center p-4`}
      >
        <Edit size={28} className="text-white mb-2" />
        <h4 className="text-white font-semibold text-lg">{title}</h4>
        <p className="text-white/80 text-sm">
          {completion === 0 ? "Start building" : `${completion}% completed`}
        </p>

        <div className="flex gap-1 mt-2">
          {["Profile", "Work", "Skills", "Edu"].map((section, i) => (
            <span
              key={section}
              className={`text-xs px-2 py-1 rounded-full ${
                i < Math.floor(completion / 25)
                  ? "bg-white text-amber-600 font-semibold"
                  : "bg-white/30 text-white"
              }`}
            >
              {section}
            </span>
          ))}
        </div>

        {/* Hover action buttons */}
        {isHovered && (
          <div className="absolute inset-0 bg-black/10 backdrop-blur-sm flex justify-end p-2 gap-2">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onSelect();
              }}
              className="bg-white rounded-full p-2 shadow hover:bg-amber-100 transition"
            >
              <Edit size={16} className="text-amber-600" />
            </button>
            <button
              onClick={handleDeleteClick}
              className="bg-white rounded-full p-2 shadow hover:bg-red-100 transition"
            >
              <Trash2 size={16} className="text-red-500" />
            </button>
          </div>
        )}
      </div>

      {/* Metadata */}
      <div className="px-4 py-2 bg-white">
        <h5 className="font-semibold text-gray-800">{title}</h5>
        <div className="flex items-center text-xs text-gray-500 mt-1">
          <Clock size={12} className="mr-1" />
          Created: {formattedCreatedDate}
          <span className="ml-2">• Updated: {formattedUpdatedDate}</span>
        </div>

        <div className="w-full mt-3 h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className={`h-full bg-gradient-to-r ${getCompletionColor()} transition-all duration-500`}
            style={{ width: `${completion}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

// TemplateCard Component
export const TemplateCard = ({ thumbnailImg, isSelected, onSelect }) => {
  return (
    <div
      className={`group relative h-[320px] border-2 rounded-2xl overflow-hidden cursor-pointer transition-transform duration-500 hover:scale-105 shadow ${
        isSelected
          ? "border-violet-500 shadow-violet-300 bg-violet-50"
          : "border-gray-200 hover:border-violet-300"
      }`}
      onClick={onSelect}
    >
      {thumbnailImg ? (
        <div className="w-full h-full overflow-hidden">
          <img
            src={thumbnailImg}
            alt="Template"
            className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
          />
          {isSelected && (
            <div className="absolute inset-0 bg-violet-500/20 flex items-center justify-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md animate-pulse">
                <Check size={24} className="text-violet-600" />
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-violet-100 to-amber-100">
          <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-violet-500 rounded-xl flex items-center justify-center text-white">
            <Edit size={22} />
          </div>
          <span className="mt-2 font-semibold text-gray-700">No Preview</span>
        </div>
      )}
    </div>
  );
};
