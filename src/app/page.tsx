import Image from "next/image";

export default function Home() {
  return (
    <section className="hero">
      <div className="container">
        {/* Logo Section */}
        <div className="logo-container">
          <Image
            src="/images/logo-respectu.png"
            className="logo-img"
            alt="Respect U Dental Lab - Dental Prosthetics Service. No Mistakes."
            width={256}
            height={256}
            priority
          />
        </div>

        <h1>Dental Lab in Brooklyn, NY – Crowns, Implants & Prosthetics</h1>
        <p className="slogan">No Mistakes</p>

        <div className="mission-statement">
          <p>
            As Respect U, we believe that the road to perfection is paved with the lessons of the past. By embracing &apos;no mistakes&apos;
            - the challenges of cutting-edge innovation - we refine our craft to provide the highest level
            of restorative excellence for our patients / dental clinics / dentists / practices.
          </p>
        </div>

        <div className="contact-info">
          <div className="info-item">
            <i className="fas fa-map-marker-alt"></i>
            <p>1 Woodside Ave<br />Brooklyn, NY 11223</p>
          </div>
          <div className="info-item">
            <i className="fas fa-envelope"></i>
            <p>
              <a href="mailto:contact@respectudental.com">contact@respectudental.com</a>
            </p>
          </div>
          <div className="info-item">
            <i className="fas fa-phone"></i>
            <p>
              <a href="tel:+17182001532">+1 (718) 200-1532</a>
            </p>
          </div>
        </div>

        <div className="socials">
          <a href="#" aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" aria-label="Facebook">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" aria-label="LinkedIn">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
