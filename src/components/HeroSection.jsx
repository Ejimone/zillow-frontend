import { useRef } from 'react';
import heroImage from "../images/heroImage.png";
import recomdedImage from "../images/recomendations-image.webp";
import "../Styles/HeroSection.css";
import "../Styles/HomeListings.css";

const HeroSection = () => {
  const scrollContainerRef = useRef(null);

  const scroll = (scrollOffset) => {
    scrollContainerRef.current.scrollLeft += scrollOffset;
  };

  return (
    <div>
      <section className="hero-section">
        <img src={heroImage} alt="Hero" className="hero-image" />
        <div className="search-bar">
          <input type="text" placeholder="Enter an address, neighborhood, city, or ZIP code" />
          <button>Search</button>
        </div>
      </section>

      <section className="recommendation-section">
        <div className="recommendation-wrapper">
          <div className="recommendation-content">
            <h3>Get Home Recommendations</h3>
            <p>Sign in for a more personalized experience.</p>
            <a href="#home">Sign In</a>
          </div>
          <div className="recommendation-image">
            <img src={recomdedImage} alt="Placeholder" />
          </div>
        </div>
      </section>

      <section className="home-listings-section">
        <div className="home-listings-header">
          <h2>Homes For You</h2>
          <a href="#view-all">View all</a>
        </div>
        <div className="listings-container">
          <button className="scroll-button left" onClick={() => scroll(-340)}>
            &#x2039;
          </button>
          <div className="home-listings-grid" ref={scrollContainerRef}>
            {/* Property Card 1 */}
            <div className="property-card">
              <div className="property-image">
                <img src="https://via.placeholder.com/320x220" alt="Property 1" />
                <button className="save-button">&#x2764;</button>
              </div>
              <div className="property-details">
                <div className="property-price">$500,000</div>
                <div className="property-stats">
                  <span><b>3</b> bd</span>
                  <span><b>2</b> ba</span>
                  <span><b>1,500</b> sqft</span>
                </div>
                <div className="property-address">123 Main St, Anytown, USA</div>
              </div>
            </div>
            {/* Property Card 2 */}
            <div className="property-card">
              <div className="property-image">
                <img src="https://via.placeholder.com/320x220" alt="Property 2" />
                <button className="save-button">&#x2764;</button>
              </div>
              <div className="property-details">
                <div className="property-price">$750,000</div>
                <div className="property-stats">
                  <span><b>4</b> bd</span>
                  <span><b>3</b> ba</span>
                  <span><b>2,200</b> sqft</span>
                </div>
                <div className="property-address">456 Oak Ave, Anytown, USA</div>
              </div>
            </div>
            {/* Property Card 3 */}
            <div className="property-card">
              <div className="property-image">
                <img src="https://via.placeholder.com/320x220" alt="Property 3" />
                <button className="save-button">&#x2764;</button>
              </div>
              <div className="property-details">
                <div className="property-price">$320,000</div>
                <div className="property-stats">
                  <span><b>2</b> bd</span>
                  <span><b>1</b> ba</span>
                  <span><b>1,100</b> sqft</span>
                </div>
                <div className="property-address">789 Pine Ln, Anytown, USA</div>
              </div>
            </div>
             {/* Property Card 4 */}
            <div className="property-card">
              <div className="property-image">
                <img src="https://via.placeholder.com/320x220" alt="Property 3" />
                <button className="save-button">&#x2764;</button>
              </div>
              <div className="property-details">
                <div className="property-price">$320,000</div>
                <div className="property-stats">
                  <span><b>2</b> bd</span>
                  <span><b>1</b> ba</span>
                  <span><b>1,100</b> sqft</span>
                </div>
                <div className="property-address">789 Pine Ln, Anytown, USA</div>
              </div>
            </div>
             {/* Property Card 5 */}
            <div className="property-card">
              <div className="property-image">
                <img src="https://via.placeholder.com/320x220" alt="Property 3" />
                <button className="save-button">&#x2764;</button>
              </div>
              <div className="property-details">
                <div className="property-price">$320,000</div>
                <div className="property-stats">
                  <span><b>2</b> bd</span>
                  <span><b>1</b> ba</span>
                  <span><b>1,100</b> sqft</span>
                </div>
                <div className="property-address">789 Pine Ln, Anytown, USA</div>
              </div>
            </div>
          </div>
          <button className="scroll-button right" onClick={() => scroll(340)}>
            &#x203a;
          </button>
        </div>
      </section>




      <div className="buySellRent">
        <a href="/buy">Buy</a>
        <a href="/sell">Sell</a>
        <a href="/rent">Rent</a>
      </div>
    </div>
  );
};

export default HeroSection;

