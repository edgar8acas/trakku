import React from "react";
import initialData from "./backlogData";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import { BacklogList } from "./BacklogList";

export const BacklogBoard = () => {
  const [boardData, setBoardData] = React.useState(initialData);

  function handleDragEnd(result: DropResult) {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const startList = boardData.lists[source.droppableId];
    const endList = boardData.lists[destination.droppableId];

    if (startList === endList) {
      const newIssueIds = Array.from(startList.issueIds);

      newIssueIds.splice(source.index, 1);
      newIssueIds.splice(destination.index, 0, draggableId);

      setBoardData((prev) => {
        const newBoardData = {
          ...prev,
          lists: {
            ...prev.lists,
            [source.droppableId]: {
              ...startList,
              issueIds: newIssueIds,
            },
          },
        };
        return newBoardData;
      });
      return;
    }

    const startIssueIds = Array.from(startList.issueIds);
    startIssueIds.splice(source.index, 1);
    const newStart = {
      ...startList,
      issueIds: startIssueIds,
    };

    const endIssueIds = Array.from(endList.issueIds);
    endIssueIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...endList,
      issueIds: endIssueIds,
    };

    setBoardData((prev) => ({
      ...prev,
      lists: {
        ...prev.lists,
        [source.droppableId]: newStart,
        [destination.droppableId]: newFinish,
      },
    }));
  }

  const { listOrder, lists, issues } = boardData;
  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className="BacklogBoard">
        {listOrder.map((listId) => {
          const list = lists[listId];
          return (
            <Droppable droppableId={list.id} key={list.id}>
              {(provided) => (
                <BacklogList
                  {...provided.droppableProps}
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
