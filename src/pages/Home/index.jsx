import React, { useState } from 'react';
import TextField, { Input } from '@material/react-text-field';
import Slider from "react-slick";
import MaterialIcon from '@material/react-material-icon';

import logo from '../../assets/logo.svg';
import restaurant from '../../assets/restaurante-fake.png';
import { Container, Carousel, Search, Logo, Wrapper, Map, CarouselTitle } from './styles';
import { Card } from '../../components'

const Home = () => {
    const [inputValue, setInputValue] = useState('');
    const settings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        adaptiveHeight: true,
    };

    return (
        <Wrapper>
            <Container>
                <Search>
                    <Logo src={logo} alt="App logo" />
                    <TextField
                        label='Search Restaurants'
                        outlined
                        // onTrailingIconSelect={() => this.setState({ value: '' })}
                        trailingIcon={<MaterialIcon role="button" icon="search" />}
                    ><Input
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)} />
                    </TextField>
                    <CarouselTitle>Na sua área</CarouselTitle>
                    <Carousel {...settings}>
                        <Card photo={restaurant} title="teste" />
                        <Card photo={restaurant} title="teste2" />
                        <Card photo={restaurant} title="teste3" />
                        <Card photo={restaurant} title="teste4" />
                        <Card photo={restaurant} title="teste5" />
                        <Card photo={restaurant} title="teste6" />
                    </Carousel>
                </Search>
            </Container>
            <Map />
        </Wrapper>
    );
};

export default Home;