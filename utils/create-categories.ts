/* 
  create new categories in database
  it will remove all existing categories and create new one
  use it for inital setup only

  to run this script use following command
  npx ts-node utils/create-categories.ts
*/
import { prisma } from '../src/utils/prisma';

const categories = [
  {
    name: "Electronics",
    description: "Devices and gadgets including smartphones, laptops, and accessories.",
    slug: "electronics"
  },
  {
    name: "Clothing",
    description: "Apparel for men, women, and children, including shoes and accessories.",
    slug: "clothing"
  },
  {
    name: "Home Appliances",
    description: "Appliances and electronics for the home such as refrigerators, ovens, and washing machines.",
    slug: "home-appliances"
  },
  {
    name: "Books",
    description: "A wide selection of books across various genres including fiction, non-fiction, and educational materials.",
    slug: "books"
  },
  {
    name: "Toys & Games",
    description: "Toys, games, and entertainment for children of all ages.",
    slug: "toys-games"
  },
  {
    name: "Health & Beauty",
    description: "Products for personal care, wellness, and cosmetics.",
    slug: "health-beauty"
  },
  {
    name: "Sports & Outdoors",
    description: "Equipment and apparel for outdoor activities and sports.",
    slug: "sports-outdoors"
  },
  {
    name: "Furniture",
    description: "Home and office furniture including chairs, tables, and storage solutions.",
    slug: "furniture"
  },
  {
    name: "Jewelry",
    description: "A collection of fine jewelry including rings, necklaces, and watches.",
    slug: "jewelry"
  },
  {
    name: "Automotive",
    description: "Automobile parts, accessories, and tools for vehicle maintenance.",
    slug: "automotive"
  }
];



async function createCategories() {
  // remove all existing categories
  await prisma.category.deleteMany();

  // create new categories
  for (const category of categories) {
    await prisma.category.create({
      data: category,
    });
  }
  console.log("Categories created successfully.");
}

createCategories()
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });