// import { videos } from "../data/videos";
// import VideoCard from "../components/videos/VideoCard";
// import "../styles/Videos.css";

// function Videos() {
//   return (
//     <main className="videos-page">
//       <header className="videos-header">
//         <h1>Videos</h1>
//         <p>Teachings, sermons, and spiritual guidance.</p>
//       </header>

//       <section className="videos-grid">
//         {videos.map((video) => (
//           <VideoCard key={video.id} video={video} />
//         ))}
//       </section>
//     </main>
//   );
// }

// export default Videos;


// import videos from "../data/videos.json";
// import VideoCard from "../components/videos/VideoCard";
// import "../styles/Videos.css";

// function Videos() {
//   return (
//     <main className="videos-page">
//       <h1>Videos</h1>

//       <section className="videos-grid">
//         {videos.map(video => (
//           <VideoCard key={video.id} video={video} />
//         ))}
//       </section>
//     </main>
//   );
// }

// export default Videos;


// import { useEffect, useState } from "react";
// import { fetchChannelVideos } from "../services/youtube";
// import VideoCard from "../components/videos/VideoCard";
// import "../styles/Videos.css";
// import VideoSkeleton from "../components/videos/VideoSkeleton";


// function Videos() {
//   const [videos, setVideos] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     async function loadVideos() {
//       try {
//         const data = await fetchChannelVideos(6);
//         setVideos(data);
//       } catch (err) {
//         setError("Unable to load videos. Please try again later.");
//         console.error(err);
//       } finally {
//         setLoading(false);
//       }
//     }

//     loadVideos();
//   }, []);

//   /* ---------- UI STATES ---------- */

// if (loading) {
//   return (
//     <main className="videos-page">
//       <h1>Videos</h1>

//       <section className="videos-grid">
//         {Array.from({ length: 6 }).map((_, index) => (
//           <VideoSkeleton key={index} />
//         ))}
//       </section>
//     </main>
//   );
// }


//   return (
//     <main className="videos-page">
//       <h1>Videos</h1>

//       <section className="videos-grid">
//         {videos.map(video => (
//           <VideoCard key={video.id} video={video} />
//         ))}
//       </section>
//     </main>
//   );
// }

// export default Videos;






// import { useEffect, useState } from "react";
// import { fetchChannelVideos } from "../services/youtube";
// import VideoCard from "../components/videos/VideoCard";
// import VideoSkeleton from "../components/videos/VideoSkeleton";
// import "../styles/Videos.css";

// function Videos() {
//   const [videos, setVideos] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     let isMounted = true;

//     async function loadVideos() {
//       const result = await fetchChannelVideos(6);

//       if (!isMounted) return;

//       if (result.status === "ok") {
//         setVideos(result.data);
//         setError(null);
//       } else {
//         setError(result.message);
//       }

//       setLoading(false);
//     }

//     loadVideos();

//     return () => {
//       isMounted = false;
//     };
//   }, []);

//   /* ---------- UI STATES ---------- */

//   if (loading) {
//     return (
//       <main className="videos-page">
//         <h1>Videos</h1>

//         <section className="videos-grid">
//           {Array.from({ length: 6 }).map((_, index) => (
//             <VideoSkeleton key={index} />
//           ))}
//         </section>
//       </main>
//     );
//   }

//   if (error && videos.length === 0) {
//     return (
//       <main className="videos-page">
//         <h1>Videos</h1>
//         <p className="error-message">{error}</p>
//       </main>
//     );
//   }

//   return (
//     <main className="videos-page">
//       <h1>Videos</h1>

//       {error && (
//         <p className="warning-message">
//           Showing cached videos — updates may be delayed.
//         </p>
//       )}

//       <section className="videos-grid">
//         {videos.map(video => (
//           <VideoCard key={video.id} video={video} />
//         ))}
//       </section>
//     </main>
//   );
// }

// export default Videos;















import { useEffect, useState } from "react";
import { fetchChannelVideos } from "../services/youtube";
import VideoCard from "../components/videos/VideoCard";
import VideoSkeleton from "../components/videos/VideoSkeleton";
import "../styles/Videos.css";

function Videos() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;

    async function loadVideos() {
      const result = await fetchChannelVideos(6);

      if (!mounted) return;

      if (result.status === "ok") {
        setVideos(result.data);
        setError(null);
      }

      if (result.status === "warning") {
        setVideos(result.data);
        setError(result.message);
      }

      if (result.status === "error") {
        setVideos([]);
        setError(result.message);
      }

      setLoading(false);
    }

    loadVideos();

    return () => {
      mounted = false;
    };
  }, []);

  /* ---------- UI STATES ---------- */

  if (loading) {
    return (
      <main className="videos-page">
        <h1>Videos</h1>
        <section className="videos-grid">
          {Array.from({ length: 6 }).map((_, i) => (
            <VideoSkeleton key={i} />
          ))}
        </section>
      </main>
    );
  }

  if (error && videos.length === 0) {
    return (
      <main className="videos-page">
        <h1>Videos</h1>
        <p className="error-message">{error}</p>
      </main>
    );
  }

  return (
    <main className="videos-page">
      <h1>Videos</h1>

      {error && (
        <p className="warning-message">
          {error}
        </p>
      )}

      <section className="videos-grid">
        {videos.map(video => (
          <VideoCard key={video.id} video={video} />
        ))}
      </section>
    </main>
  );
}

export default Videos;












// import { useEffect, useState } from "react";
// import { fetchChannelVideos } from "../services/youtube";
// import VideoCard from "../components/videos/VideoCard";
// import VideoSkeleton from "../components/videos/VideoSkeleton";
// import "../styles/Videos.css";

// function Videos() {
//   const [videos, setVideos] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     async function loadVideos() {
//       const result = await fetchChannelVideos({ maxResults: 6 });

//       if (result.status === "ok" || result.status === "warning") {
//         setVideos(result.data);
//         setError(result.message);
//       } else {
//         setError(result.message);
//       }

//       setLoading(false);
//     }

//     loadVideos();
//   }, []);

//   if (loading) {
//     return (
//       <main className="videos-page">
//         <h1>Videos</h1>
//         <section className="videos-grid">
//           {Array.from({ length: 6 }).map((_, i) => (
//             <VideoSkeleton key={i} />
//           ))}
//         </section>
//       </main>
//     );
//   }

//   if (error && videos.length === 0) {
//     return (
//       <main className="videos-page">
//         <h1>Videos</h1>
//         <p className="error-message">{error}</p>
//       </main>
//     );
//   }

//   return (
//     <main className="videos-page">
//       <h1>Videos</h1>

//       {error && (
//         <p className="warning-message">
//           {error}
//         </p>
//       )}

//       <section className="videos-grid">
//         {videos.map(video => (
//           <VideoCard key={video.id} video={video} />
//         ))}
//       </section>
//     </main>
//   );
// }

// export default Videos;
