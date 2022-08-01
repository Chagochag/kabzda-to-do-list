import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating as R} from "./components/Rating/Rating";


const  App = () => {
    debugger
    return (
        <div className="App">
            <AppTitle title={'This is App Component'} />
            <AppTitle title={'Users'} />

            <R value={1}/>
            <Accordion titleValue={'Hey'} collapsed={true}/>
            <Accordion titleValue={'Ho'} collapsed={false}/>

            <R value={2}/>
            <R value={3}/>
            <R value={4}/>
            <R value={5}/>
            <R value={0}/>
        </div>
    );
}


type AppTitlePropsType = {
    title: string
}

function AppTitle(props:AppTitlePropsType) {

    return (
        <div>
            <h1>{props.title}</h1>
        </div>
    )
}




export default App;
