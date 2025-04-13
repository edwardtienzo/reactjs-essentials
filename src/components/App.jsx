import { useState } from 'react'

import Header from './Header.jsx'
import Button from './Button.jsx'
import Description from './Description.jsx'
import Footer from './Footer.jsx'

import assets from '../data/data.js'
import crops from '../data/crops.js'

export default function App() {
    const [selectedSubject, setSelectedDesc] = useState('');
    const [isTrue, setIsTrue] = useState(false);

    let assetList = "";
    let arr = [];

    let item = {
        name: "",
        url: "",
        type: "",
        sell: 0,
    };

    for (let i = 0; i < assets.length; i++) {  
        let temp = i * 1000;
        
        for (let j = 0; j < assets[i].length; j++) {
            if (j === 0 ) {
                arr.push(<div className='mt-5' key={temp}>{assets[i][j]}</div>);
            }
            else
                arr.push(<Button onSelect={()=>clickHandler(assets[i][j])} value={assets[i][j]} key={temp+(j*100)} isDisabled={isTrue}/>);
        }
        assetList = <div className ="flex-1/5 flex-col text-center border-r-1">{arr}</div>
    }

    let str = selectedSubject.toUpperCase();

    function handleData() {
        for (let i = 0; i < crops.length; i++) {
            if(crops[i].name == str) {
                item.name = crops[i].name;
                item.url = crops[i].url;
                item.type = crops[i].type;
                item.sell = crops[i].sell;
                break;
            }
        }
    }
    handleData();

    

    function clickHandler(selectedButton) {
        let title = document.getElementById("desc")
        let desc = document.getElementById("title-desc");

        desc.classList.add('title-desc');
        setIsTrue(true);

        title.classList.add('title');

        setTimeout(()=>{
            setSelectedDesc(selectedButton);
        }, 500);

        setTimeout(()=>{
            title.classList.remove('title');
            desc.classList.remove('title-desc');
            setIsTrue(false);
        }, 1500)
    }

    return (
        <>
            <Header />
            <div className="flex h-170 border-b-1">
                {assetList}
                <div id="desc" className="flex-4/5">
                    <Description value={item}/>
                </div>
            </div>
            <Footer />
        </>
    )
}