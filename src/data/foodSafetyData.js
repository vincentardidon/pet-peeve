const sources = {
  aspcaFoods: {
    name: "ASPCA — People Foods to Avoid Feeding Your Pets",
    url: "https://www.aspca.org/pet-care/aspca-poison-control/people-foods-avoid-feeding-your-pets",
  },

  aspcaPoisoning: {
    name: "ASPCA — What to Do if Your Pet Is Poisoned",
    url: "https://www.aspca.org/news/what-do-if-your-pet-poisoned",
  },

  cornellCats: {
    name: "Cornell University — Common Cat Hazards",
    url: "https://www.vet.cornell.edu/departments-centers-and-institutes/cornell-feline-health-center/health-information/feline-health-topics/common-cat-hazards-0",
  },

  ncStateTreats: {
    name: "NC State Veterinary Medicine — Healthy Human Food Treats for Pets",
    url: "https://hospital.cvm.ncsu.edu/services/small-animals/nutrition/healthy-human-food-treats-for-pets/",
  },

  cornellFeeding: {
    name: "Cornell University — Feeding Your Cat",
    url: "https://www.vet.cornell.edu/departments-centers-and-institutes/cornell-feline-health-center/health-information/feline-health-topics/feeding-your-cat",
  },
};

const foodSafetyData = [
  {
    id: "chocolate",
    name: "Chocolate and Cocoa",
    aliases: [
      "chocolate",
      "dark chocolate",
      "milk chocolate",
      "baking chocolate",
      "cocoa powder",
      "cocoa",
      "brownies",
      "chocolate cake",
    ],
    animals: ["Dog", "Cat"],
    status: "avoid",
    category: "Toxic foods",
    summary:
      "Chocolate and cocoa products contain substances that can be toxic to dogs and cats.",
    details:
      "The risk depends on the type and amount consumed. Dark chocolate, baking chocolate, and cocoa powder can be particularly concerning because of their concentrated contents.",
    action:
      "Keep chocolate and cocoa products away from pets. If your pet eats chocolate, contact a veterinarian promptly and provide the product type, estimated amount, and time of ingestion.",
    preparation: "",
    sources: [sources.aspcaFoods, sources.cornellCats],
  },

  {
    id: "coffee-caffeine",
    name: "Coffee, Tea, and Caffeine",
    aliases: [
      "coffee",
      "coffee grounds",
      "tea",
      "green tea",
      "black tea",
      "espresso",
      "caffeine",
      "energy drink",
      "energy drinks",
      "caffeine pills",
    ],
    animals: ["Dog", "Cat"],
    status: "avoid",
    category: "Toxic foods",
    summary:
      "Caffeinated drinks and products can cause serious health problems in pets.",
    details:
      "Caffeine exposure can lead to vomiting, restlessness, abnormal heart rhythms, tremors, and seizures. Coffee grounds and concentrated caffeine products are potential hazards too.",
    action:
      "Do not give pets coffee, caffeinated tea, energy drinks, or caffeine supplements. Contact a veterinarian immediately if ingestion occurs.",
    preparation: "",
    sources: [sources.aspcaFoods, sources.cornellCats],
  },

  {
    id: "grapes-raisins",
    name: "Grapes and Raisins",
    aliases: [
      "grape",
      "grapes",
      "raisin",
      "raisins",
      "sultanas",
      "dried grapes",
    ],
    animals: ["Dog", "Cat"],
    status: "avoid",
    category: "Toxic foods",
    summary:
      "Grapes and raisins are important food hazards, particularly because they can cause kidney injury in dogs.",
    details:
      "The response to ingestion can vary, and a reliable safe amount cannot be assumed. Cornell also lists grapes and raisins among potential toxic food hazards for cats.",
    action:
      "If your pet eats grapes or raisins, contact a veterinarian immediately. Do not wait for symptoms or assume the amount eaten was too small to matter.",
    preparation: "",
    sources: [sources.aspcaFoods, sources.cornellCats],
  },

  {
    id: "onion-garlic",
    name: "Onions, Garlic, and Chives",
    aliases: [
      "onion",
      "onions",
      "garlic",
      "chives",
      "onion powder",
      "garlic powder",
      "leeks",
      "allium",
    ],
    animals: ["Dog", "Cat"],
    status: "avoid",
    category: "Toxic foods",
    summary:
      "Onions, garlic, and related ingredients can damage red blood cells and cause illness in pets.",
    details:
      "These ingredients can occur in sauces, soups, seasonings, leftovers, and powdered flavorings. Cats are especially susceptible to some effects, but dogs can also be affected.",
    action:
      "Do not intentionally feed pets foods containing onion, garlic, chives, or related seasonings. Contact a veterinarian if your pet consumes a concerning amount or you suspect exposure.",
    preparation: "",
    sources: [sources.aspcaFoods, sources.cornellCats],
  },

  {
    id: "xylitol",
    name: "Xylitol and Some Sugar-Free Products",
    aliases: [
      "xylitol",
      "birch sugar",
      "sugar-free gum",
      "sugar free gum",
      "sugar-free candy",
      "sugar free candy",
      "sugarless gum",
      "sugar-free peanut butter",
      "sugar free peanut butter",
    ],
    animals: ["Dog", "Cat"],
    status: "avoid",
    category: "Toxic foods",
    summary:
      "Xylitol is a sweetener that can cause serious poisoning, especially in dogs.",
    details:
      "Xylitol may appear in gum, sweets, baked products, and other items. The exact risk depends on the product and animal. Do not assume a sugar-free product is safe for pets.",
    action:
      "If your pet may have eaten a product containing xylitol, contact a veterinarian immediately. Keep the packaging available so the ingredients can be checked.",
    preparation: "",
    sources: [sources.aspcaFoods, sources.cornellCats],
  },

  {
    id: "alcohol",
    name: "Alcohol",
    aliases: [
      "alcohol",
      "beer",
      "wine",
      "liquor",
      "cocktail",
      "alcoholic drinks",
      "alcoholic beverage",
    ],
    animals: ["Dog", "Cat"],
    status: "avoid",
    category: "Toxic foods",
    summary:
      "Alcohol can cause poisoning in dogs and cats.",
    details:
      "Alcohol exposure may cause vomiting, impaired coordination, breathing difficulties, and more serious complications. Alcohol may also be present in some food products.",
    action:
      "Never offer alcoholic drinks to pets. Contact a veterinarian promptly if ingestion occurs, especially when the amount or concentration is uncertain.",
    preparation: "",
    sources: [sources.aspcaFoods],
  },

  {
    id: "yeast-dough",
    name: "Raw Yeast Dough",
    aliases: [
      "yeast dough",
      "raw dough",
      "bread dough",
      "uncooked bread dough",
      "unbaked yeast dough",
    ],
    animals: ["Dog", "Cat"],
    status: "avoid",
    category: "Food hazards",
    summary:
      "Uncooked yeast dough can expand in the digestive system and create additional risks.",
    details:
      "Raw yeast dough can cause painful expansion and bloating. Fermentation can also produce alcohol, which presents another potential hazard.",
    action:
      "Keep raw dough away from pets. If your pet swallows uncooked yeast dough, contact a veterinarian promptly.",
    preparation: "",
    sources: [sources.aspcaFoods],
  },

  {
    id: "macadamia-nuts",
    name: "Macadamia Nuts",
    aliases: [
      "macadamia",
      "macadamias",
      "macadamia nuts",
    ],
    animals: ["Dog"],
    status: "avoid",
    category: "Toxic foods",
    summary:
      "Macadamia nuts are a recognized food hazard for dogs.",
    details:
      "In dogs, ingestion can cause weakness, vomiting, tremors, and other signs of illness. This entry describes the established dog-specific concern and should not be used to infer that a food is safe for another species.",
    action:
      "Do not feed macadamia nuts to dogs. If a dog eats them, contact a veterinarian for advice about the exposure.",
    preparation: "",
    sources: [sources.aspcaFoods],
  },

  {
    id: "bones",
    name: "Cooked Bones",
    aliases: [
      "bones",
      "cooked bones",
      "chicken bones",
      "fish bones",
      "poultry bones",
      "bone fragments",
    ],
    animals: ["Dog", "Cat"],
    status: "avoid",
    category: "Physical hazards",
    summary:
      "Bones can cause choking, injuries, or blockage in a pet's digestive tract.",
    details:
      "Cooked bones can break into fragments. Being able to chew a bone does not mean it is safe to swallow.",
    action:
      "Avoid giving cooked bones to dogs and cats. If your pet swallows a bone and develops choking, pain, repeated vomiting, or other concerning signs, seek veterinary care promptly.",
    preparation: "",
    sources: [sources.aspcaFoods, sources.cornellCats],
  },

  {
    id: "avocado",
    name: "Avocado",
    aliases: [
      "avocado",
      "avocados",
      "avocado pit",
      "avocado seed",
    ],
    animals: ["Dog", "Cat"],
    status: "caution",
    category: "Food hazards",
    summary:
      "Avocado is not an appropriate routine treat for pets, and its pit can present an additional physical hazard.",
    details:
      "Risk varies by animal and the part consumed. The pit can cause choking or a digestive obstruction. Do not assume that a food described as safe for humans is automatically suitable for pets.",
    action:
      "Avoid offering avocado to your pet. If your pet eats the pit or a substantial amount, contact a veterinarian for advice.",
    preparation: "",
    sources: [sources.aspcaFoods],
  },

  {
    id: "milk-dairy",
    name: "Milk and Dairy Products",
    aliases: [
      "milk",
      "cow milk",
      "dairy",
      "cheese",
      "ice cream",
      "cream",
      "yogurt",
    ],
    animals: ["Dog", "Cat"],
    status: "caution",
    category: "Digestive concerns",
    summary:
      "Milk and dairy products may cause digestive upset in some pets.",
    details:
      "Many cats have difficulty digesting lactose, and some dogs may also develop gastrointestinal symptoms after consuming dairy. Rich dairy products can also add unnecessary fat and calories.",
    action:
      "Do not use milk as a regular drink for cats or dogs. Ask a veterinarian whether a particular product is suitable for your pet, especially if your pet has digestive or dietary problems.",
    preparation: "",
    sources: [sources.aspcaFoods, sources.cornellFeeding],
  },

  {
    id: "raw-meat-eggs",
    name: "Raw Meat and Raw Eggs",
    aliases: [
      "raw meat",
      "raw chicken",
      "raw beef",
      "raw pork",
      "raw fish",
      "raw eggs",
      "uncooked eggs",
      "uncooked meat",
    ],
    animals: ["Dog", "Cat"],
    status: "caution",
    category: "Food safety",
    summary:
      "Raw animal products can carry pathogens that may affect pets and people.",
    details:
      "Raw meat and eggs can contain bacteria or other disease-causing organisms. Raw diets also require careful nutritional planning and may expose household members to pathogens.",
    action:
      "Do not assume a raw diet is safer or healthier. Discuss your pet's nutritional needs with a veterinarian, and use properly prepared food to reduce foodborne risks.",
    preparation: "",
    sources: [sources.aspcaFoods, sources.cornellFeeding],
  },

  {
    id: "fatty-salty-foods",
    name: "Very Fatty, Salty, or Spicy Foods",
    aliases: [
      "fatty food",
      "fatty foods",
      "fried food",
      "fried foods",
      "salty snacks",
      "chips",
      "crisps",
      "spicy food",
      "spicy foods",
      "seasoned leftovers",
      "table scraps",
    ],
    animals: ["Dog", "Cat"],
    status: "caution",
    category: "Digestive concerns",
    summary:
      "Rich, heavily seasoned, or excessively salty foods are not good routine treats for pets.",
    details:
      "These foods may cause digestive upset. High-fat foods can also increase the risk of more serious problems, including pancreatitis in susceptible animals.",
    action:
      "Avoid giving pets fried leftovers, very salty snacks, spicy dishes, or fatty food scraps. Choose an appropriate pet food and ask your veterinarian about suitable treats.",
    preparation: "",
    sources: [sources.aspcaFoods, sources.cornellCats],
  },

  {
    id: "plain-chicken",
    name: "Plain Cooked Chicken",
    aliases: [
      "chicken",
      "cooked chicken",
      "plain chicken",
      "boiled chicken",
      "chicken breast",
      "boneless chicken",
    ],
    animals: ["Dog", "Cat"],
    status: "generally-ok",
    category: "Occasional treats",
    summary:
      "Plain, fully cooked chicken without bones or seasoning can be an occasional treat for many dogs and cats.",
    details:
      "Preparation matters. Avoid raw chicken, cooked bones, excessive salt, sauces, and seasoning containing onion or garlic. An individual pet may also have allergies or dietary restrictions.",
    action:
      "Offer only a small amount of plain, fully cooked, boneless chicken. It should complement a complete and balanced pet diet, not replace it.",
    preparation:
      "Fully cooked, boneless, and unseasoned. Remove skin and excess fat when appropriate.",
    sources: [sources.ncStateTreats, sources.aspcaFoods],
  },

  {
    id: "carrots",
    name: "Carrots",
    aliases: [
      "carrot",
      "carrots",
      "raw carrot",
      "cooked carrot",
    ],
    animals: ["Dog", "Cat"],
    status: "generally-ok",
    category: "Occasional treats",
    summary:
      "Plain carrots can be suitable as an occasional treat for many dogs and cats.",
    details:
      "Carrots are included among the treat options discussed by veterinary nutrition resources. They are not a substitute for a complete pet diet, and large pieces may be difficult to chew.",
    action:
      "Wash the carrot and cut it into appropriately small pieces. Offer modest portions without salt, butter, sauces, or seasoning.",
    preparation:
      "Plain and cut into bite-sized pieces suitable for your pet.",
    sources: [sources.ncStateTreats],
  },

  {
    id: "apple",
    name: "Apple Flesh",
    aliases: [
      "apple",
      "apples",
      "apple slices",
      "apple flesh",
      "seedless apple",
    ],
    animals: ["Dog", "Cat"],
    status: "generally-ok",
    category: "Occasional treats",
    summary:
      "Small amounts of apple flesh may be suitable as an occasional treat for many pets.",
    details:
      "The seeds and core should be removed. Apple is a treat, not a necessary part of a dog's or cat's diet, and some pets may not tolerate unfamiliar foods well.",
    action:
      "Wash the apple, remove the seeds and core, and cut the flesh into small pieces. Introduce new foods sparingly.",
    preparation:
      "Fresh apple flesh only. Remove seeds and core.",
    sources: [sources.ncStateTreats],
  },

  {
    id: "plain-pumpkin",
    name: "Plain Pumpkin",
    aliases: [
      "pumpkin",
      "plain pumpkin",
      "pumpkin puree",
      "pumpkin purée",
      "cooked pumpkin",
    ],
    animals: ["Dog", "Cat"],
    status: "generally-ok",
    category: "Occasional treats",
    summary:
      "Plain pumpkin may be offered in small amounts to many pets as an occasional food.",
    details:
      "Use plain cooked pumpkin or plain pumpkin puree. Pumpkin pie filling and sweetened or spiced preparations are different products and should not be assumed suitable for pets.",
    action:
      "Offer a small amount of plain pumpkin only if appropriate for your pet. Ask a veterinarian before using it to address persistent digestive problems.",
    preparation:
      "Plain cooked pumpkin or plain pumpkin puree, without added sugar or spices.",
    sources: [sources.ncStateTreats],
  },
];

export default foodSafetyData;