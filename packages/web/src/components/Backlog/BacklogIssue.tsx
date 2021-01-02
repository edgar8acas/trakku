import * as React from "react";
import { Issue } from "../../typings";
import { Draggable } from "react-beautiful-dnd";
export interface BacklogIssueProps {
  issue: Issue;
  index: number;
}
export const BacklogIssue: React.FC<BacklogIssueProps> = ({ issue, index }) => {
  return (
    <Draggable draggableId={issue.id} index={index}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="BacklogIssue"
          ref={provided.innerRef}
        >
          <h5>{issue.description}</h5>
        </div>
      )}
    </Draggable>
  );
};
