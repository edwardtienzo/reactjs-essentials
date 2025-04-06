import { useState } from 'react'

import Header from './Header.jsx'
import Button from './Button.jsx'
import Description from './Description.jsx'

export default function App() {
    const [selectedSubject, setSelectedDesc ] = useState('');

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
        <div>
        <Header />
        <div class="flex h-200 border-b-1">
            <div class ="flex-1/10 flex-col text-center border-r-1 pt-5">
                <Button onSelect={() => clickHandler('wheat')}>Wheat</Button>
                <Button onSelect={() => clickHandler('corn')}>Corn</Button>
            </div>
            <div id="desc" class="flex-9/10">
                <Description>
                    {selectedSubject}
                </Description>
            </div>
        </div>
    </div>
    )
}