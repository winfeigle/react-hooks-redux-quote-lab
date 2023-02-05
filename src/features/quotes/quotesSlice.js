// Action Creators
// TODO: Create action creators as defined in tests
export const addQuote = (quote) => {
  return {
    type: "quotes/add",
    payload: quote
  }
} 

export const removeQuote = (quoteId) => {
  return {
    type: "quotes/remove",
    payload: quoteId
  }
} 

export const upvoteQuote = (quoteId) => {
  return {
    type: "quotes/upvote",
    payload: quoteId
  }
} 

export const downvoteQuote = (quoteId) => {
  return {
    type: "quotes/downvote",
    payload: quoteId
  }
} 

// Reducer
const initialState = [];

export default function quotesReducer(state = initialState, action) {
  switch (action.type) {
    case "quotes/add":
      return [...state, action.payload];

    case "quotes/remove":
      return state.filter((quote) => quote.id !== action.payload);

    case "quotes/upvote":
      return state.map((quote) => {
        if(quote.id === action.payload){
          return { 
            ...quote,
            votes: quote.votes + 1
          };
        } else{
          return quote;
        }
      });

    case "quotes/downvote":
      return state.map((quote) => {
        if(quote.id === action.payload && quote.votes > 0){
          return {
            ...quote,
            votes: quote.votes - 1
          };
        } else{
          return quote;
        }
      });

    default:
      return state;
  }
}
