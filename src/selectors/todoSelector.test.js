import { getVisibleTodos } from "./todoSelector";
import { FILTERS } from "../constants";

const todos = [
  {
    id: 0,
    text: "todo item 1",
    completed: false
  },
  {
    id: 1,
    text: "todo item 2",
    completed: true
  },
  {
    id: 2,
    text: "todo item 3",
    completed: true
  }
];

describe("Visible Todos Selector", () => {
  describe("selectAllTodos", () => {
    it("should return all todos", () => {
      const selected = getVisibleTodos.resultFunc(todos, FILTERS.ALL);
      expect(selected).toEqual(todos);
    });
  });
  describe("selectActiveTodos", () => {
    it("should return active todos", () => {
      const selected = getVisibleTodos.resultFunc(todos, FILTERS.ACTIVE);
      expect(selected).toEqual([
        {
          id: 0,
          text: "todo item 1",
          completed: false
        }
      ]);
    });
  });
  describe("selectCompletedTodos", () => {
    it("should return active todos", () => {
      const selected = getVisibleTodos.resultFunc(todos, FILTERS.COMPLETE);
      expect(selected).toEqual([
        {
          id: 1,
          text: "todo item 2",
          completed: true
        },
        {
          id: 2,
          text: "todo item 3",
          completed: true
        }
      ]);
    });
  });
});
