import React from "react";
import { Link } from "react-router-dom";

function Megamenu(props) {
  return (
    <li className="megamenu-container active">
      <Link to="/" className="sf-with-ul">
        Home
      </Link>
      <div className="megamenu demo">
        <div className="menu-col">
          <div className="menu-title">Choose your theme</div>
          <div className="demo-list">
            {props.demoList.map((item) => (
              <div key={item.id} className="demo-item">
                <Link to="/">
                  <span
                    className="demo-bg"
                    style={{
                      backgroundImage: `url(${item.backgroundImage})`,
                    }}
                  ></span>
                  <span className="demo-title">{item.title}</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </li>
  );
}

export default Megamenu;
