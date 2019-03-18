const persistData = store => next => action => {
  next(action);
  localStorage["todos"] = JSON.stringify(store.getState());
};

export default persistData;
