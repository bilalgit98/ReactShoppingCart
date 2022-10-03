export const reducer = (state, action) => {
  let { items } = state;
  const { item } = action.payload || {};
  const inCartItem = item && items.find((x) => x.id === item.id);
  const itemsTotal = items.reduce((a, c) => a + c.quantity * c.price, 0);
  const shipping = itemsTotal > 100 ? 0 : 20;
  const total = itemsTotal + shipping;

  switch (action.type) {
    case "ADD_ITEM":
      if (!inCartItem) {
        items = [...items, { ...item, quantity: 1 }];
      } else {
        items = items.map((x) =>
          x.id === item.id ? { ...x, quantity: x.quantity + 1 } : x
        );
      }
      break;
    case "REMOVE_ITEM":
      if (inCartItem.quantity === 1) {
        items = items.filter((x) => x.id !== item.id);
      } else {
        items = items.map((x) =>
          x.id === item.id ? { ...x, quantity: x.quantity - 1 } : x
        );
      }
      break;
    case "EMPTY_BASKET":
      items = [];
      break;
    case "SET_PRODUCTS":
      state.products = action.payload;
      break;
    default:
  }

  return { ...state, items, itemsTotal, shipping, total };
};
