import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axiosInstance from "../utils/axiosInstance";
import RenderResume from "../components/RenderResume";
import { API_PATHS } from "../utils/apiPaths";

export default function PublicResume() {
    const { id } = useParams();
    const [resume, setResume] = useState(null);

    useEffect(() => {
        if (id) {
            axiosInstance
                .get(API_PATHS.RESUME.GET_PUBLIC(id))
                .then((res) => setResume(res.data))
                .catch(() => setResume(null));
        }
    }, [id]);

    if (!resume) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-100 to-gray-200">
                <div className="text-center text-gray-500 text-lg animate-pulse">
                    Loading or resume not found...
                </div>
            </div>
        );
    }
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-100 flex items-center justify-center py-10 px-4">
            <div className="w-full max-w-4xl bg-white shadow-2xl rounded-3xl border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-[0_10px_40px_rgba(0,0,0,0.1)]">
                <div className="h-[calc(100vh-5rem)] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 p-8">
                    <RenderResume
                        templateId={resume.template?.theme || "modern"}
                        resumeData={resume}
                    />
                </div>
            </div>
        </div>
    );
}
