import React from 'react';
import './index.scss';

const Breadcrumb = (props) => {
  let slugger = props.dataslugger;
  // console.log(slugger);

  return (
    <div className="text-center">
      <ul className="breadcrumbs">
        {props.crumbs.map((crumb, k) => {
          if (props.crumbs.length > k + 1) {
            return <li key={k}><a href={`/` + slugger} key={k}>{`${crumb}`}</a><span> > </span></li>
          }
          return <li key={k}><strong>{crumb}</strong></li>
        })}
      </ul>
    </div>
  )
};

export default Breadcrumb;