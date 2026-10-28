import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  MapPin,
  Ruler,
  Heart,
  Activity,
  BookOpen,
  PawPrint,
} from "lucide-react";

import dogBreeds from "../data/dogBreeds";
import catBreeds from "../data/catBreeds";

function BreedDetails() {
  const { id } = useParams();

  const allBreeds = [...dogBreeds, ...catBreeds];

  const breed = allBreeds.find((item) => item.id === id);

  if (!breed) {
    return (
      <main className="not-found">
        <PawPrint size={48} />
        <h1>Breed not found</h1>
        <p>We couldn't find the breed you're looking for.</p>
        <Link to="/" className="primary-button">
          <ArrowLeft size={17} />
          Return home
        </Link>
      </main>
    );
  }

  const facts = breed.type === "Dog"
    ? [
        breed.origin && { label: "Origin", value: breed.origin, icon: MapPin },
        breed.group && {
          label: "AKC group",
          value: breed.group,
          icon: PawPrint,
        },
        breed.size && {
          label: "Typical size",
          value: breed.size,
          icon: Ruler,
        },
        breed.coat && { label: "Coat", value: breed.coat, icon: Activity },
        breed.shedding && {
          label: "Shedding",
          value: breed.shedding,
          icon: Activity,
        },
        breed.height && {
          label: "Typical height",
          value: breed.height,
          icon: Ruler,
        },
        breed.weight && {
          label: "Typical weight",
          value: breed.weight,
          icon: Ruler,
        },
        breed.lifespan && {
          label: "Typical lifespan",
          value: breed.lifespan,
          icon: Clock,
        },
      ].filter(Boolean)
    : [
        breed.origin && { label: "Origin", value: breed.origin, icon: MapPin },
        breed.coat && { label: "Coat", value: breed.coat, icon: Ruler },
        breed.size && {
          label: "Typical size",
          value: breed.size,
          icon: Ruler,
        },
        breed.characteristics && {
          label: "Characteristics",
          value: breed.characteristics,
          icon: Activity,
        },
        breed.personality && {
          label: "Personality",
          value: breed.personality,
          icon: Heart,
        },
        breed.lifespan && {
          label: "Typical lifespan",
          value: breed.lifespan,
          icon: Clock,
        },
      ].filter(Boolean);

  return (
    <main className="breed-details-page">
      <div className="breed-details-container">
        <Link to="/" className="back-link">
          <ArrowLeft size={17} />
          Back to encyclopedia
        </Link>

        <section className="breed-details-hero">
          <div className="breed-details-image">
            <img src={breed.image} alt={breed.name} />
            <span className="details-animal-badge">
              {breed.type} breed
            </span>
          </div>

          <div className="breed-details-intro">
            <span className="section-label">
              PET PEEVE BREED ENCYCLOPEDIA
            </span>

            <h1>{breed.name}</h1>

            <p className="details-description">
              {breed.description}
            </p>

            <div className="breed-facts">
              {facts.map(({ label, value, icon: Icon }) => (
                <div className="breed-fact" key={label}>
                  <Icon size={20} />
                  <div>
                    <span>{label}</span>
                    <strong>{value}</strong>
                  </div>
                </div>
              ))}
            </div>

            <a href="#overview" className="primary-button">
              Read breed guide
              <ArrowRight size={17} />
            </a>
          </div>
        </section>

        <div className="details-content-layout">
          <article className="breed-article">
            <section id="overview" className="detail-content-section">
              <span className="section-label">01 — OVERVIEW</span>
              <h2>About the {breed.name}</h2>
              <p>{breed.overview}</p>
            </section>

            <section className="detail-content-section">
              <span className="section-label">02 — DAILY CARE</span>
              <h2>Exercise and activity</h2>
              <p>{breed.exercise}</p>
            </section>

            <section className="detail-content-section">
              <span className="section-label">03 — GROOMING</span>
              <h2>Coat and grooming</h2>
              <p>{breed.grooming}</p>
            </section>

            <section className="detail-content-section temperament-section">
              <span className="section-label">04 — PERSONALITY</span>
              <h2>Common temperament traits</h2>

              <div className="temperament-list">
                {breed.temperament.map((trait) => (
                  <span key={trait}>{trait}</span>
                ))}
              </div>

              <p className="temperament-note">
                Every animal is an individual. Temperament can vary
                depending on genetics, early experiences, training,
                socialization, and environment.
              </p>
            </section>
          </article>

          <aside className="details-sidebar">
            <div className="sidebar-card">
              <span className="sidebar-icon">
                <Activity size={23} />
              </span>

              <h3>Every pet is different.</h3>

              <p>
                Your pet's age, health, activity level, and individual
                needs should guide its daily care routine.
              </p>
            </div>

            <div className="sidebar-card source-card">
              <span className="sidebar-icon">
                <BookOpen size={23} />
              </span>

              <h3>Learn more</h3>

              <p>
                Read additional breed information from the reference
                used for this entry.
              </p>

              <a
                href={breed.sourceUrl}
                target="_blank"
                rel="noreferrer"
                className="source-link"
              >
                {breed.sourceName}
                <ArrowRight size={15} />
              </a>
            </div>

            <div className="health-disclaimer">
              <PawPrint size={20} />
              <p>
                This page is for educational purposes and does not
                replace professional veterinary advice.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}

export default BreedDetails;
