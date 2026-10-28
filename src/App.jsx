import { Link, Routes, Route } from "react-router-dom";
const FoodSafetyChecker = lazy(() => import("./pages/FoodSafetyChecker"));
const BreedDirectory = lazy(() => import("./pages/BreedDirectory"));
const BreedDetails = lazy(() => import("./pages/BreedDetails"));
const PetCare = lazy(() => import("./pages/PetCare"));
const NotFound = lazy(() => import("./pages/NotFound"));
import { lazy, Suspense, useState } from "react";
import {
  Search,
  Menu,
  X,
  ArrowRight,
  Heart,
  BookOpen,
  ShieldCheck,
  PawPrint,
  Dog,
  Cat,
  ChevronRight,
} from "lucide-react";

import featuredBreeds from "./data/featuredBreeds";

import "./App.css";

const careTopics = [
  {
    number: "01",
    title: "Nutrition & Diet",
    description:
      "Understand balanced diets, feeding routines, and foods your pets should avoid.",
    icon: BookOpen,
    guideId: "pet-nutrition-basics",
  },
  {
    number: "02",
    title: "Health & Wellness",
    description:
      "Learn about preventive care, warning signs, vaccinations, and vet visits.",
    icon: ShieldCheck,
    guideId: "pet-vet-checkups",
  },
  {
    number: "03",
    title: "Behavior & Training",
    description:
      "Understand your pet's behavior and build healthy everyday habits.",
    icon: Heart,
    guideId: "positive-reinforcement-training",
  },
];

function Home() {
  const [search, setSearch] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredBreeds = featuredBreeds.filter((breed) => {
  const searchText = search.toLowerCase();

  const matchesSearch =
    breed.name.toLowerCase().includes(searchText) ||
    breed.type.toLowerCase().includes(searchText) ||
    breed.origin.toLowerCase().includes(searchText) ||
    breed.group.toLowerCase().includes(searchText) ||
    breed.coat.toLowerCase().includes(searchText) ||
    breed.characteristics.toLowerCase().includes(searchText) ||
    breed.personality.toLowerCase().includes(searchText) ||
    breed.temperament.some((trait) =>
      trait.toLowerCase().includes(searchText)
    );

  const matchesFilter =
    activeFilter === "All" || breed.type === activeFilter;

  return matchesSearch && matchesFilter;
});

  function scrollToBreeds() {
    document
      .getElementById("breeds")
      ?.scrollIntoView({ behavior: "smooth" });

    setMenuOpen(false);
  }

  return (
    <div className="site-shell">
      <header className="navbar">
        <a href="#home" className="brand">
          <span className="brand-icon">
            <PawPrint size={24} strokeWidth={2.4} />
          </span>

          <span>
            pet<span className="brand-accent">peeve</span>
            <small>THE PET ENCYCLOPEDIA</small>
          </span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>

        <nav className={`nav-links ${menuOpen ? "nav-open" : ""}`}>

          <Link to="/dogs" className="directory-nav-link">
            Dogs
          </Link>

          <Link to="/cats" className="directory-nav-link">
            Cats
          </Link>

          <Link to="/care" className="directory-nav-link">
            Pet Care
          </Link>

          <Link to="/food-safety" className="directory-nav-link">
            Food Safety
          </Link>

          <a href="#home" onClick={() => setMenuOpen(false)}>
            Home
          </a>

          <a href="#breeds" onClick={() => setMenuOpen(false)}>
            Breeds
          </a>

          <a href="#care" onClick={() => setMenuOpen(false)}>
            Pet Care
          </a>

          <a href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>

          <button className="nav-cta" onClick={scrollToBreeds}>
            Explore pets <ArrowRight size={16} />
          </button>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <div className="eyebrow">
              <span className="eyebrow-dot" />
              YOUR TRUSTED PET KNOWLEDGE HUB
            </div>

            <h1>
              Better care.
              <br />
              <span>Happier paws.</span>
            </h1>

            <p className="hero-description">
              Everything you need to know about dogs and cats,
              all in one place. Discover breeds, understand their
              needs, and give your best friend the life they deserve.
            </p>

            <div className="hero-actions">
              <button className="primary-button" onClick={scrollToBreeds}>
                Explore the encyclopedia
                <ArrowRight size={18} />
              </button>

              <a href="#care" className="secondary-button">
                Learn pet care
              </a>
            </div>

            <div className="hero-note">
              <div className="note-icon">
                <Heart size={17} fill="currentColor" />
              </div>

              <p>
                <strong>Made for pet lovers.</strong>
                <span>Built around responsible pet ownership.</span>
              </p>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-image-frame">
              <img
                src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&w=1200&q=90"
                alt="A dog and cat enjoying time together"
                className="hero-image"
              />

              <div className="image-caption">
                <span className="caption-paw">
                  <PawPrint size={19} />
                </span>

                <div>
                  <strong>Every pet deserves the best.</strong>
                  <span>Knowledge makes better pet parents.</span>
                </div>
              </div>
            </div>

            <div className="floating-badge badge-top">
              <span>🐶</span>
              <div>
                <strong>Dog lovers</strong>
                <small>Explore every breed</small>
              </div>
            </div>

            <div className="floating-badge badge-bottom">
              <span>🐱</span>
              <div>
                <strong>Cat lovers</strong>
                <small>Understand every purr</small>
              </div>
            </div>

            <div className="hero-decoration decoration-one" />
            <div className="hero-decoration decoration-two" />
          </div>
        </section>

        <section className="quick-links">
          <Link to="/dogs" className="quick-link">
            <span className="quick-icon dog-icon">
              <Dog size={23} />
            </span>

            <span>
              <strong>Dog breeds</strong>
              <small>Find your companion</small>
            </span>

            <ChevronRight size={18} />
          </Link>

          <Link to="/cats" className="quick-link">
            <span className="quick-icon cat-icon">
              <Cat size={23} />
            </span>

            <span>
              <strong>Cat breeds</strong>
              <small>Meet your next feline</small>
            </span>

            <ChevronRight size={18} />
          </Link>

          <a href="#care" className="quick-link">
            <span className="quick-icon care-icon">
              <Heart size={22} />
            </span>

            <span>
              <strong>Pet care guides</strong>
              <small>Help them thrive</small>
            </span>

            <ChevronRight size={18} />
          </a>
        </section>

        <section className="breeds-section section-padding" id="breeds">
          <div className="section-heading">
            <div>
              <span className="section-label">MEET YOUR MATCH</span>
              <h2>Discover amazing breeds.</h2>
              <p>
                Browse a few featured pets, then explore all 208 AKC dog
                breeds and 45 CFA cat breeds.
              </p>
            </div>

            <span className="section-paw">
              <PawPrint size={43} />
            </span>
          </div>

          <div className="breed-tools">
            <div className="search-box">
              <Search size={19} />

              <input
                type="search"
                placeholder="Search breeds or animals..."
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                aria-label="Search featured breeds"
              />

              {search && (
                <button
                  className="clear-search"
                  onClick={() => setSearch("")}
                  aria-label="Clear search"
                >
                  <X size={17} />
                </button>
              )}
            </div>

            <div className="filter-buttons">
              {["All", "Dog", "Cat"].map((filter) => (
                <button
                  key={filter}
                  className={
                    activeFilter === filter ? "filter-active" : ""
                  }
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter === "Dog"
                    ? "Dogs"
                    : filter === "Cat"
                      ? "Cats"
                      : "All pets"}
                </button>
              ))}
            </div>
          </div>

          <div className="breed-grid">
            {filteredBreeds.map((breed) => (
              <article className="breed-card" key={breed.name}>
                <div className="breed-image-wrap">
                  <img src={breed.image} alt={breed.name} loading="lazy" />

                  <span className="breed-tag">{breed.tag}</span>

                  <span className="animal-type">{breed.type}</span>
                </div>

                <div className="breed-card-content">
                  <span className="breed-category">
                    {breed.type.toUpperCase()} BREED
                  </span>

                  <h3>{breed.name}</h3>

                  <p>{breed.description}</p>

                  <Link to={`/breeds/${breed.id}`} className="text-link">
                     Explore breed <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            ))}

            {filteredBreeds.length === 0 && (
              <div className="no-results">
                <PawPrint size={34} />
                <h3>No breeds found</h3>
                <p>Try another search term or change the filter.</p>

                <button
                  className="primary-button"
                  onClick={() => {
                    setSearch("");
                    setActiveFilter("All");
                  }}
                >
                  Show all breeds
                </button>
              </div>
            )}
          </div>

          <div className="section-footer">
            <p>Find your next companion in the full breed directories.</p>

            <div className="hero-actions">
              <Link to="/dogs" className="outline-button">
                All dog breeds <ArrowRight size={16} />
              </Link>

              <Link to="/cats" className="outline-button">
                All cat breeds <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        <section className="care-section section-padding" id="care">
          <div className="care-heading">
            <span className="section-label">A LITTLE KNOWLEDGE GOES A LONG WAY</span>
            <h2>Because love is in the little things.</h2>
            <p>
              Good pet care starts with understanding what your
              companion needs every day.
            </p>
          </div>

          <div className="care-grid">
            {careTopics.map((topic) => {
              const Icon = topic.icon;

              return (
                <article className="care-card" key={topic.number}>
                  <div className="care-card-top">
                    <span className="care-number">{topic.number}</span>

                    <span className="care-card-icon">
                      <Icon size={23} />
                    </span>
                  </div>

                  <h3>{topic.title}</h3>

                  <p>{topic.description}</p>

                  <Link to={`/care/${topic.guideId}`} className="care-link">
                    Learn more <ArrowRight size={16} />
                  </Link>
                </article>
              );
            })}
          </div>
        </section>

        <section className="about-banner section-padding" id="about">
          <div className="about-icon">
            <PawPrint size={32} />
          </div>

          <div className="about-copy">
            <span className="section-label">OUR LITTLE CORNER OF THE INTERNET</span>
            <h2>Better informed. Better pet parents.</h2>

            <p>
              Pet Peeve is an educational encyclopedia for dog and cat
              lovers. Our goal is to make pet knowledge easier to find
              and understand, from choosing a breed to learning everyday
              care.
            </p>

            <small>
              Health information is educational and does not replace
              advice from a licensed veterinarian.
            </small>
          </div>
        </section>
      </main>

      <footer className="footer">
        <a href="#home" className="brand footer-brand">
          <span className="brand-icon">
            <PawPrint size={22} />
          </span>

          <span>
            pet<span className="brand-accent">peeve</span>
            <small>THE PET ENCYCLOPEDIA</small>
          </span>
        </a>

        <p>Made with care for every paw, whisker, and wagging tail.</p>

        <span className="footer-copy">
          © {new Date().getFullYear()} Pet Peeve
        </span>
      </footer>
    </div>
  );
}

function App() {
  return (
    <Suspense fallback={<div className="route-loading">Loading page…</div>}>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/dogs"
          element={<BreedDirectory animalType="Dog" />}
        />

        <Route
          path="/cats"
          element={<BreedDirectory animalType="Cat" />}
        />

        <Route path="/breeds/:id" element={<BreedDetails />} />

        <Route path="/care" element={<PetCare />} />

        <Route path="/care/:slug" element={<PetCare />} />

        <Route
          path="/food-safety"
          element={<FoodSafetyChecker />}
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

export default App;
