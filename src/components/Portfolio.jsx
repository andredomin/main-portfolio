

const Portfolio = () => {
  return (
    <>
    <div className="portfolio">
            <h2>Portfolio</h2>

            <div className="card">
            <div className="card__title"><h3>Pawcare 🐶🐱</h3></div>
            <a href="https://pawcarevet.netlify.app/"><div className="card__container"><img src="/images/pawcare.jpg"  alt="pawcare-vet-patient-dashboard"/></div></a>
                
            </div>
            <div className="card"><div className="card__title"><h3>WanderFinder 🔍✈️</h3></div><a href="https://wanderfinder.netlify.app/"><div className="card__container"><img src="/images/wanderfinder.jpg" alt="wanderfinder-search-travel-app"/></div></a></div>
            <div className="card"><div className="card__title"><h3>LaBlueTattoo 🎨🖋️</h3></div><a href="https://labluetattoo.netlify.app/"><div className="card__container"><img src="/images/lablue.jpg" alt="lablue-tattoo-artist-landing"/></div></a></div>
            <div className="card"><div className="card__title"><h3>SmartSpendr💰💸</h3></div><a href="https://control-ahorro.netlify.app/"><div className="card__container"><img src="/images/smartspendr.jpg"alt="smartspendr-savings-app" /></div></a></div>

    </div>
    </>
  )
}

export default Portfolio