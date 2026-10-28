import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  PawPrint,
  Search,
} from "lucide-react";

import dogBreeds from "../data/dogBreeds";
import catBreeds from "../data/catBreeds";

function BreedDirectory({ animalType }) {
  const [search, setSearch] = useState("");
  const [sizeFilter, setSizeFilter] = useState("All sizes");
  const [currentPage, setCurrentPage] = useState(1);

  // Choose the correct data file based on the current directory.
  const breeds = animalType === "Dog" ? dogBreeds : catBreeds;

  // Build the available size options from the breed data.
  const sizes = [
    "All sizes",
    ...new Set(breeds.map((breed) => breed.size).filter(Boolean)),
  ];

  // Filter breeds by search text and selected size.
  const filteredBreeds = breeds.filter((breed) => {
    const searchText = search.toLowerCase().trim();

    const searchableText = [
      breed.name,
      breed.origin,
      breed.group,
      breed.size,
      breed.description,
      breed.coat,
      breed.characteristics,
      breed.personality,
      ...(breed.temperament || []),
    ]
      .join(" ")
      .toLowerCase();

    const matchesSearch = searchableText.includes(searchText);

    const matchesSize =
      sizeFilter === "All sizes" || breed.size === sizeFilter;

    return matchesSearch && matchesSize;
  });

  const pageSize = 24;
  const pageCount = Math.ceil(filteredBreeds.length / pageSize);
  const pageBreeds = filteredBreeds.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );
  const isDogDirectory = animalType === "Dog";

  return (
    <main className="directory-page">
      <div className="directory-container">
        <Link to="/" className="directory-back-link">
          <ArrowLeft size={17} />
          Back to home
        </Link>

        <section className="directory-heading">
          <div className="directory-icon">
            <PawPrint size={25} />
          </div>

          <p className="directory-eyebrow">
            THE PET PEEVE ENCYCLOPEDIA
          </p>

          <h1>
            {isDogDirectory ? "Dog Breeds" : "Cat Breeds"}
          </h1>

          <p className="directory-description">
            {isDogDirectory
              ? "Discover dog breeds, learn about their personalities, and explore their care needs."
              : "Explore cat breeds, understand their unique traits, and learn how to care for them."}
          </p>
        </section>

        <section className="directory-controls">
          <label className="directory-search">
            <Search size={19} />

            <input
              type="search"
              placeholder={`Search ${isDogDirectory ? "dog" : "cat"} breeds...`}
              value={search}
              onChange={(event) => {
                setSearch(event.target.value);
                setCurrentPage(1);
              }}
              aria-label={`Search ${isDogDirectory ? "dog" : "cat"} breeds`}
            />
          </label>

          <label className="directory-size-filter">
            <span>Size:</span>

            <select
              value={sizeFilter}
              onChange={(event) => {
                setSizeFilter(event.target.value);
                setCurrentPage(1);
              }}
              aria-label="Filter breeds by size"
            >
              {sizes.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </label>
        </section>

        <div className="directory-results-heading">
          <div>
            <h2>Explore breeds</h2>
            <p>
              {filteredBreeds.length > 0
                ? `Showing ${(currentPage - 1) * pageSize + 1}–${Math.min(
                    currentPage * pageSize,
                    filteredBreeds.length
                  )} of `
                : ""}
              {filteredBreeds.length}{" "}
              {filteredBreeds.length === 1 ? "breed" : "breeds"} found
            </p>
          </div>
        </div>

        {filteredBreeds.length > 0 ? (
          <section className="directory-grid">
            {pageBreeds.map((breed) => {
              const cardFacts = breed.type === "Dog"
                ? [
                    { label: "Group", value: breed.group },
                    { label: "Size", value: breed.size },
                    { label: "Lifespan", value: breed.lifespan },
                  ]
                : [
                    { label: "Coat", value: breed.coat },
                    { label: "Characteristics", value: breed.characteristics },
                    { label: "Personality", value: breed.personality },
                  ];

              return (
                <article className="directory-card" key={breed.id}>
                  <Link
                    to={`/breeds/${breed.id}`}
                    className="directory-card-image-link"
                    aria-label={`Learn more about ${breed.name}`}
                  >
                    <img
                      src={breed.image}
                      alt={breed.name}
                      className="directory-card-image"
                      loading="lazy"
                    />
                  </Link>

                  <div className="directory-card-content">
                    <span className="directory-breed-type">
                      {breed.type} breed
                    </span>

                    <h3>{breed.name}</h3>

                    <p className="directory-card-description">
                      {breed.description}
                    </p>

                    <div className="directory-card-facts">
                      {cardFacts.filter((fact) => fact.value).map((fact) => (
                        <div key={fact.label}>
                          <span className="directory-fact-label">
                            {fact.label}
                          </span>
                          <span className="directory-fact-value">
                            {fact.value}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="directory-temperament">
                      {breed.temperament.slice(0, 3).map((trait) => (
                        <span key={trait}>{trait}</span>
                      ))}
                    </div>

                    <Link
                      to={`/breeds/${breed.id}`}
                      className="directory-explore-link"
                    >
                      Explore breed
                      <ArrowRight size={17} />
                    </Link>
                  </div>
                </article>
              );
            })}
          </section>
        ) : (
          <section className="directory-empty">
            <PawPrint size={36} />

            <h3>No breeds found</h3>

            <p>
              Try a different search term or select another size.
            </p>

            <button
              type="button"
              onClick={() => {
                setSearch("");
                setSizeFilter("All sizes");
                setCurrentPage(1);
              }}
            >
              Clear filters
            </button>
          </section>
        )}

        {pageCount > 1 && (
          <nav className="directory-pagination" aria-label="Breed pages">
            <button
              type="button"
              onClick={() => setCurrentPage((page) => page - 1)}
              disabled={currentPage === 1}
            >
              <ArrowLeft size={16} />
              Previous
            </button>

            <span aria-live="polite">
              Page {currentPage} of {pageCount}
            </span>

            <button
              type="button"
              onClick={() => setCurrentPage((page) => page + 1)}
              disabled={currentPage === pageCount}
            >
              Next
              <ArrowRight size={16} />
            </button>
          </nav>
        )}

        <section className="directory-disclaimer">
          <p>
            Breed characteristics are general descriptions. Every pet is
            an individual, and its behavior, size, and care needs can vary.
            {" "}
            {isDogDirectory ? (
              <>
                This list follows the current{" "}
                <a
                  href="https://www.akc.org/dog-breeds/"
                  target="_blank"
                  rel="noreferrer"
                >
                  American Kennel Club breed groups
                </a>
                .
              </>
            ) : (
              <>
                This list follows the{" "}
                <a
                  href="https://cfa.org/breeds/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Cat Fanciers' Association breed directory
                </a>
                .
              </>
            )}
          </p>
        </section>
      </div>
    </main>
  );
}

export default BreedDirectory;