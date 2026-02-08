import { useEffect, useRef, useState } from "react";
import "../../styles/Values.css";

/*
  Values Section
  --------------
  - Displays core values
  - Animates into view on scroll
*/

function Values() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // animate once
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
      <h2>Our Core Values</h2>

      <div className="values-grid">
        <div className="value-card">Worship</div>
        <div className="value-card">Sustainability</div>
        <div className="value-card">Finding Answers</div>
        <div className="value-card">Christian Families</div>
        <div className="value-card">Sincerity</div>
      </div>
    </section>
  );
}

export default Values;
