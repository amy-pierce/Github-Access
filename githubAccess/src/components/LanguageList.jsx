import React from 'react';
import BarChart from './BarChart';
let x = ''
let langs=[]
const LanguageList = (props) => {
  if (props.langslist) {
    {
      var totalcount =  Object.entries(props.langslist).map(([key,eachitem]) =>
        (eachitem.count)).reduce((pv, cv) => pv+cv, 0 ) }
      return (
        <div>
        <div>
          {
            Object.entries(props.langslist).map(([key,eachitem]) =>
              <div><div key={key}>
                {eachitem.lang} - {Math.round(100*eachitem.count / totalcount)}%
              </div>
                    <div>{console.log(x = x + eachitem.count)}</div></div>)}
        </div>
              {console.log(x)}
              <div className='App-header'>
                  <h2>d3ia dashboard</h2>
              </div>
              <div>
                  <BarChart data={x.split('')} size={[500, 500]} />
                  {x = ''}
                 
              </div>
</div>      
            )
    } else { return null; }
    
  };

export default LanguageList;
