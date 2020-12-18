import React, { useState } from 'react';
import styled from 'styled-components';
import NewNote from '../../Components/NewNote';

const HomeContainer = styled.div`
padding-top: 4rem;

`

const Home:React.FC = () => {

    const [isChecklist, setIsChecklist] = useState(false)
    return (
        <HomeContainer> 
            <section className="new-note">
            <NewNote isChecklist={isChecklist} handleCheckbox={setIsChecklist}/>          
            </section>
        </HomeContainer>
    )
}

export default Home