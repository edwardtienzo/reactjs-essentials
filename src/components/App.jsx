import { useState } from 'react'

import Header from './Header.jsx'
import Button from './Button.jsx'
import Description from './Description.jsx'
import Footer from './Footer.jsx'

export default function App() {
    const [selectedSubject, setSelectedDesc ] = useState('Please choose an asset');

    const assets = [
    [ 'Raw Material', 'wheat', 'corn'],
    [ 'Feed Mill', 'chicken feed', 'cow feed', 'pig feed']
    ];

    let assetList = "";
    let arr = [];

    for (let i = 0; i < assets.length; i++) {     
         
        for (let j = 0; j < assets[i].length; j++) {
            if (j === 0 )
                arr.push(<div className='mt-5'>{assets[i][j]}</div>);
            else
                arr.push(<Button onSelect={()=>clickHandler(assets[i][j])} value={assets[i][j]} />);
        }
        assetList = <div className ="flex-1/10 flex-col text-center border-r-1">{arr}</div>
    }

    let str = selectedSubject.toUpperCase();

    function clickHandler(selectedButton) {
        var desc = document.getElementById('desc');
        
        desc.classList.remove('show');
        desc.classList.add('fade');

        setTimeout(()=>{
            desc.classList.remove('fade');
            desc.classList.add('show');
            setSelectedDesc(selectedButton);
        }, 150);

    }

    return (
        <>
            <Header />
            <div className="flex h-170 border-b-1">
                {assetList}
                    {/* <div className ="flex-1/10 flex-col text-center border-r-1 pt-5">
                        <Button onSelect={() => clickHandler('wheat')} value="wheat" />
                        <Button onSelect={() => clickHandler('corn')} value="corn" />
                    </div> */}
                <div id="desc" className="flex-9/10">
                    <Description value={str}/>
                </div>
            </div>
            <Footer />
        </>
    )
}