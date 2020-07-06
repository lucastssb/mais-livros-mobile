import React from 'react';
import { Container } from './styles';

import Books from '../../components/Books';
import {Fav} from '../../data/data';


const Favorites = () => {
    return(
        <Container>
            <Books
                category=''
                data={Fav}
            />
        </Container>
    );
}

export default Favorites;