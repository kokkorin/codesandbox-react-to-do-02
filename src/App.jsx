import React from "react";
import "./styles.css";

export const App = () => {
  return (
    <>
      <div>
        <input placeholder="TODOを入力" />
        <button>追加</button>
      </div>
      <div>
        <p>未完了リストのTODO</p>
        <ul>
          <li>
            <p>あああああ</p>
            <button>完了</button>
            <button>削除</button>
          </li>
          <li>
            <p>いいいいいい</p>
            <button>完了</button>
            <button>削除</button>
          </li>
        </ul>
        <p>完了リストのTODO</p>
        <ul>
          <li>
            <p>ううううう</p>
            <button>戻す</button>
          </li>
        </ul>
      </div>
    </>
  );
};
