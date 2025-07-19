import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axiosInstance from "../utils/axiosInstance";
import RenderResume from "../components/RenderResume";
import { API_PATHS } from '../utils/apiPaths';

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

    if (!resume) return (
        <div className="min-h-screen flex items-center justify-center text-gray-600">
            Loading or resume not found...
        </div>
    );

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
            <div className="w-full max-w-[900px] h-[calc(100vh-4rem)] overflow-y-auto bg-white shadow-xl rounded-2xl border border-gray-300 p-6">
                <RenderResume
                    templateId={resume.template?.theme || "modern"}
                    resumeData={resume}
                />
            </div>
        </div>
    );
}
