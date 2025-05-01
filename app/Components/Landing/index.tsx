import { Responsive, WidthProvider } from "react-grid-layout";
import "/node_modules/react-grid-layout/css/styles.css";
import "/node_modules/react-resizable/css/styles.css";

const ResponsiveGridLayout = WidthProvider(Responsive);

const Landing = () => {
  const widgets = [
    { i: "widget1", title: "ویجت ۱", content: "محتویات ویجت اول" },
    { i: "widget2", title: "ویجت ۲", content: "محتویات ویجت دوم" },
    { i: "widget3", title: "ویجت ۳", content: "محتویات ویجت سوم" },
  ];

  const layout = [
    { i: "widget1", x: 0, y: 0, w: 2, h: 1, static: false },
    { i: "widget2", x: 0, y: 1, w: 2, h: 1, static: false },
    { i: "widget3", x: 0, y: 2, w: 2, h: 1, static: false },
  ];

  return (
    <div dir="ltr" className="h-screen">
      <main className="flex justify-between w-full pt-5 h-full">
        {/* سمت چپ - ویجت‌های قابل درگ */}
        <div className="flex-1/2">
          <ResponsiveGridLayout
            className="layout"
            layouts={{ lg: layout }}
            cols={{
              lg: 3,
              xs: 3,
            }}
            rowHeight={100}
            width={300}
            isDraggable={true}
            isResizable={false}
            containerPadding={[0, 0]}
            margin={[10, 10]}
            draggableHandle=".drag-handle"
          >
            {widgets.map((widget) => (
              <div
                key={widget.i}
                className="bg-white rounded-lg shadow p-4 border border-gray-200"
              >
                <div className="drag-handle cursor-move flex justify-between items-center mb-2">
                  <h3 className="font-semibold">{widget.title}</h3>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      d="M3 15h18M3 9h18M3 5h18M3 19h18"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <p className="text-sm text-gray-600">{widget.content}</p>
              </div>
            ))}
          </ResponsiveGridLayout>
        </div>
        <div className="flex-1/2"></div>
      </main>
    </div>
  );
};

export default Landing;
