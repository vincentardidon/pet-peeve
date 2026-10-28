import { useState } from "react";
import { Link, useParams } from "react-router-dom";

import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Clock,
  ExternalLink,
  PawPrint,
  Search,
  ShieldCheck,
} from "lucide-react";

import petCareGuides from "../data/petCareGuides";

import "./PetCare.css";

const categories = [
  "All",
  "Dogs",
  "Cats",
  "Nutrition & Diet",
  "Safety",
  "Health & Wellness",
  "Behavior & Training",
];

function PetCare() {
  const { slug } = useParams();

  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const selectedGuide = slug
    ? petCareGuides.find((guide) => guide.id === slug)
    : null;

  // Display an individual article when a guide URL is selected.
  if (slug) {
    if (!selectedGuide) {
      return (
        <main className="care-page">
          <div className="care-container">
            <div className="care-not-found">
              <PawPrint size={42} />

              <h1>Guide not found</h1>

              <p>
                This guide may have been moved or does not exist.
              </p>

              <Link to="/care" className="care-primary-link">
                Browse all guides
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </main>
      );
    }

    return (
      <main className="care-page">
        <article className="care-container care-article-container">
          <Link to="/care" className="care-back-link">
            <ArrowLeft size={17} />
            All care guides
          </Link>

          <header className="care-article-header">
            <div className="care-article-meta">
              <span className="care-category-tag">
                {selectedGuide.category}
              </span>

              <span>
                <Clock size={14} />
                {selectedGuide.readTime}
              </span>
            </div>

            <h1>{selectedGuide.title}</h1>

            <p className="care-article-summary">
              {selectedGuide.summary}
            </p>

            <p className="care-audience">
              Written for: {selectedGuide.audience}
            </p>

          </header>

          <div className="care-article-image-wrapper">
            <img
              src={selectedGuide.image}
              alt=""
              className="care-article-image"
            />
          </div>

          <div className="care-reading-layout">
            <div className="care-article-body">
              {selectedGuide.sections.map((section, index) => (
                <section
                  className="care-content-section"
                  key={section.heading}
                >
                  <span className="care-section-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h2>{section.heading}</h2>

                  {section.paragraphs.map((paragraph, paragraphIndex) => (
                    <p key={paragraphIndex}>{paragraph}</p>
                  ))}

                  {section.bullets?.length > 0 && (
                    <ul>
                      {section.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}

              <section className="care-sources-section">
                <div className="care-sources-heading">
                  <BookOpen size={21} />

                  <div>
                    <h2>Sources and further reading</h2>

                    <p>
                      Explore these veterinary resources for more
                      information.
                    </p>
                  </div>
                </div>

                <div className="care-source-list">
                  {selectedGuide.sources.map((source) => (
                    <a
                      key={source.url}
                      href={source.url}
                      target="_blank"
                      rel="noreferrer"
                      className="care-source-link"
                    >
                      <span>{source.name}</span>

                      <ExternalLink size={17} />
                    </a>
                  ))}
                </div>
              </section>

              <aside className="care-medical-notice">
                <ShieldCheck size={22} />

                <div>
                  <h3>Important health notice</h3>

                  <p>
                    This article provides general educational
                    information and does not replace advice,
                    examination, diagnosis, or treatment from a
                    qualified veterinarian. Contact a veterinarian
                    about concerns involving your pet's health.
                  </p>
                </div>
              </aside>

              <Link to="/care" className="care-bottom-link">
                <ArrowLeft size={17} />
                Back to all care guides
              </Link>
            </div>

            <aside className="care-article-sidebar">
              <div className="care-sidebar-card">
                <PawPrint size={25} />

                <h3>Keep learning</h3>

                <p>
                  Explore more pet care topics to help you make
                  informed decisions for your companion.
                </p>

                <Link to="/care">
                  Browse all guides
                  <ArrowRight size={16} />
                </Link>
              </div>
            </aside>
          </div>
        </article>
      </main>
    );
  }

  // Filter the directory by category and search terms.
  const filteredGuides = petCareGuides.filter((guide) => {
    const searchText = search.toLowerCase().trim();

    const searchableContent = [
      guide.title,
      guide.category,
      guide.audience,
      guide.summary,
    ]
      .join(" ")
      .toLowerCase();

    const matchesSearch = searchableContent.includes(searchText);

    const matchesCategory =
      activeCategory === "All" ||
      guide.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <main className="care-page">
      <div className="care-container">
        <Link to="/" className="care-back-link">
          <ArrowLeft size={17} />
          Back to home
        </Link>

        <header className="care-directory-hero">
          <div className="care-hero-icon">
            <BookOpen size={26} />
          </div>

          <p className="care-eyebrow">
            THE PET PEEVE ENCYCLOPEDIA
          </p>

          <h1>
            Better care starts
            <br />
            with <span>understanding.</span>
          </h1>

          <p className="care-hero-description">
            Practical pet care guides, helpful explanations, and
            trustworthy veterinary resources for every pet owner.
          </p>

          <div className="care-trust-note">
            <ShieldCheck size={17} />
            Educational guides with veterinary sources
          </div>
        </header>

        <section className="care-directory-controls">
          <label className="care-search">
            <Search size={19} />

            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search pet care guides..."
              aria-label="Search pet care guides"
            />
          </label>

          <div
            className="care-category-filters"
            aria-label="Filter guides by category"
          >
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={
                  activeCategory === category
                    ? "care-filter-button active"
                    : "care-filter-button"
                }
                onClick={() => setActiveCategory(category)}
                aria-pressed={activeCategory === category}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        <section className="care-guides-section">
          <div className="care-guides-heading">
            <div>
              <p className="care-eyebrow">LEARN SOMETHING NEW</p>

              <h2>Pet care guides</h2>
            </div>

            <span className="care-guide-count">
              {filteredGuides.length}{" "}
              {filteredGuides.length === 1 ? "guide" : "guides"}
            </span>
          </div>

          {filteredGuides.length > 0 ? (
            <div className="care-guides-grid">
              {filteredGuides.map((guide) => (
                <article className="care-guide-card" key={guide.id}>
                  <Link
                    to={`/care/${guide.id}`}
                    className="care-guide-image-link"
                    aria-label={`Read ${guide.title}`}
                  >
                    <img
                      src={guide.image}
                      alt=""
                      className="care-guide-image"
                      loading="lazy"
                    />
                  </Link>

                  <div className="care-guide-card-content">
                    <div className="care-guide-card-meta">
                      <span className="care-category-tag">
                        {guide.category}
                      </span>

                      <span className="care-reading-time">
                        <Clock size={13} />
                        {guide.readTime}
                      </span>
                    </div>

                    <h3>
                      <Link to={`/care/${guide.id}`}>
                        {guide.title}
                      </Link>
                    </h3>

                    <p className="care-guide-summary">
                      {guide.summary}
                    </p>

                    <div className="care-guide-card-footer">
                      <span>{guide.audience}</span>

                      <Link
                        to={`/care/${guide.id}`}
                        className="care-read-link"
                      >
                        Read guide
                        <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="care-empty-state">
              <PawPrint size={38} />

              <h3>No guides found</h3>

              <p>
                Try another keyword or select a different category.
              </p>

              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setActiveCategory("All");
                }}
              >
                Clear filters
              </button>
            </div>
          )}
        </section>

        <section className="care-bottom-notice">
          <ShieldCheck size={23} />

          <div>
            <h3>Reliable information matters</h3>

            <p>
              Pet health information should support, not replace,
              professional veterinary care. Our guides include
              further-reading links so you can explore information
              from established veterinary and animal welfare sources.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}

export default PetCare;