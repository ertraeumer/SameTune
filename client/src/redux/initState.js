const initState = () => ({
  authUser: null, // localStorage.getItem('userData') || null,
  filterData: [],
  bands: [],
  musicians: [],
  authStatus: '',
});

// const getInitState = () => {
//   const stateFromLS = JSON.parse(window.localStorage.getItem('redux'));
//   return stateFromLS || initState;
// }

export default initState;
