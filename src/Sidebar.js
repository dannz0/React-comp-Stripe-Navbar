import React from 'react';
import { FaTimes } from 'react-icons/fa';
import sublinks from './data';
import { useGlobalContext } from './context';

const Sidebar = () => {
  const { closeSidebar, isSidebarOpen } = useGlobalContext();

  return (
    <aside
      className={`${
        isSidebarOpen ? 'sidebar-wrapper show' : 'sidebar-wrapper'
      }`}
    >
      <div className='sidebar'>
        <button className='close-btn' onClick={closeSidebar}>
          <FaTimes />
        </button>

        <div className='sidebar-links'>
          {sublinks.map((sublink, i) => {
            const { links, page } = sublink;

            return (
              <article key={i}>
                <h4>{page}</h4>
                <div className='sidebar-sublinks'>
                  {links.map((link, i) => {
                    const { url, icon, label } = link;

                    return (
                      <a key={i} href={url}>
                        {icon}
                        {label}
                      </a>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
