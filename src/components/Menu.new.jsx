/**
 * Menu Component
 * Displays featured menu items for the week
 * Shows specials with pricing and descriptions
 */
export default function Menu() {
    return (
      <section className="menu" aria-label="Weekly Specials Menu">
        <header className="menu-desc">
            <h2 className="title menu-title">This weeks specials!</h2>
            <button className="btn" aria-label="View full online menu">
                    Online Menu
                </button>
        </header>
        <article className="cards">
            <div className="card" role="article">
                <img 
                  className="menu-img" 
                  src="/images/greek-salad.png" 
                  alt="Greek salad with fresh lettuce, peppers, olives, and feta cheese"
                  width="250"
                  height="200"
                />
                <div className="name-price">
                    <h3 className="item-name">Greek Salad</h3>
                    <p className="item-price">$12.99</p>
                </div>
                <div className="item-desc">
                    <p>The famous greek salad of crispy lettuce, 
                        peppers, olives and our Chicago style feta cheese, 
                        garnished with crunchy garlic and rosemary croutons. </p>
                </div>
                <div className="delivery">
                    <p><button className="btn" aria-label="Order Greek Salad for delivery">Order a delivery</button></p>
                </div>
            </div>

            <div className="card" role="article">
                <img 
                  className="menu-img" 
                  src="/images/bruchetta.jpg" 
                  alt="Bruchetta with grilled bread, garlic, and olive oil"
                  width="250"
                  height="200"
                />
                <div className="name-price">
                    <h3 className="item-name">Bruchetta</h3>
                    <p className="item-price">$5.99</p>
                </div>
                <div className="item-desc">
                    <p>Our Bruschetta is made from grilled bread that has 
                        been smeared with garlic and seasoned with salt and olive oil.  </p>
                </div>
                <div className="delivery">
                    <p><button className="btn" aria-label="Order Bruchetta for delivery">Order a delivery</button></p>
                </div>
            </div>

            <div className="card" role="article">
                <img 
                  className="menu-img" 
                  src="/images/lemon-dessert.jpg" 
                  alt="Homemade lemon dessert with fresh lemon flavor"
                  width="250"
                  height="200"
                />
                <div className="name-price">
                    <h3 className="item-name">Lemon Dessert</h3>
                    <p className="item-price">$5.00</p>
                </div>
                <div className="item-desc">
                    <p>This comes straight from grandma's recipe book,
                         every last ingredient has been sourced and is as 
                         authentic as can be imagined. </p>
                </div>
                <div className="delivery">
                    <p><button className="btn" aria-label="Order Lemon Dessert for delivery">Order a delivery</button></p>
                </div>
            </div>
        </article>
      </section>
    )
  }
