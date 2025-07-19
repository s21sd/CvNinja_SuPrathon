import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axiosInstance from "../utils/axiosInstance";
import RenderResume from "../components/RenderResume";
import { API_PATHS } from '../utils/apiPaths';

export default function PublicResume() {
    const { id } = useParams();
    const [resume, setResume] = useState(null);

    useEffect(() => {
        axiosInstance
            .get(API_PATHS.RESUME.GET_PUBLIC(id))
            .then((res) => setResume(res.data))
            .catch(() => setResume(null));
    }, [id]);

    if (!resume) return <div className="text-center mt-10">Loading or not found...</div>;

    return (
        <div className="bg-white min-h-screen p-4 flex justify-center">
            <div className="w-[800px]">
                <RenderResume
                    templateId={resume.template?.theme || "modern"}
                    resumeData={resume}
                />
            </div>
        </div>
    );
}
