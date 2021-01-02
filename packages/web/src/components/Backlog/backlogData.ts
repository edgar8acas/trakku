import { Issue, List } from "../../typings";

export interface BoardData {
  issues: {
    [key: string]: Issue;
  };
  lists: {
    [key: string]: List;
  };
  listOrder: string[];
}

const initialData: BoardData = {
  issues: {
    "SOM-1": {
      id: "SOM-1",
      description: "Meeting client",
      asignee: {
        id: "user-3",
      },
      status: "active",
    },
    "SOM-3": {
      id: "SOM-3",
      description: "Anything",
      asignee: {
        id: "user-2",
      },
      status: "closed",
    },
  },
  lists: {
    "List-1": {
      id: "List-1",
      title: "To Do",
      issueIds: ["SOM-1", "SOM-3"],
    },
  },
  listOrder: ["List-1"],
};

export default initialData;
