// import { useParams } from "react-router-dom";
// import videos from "../data/videos.json";
// import "../styles/VideoDetails.css";

// function VideoDetails() {
//   const { id } = useParams();
//   const video = videos.find(v => v.id === id);

//   if (!video) {
//     return <h2 className="video-not-found">Video not found</h2>;
//   }

//   return (
//     <main className="video-details">
//       <div className="video-details-container">
//         <div className="video-image">
//           <img src={video.thumbnail} alt={video.title} />
//         </div>

//         <div className="video-content">
//           <h1>{video.title}</h1>
//           <p>{video.description}</p>
//         </div>
//       </div>
//     </main>
//   );
// }

// export default VideoDetails;




// import { useParams } from "react-router-dom";
// import videos from "../data/videos.json";
// import "../styles/VideoDetails.css";

// function VideoDetails() {
//   const { id } = useParams();
//   const video = videos.find(v => v.id === id);

//   if (!video) {
//     return <h2>Video not found</h2>;
//   }

//   return (
//     <main className="video-details">
//       <h1>{video.title}</h1>

//       <div className="video-player">
//         <iframe
//           src={`https://www.youtube.com/embed/${video.youtubeId}`}
//           title={video.title}
//           frameBorder="0"
//           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//           allowFullScreen
//         />
//       </div>

//       <p className="video-description">{video.description}</p>
//     </main>
//   );
// }

// export default VideoDetails;



// import { useParams } from "react-router-dom";
// import videos from "../data/videos.json";
// import "../styles/VideoDetails.css";

// function VideoDetails() {
//   const { id } = useParams();
//   const video = videos.find(v => v.id === id);

//   if (!video) {
//     return <h2 className="video-not-found">Video not found</h2>;
//   }

//   return (
//     <main className="video-details">
//       <div className="video-details-container">

//         {/* Video player */}
//         <div className="video-player">
//           <iframe
//             src={`https://www.youtube.com/embed/${video.youtubeId}`}
//             title={video.title}
//             frameBorder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//             allowFullScreen
//           />
//         </div>

//         {/* Video info (YOUR data, not YouTube’s) */}
//         <div className="video-info">
//           <h1>{video.title}</h1>

//           {/* Manual thumbnail preview */}
//           <img
//             src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
//             alt={video.title}
//             className="video-thumbnail"
//           />

//           <p>{video.description}</p>
//         </div>

//       </div>
//     </main>
//   );
// }

// export default VideoDetails;




import { useParams } from "react-router-dom";
import videos from "../data/videos.json";
import VideoCard from "../components/videos/VideoCard";
import "../styles/VideoDetails.css";

function VideoDetails() {
  const { id } = useParams();
  const video = videos.find(v => v.id === id);

  if (!video) {
    return <h2>Video not found</h2>;
  }

  const relatedVideos = videos.filter(v => v.id !== id);

  return (
    <main className="video-details">
      <h1>{video.title}</h1>

      <div className="video-player">
        <iframe
          src={`https://www.youtube.com/embed/${video.youtubeId}`}
          title={video.title}
          frameBorder="0"
          allowFullScreen
        />
      </div>

      <p className="video-description">{video.description}</p>

      {/* 🔥 NEW SECTION */}
      <section className="related-videos">
        <h2>More Videos</h2>

        <div className="videos-grid">
          {relatedVideos.map(v => (
            <VideoCard key={v.id} video={v} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default VideoDetails;
