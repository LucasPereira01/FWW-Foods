import Header from "./_components/header";
import Search from "./_components/search";
import CategoryList from "./_components/category-list";
import ProductList from "./_components/products-list";
import { Button } from "./_components/ui/button";
import { ChevronsRightIcon } from "lucide-react";
import { db } from "./_lib/prisma";
import PromoBanner from "./_components/promo-banner";
import RestaurantsList from "./_components/restaurant-list";

const Home = async () => {
  const products = await db.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
    take: 10,
    include: {
      restaurant: true,
    },
  });
  return (
    <>
      <Header />
      <div className="px-5 pt-6">
        <Search />
      </div>
      <div className="px-5 pt-6">
        <CategoryList />
      </div>
      <div className="px-5 pt-6">
        <PromoBanner
          src="/promo-banner03.png"
          alt="Até 30% de desconto em pizza"
        />
      </div>
      <div className="space-y-4 pt-6">
        <div className="item-center flex justify-between px-5">
          <h2 className="font-semibold">Pedidos Recomendados</h2>
          <Button
            variant="ghost"
            className="h-fit p-0 text-primary hover:bg-transparent"
          >
            Ver todos
            <ChevronsRightIcon size={16} />
          </Button>
        </div>
        <ProductList products={products} />
      </div>
      <div className="px-5 pt-6">
        <PromoBanner
          src="/promo-banner02.png"
          alt="A partir de R$17,90 em lanches"
        />
      </div>
      <div className="space-y-4 py-6 pt-6">
        <div className="item-center flex justify-between px-5">
          <h2 className="font-semibold">Restaurante Recomendados</h2>
          <Button
            variant="ghost"
            className="h-fit p-0 text-primary hover:bg-transparent"
          >
            Ver todos
            <ChevronsRightIcon size={16} />
          </Button>
        </div>
        <RestaurantsList />
      </div>
    </>
  );
};

export default Home;
