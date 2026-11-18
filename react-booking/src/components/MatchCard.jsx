export function MatchCard({ teams, date, venue, prices }) {
  return (
    <article className="match-card">
      <h3>{teams}</h3>
      <p><strong>Date and time:</strong> {date}</p>
      <p><strong>Venue:</strong> {venue}</p>
      <ul className="price-list">
        {prices.map((price) => <li key={price}>{price}</li>)}
      </ul>
      <a className="button" href="#book-ticket">Book Tickets</a>
    </article>
  )
}
