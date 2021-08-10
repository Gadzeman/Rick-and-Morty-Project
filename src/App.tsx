import React, {FC} from 'react';
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";

const App: FC = () => {
    return (
        <>
            <Header />
            <Content />
        </>
    );
};

export default App;