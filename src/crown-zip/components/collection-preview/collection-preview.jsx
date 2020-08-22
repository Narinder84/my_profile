import React from 'react';

import CollectionItem from '../collection-item/collection-item.component';

import './collection-preview.styles.scss';

const CollectionPreview = ({ title, items }) => { 
  
  return  (
  <div className='al' >
      <div className='collection-preview'>
      <h3 className='title'>{title.toUpperCase()}</h3>
      <div className='preview'>
        {items
          .filter((item, idx) => idx < 4)
          .map((item) =>  (
            <CollectionItem key={item.id} item= {item} />
          ))}
      </div>
    </div>
  </div>
);}

export default CollectionPreview;
