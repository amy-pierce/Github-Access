import React from 'react';
import BarChart from './BarChart';


let lang = [9];

const LanguageList = (props) => {
    let result = Object.entries(props.langslist).map(({ value }) => value) 
    {console.log("yippee"+result[0])}
    if (props.langslist) {
        return (
            <ul>
                {console.log(props.langslist)}
                {Object.entries(props.langslist).map(([key, value]) =>
                    <li key={key}>
                        {key} - {value}
                        {lang[0]}={value};
                    </li>
                )}
                <div className='App-header'>
                    <h2>d3ia dashboard</h2>
                </div>
                <div>
                    <BarChart data={[1,2,3]} size={[500, 500]} />
                </div>

            </ul>

        )
    } else { return null; }
};
export default LanguageList;