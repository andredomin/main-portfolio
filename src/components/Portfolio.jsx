

const Portfolio = () => {
  return (
    <>
    <div className="portfolio">
            <h2>Portfolio</h2>

            <div className="card">
            <div className="card__title"><h3>Pawcare 🐶🐱</h3></div>
            <a href="https://pawcarevet.netlify.app/"><div className="card__container"><img src="/images/pawcare.jpg" /></div></a>
                
            </div>
            <div className="card"><div className="card__title"><h3>WanderFinder 🔍✈️</h3></div><a href="https://wanderfinder.netlify.app/"><div className="card__container"><img src="/images/wanderfinder.jpg" /></div></a></div>
            <div className="card"><div className="card__title"><h3>LaBlueTattoo 🎨🖋️</h3></div><a href="https://labluetattoo.netlify.app/"><div className="card__container"><img src="/images/lablue.jpg" /></div></a></div>
            <div className="card"><div className="card__title"><h3>SmartSpendr💰💸</h3></div><a href="https://control-ahorro.netlify.app/"><div className="card__container"><img src="/images/smartspendr.jpg" /></div></a></div>

    </div>
    </>
  )
}

export default Portfolio