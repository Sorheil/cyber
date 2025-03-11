import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding database...");

  // Création des utilisateurs
  const alice = await prisma.user.create({
    data: {
      id: "1a2b3c4d-5678-9101-1121-314151617181",
      name: "Alice Dupont",
      email: "alice@example.com",
      password: "hashedpassword1",
    },
  });

  const bob = await prisma.user.create({
    data: {
      id: "1b2c3d4e-6789-0123-2234-354455667788",
      name: "Bob Martin",
      email: "bob@example.com",
      password: "hashedpassword2",
    },
  });

  // Création des catégories
  const electronics = await prisma.category.create({
    data: {
      id: "cat-001",
      name: "Électronique",
    },
  });

  const books = await prisma.category.create({
    data: {
      id: "cat-002",
      name: "Livres",
    },
  });

  // Création des produits
  const smartphone = await prisma.product.create({
    data: {
      id: "prod-001",
      name: "Smartphone X",
      description:
        "Un smartphone haut de gamme avec un excellent appareil photo.",
      price: 799.99,
      imageUrl: "https://example.com/smartphone.jpg",
      stock: 10,
      categoryId: electronics.id,
    },
  });

  const book = await prisma.product.create({
    data: {
      id: "prod-002",
      name: "Livre 'Apprendre JavaScript'",
      description: "Un excellent livre pour apprendre JavaScript.",
      price: 29.99,
      imageUrl: "https://example.com/book.jpg",
      stock: 50,
      categoryId: books.id,
    },
  });

  // Création des avis
  await prisma.review.createMany({
    data: [
      {
        id: "rev-001",
        content: "Superbe produit !",
        rating: 5,
        productId: smartphone.id,
        userId: alice.id,
      },
      {
        id: "rev-002",
        content: "Très utile pour apprendre.",
        rating: 4,
        productId: book.id,
        userId: bob.id,
      },
    ],
  });

  // Création des paniers
  const cart = await prisma.cart.create({
    data: {
      id: "cart-001",
      userId: alice.id,
    },
  });

  // Ajout d'articles au panier
  await prisma.cartItem.create({
    data: {
      id: "cartitem-001",
      cartId: cart.id,
      productId: smartphone.id,
      quantity: 1,
    },
  });

  console.log("Seeding terminé avec succès 🎉");
}

main()
  .catch((e) => {
    console.error("Erreur lors du seed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
