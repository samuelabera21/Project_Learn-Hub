import "../../styles/Events.css";

/*
  Events Section
  --------------
  Later:
  - Will use useState + useEffect
  - Data may come from JSON or API
*/

function Events() {
  return (
    <section className="events">
      <h2>Upcoming Events</h2>

      <div className="event-list">
        <article className="event-card">
          <h3>Feeding Those in Need</h3>
          <p>Providing food and support for the poor and homeless.</p>
          <span>September 12, 2023</span>
        </article>

        <article className="event-card">
          <h3>Monthly Worship Gathering</h3>
          <p>Join us for prayer, worship, and teaching.</p>
          <span>October 24, 2023</span>
        </article>
      </div>
    </section>
  );
}

export default Events;
