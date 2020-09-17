export const initialState = {
  basket: [],
  user: null,
};

// Selector function of our own and this is highly used in productions
//But it will be faster if we would have added this total as in initial satate  ->> My personal comments
export const getBasketTotal = (basket) =>
  //reduce is used iterate through the basket to calculate the total tally
  basket?.reduce((amount, item) => item.price + amount, 0); // 0 is inital value of the amount

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "EMPTY_BASKET":
      return {
        ...state,
        basket: [],
      };

    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.id}) as its not in basket!`
        );
      }

      return {
        ...state,
        basket: newBasket,
      };

    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};

export default reducer;
