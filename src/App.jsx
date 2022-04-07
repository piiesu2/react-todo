import React from "react";
import "./styles.css";

export const App = () => {
  const [imcompleteTodos, setImcompleteTodos] = useState([
    "ああああ",
    "いいいい"
  ]);

  return (
    <>
      <div className="input-area">
        <input placeholder="TODOを入力" />
        <button>追加</button>
      </div>
      <div className="imcomplete-area">
        <p className="title">未完了のリスト</p>
        <ul>
          <li>
            <div className="list-row">
              ああああ
              <button>完了</button>
              <button>削除</button>
            </div>
          </li>
          <li>
            <div className="list-row">
              いいいい
              <button>完了</button>
              <button>削除</button>
            </div>
          </li>
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了のリスト</p>
        <ul>
          <li>
            <div className="list-row">
              うううう
              <button>戻す</button>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};
