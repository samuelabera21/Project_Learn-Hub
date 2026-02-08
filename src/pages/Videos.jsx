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


import videos from "../data/videos.json";
import VideoCard from "../components/videos/VideoCard";
import "../styles/Videos.css";

function Videos() {
  return (
    <main className="videos-page">
      <h1>Videos</h1>

      <section className="videos-grid">
        {videos.map(video => (
          <VideoCard key={video.id} video={video} />
        ))}
      </section>
    </main>
  );
}

export default Videos;
