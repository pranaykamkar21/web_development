import { Navbar } from './components/Navbar.jsx'
import { Hero } from './components/Hero.jsx'
import { MatchCard } from './components/MatchCard.jsx'
import './App.css'

const matches = [
  {
    id: 'match-01',
    teams: 'Royal Challengers Bengaluru vs Mumbai Indians',
    date: 'April 5, 2026, 7:30 PM',
    venue: 'Wankhede Stadium, Mumbai',
    prices: ['General: Rs. 1,500', 'Premium: Rs. 3,500', 'VIP: Rs. 7,500']
  },
  {
    id: 'match-02',
    teams: 'Chennai Super Kings vs Kolkata Knight Riders',
    date: 'April 6, 2026, 7:30 PM',
    venue: 'M. A. Chidambaram Stadium, Chennai',
    prices: ['General: Rs. 1,200', 'Premium: Rs. 3,000', 'VIP: Rs. 6,500']
  },
  {
    id: 'match-03',
    teams: 'Delhi Capitals vs Sunrisers Hyderabad',
    date: 'April 7, 2026, 7:30 PM',
    venue: 'Arun Jaitley Stadium, Delhi',
    prices: ['General: Rs. 1,000', 'Premium: Rs. 2,500', 'VIP: Rs. 5,500']
  }
]

function App() {
  return (
    <>
      <Navbar />
      <main className="page-content">
        <Hero />
        <section id="matches" className="matches-section">
          <h2>Upcoming Matches</h2>
          <div className="match-grid">
            {matches.map((match) => (
              <MatchCard
                key={match.id}
                teams={match.teams}
                date={match.date}
                venue={match.venue}
                prices={match.prices}
              />
            ))}
          </div>
        </section>
        <section id="book-ticket" className="booking-section">
          <h2>Ready to book?</h2>
          <p>Choose a match above to see its ticket prices and venue.</p>
        </section>
      </main>
      <footer className="site-footer">IPL 2026 Ticket Booking</footer>
    </>
  )
}

export default App
