//console.log('Hello, world!');
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


async function createCategory() {
  const newCategory = await prisma.category.create({
    data: {
      name: "Electronics",
      description: "All kinds of electronic gadgets and devices",
      slug: "electronics",
    },
  });
  
  console.log("Category created:", newCategory);
}

createCategory()
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });