import React from 'react';
import './index.scss';

const BreadcrumbWithSlug = (props) => {
  const total_items_crumbs = props.crumbs.length;
  return (
    <div className="text-center">
      <ul className="breadcrumbs breadcrumbs-slug">
        {props.crumbs.map((crumb, k) => {
          // console.log(crumb);
          if (crumb.indice_slug) {
            return (
              <li key={k}>
                <a href={`/${crumb.indice_slug}`} title={crumb.indice}>{crumb.indice}</a>
                {(k + 1 < total_items_crumbs) ? (' > ') : (null)}
              </li>
            )
          }
          if (crumb.indice) {
            return (
              <li key={k}>
                <strong>{crumb.indice}</strong>
                {(k + 1 < total_items_crumbs) ? (' > ') : (null)}
              </li>
            )
          }
        })}
      </ul>
    </div>
  )
};

export default BreadcrumbWithSlug;