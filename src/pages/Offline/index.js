import React from 'react';

import { Container } from './styles';

import Books from '../../components/BooksVerticalList';
import {Off} from '../../data/data';

const Offline = () => {
    return(
        <Container>
            <Books
                data={Off}
            />
        </Container>
    );
}

export default Offline;