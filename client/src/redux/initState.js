const initState = () => ({
  authUser: null,
  filterData: [],
});

// const getInitState = () => {
//   const stateFromLS = JSON.parse(window.localStorage.getItem('redux'));
//   return stateFromLS || initState;
// }

export default initState;
