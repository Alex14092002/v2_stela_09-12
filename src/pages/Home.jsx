import React from 'react';
import VideoBanner from '../components/Homecomponents/VideoBanner';
import SecondCompoent from '../components/Homecomponents/SecondCompoent';
import Footer from '../components/Homecomponents/Footer';
import ThirdComponent from '../components/Homecomponents/ThirdComponent';
import SwiperSlice from '../components/Homecomponents/SwiperSlice';

const Home = () => {
	return (
		<>
			<VideoBanner />
			<SwiperSlice/>
			<SecondCompoent />
			<ThirdComponent />
			<Footer />
		</>
	);
};

export default Home;
