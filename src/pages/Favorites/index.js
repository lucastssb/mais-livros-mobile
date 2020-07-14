import React from 'react';
import { Container } from './styles';

import Books from '../../components/BooksVerticalList';
import {Fav} from '../../data/data';


const Favorites = () => {
    return(
        <Container>
            <Books
                data={Fav}
            />
        </Container>
    );
}

export default Favorites;