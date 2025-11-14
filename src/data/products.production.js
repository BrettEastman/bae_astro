// Production mode products - used when STRIPE_SECRET_KEY starts with sk_live_
// TODO: Replace these price IDs with your live mode price IDs from Stripe
// To get live price IDs:
// 1. Switch Stripe dashboard to Live mode
// 2. Go to Products section
// 3. Create products (or duplicate from test mode)
// 4. Copy the Price IDs (they start with price_)
// 5. Replace the priceId values below

export const products = [
  {
    id: "drum-book",
    name: "Patterns and Beats",
    description:
      "Patterns and Beats is an incredibly useful drum book for the 21st century drum student. This book contains a collection of linear patterns and a curated selection of enjoyable and educational drum beats in standard notation, arranged by difficulty, and all aesthetically designed for readability, clarity, and comfort.",
    priceId: "price_1SSmJ6PjBsaDuHZoFLi0icQ2",
    price: 10.0,
    image: "/products/patterns-and-beats.jpg",
    downloadUrl:
      "https://drive.google.com/file/d/1wiL7xMUoURsQ0qE2VevgQaO9fwSChHC4/view?usp=sharing",
  },
  {
    id: "score-1",
    name: "Internal/External",
    description: `Internal/External (2023) for solo flute and interactive electronics explores the boundary between inner and outer worlds. In "Internal," the performer's pulse shapes live electronic textures; in "External," environmental sounds and feedback are captured, transformed, and reintroduced. Using a phonetic cryptogram and text on self and planet, the work reflects on feedback between body, sound, and environment.`,
    priceId: "price_1SSmhmPjBsaDuHZoSRvPc8Us",
    price: 10.0,
    image: "/products/internal-external.jpg",
    downloadUrl:
      "https://drive.google.com/file/d/1MRRoPEmUf1chrqRHbMwg3b_8IYUsvMip/view?usp=sharing",
  },
  {
    id: "score-2",
    name: "Paraphrase",
    description:
      "Paraphrase for viola, bass clarinet, and piano unfolds in three movements, each a five-minute exploration of connected themes and bold contrasts. Drawing on sources from Liszt to 90s sludge-core band Noothgrush—and echoes of the composer's own works—it reimagines and expands its inspirations. The trio performs with the intensity and freedom of a rock band, embracing space, distortion, and expression.",
    priceId: "price_1SSmozPjBsaDuHZotw3jl3pP",
    price: 10.0,
    image: "/products/paraphrase.jpg",
    downloadUrl:
      "https://drive.google.com/file/d/153UqdWHacSAUoLJeYok7_x3tvq8JM7Cu/view?usp=sharing",
  },
  {
    id: "score-3",
    name: "La Musique",
    description:
      "LA MUSIQUE for flute and alto flute draws from Charles Baudelaire's poem of the same name. Using a cryptogram that translates French text into pitch, rhythm, and aspirated sound, the work transforms language into music. Layered with melodic renditions of the spoken poem and a recurring lyrical theme, it mirrors the poem's structure through shifting textures, timbres, and parallel musical form.",
    priceId: "price_1SSrXqPjBsaDuHZoBLDiAO1q",
    price: 10.0,
    image: "/products/la-musique.jpg",
    downloadUrl:
      "https://drive.google.com/file/d/1Mj7NvM81wbgKpZba8Ux07-9anjkErJdE/view?usp=sharing",
  },
  {
    id: "score-4",
    name: "MAINFRAME",
    description:
      "MAINFRAME for string quartet explores distorted symmetry and the evolution or decay of reflection. Across seven movements and 23 mosaic-like sections (11+1+11), moments recur in altered or reversed forms—sometimes recognizable, sometimes not. Centered on an 11-tone sequence, the work's unity of form, rhythm, and pitch creates a precise yet shifting architecture of sound and memory.",
    priceId: "price_1SSrXFPjBsaDuHZomNWHDZ5v",
    price: 10.0,
    image: "/products/mainframe.jpg",
    downloadUrl:
      "https://drive.google.com/file/d/13yk9i5ab_1MlWm6rPimtz4pfo_7JSz34/view?usp=sharing",
  },
  {
    id: "score-5",
    name: "Passover",
    description:
      "PASSOVER for solo flute explores feedback as both concept and process. Based on a poem about anxiety and self-calming, the text is transformed into music through cryptographic means, then reinterpreted by the poet-performer. Each layer—composer, performer, audience—forms a loop of reflection, where meaning dissolves and re-emerges through sound.",
    priceId: "price_1SSrWUPjBsaDuHZoGPjqL5OL",
    price: 10.0,
    image: "/products/passover.jpg",
    downloadUrl:
      "https://drive.google.com/file/d/12ygPHCzmbl4aT7BpYVQOv9TIcrlbDy0Y/view?usp=sharing",
  },
];
