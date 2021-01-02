import * as React from "react";
import { Issue } from "../../typings";
import { Draggable } from "react-beautiful-dnd";
import classnames from "classnames";
export interface BacklogIssueProps {
  issue: Issue;
  index: number;
}
export const BacklogIssue: React.FC<BacklogIssueProps> = ({ issue, index }) => {
  return (
    <Draggable draggableId={issue.id} index={index}>
      {({ draggableProps, dragHandleProps, innerRef }, { isDragging }) => (
        <div
          {...draggableProps}
          {...dragHandleProps}
          className={classnames("BacklogIssue", {
            "BacklogIssue--is-dragging": isDragging,
          })}
          ref={innerRef}
        >
          <h5>{issue.description}</h5>
        </div>
      )}
    </Draggable>
  );
};
