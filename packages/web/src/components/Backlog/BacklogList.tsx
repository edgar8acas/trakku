import * as React from "react";
import { Issue, List } from "../../typings";
import { BacklogIssue } from "./BacklogIssue";

export interface BacklogListProps {
  list: List;
  issues: { [key: string]: Issue };
  children: React.ReactNode;
}

export const BacklogList = React.forwardRef<HTMLDivElement, BacklogListProps>(
  ({ list, issues, children }, ref) => {
    return (
      <div className="BacklogList" ref={ref}>
        <h4>{list.title}</h4>
        {list.issueIds.map((issueId, index) => {
          const issue = issues[issueId];
          return <BacklogIssue key={issue.id} issue={issue} index={index} />;
        })}
        {children}
      </div>
    );
  }
);
