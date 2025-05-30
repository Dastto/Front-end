import React, { useState, useRef, useEffect, type MouseEvent } from "react";

interface Position {
  x: number;
  y: number;
}

const CustomContextMenu: React.FC = () => {
  const [menuPosition, setMenuPosition] = useState<Position>({ x: 0, y: 0 });
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const menuRef = useRef<HTMLUListElement | null>(null);

  const handleContextMenu = (event: MouseEvent<HTMLDivElement>) => {
    event.preventDefault();

    const clickX = event.clientX;
    const clickY = event.clientY;
    const screenW = window.innerWidth;
    const screenH = window.innerHeight;

    const menuW = menuRef.current?.offsetWidth || 150;
    const menuH = menuRef.current?.offsetHeight || 100;

    // بررسی فضای کافی
    const x = clickX + menuW > screenW ? clickX - menuW : clickX;
    const y = clickY + menuH > screenH ? clickY - menuH : clickY;

    setMenuPosition({ x, y });
    setShowMenu(true);
  };

  const handleClick = () => {
    if (showMenu) setShowMenu(false);
  };

  // بستن منو در کلیک خارج
  useEffect(() => {
    const handleOutsideClick = () => setShowMenu(false);
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, []);

  return (
    <div
      onContextMenu={handleContextMenu}
      onClick={handleClick}
      style={{ width: "100vw", height: "100vh", backgroundColor: "#f0f0f0" }}
    >
      <p>راست کلیک کنید تا منوی سفارشی باز شود</p>

      {showMenu && (
        <ul
          ref={menuRef}
          style={{
            position: "absolute",
            top: menuPosition.y,
            left: menuPosition.x,
            backgroundColor: "#ffffff",
            border: "1px solid #ccc",
            boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
            padding: "10px",
            listStyle: "none",
            zIndex: 1000,
            width: "150px",
          }}
        >
          <li style={{ padding: "5px 10px", cursor: "pointer" }}>
            📝 گزینه اول
          </li>
          <li style={{ padding: "5px 10px", cursor: "pointer" }}>
            📁 گزینه دوم
          </li>
          <li style={{ padding: "5px 10px", cursor: "pointer" }}>❌ بستن</li>
        </ul>
      )}
    </div>
  );
};

export default CustomContextMenu;
