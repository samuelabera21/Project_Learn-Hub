import { useEffect, useRef, useState } from "react";
import "../../styles/Community.css";
import community from "../../assets/images/community/community.jpg";

function Community() {
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
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`community ${visible ? "show" : ""}`}
    >
      <div className="community-text">
        <h2>Discover the Power of Community</h2>
        <p>
          Feel God within you and find your path to faith
          through fellowship and service.
        </p>

        <button>Join Us</button>
      </div>

      <div className="community-image">
       <img src={community} alt="Community gathering" />
      </div>
    </section>
  );
}

export default Community;
