import React from "react";
import styled from "@emotion/styled";
import {Card} from "antd";

const Search: React.FC = () => {

    return (<Container>
        <ShadowCard>
            search111111
        </ShadowCard>
    </Container>)
}

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #099b85;
    padding: 2rem;
`

const ShadowCard = styled(Card)`
    width: 40rem;
    min-height: 56rem;
    padding: 3.2rem 4rem;
    border-radius: 0.3rem;
    box-sizing: border-box;
    box-shadow: rgba(0,0,0,0.1) 0 0 10px;
    text-align: center;
`;

export default Search;