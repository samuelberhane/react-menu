import { useState } from "react";
import { data } from "./data";
import Menu from "./Menu";
import Button from "./Button";

function App() {
  const [menuItems, setMenuItems] = useState(data);
  const categories = ["All", ...new Set(data.map((menu) => menu.category))];

  const filterMenu = (category) => {
    if (category === "All") {
      setMenuItems(data);
    } else {
      setMenuItems(data.filter((menu) => menu.category === category));
    }
  };

  return (
    <main>
      <div className="container">
        <div class="title">
          <h1>Our Menu</h1>
        </div>
        <div className="btn-container">
          <Button categories={categories} filterMenu={filterMenu} />
        </div>
        <section className="menu-items">
          {menuItems.map((menu) => {
            return <Menu key={menu.id} menu={menu} />;
          })}
        </section>
      </div>
      <footer>Copyright &copy; Samuel Brhane React Menu Project</footer>
    </main>
  );
}

export default App;
