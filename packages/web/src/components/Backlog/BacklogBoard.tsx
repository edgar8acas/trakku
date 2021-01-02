import React from "react";
import initialData from "./backlogData";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import { BacklogList } from "./BacklogList";

export const BacklogBoard = () => {
  const [boardData, setBoardData] = React.useState(initialData);

  function handleDragEnd(result: DropResult) {
    const { destination, source } = result;

    if (!destination) return;

    if (
      destination?.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    const list = boardData.lists[source.droppableId];
    const newIssueIds = Array.from(list.issueIds);

    const change = newIssueIds.splice(source.index, 1);
    newIssueIds.splice(destination.index, 0, ...change);

    setBoardData((prev) => {
      const newBoardData = {
        ...prev,
        lists: {
          ...prev.lists,
          [source.droppableId]: {
            ...list,
            issueIds: newIssueIds,
          },
        },
      };
      return newBoardData;
    });
  }

  const { listOrder, lists, issues } = boardData;
  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className="BacklogBoard">
        {listOrder.map((listId) => {
          const list = lists[listId];
          return (
            <Droppable droppableId={list.id}>
              {(provided) => (
                <BacklogList
                  {...provided.droppableProps}
                  key={list.id}
                  list={list}
                  issues={issues}
                  ref={provided.innerRef}
                >
                  {provided.placeholder}
                </BacklogList>
              )}
            </Droppable>
          );
        })}
      </div>
    </DragDropContext>
  );
};
