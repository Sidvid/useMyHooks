import { useEffect, useState, useReducer } from "react";
const initialState = {
  isLoading: false,

  isError: false,
  errorMsg: "",
  data: [""],
};
const actions = {
  FETCHING: () => {

    return {
      type: "FETCHING",
    };
  },
  FETCHED: (data) => {
    return {
      type: "FETCHED",
      data,
    };
  },
  FAILED: (data) => {
    return {
      type: "FAILED",
      data,
    };
  },
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCHING":
      console.log("Fetching");
      return {
        ...state,
        isLoading: true,
        isError: false,
        errorMsg: "",
      };
    case "FETCHED":
      console.log("fetched");
      return {
        ...state,
        isLoading: false,
        isError: false,
        errorMsg: "",
        data: action.data,
      };
    case "FAILED":
      console.log("Failed !!");
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMsg: action.data,
      };
    default:
      console.log("default");
      return {
        ...state,
        data:["here"]
      }
  }
};
function useFetch(url, option ) {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
   
    const fetchData = async () => {
      try {
         dispatch(actions.FETCHING());
         
         
         const response = await fetch(url, option);
        
        const responseJson = await response.json();
         dispatch(actions.FETCHED(responseJson));
      } catch (error) {
        dispatch(actions.FAILED(error));
      }
    };
    fetchData();
  }, []);
  return { state };
}
export default useFetch;
