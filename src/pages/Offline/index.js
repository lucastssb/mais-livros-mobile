import React from 'react';

import { Container } from './styles';

import Books from '../../components/Books';
import {Off} from '../../data/data';

const Offline = () => {
    return(
        <Container>
            <Books
                category=''
                data={Off}
            />
        </Container>
    );
}

export default Offline;