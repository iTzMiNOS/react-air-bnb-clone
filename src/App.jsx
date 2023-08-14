/* eslint-disable react/jsx-key */
import Navbar from "./Navbar"
import Hero from "./Hero"
import Card from "./Card"
import data from "./data"

const modData = data.map(person => {
  return <Card 
              img= {person.coverImg}
              rating={person.stats.rating}
              reviewCount={person.stats.reviewCount}
              location={person.location}
              title={person.title}
              price={person.price}
              spots={person.openSpots}
          />
})

export default function App() {
    return (
      <div>
        <Navbar />
        <Hero />
        <section className="cards-list">
          {modData}
        </section>
      </div>
    )
}