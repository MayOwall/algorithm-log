const solution = (todo_list, finished) =>
  todo_list.filter((_, i) => !finished[i]);
