import { useRef, useState } from "react";
import Tour, { ReactourProps } from "reactour";

function App() {
  const scrollerRef = useRef(null);
  const [tourOpen, setTourOpen] = useState(false);

  const items = [...Array(10).keys()];

  const openTour = () => {
    setTourOpen(true);
  };

  const setScrollPosition = () => {
    if (scrollerRef.current) {
      const scroller = scrollerRef.current as HTMLDivElement;
      scroller.scrollTop = 150;
    }
  };

  const tourProps: ReactourProps = {
    isOpen: tourOpen,
    onRequestClose: () => setTourOpen(false),
    steps: items.map((item, i) => ({
      selector: `.tour-item-${i}`,
      content: `This is item ${item}`,
    })),
  };

  return (
    <div className="flex min-h-screen flex-grow flex-col bg-slate-50">
      <div className="bg-slate flex min-h-[200px] items-center justify-center gap-8 border-b-4 border-gray-500">
        <button
          className="rounded border-2 border-slate-700 bg-slate-200 px-3 py-2 hover:bg-slate-100"
          onClick={setScrollPosition}
        >
          1. Set scroll position
        </button>
        <button
          className="rounded border-2 border-slate-700 bg-slate-200 px-3 py-2 hover:bg-slate-100"
          onClick={openTour}
        >
          2. Open Tour
        </button>
      </div>
      <div className="min-h-0 flex-shrink-0 flex-grow basis-0">
        <div
          ref={scrollerRef}
          className="flex h-full flex-col overflow-y-scroll"
        >
          <div className="flex-grow">
            {items.map((item, i) => (
              <div
                key={i}
                className={`tour-item-${i} m-8 flex h-16 items-center justify-center rounded-md border border-slate-600  bg-slate-200 shadow-md shadow-slate-300`}
              >
                Item {item}
              </div>
            ))}
          </div>
          <div className="flex min-h-[50px] flex-shrink-0 flex-grow-0 items-center justify-center border-t-4 border-gray-500 bg-slate-200">
            Footer
          </div>
        </div>
      </div>
      <Tour {...tourProps}></Tour>
    </div>
  );
}

export default App;
