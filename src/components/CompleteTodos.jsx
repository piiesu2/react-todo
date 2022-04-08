import React from "react";

export const CompleteTodos = (props) => {
  const { completeTodos, onClickReturn } = props;

  return (
    <div className="complete-area">
      <p className="title">完了のリスト</p>
      <ul>
        {completeTodos.map((todo, index) => {
          return (
            <li key={todo}>
              <div className="list-row">
                {todo}
                <button onClick={() => onClickReturn(index)}>戻す</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
