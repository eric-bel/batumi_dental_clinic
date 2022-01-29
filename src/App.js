import "./App.css";
import Header from "./components/Header/Header";
/*
screens: {
  mob: { min: "100px", max: "639px" },
  tab: { min: "640px", max: "767px" },
  md: { min: "768px", max: "1023px" },
  lap: { min: "1024px", max: "1279px" },
  desc: { min: "1280px", max: "1535px" },
  xdesc: { min: "1536px" },
  min1920: { min: "1920px" },
},
*/
function App() {
  return (
    <>
      <Header />
      <div className="h-screen mob:bg-lime-200 tab:bg-lime-300 md:bg-slate-500 lap:bg-lime-400 desc:bg-lime-500 xdesc:bg-lime-600 min1920:bg-lime-700"></div>
      ;
    </>
  );
}

export default App;
