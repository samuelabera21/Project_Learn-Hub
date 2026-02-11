// import "../../styles/Events.css";

// /*
//   Events Section
//   --------------
//   Later:
//   - Will use useState + useEffect
//   - Data may come from JSON or API
// */

// function Events() {
//   return (
//     <section className="events">
//       <h2>Upcoming Events</h2>

//       <div className="event-list">
//         <article className="event-card">
//           <h3>Feeding Those in Need</h3>
//           <p>Providing food and support for the poor and homeless.</p>
//           <span>September 12, 2023</span>
//         </article>

//         <article className="event-card">
//           <h3>Monthly Worship Gathering</h3>
//           <p>Join us for prayer, worship, and teaching.</p>
//           <span>October 24, 2023</span>
//         </article>
//       </div>
//     </section>
//   );
// }

// export default Events;


import "../../styles/Events.css";

function Events() {
  return (
    <section className="events">
      {/* 🎥 BACKGROUND VIDEO */}
      <video
        className="events-bg-video"
        src="/home/events.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* 🌫 OVERLAY */}
      <div className="events-overlay" />

      {/* 📅 CONTENT */}
      <div className="events-content">
        <h2>የቤተ ክርስቲያን በዓላት</h2>

        <div className="event-list">
          <article className="event-card">
            <h3>አዲስ ዓመት</h3>
            <p>የኢትዮጵያ አዲስ ዓመት በቤተ ክርስቲያን የሚከበር መንፈሳዊ በዓል</p>
            <span>መስከረም ፩</span>
          </article>

          <article className="event-card">
            <h3>መስቀል</h3>
            <p>የመስቀለ ክርስቶስ መገኘትን የሚያስታውስ በዓል</p>
            <span>መስከረም ፲፯</span>
          </article>

          <article className="event-card">
            <h3>ገና</h3>
            <p>የጌታችን ኢየሱስ ክርስቶስ ልደት</p>
            <span>ታህሳስ ፪፱</span>
          </article>

          <article className="event-card">
            <h3>ጥምቀት</h3>
            <p>የጌታችን ጥምቀት በዮርዳኖስ ወንዝ</p>
            <span>ጥር ፲፩</span>
          </article>

          <article className="event-card">
            <h3>ሆሳዕና</h3>
            <p>ጌታችን ወደ ኢየሩሳሌም መግባቱ</p>
            <span>ንሳን</span>
          </article>

          <article className="event-card">
            <h3>ፋሲካ</h3>
            <p>የትንሣኤ በዓል — የሞት ድል</p>
            <span>ሚያዝያ</span>
          </article>


          <article className="event-card">
            <h3>ፋሲካ</h3>
            <p>የትንሣኤ በዓል — የሞት ድል</p>
            <span>ሚያዝያ</span>
          </article>



          <article className="event-card">
            <h3>ፋሲካ</h3>
            <p>የትንሣኤ በዓል — የሞት ድል</p>
            <span>ሚያዝያ</span>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Events;
