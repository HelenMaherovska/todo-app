import React from "react";
import { FILTERS } from "../../constants";
import FilterBtn from "../../components/FilterBtn/FilterBtn";

const VisibleTodoList = () => {
  return Object.keys(FILTERS).map(filterBtn => (
    <FilterBtn key={FILTERS[filterBtn]} filter={FILTERS[filterBtn]}>
      {FILTERS[filterBtn]}
    </FilterBtn>
  ));
};

export default VisibleTodoList;
