import {
    Routes,
    Route,
    useParams,
    useNavigate,
    Navigate,
} from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "./components/Header/Header";
import MainVideo from "./components/MainVideo/MainVideo";
import MainVideoInfo from "./components/MainVideoInfo/MainVideoInfo";
import Comments from "./components/Comments/Comments";
import NextVideoList from "./components/NextVideoList/NextVideoList";
import Upload from "./components/Upload/Upload";
import "./App.scss"; // Import the main styles

function VideoPage() {
    const { id } = useParams(); // Get :id from the URL
    const [videoList, setVideoList] = useState([]);
    const [mainVideo, setMainVideo] = useState(null);
    const navigate = useNavigate();

    const BASE_URL = import.meta.env.VITE_API_BASE_URL;

    useEffect(() => {
        const fetchData = async () => {
            try {
                // 1. Fetch the list of all videos
                const res = await axios.get(`${BASE_URL}/videos`);
                const videos = res.data;
                // Saves the list of videos to state
                setVideoList(videos);

                // 2. Determine which video to display
                const currentId = id || videos[0]?.id;
                if (!id && currentId) {
                    // Redirect to the first video if no ID is in URL
                    navigate(`/videos/${currentId}`, { replace: true });
                    return; // Exit early to prevent fetching again immediately
                }

                // 3. Fetch details for the selected video
                const videoRes = await axios.get(
                    `${BASE_URL}/videos/${currentId}`
                );
                // Save the main video details to state
                setMainVideo(videoRes.data);
            } catch (error) {
                console.error("Error loading video:", error);
            }
        };
        // Call the fetchData function to load video data
        fetchData();
    }, [id, navigate]); // Re-run when URL ID or navigation function changes

    // If mainVideo is not yet loaded, show a loading message
    if (!mainVideo) return <p>Loading video...</p>;

    return (
        <>
            {/* <Header /> */}
            <MainVideo mainVideo={mainVideo} />
            <div className="desktop-layout">
                <div className="desktop-layout__left">
                    <MainVideoInfo mainVideo={mainVideo} />
                    <Comments mainVideo={mainVideo} />
                </div>
                <div className="desktop-layout__right">
                    <NextVideoList
                        videoList={videoList}
                        mainVideo={mainVideo}
                    />
                </div>
            </div>
        </>
    );
}

export default function App() {
    return (
        <>
            <Header /> {/* shows on every route */}
            <Routes>
                {/* Redirect plain "/" to the list of videos */}
                <Route path="/" element={<Navigate to="/videos" replace />} />

                {/* List view (first video auto-loads inside VideoPage) */}
                <Route path="/videos" element={<VideoPage />} />

                {/* Individual video by ID */}
                <Route path="/videos/:id" element={<VideoPage />} />

                {/* Upload page */}
                <Route path="/upload" element={<Upload />} />
            </Routes>
        </>
    );
}
