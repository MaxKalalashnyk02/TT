import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const countAllProducts = async () => {
  return prisma.product.count();
};

export const countAllProductsOnStock = async (uuid: string) => {
  return prisma.warehouse
    .findUnique({ where: { uuid } })
    .products()
    .count();
};

export const countProduct = async (sku: string) => {
  return prisma.product.count({ where: { sku } });
};

export const countProductOnStock = async (uuid: string, sku: string) => {
  return prisma.warehouse
    .findUnique({ where: { uuid } })
    .products()
    .count({ where: { sku } });
};

export const countProductByCategory = async (slug: string) => {
  return prisma.category
    .findUnique({ where: { slug } })
    .products()
    .count();
};

export const countProductOnStockByCategory = async (
  uuid: string,
  slug: string
) => {
  return prisma.warehouse
    .findUnique({ where: { uuid } })
    .products({
      where: { categories: { some: { slug } } },
    })
    .count();
};
