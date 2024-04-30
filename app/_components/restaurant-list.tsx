import { db } from "../_lib/prisma";
import RestaurantItem from "./restaurants-item";

const RestaurantsList = async () => {
  // TODO pegar restaurantes com maior numero de pedidos
  const restaurants = await db.restaurant.findMany({ take: 10 });
  return (
    <div className="gap flex gap-4 overflow-scroll px-5  [&::-webkit-scrollbar]:hidden">
      {restaurants.map((restaurant) => (
        <RestaurantItem key={restaurant.id} restaurant={restaurant} />
      ))}
    </div>
  );
};

export default RestaurantsList;
