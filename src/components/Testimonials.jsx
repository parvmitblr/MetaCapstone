/**
 * Testimonials Component
 * Displays customer reviews and ratings
 * Shows feedback from satisfied customers
 */
export default function Testimonials() {
    return (
      <section className="testimonials-parent" aria-label="Customer Testimonials">
        <h2 className="testimonials-title">Testimonials</h2>
        <article className="testimonials" role="list">
            <div className="testimonial" role="listitem">
                <img 
                  className="reviewer-img" 
                  src="/images/reviewer1.png" 
                  alt="Profile picture of John Doe"
                  width="150"
                  height="150"
                />
                <div className="name-rating">
                    <p className="reviewer-name"><strong>John Doe</strong></p>
                    <p className="reviewer-rating" aria-label="Rating: 5 out of 5 stars">⭐ 5/5</p>
                </div>
                <div className="review-text">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec massa massa, 
                        semper sed enim at, faucibus mattis lorem. Donec vehicula, leo ut auctor ullamcorper, 
                        diam tortor dignissim velit, ac iaculis libero lacus non diam. </p>
                </div>
            </div>

            <div className="testimonial" role="listitem">
                <img 
                  className="reviewer-img" 
                  src="/images/reviewer2.png" 
                  alt="Profile picture of Jane Smith"
                  width="150"
                  height="150"
                />
                <div className="name-rating">
                    <p className="reviewer-name"><strong>Jane Smith</strong></p>
                    <p className="reviewer-rating" aria-label="Rating: 5 out of 5 stars">⭐ 5/5</p>
                </div>
                <div className="review-text">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec massa massa, 
                        semper sed enim at, faucibus mattis lorem. Donec vehicula, leo ut auctor ullamcorper, 
                        diam tortor dignissim velit, ac iaculis libero lacus non diam. </p>
                </div>
            </div>

            <div className="testimonial" role="listitem">
                <img 
                  className="reviewer-img" 
                  src="/images/reviewer3.png" 
                  alt="Profile picture of Robert Johnson"
                  width="150"
                  height="150"
                />
                <div className="name-rating">
                    <p className="reviewer-name"><strong>Robert Johnson</strong></p>
                    <p className="reviewer-rating" aria-label="Rating: 5 out of 5 stars">⭐ 5/5</p>
                </div>
                <div className="review-text">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec massa massa, 
                        semper sed enim at, faucibus mattis lorem. Donec vehicula, leo ut auctor ullamcorper, 
                        diam tortor dignissim velit, ac iaculis libero lacus non diam. </p>
                </div>
            </div>
        </article>
      </section>
    )
  }
  

  