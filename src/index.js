import React from "react";
import ReactDOM from "react-dom";

import { App } from "./App";

ReactDOM.render(<App />, document.getElementById("root"));
// ↑のAPPはそのうえで別ファイル（App.jsx）に書いた関数のこと。renderは第一引数に書きたい内容、第二引数で、HTMLに埋め込む場所を指定する
