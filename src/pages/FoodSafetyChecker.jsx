import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

import {
  ArrowLeft,
  ArrowRight,
  AlertTriangle,
  CheckCircle2,
  ExternalLink,
  Info,
  PawPrint,
  Search,
  ShieldAlert,
  ShieldCheck,
} from "lucide-react";

import foodSafetyData from "../data/foodSafetyData";

import "./FoodSafetyChecker.css";

const riskFilters = [
  { label: "All foods", value: "all" },
  { label: "Avoid", value: "avoid" },
  { label: "Use caution", value: "caution" },
  { label: "Occasional treats", value: "generally-ok" },
];

const exampleFoods = [
  "Chocolate",
  "Grapes",
  "Garlic",
  "Carrots",
  "Plain chicken",
];

function getStatusLabel(status) {
  if (status === "avoid") {
    return "Avoid";
  }

  if (status === "caution") {
    return "Use caution";
  }

  return "Occasional treat";
}

function getStatusIcon(status) {
  if (status === "avoid") {
    return <ShieldAlert size={20} />;
  }

  if (status === "caution") {
    return <AlertTriangle size={20} />;
  }

  return <CheckCircle2 size={20} />;
}

function FoodSafetyChecker() {
  const [animal, setAnimal] = useState("Dog");
  const [search, setSearch] = useState("");
  const [activeRisk, setActiveRisk] = useState("all");

  const normalizedSearch = search
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "");

  const filteredFoods = useMemo(() => {
    return foodSafetyData.filter((food) => {
      // Filter by the selected animal.
      const matchesAnimal = food.animals.includes(animal);

      // Filter by the selected risk category.
      const matchesRisk =
        activeRisk === "all" || food.status === activeRisk;

      // Search the food name, aliases, and description.
      const searchableText = [
        food.name,
        ...food.aliases,
        food.summary,
        food.details,
        food.category,
      ]
        .join(" ")
        .toLowerCase()
        .replace(/[^\w\s-]/g, "");

      const matchesSearch =
        normalizedSearch === "" ||
        searchableText.includes(normalizedSearch) ||
        food.aliases.some((alias) =>
          normalizedSearch.includes(alias.toLowerCase())
        );

      return matchesAnimal && matchesRisk && matchesSearch;
    });
  }, [animal, activeRisk, normalizedSearch]);

  function clearFilters() {
    setSearch("");
    setActiveRisk("all");
    setAnimal("Dog");
  }

  return (
    <main className="food-safety-page">
      <div className="food-safety-container">
        <Link to="/" className="food-back-link">
          <ArrowLeft size={17} />
          Back to home
        </Link>

        {/* Page introduction */}
        <section className="food-safety-hero">
          <div className="food-hero-icon">
            <ShieldCheck size={28} />
          </div>

          <p className="food-eyebrow">
            THE PET PEEVE ENCYCLOPEDIA
          </p>

          <h1>
            Can my pet
            <br />
            eat <span>this?</span>
          </h1>

          <p className="food-hero-description">
            Look up common foods to explore general safety information,
            potential risks, and preparation guidance for dogs and cats.
          </p>

          <div className="food-prototype-note">
            <Info size={17} />
            General educational information, not a diagnosis
          </div>
        </section>

        {/* Emergency warning */}
        <section className="food-emergency-banner">
          <div className="food-emergency-icon">
            <AlertTriangle size={23} />
          </div>

          <div>
            <h2>Think your pet ate something dangerous?</h2>

            <p>
              Contact a veterinarian immediately. Do not wait for
              symptoms or use this checker to decide whether an
              exposure is safe. Do not induce vomiting or give a
              home remedy unless a veterinary professional directs
              you to do so.
            </p>

            <a
              href="https://www.aspca.org/news/what-do-if-your-pet-poisoned"
              target="_blank"
              rel="noreferrer"
              className="food-emergency-link"
            >
              Read emergency guidance
              <ExternalLink size={15} />
            </a>
          </div>
        </section>

        {/* Search and filters */}
        <section className="food-search-section">
          <div className="food-search-heading">
            <h2>Search a food</h2>

            <p>
              Choose your pet first, then type a food name or ingredient.
            </p>
          </div>

          <div className="food-animal-selector">
            <button
              type="button"
              className={
                animal === "Dog"
                  ? "food-animal-button active"
                  : "food-animal-button"
              }
              onClick={() => setAnimal("Dog")}
              aria-pressed={animal === "Dog"}
            >
              <span className="food-animal-emoji" aria-hidden="true">
                🐕
              </span>

              <span>
                <strong>Dog</strong>
                <small>Check dog food safety</small>
              </span>
            </button>

            <button
              type="button"
              className={
                animal === "Cat"
                  ? "food-animal-button active"
                  : "food-animal-button"
              }
              onClick={() => setAnimal("Cat")}
              aria-pressed={animal === "Cat"}
            >
              <span className="food-animal-emoji" aria-hidden="true">
                🐈
              </span>

              <span>
                <strong>Cat</strong>
                <small>Check cat food safety</small>
              </span>
            </button>
          </div>

          <label className="food-search-box">
            <Search size={20} />

            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Try chocolate, grapes, carrots..."
              aria-label={`Search food safety information for your ${animal.toLowerCase()}`}
            />

            {search && (
              <button
                type="button"
                onClick={() => setSearch("")}
                className="food-clear-search"
                aria-label="Clear search"
              >
                Clear
              </button>
            )}
          </label>

          <div className="food-example-searches">
            <span>Try:</span>

            {exampleFoods.map((food) => (
              <button
                type="button"
                key={food}
                onClick={() => setSearch(food)}
              >
                {food}
              </button>
            ))}
          </div>
        </section>

        {/* Risk category filters */}
        <section className="food-results-section">
          <div className="food-results-heading">
            <div>
              <p className="food-eyebrow">FOOD LOOKUP</p>

              <h2>Food safety results</h2>

              <p className="food-results-subtitle">
                Information for your {animal.toLowerCase()}
              </p>
            </div>

            <span className="food-result-count">
              {filteredFoods.length}{" "}
              {filteredFoods.length === 1 ? "entry" : "entries"}
            </span>
          </div>

          <div className="food-risk-filters">
            {riskFilters.map((filter) => (
              <button
                type="button"
                key={filter.value}
                className={
                  activeRisk === filter.value
                    ? "food-risk-filter active"
                    : "food-risk-filter"
                }
                onClick={() => setActiveRisk(filter.value)}
                aria-pressed={activeRisk === filter.value}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Results */}
          {filteredFoods.length > 0 ? (
            <div className="food-results-grid">
              {filteredFoods.map((food) => (
                <article
                  className={`food-result-card risk-${food.status}`}
                  key={food.id}
                >
                  <div className="food-result-card-top">
                    <span
                      className={`food-status-badge status-${food.status}`}
                    >
                      {getStatusIcon(food.status)}
                      {getStatusLabel(food.status)}
                    </span>

                    <span className="food-category-label">
                      {food.category}
                    </span>
                  </div>

                  <h3>{food.name}</h3>

                  <p className="food-result-summary">
                    {food.summary}
                  </p>

                  <div className="food-result-information">
                    <div className="food-information-heading">
                      <Info size={17} />

                      <h4>What you should know</h4>
                    </div>

                    <p>{food.details}</p>
                  </div>

                  {food.preparation && (
                    <div className="food-preparation-note">
                      <CheckCircle2 size={17} />

                      <div>
                        <strong>Preparation</strong>

                        <p>{food.preparation}</p>
                      </div>
                    </div>
                  )}

                  <div className="food-action-note">
                    <div className="food-information-heading">
                      <PawPrint size={17} />

                      <h4>Recommended action</h4>
                    </div>

                    <p>{food.action}</p>
                  </div>

                  <div className="food-source-section">
                    <span className="food-source-title">
                      Sources
                    </span>

                    {food.sources.map((source) => (
                      <a
                        key={source.url}
                        href={source.url}
                        target="_blank"
                        rel="noreferrer"
                        className="food-source-link"
                      >
                        {source.name}
                        <ExternalLink size={14} />
                      </a>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="food-no-results">
              <Search size={37} />

              <h3>No matching entry found</h3>

              <p>
                This food may not be included in the current Pet Peeve
                dataset, or the selected filters may hide the results.
                An unlisted food must not be assumed safe.
              </p>

              <p>
                Check a veterinary source or ask a veterinarian before
                feeding your pet an unfamiliar food.
              </p>

              <button
                type="button"
                onClick={clearFilters}
              >
                Reset search and filters
              </button>
            </div>
          )}
        </section>

        {/* Disclaimer */}
        <section className="food-safety-disclaimer">
          <ShieldCheck size={24} />

          <div>
            <h2>Know the limits of this checker</h2>

            <p>
              This prototype covers selected common foods, not every
              ingredient, recipe, product, or possible exposure.
              Individual risks depend on the animal, its health, the
              amount consumed, and the specific product. A food listed
              as an occasional treat is not necessarily appropriate
              for every pet.
            </p>

            <p>
              This tool does not calculate toxic doses, diagnose
              poisoning, or replace advice from a qualified veterinarian.
            </p>
          </div>
        </section>

        <div className="food-bottom-link">
          <Link to="/care">
            Explore our Pet Care Guides
            <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </main>
  );
}

export default FoodSafetyChecker;