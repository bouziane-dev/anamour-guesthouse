const path = require("path");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const Room = require("../models/Room");

dotenv.config({ path: path.join(__dirname, "..", ".env.local") });

const seedRooms = [
  {
    name: "Standard Double Room",
    slug: "standard-double-room",
    unitType: "room",
    availabilityGroup: "main-villa",
    shortDescription:
      "A calm double room with warm finishes and everything needed for a comfortable stay.",
    description:
      "The Standard Double Room is designed for couples or solo travelers who want a quiet, practical base at the guest house. It includes a comfortable double bed, private bathroom, storage, soft lighting, and simple Moroccan-inspired details.",
    nightlyPrice: 65,
    maxGuests: 2,
    bedrooms: 1,
    bathrooms: 1,
    sizeLabel: "22 m2",
    amenities: [
      "Double bed",
      "Private bathroom",
      "Air conditioning",
      "Wi-Fi",
      "Wardrobe",
      "Towels",
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80",
        alt: "Bright standard double guest room with a made bed",
        isFeatured: true,
      },
      {
        url: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
        alt: "Simple guest room seating and bedside detail",
        isFeatured: false,
      },
    ],
    isActive: true,
  },
  {
    name: "Deluxe Double Room",
    slug: "deluxe-double-room",
    unitType: "room",
    availabilityGroup: "main-villa",
    shortDescription:
      "A more spacious double room with refined decor and extra comfort for longer stays.",
    description:
      "The Deluxe Double Room adds more space, richer textiles, and a relaxed sitting corner. It is ideal for guests who want a little extra comfort while staying close to the villa garden and shared guest-house spaces.",
    nightlyPrice: 85,
    maxGuests: 2,
    bedrooms: 1,
    bathrooms: 1,
    sizeLabel: "28 m2",
    amenities: [
      "Queen bed",
      "Private bathroom",
      "Air conditioning",
      "Wi-Fi",
      "Sitting area",
      "Garden access",
      "Hair dryer",
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1200&q=80",
        alt: "Deluxe double room with warm lighting and hotel bedding",
        isFeatured: true,
      },
      {
        url: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1200&q=80",
        alt: "Comfortable guest room with decorative cushions",
        isFeatured: false,
      },
    ],
    isActive: true,
  },
  {
    name: "Family Suite",
    slug: "family-suite",
    unitType: "room",
    availabilityGroup: "main-villa",
    shortDescription:
      "A flexible suite for families or small groups, with extra sleeping space and privacy.",
    description:
      "The Family Suite offers a comfortable layout for parents, children, or close friends traveling together. It includes a main sleeping area, additional beds, a private bathroom, and enough room to unpack and settle in.",
    nightlyPrice: 120,
    maxGuests: 4,
    bedrooms: 2,
    bathrooms: 1,
    sizeLabel: "42 m2",
    amenities: [
      "Double bed",
      "Two single beds",
      "Private bathroom",
      "Air conditioning",
      "Wi-Fi",
      "Family storage",
      "Desk",
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1598928636135-d146006ff4be?auto=format&fit=crop&w=1200&q=80",
        alt: "Family suite bedroom with multiple beds",
        isFeatured: true,
      },
      {
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
        alt: "Warm guest house suite interior",
        isFeatured: false,
      },
    ],
    isActive: true,
  },
  {
    name: "Garden View Room",
    slug: "garden-view-room",
    unitType: "room",
    availabilityGroup: "main-villa",
    shortDescription:
      "A peaceful room overlooking the garden, perfect for slow mornings and quiet evenings.",
    description:
      "The Garden View Room faces the villa's outdoor greenery and is suited to guests who value natural light and a softer pace. It includes a double bed, private bathroom, and easy access to the shared terrace.",
    nightlyPrice: 95,
    maxGuests: 2,
    bedrooms: 1,
    bathrooms: 1,
    sizeLabel: "26 m2",
    amenities: [
      "Double bed",
      "Private bathroom",
      "Garden view",
      "Terrace access",
      "Air conditioning",
      "Wi-Fi",
      "Tea corner",
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
        alt: "Guest room with garden-facing windows",
        isFeatured: true,
      },
      {
        url: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
        alt: "Garden terrace beside a guest house",
        isFeatured: false,
      },
    ],
    isActive: true,
  },
  {
    name: "Traditional Guest House Unit",
    slug: "traditional-guest-house-unit",
    unitType: "room",
    availabilityGroup: "main-villa",
    shortDescription:
      "A characterful unit with traditional textures, local craft details, and a cozy layout.",
    description:
      "This traditional guest-house unit brings together carved wood, woven accents, and warm colors for a more local stay experience. It works well for travelers looking for charm, privacy, and a strong sense of place.",
    nightlyPrice: 105,
    maxGuests: 3,
    bedrooms: 1,
    bathrooms: 1,
    sizeLabel: "34 m2",
    amenities: [
      "Double bed",
      "Single sofa bed",
      "Private bathroom",
      "Traditional decor",
      "Air conditioning",
      "Wi-Fi",
      "Lounge corner",
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
        alt: "Traditional guest house room with warm decor",
        isFeatured: true,
      },
      {
        url: "https://images.unsplash.com/photo-1560448075-bb485b067938?auto=format&fit=crop&w=1200&q=80",
        alt: "Cozy guest room with local design details",
        isFeatured: false,
      },
    ],
    isActive: true,
  },
  {
    name: "Whole Villa",
    slug: "whole-villa",
    unitType: "whole_house",
    availabilityGroup: "main-villa",
    shortDescription:
      "Reserve the entire guest house for families, retreats, or private group stays.",
    description:
      "The Whole Villa option gives guests private use of the accommodation units and shared spaces. It is ideal for families, small retreats, and groups who want the garden, lounge areas, and guest-house atmosphere to themselves.",
    nightlyPrice: 320,
    maxGuests: 11,
    bedrooms: 5,
    bathrooms: 5,
    sizeLabel: "Entire villa",
    amenities: [
      "Private villa use",
      "Multiple bedrooms",
      "Garden",
      "Shared lounge",
      "Terrace",
      "Wi-Fi",
      "Air conditioning",
      "Breakfast available",
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
        alt: "Guest house villa exterior with outdoor space",
        isFeatured: true,
      },
      {
        url: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
        alt: "Villa lounge area prepared for a group stay",
        isFeatured: false,
      },
    ],
    isActive: true,
  },
  {
    name: "Inactive Test Room",
    slug: "inactive-test-room",
    unitType: "room",
    availabilityGroup: "main-villa",
    shortDescription:
      "Inactive seed room used for testing admin and filtering behavior.",
    description:
      "This room is intentionally inactive and should not appear in public room listings. It exists only to verify that active and inactive accommodation records are handled correctly.",
    nightlyPrice: 50,
    maxGuests: 2,
    bedrooms: 1,
    bathrooms: 1,
    sizeLabel: "20 m2",
    amenities: ["Test amenity", "Private bathroom", "Wi-Fi"],
    images: [
      {
        url: "https://images.unsplash.com/photo-1551776235-dde6d4829808?auto=format&fit=crop&w=1200&q=80",
        alt: "Inactive test guest room placeholder",
        isFeatured: true,
      },
    ],
    isActive: false,
  },
];

const seedSlugs = seedRooms.map((room) => room.slug);

const seedRoomData = async () => {
  const mongoUri = process.env.MONGO_URI;

  if (!mongoUri) {
    throw new Error("MONGO_URI is missing from server/.env.local");
  }

  await mongoose.connect(mongoUri);

  const results = await Promise.all(
    seedRooms.map((room) =>
      Room.updateOne(
        { slug: room.slug },
        { $set: room },
        { upsert: true, runValidators: true }
      )
    )
  );

  const insertedCount = results.reduce(
    (count, result) => count + (result.upsertedCount || 0),
    0
  );
  const modifiedCount = results.reduce(
    (count, result) => count + (result.modifiedCount || 0),
    0
  );
  const matchedCount = results.reduce(
    (count, result) => count + (result.matchedCount || 0),
    0
  );
  const activeSeedRoomCount = await Room.countDocuments({
    slug: { $in: seedSlugs },
    isActive: true,
  });
  const inactiveSeedRoomCount = await Room.countDocuments({
    slug: { $in: seedSlugs },
    isActive: false,
  });
  const totalSeedRoomCount = await Room.countDocuments({
    slug: { $in: seedSlugs },
  });

  console.log(`Processed ${seedRooms.length} room seed records.`);
  console.log(`Inserted ${insertedCount} new rooms.`);
  console.log(`Matched ${matchedCount} existing rooms.`);
  console.log(`Updated ${modifiedCount} existing rooms.`);
  console.log(`Seed rooms in database: ${totalSeedRoomCount}`);
  console.log(`Active seed rooms: ${activeSeedRoomCount}`);
  console.log(`Inactive seed rooms: ${inactiveSeedRoomCount}`);
};

seedRoomData()
  .then(async () => {
    await mongoose.disconnect();
    console.log("Room seed completed.");
  })
  .catch(async (error) => {
    console.error("Room seed failed:", error.message);
    await mongoose.disconnect();
    process.exit(1);
  });
