import { Routes, Route, Link } from "react-router-dom";

import { globalCss } from "../src/stiches.theme";
import { IndexPage } from "./pages/indexPage";

const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
    fontFamily: "'Barlow', sans-serif",
    fontSize: "62.5%",

    "&::-webkit-scrollbar": {
      width: "10px",
    },
    "&::-webkit-scrollbar-track": {
      backgroundColor: "$gray800",
    },
    "&::-webkit-scrollbar-thumb": {
      background: "$gray100",
      borderRadius: "6px",
    },
  },
});
function App() {
  globalStyles();

  return (
    <Routes>
      <Route path="/" element={<IndexPage />}>
        <Route path=":season" element={<IndexPage />} />
      </Route>
    </Routes>
  );
}
export default App;
