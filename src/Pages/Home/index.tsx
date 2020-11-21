import React from 'react';
import styled from 'styled-components';
import NewNote from '../../Components/NewNote';

const HomeContainer = styled.div`
padding-top: 4rem;

`

const Home:React.FC = () => {
    return (
        <HomeContainer> 
            <section className="new-note">
            <NewNote />          
            </section>
        </HomeContainer>
    )
}

export default Home