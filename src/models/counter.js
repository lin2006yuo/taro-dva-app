export default {
  namespace: "counter",
  state: {
    num: 1
  },
  reducers: {
    'add':(state, { payload }) => {
      console.log(state)
      return { ...state, num: state.num + payload }
    }
  }
};
