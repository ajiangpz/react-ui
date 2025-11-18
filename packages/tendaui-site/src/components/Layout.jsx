import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import siteConfig from '../../site.config.mjs';
import './Layout.css';

export default function Layout({ children }) {
  const location = useLocation();

  return (
    <div className="tdesign-site">
      <aside className="tdesign-site-sidebar">
        <div className="tdesign-site-logo">
          <h1>TendaUI</h1>
        </div>
        <nav className="tdesign-site-nav">
          {siteConfig.docs.map((group) => (
            <div key={group.title} className="tdesign-site-nav-group">
              <h3 className="tdesign-site-nav-group-title">{group.title}</h3>
              <ul className="tdesign-site-nav-list">
                {group.children?.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className={`tdesign-site-nav-item ${
                        location.pathname === item.path ? 'active' : ''
                      }`}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </aside>
      <main className="tdesign-site-main">
        {children}
      </main>
    </div>
  );
}

