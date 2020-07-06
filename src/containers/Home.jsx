/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { connect } from 'react-redux';
import '../assets/styles/App.scss';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';

const Home = ({ mylist, trends, originals }) => {

  return (
    <>
      <Header />
      <Search />
      {mylist.length > 0 && (
        <Categories title='Mi lista'>
          <Carousel>
            {mylist.map((item) => (
              <CarouselItem
                key={item.id}
                {...item}
                isList

              />
            ))}

          </Carousel>
        </Categories>
      )}

      <Categories title='tendencias'>
        <Carousel>
          {trends.map((item) => (
            <CarouselItem
              key={item.id}
              {...item}

            />
          ))}
        </Carousel>
      </Categories>

      <Categories title='Originales'>
        <Carousel>
          {originals.map((item) => (
            <CarouselItem
              key={item.id}
              {...item}
              isPremium
            />
          ))}
        </Carousel>
      </Categories>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    mylist: state.mylist,
    trends: state.trends,
    originals: state.originals,
  };
};

export default connect(mapStateToProps, null)(Home);
