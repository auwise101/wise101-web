import React from 'react';
import { locales, localeOptions } from './l10n';

const WHATSAPP_NUMBER = '61415872398';
const getWhatsappUrl = (message) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

const serviceItems = [
  { id: 'livestreaming', icon: 'video' },
  { id: 'digitalMarketing', icon: 'megaphone' },
  { id: 'eventManagement', icon: 'calendar' },
];

const socials = [
  { id: 'instagram', value: 'auwise101', href: 'https://instagram.com/auwise101', icon: 'instagram' },
  { id: 'youtube', value: 'auwise101', href: 'https://youtube.com/@auwise101', icon: 'youtube' },
  { id: 'facebook', value: 'auwise101', href: 'https://facebook.com/auwise101', icon: 'facebook' },
  { id: 'spotify', value: 'wise101', href: 'https://open.spotify.com/artist/4g3SGm6Nv54iaz9IjwSP5f', icon: 'spotify' },
];

const defaultLocale = 'en';
const homeUrl = import.meta.env.BASE_URL || '/';
const eventsUrl = `${homeUrl}events.html`;
const facebookEventsUrl = 'https://www.facebook.com/events/4544523615777792';

function Icon({ name, size = 30 }) {
  const common = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.7,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
  };

  const paths = {
    video: (
      <>
        <rect x="3" y="5" width="13" height="14" rx="2" />
        <path d="m16 10 5-3v10l-5-3z" />
        <path d="m8 9 4 3-4 3z" />
      </>
    ),
    megaphone: (
      <>
        <path d="m3 11 13-5v12L3 13z" />
        <path d="M16 10h2.5a2.5 2.5 0 0 1 0 5H16" />
        <path d="M6 14.2 7.5 20h3L9 15.3" />
        <path d="M20 8.5 21.5 7M20 16.5l1.5 1M21 12h2" />
      </>
    ),
    calendar: (
      <>
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M7 3v4M17 3v4M3 9h18" />
        <path d="m15.5 16 1.5 1.5 3-3" />
        <path d="M7 12h.01M11 12h.01M7 16h.01M11 16h.01" />
      </>
    ),
    instagram: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </>
    ),
    youtube: (
      <>
        <rect x="2.5" y="5.5" width="19" height="13" rx="4" />
        <path d="m10 9 5 3-5 3z" fill="currentColor" stroke="none" />
      </>
    ),
    facebook: (
      <path d="M14 8h3V4h-3c-3.3 0-5 2-5 5v3H6v4h3v4h4v-4h3l1-4h-4V9c0-.7.3-1 1-1z" fill="currentColor" stroke="none" />
    ),
    spotify: (
      <>
        <circle cx="12" cy="12" r="9.5" />
        <path d="M7.5 10.2c3.4-1 6.7-.8 9.6.5" />
        <path d="M8 13c2.8-.7 5.6-.5 8 .5" />
        <path d="M9 15.7c2.1-.4 4-.2 5.8.5" />
      </>
    ),
    whatsapp: (
      <>
        <path d="M20.2 11.6a8.2 8.2 0 0 1-12.1 7.2L4 20l1.2-4A8.2 8.2 0 1 1 20.2 11.6z" />
        <path d="M9.2 8.2c.3-.2.6-.1.8.2l.8 1.4c.2.3.1.6-.1.8l-.6.5c.5 1 1.3 1.8 2.3 2.3l.5-.6c.2-.2.5-.3.8-.1l1.4.8c.3.2.4.5.2.8-.3.7-.9 1.2-1.6 1.2-1.3 0-3-.9-4.3-2.2s-2.2-3-2.2-4.3c0-.7.5-1.3 1.2-1.6z" />
      </>
    ),
    globe: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c2.2 2.5 3.3 5.5 3.3 9s-1.1 6.5-3.3 9c-2.2-2.5-3.3-5.5-3.3-9S9.8 5.5 12 3z" />
      </>
    ),
    arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  };

  return <svg {...common}>{paths[name]}</svg>;
}

function EventsPage({ strings, whatsappUrl, locale, setLocale }) {
  const events = strings.events || locales[defaultLocale].events;

  return (
    <div className="site events-page">
      <header className="nav">
        <a className="brand" href={homeUrl} aria-label="Wise101 home">
          <img className="header-logo" src={`${homeUrl}wise101-reference.png`} alt="Wise101 logo" />
        </a>
        <nav>
          <a href={homeUrl}>{strings.nav.about}</a>
          <a href={`${homeUrl}#services`}>{strings.nav.services}</a>
          <a href={`${homeUrl}#contact`}>{strings.nav.contact}</a>
          <a className="nav-contact" href={whatsappUrl} target="_blank" rel="noreferrer">
            {strings.nav.whatsapp}
          </a>
          <label className="locale-select">
            <span className="sr-only">{strings.localeLabel}</span>
            <select value={locale} onChange={(event) => setLocale(event.target.value)}>
              {localeOptions.map((option) => (
                <option key={option.value} value={option.value}>{option.label}</option>
              ))}
            </select>
          </label>
        </nav>
      </header>

      <main className="events-main">
        <section className="events-hero">
          <div className="events-hero-copy">
            <span className="eyebrow">{events.eyebrow}</span>
            <h1>{events.heading}</h1>
            <p>{events.description}</p>
            <a className="button primary" href={whatsappUrl} target="_blank" rel="noreferrer">
              {events.cta} <Icon name="arrow" size={19} />
            </a>
          </div>
          <div className="events-date-card">
            <span>{events.cardLabel}</span>
            <strong>{events.cardTitle}</strong>
            <div className="card-line" />
            <p>{events.cardBody}</p>
          </div>
        </section>

        <section className="events-list section">
          <div className="section-heading">
            <span>{events.listEyebrow}</span>
            <h2>{events.listHeading}</h2>
          </div>
          <article className="event-feature">
            <div className="event-feature-date"><strong>26</strong><span>SEPTEMBER 2026</span></div>
            <div>
              <span className="event-status">{events.status}</span>
              <h3>{events.featureTitle}</h3>
              <p>{events.featureBody}</p>
              <a className="facebook-event-link" href={facebookEventsUrl} target="_blank" rel="noreferrer">
                {events.facebookCta || 'View event on Facebook'} <Icon name="arrow" size={16} />
              </a>
            </div>
            <a className="event-arrow" href={facebookEventsUrl} target="_blank" rel="noreferrer" aria-label={events.facebookCta || 'View Facebook events'}>
              <Icon name="arrow" size={24} />
            </a>
          </article>
        </section>

        <section className="donation-section section">
          <div className="section-heading">
            <span>SUPPORT THE CAUSE</span>
            <h2>Make a donation</h2>
          </div>
          <div className="donation-content">
            <p>Support YANA (You Are Not Alone) and help raise awareness for mental health through music and community.</p>
            <form action="https://www.paypal.com/donate" method="post" target="_top">
              <input type="hidden" name="hosted_button_id" value="38ZC9VH32BR5W" />
              <input
                type="image"
                src="https://www.paypalobjects.com/en_AU/i/btn/btn_donate_LG.gif"
                border="0"
                name="submit"
                title="PayPal - The safer, easier way to pay online!"
                alt="Donate with PayPal button"
              />
              <img alt="" border="0" src="https://www.paypal.com/en_AU/i/scr/pixel.gif" width="1" height="1" />
            </form>
          </div>
        </section>
      </main>

      <footer>
        <a className="footer-brand" href={homeUrl}>
          <img className="footer-logo" src={`${homeUrl}wise101-reference.png`} alt="Wise101 logo" />
        </a>
        <a href={whatsappUrl} target="_blank" rel="noreferrer"><Icon name="whatsapp" size={19} /> {strings.footer.phone}</a>
        <small>{strings.footer.copyright.replace('{year}', new Date().getFullYear())}</small>
      </footer>
    </div>
  );
}

function App() {
  const [locale, setLocale] = React.useState(defaultLocale);
  const strings = locales[locale] || locales[defaultLocale];
  const whatsappUrl = getWhatsappUrl(strings.contact.whatsappMessage);
  const copyrightText = strings.footer.copyright.replace('{year}', new Date().getFullYear());

  if (window.location.pathname.endsWith('/events.html')) {
    return <EventsPage strings={strings} whatsappUrl={whatsappUrl} locale={locale} setLocale={setLocale} />;
  }

  return (
    <div className="site">
      <header className="nav">
        <a className="brand" href="#top" aria-label="Wise101 home">
          <img className="header-logo" src={import.meta.env.BASE_URL ? import.meta.env.BASE_URL + 'wise101-reference.png' : 'wise101-reference.png'} alt="Wise101 logo" />
        </a>
        <nav>
          <a href="#about">{strings.nav.about}</a>
          <a href="#services">{strings.nav.services}</a>
          <a href="#contact">{strings.nav.contact}</a>
          <a href="#socials">{strings.nav.socials}</a>
          <a href={eventsUrl}>{strings.nav.events || 'Events'}</a>
          <a className="nav-contact" href={whatsappUrl} target="_blank" rel="noreferrer">
            {strings.nav.whatsapp}
          </a>
          <label className="locale-select">
            <span className="sr-only">{strings.localeLabel}</span>
            <select value={locale} onChange={(event) => setLocale(event.target.value)}>
              {localeOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-glow" />
          <div className="hero-copy">
            <div className="eyebrow">{strings.hero.eyebrow}</div>
            <h1>
              {strings.hero.title} <span>{strings.hero.highlight}</span>
            </h1>
            <p>{strings.hero.copy}</p>
            <div className="hero-actions">
              <a className="button primary" href="#services">
                {strings.hero.actions.explore} <Icon name="arrow" size={19} />
              </a>
              <a className="button secondary" href={whatsappUrl} target="_blank" rel="noreferrer">
                <Icon name="whatsapp" size={19} /> {strings.hero.actions.chatWhatsApp}
              </a>
            </div>
          </div>

          <div className="hero-card">
              <img
                className="hero-card-logo-img"
                src={import.meta.env.BASE_URL ? import.meta.env.BASE_URL + 'wise101-big.png' : 'wise101-big.png'}
                alt="Wise101 logo"
              />
            <div className="card-line" />
          </div>
        </section>

        <section className="section about-section" id="about">
          <div className="section-heading">
            <span>{strings.about.eyebrow}</span>
            <h2>{strings.about.heading}</h2>
          </div>

          <div className="about-grid">
            <div className="about-card">
              <h3>{strings.about.title}</h3>
              <p>{strings.about.description}</p>
            </div>
            <div className="about-card">
              <h3>{strings.about.pointsTitle}</h3>
              <ul>
                {strings.about.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="section" id="services">
          <div className="section-heading">
            <span>{strings.section.subtitle}</span>
            <h2>{strings.section.heading}</h2>
            <p>{strings.section.description}</p>
          </div>

          <div className="service-grid">
            {serviceItems.map((service, index) => (
              <article className="service-card" key={service.id}>
                <div className="service-number">0{index + 1}</div>
                <div className="icon-ring"><Icon name={service.icon} size={34} /></div>
                <div>
                  <h3>{strings.services[service.id].title}</h3>
                  <p>{strings.services[service.id].description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div>
            <span className="eyebrow">{strings.contact.eyebrow}</span>
            <h2>{strings.contact.heading}</h2>
            <p>{strings.contact.body}</p>
            <p className="location-line">Brisbane, Queensland, Australia</p>
          </div>
          <div className="contact-cards">
            <a className="whatsapp-card" href={whatsappUrl} target="_blank" rel="noreferrer">
              <div className="whatsapp-icon"><Icon name="whatsapp" size={31} /></div>
              <div>
                <small>{strings.contact.whatsappLabel}</small>
                <strong>{strings.contact.whatsappNumber}</strong>
              </div>
              <Icon name="arrow" size={21} />
            </a>
            <a className="email-card" href="mailto:auwise101@gmail.com">
              <div className="whatsapp-icon"><Icon name="globe" size={31} /></div>
              <div>
                <small>Email</small>
                <strong>auwise101@gmail.com</strong>
              </div>
              <Icon name="arrow" size={21} />
            </a>
          </div>
        </section>

        <section className="section socials" id="socials">
          <div className="section-heading">
            <span>{strings.socials.subtitle}</span>
            <h2>{strings.socials.heading}</h2>
          </div>
          <div className="social-grid">
            {socials.map((social) => (
              <a
                className="social-card"
                key={social.id}
                href={social.href}
                target="_blank"
                rel="noreferrer"
              >
                <span className="social-icon"><Icon name={social.icon} size={25} /></span>
                <span>
                  <small>{strings.socials.labels[social.id]}</small>
                  <strong>{social.value}</strong>
                </span>
                <Icon name="arrow" size={18} />
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer>
        <button
          type="button"
          className="footer-brand footer-top-button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
        >
          <img className="footer-logo" src={import.meta.env.BASE_URL ? import.meta.env.BASE_URL + 'wise101-reference.png' : 'wise101-reference.png'} alt="Wise101 logo" />
        </button>
        <a href="https://www.wise101.com.au" target="_blank" rel="noreferrer">
          <Icon name="globe" size={19} /> {strings.footer.website}
        </a>
        <a href={whatsappUrl} target="_blank" rel="noreferrer">
          <Icon name="whatsapp" size={19} /> {strings.footer.phone}
        </a>
        <a href="mailto:auwise101@gmail.com">
          <Icon name="globe" size={19} /> auwise101@gmail.com
        </a>
        <small>{copyrightText}</small>
      </footer>
    </div>
  );
}

export default App;
