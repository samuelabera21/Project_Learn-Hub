// // import { useEffect, useRef, useState } from "react";
// // import "../../styles/Values.css";

// // /*
// //   Values Section
// //   --------------
// //   - Displays core values
// //   - Animates into view on scroll
// // */

// // function Values() {
// //   const sectionRef = useRef(null);
// //   const [visible, setVisible] = useState(false);

// //   useEffect(() => {
// //     const observer = new IntersectionObserver(
// //       ([entry]) => {
// //         if (entry.isIntersecting) {
// //           setVisible(true);
// //           observer.disconnect(); // animate once
// //         }
// //       },
// //       { threshold: 0.25 }
// //     );

// //     if (sectionRef.current) {
// //       observer.observe(sectionRef.current);
// //     }

// //     return () => observer.disconnect();
// //   }, []);

// //   return (
// //     <section
// //       ref={sectionRef}
// //       className={`values ${visible ? "show" : ""}`}
// //     >
// //       <h2>Our Core Values</h2>

// //       <div className="values-grid">
// //         <div className="value-card">Worship</div>
// //         <div className="value-card">Sustainability</div>
// //         <div className="value-card">Finding Answers</div>
// //         <div className="value-card">Christian Families</div>
// //         <div className="value-card">Sincerity</div>
// //       </div>
// //     </section>
// //   );
// // }

// // export default Values;


// import { useEffect, useRef, useState } from "react";
// import "../../styles/Values.css";

// function Values() {
//   const sectionRef = useRef(null);
//   const [visible, setVisible] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setVisible(true);
//           observer.disconnect();
//         }
//       },
//       { threshold: 0.25 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className={`values ${visible ? "show" : ""}`}
//     >
//       {/* 🎥 BACKGROUND VIDEO */}
//       <video
//         className="values-bg-video"
//         src="/home/value1.mp4"
//         autoPlay
//         loop
//         muted
//         playsInline
//       />

//       {/* 🌫 OVERLAY */}
//       <div className="values-overlay" />

//       {/* 📚 CONTENT */}
//       <div className="values-content">
//         <h2>Our Core Values</h2>

//         <div className="values-grid">
//           <div className="value-card">እምነት</div>
//           <div className="value-card">ተስፋ</div>
//           <div className="value-card">ፍቅር</div>
//           <div className="value-card">ቃል</div>
//           <div className="value-card">እውነት</div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Values;




import { useEffect, useRef, useState } from "react";
import "../../styles/Values.css";

function Values() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`values ${visible ? "show" : ""}`}
    >
      {/* Background Video */}
      <video
        className="values-bg-video"
        src="/home/value1.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay */}
      <div className="values-overlay" />

      {/* Content */}
      <div className="values-content">
        <h2>ቤተክርስቲያን</h2>

        <div className="values-text-column">
          <p>እምነት በእግዚአብሔር</p>
          <p>ተስፋ በመድኃኒታችን</p>
          <p>ፍቅር ለሰው ሁሉ</p>
          <p>ቃል እና ቅዱስ ሥርዓት</p>
          <p>እውነት እና ትሕትና</p>
          <p>እውነት እና ትሕትና</p>
        </div>
      </div>
    </section>
  );
}

export default Values;

