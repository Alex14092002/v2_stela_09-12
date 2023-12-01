import React from 'react';
import Typography from '@mui/material/Typography';
import windowPic from '../../assets/window.gif';

const FourComponent = () => {
	return (
		<>
			<div>
				<div className='font-bold text-center'>
					We Help Students Get Admitted Into the Best International
					Educational Institutions
				</div>

				<Typography
					variant='h4'
					component='div'
					sx={{
						flexGrow: 1,
						display: { lg: 'none', sm: 'block' },
					}}
				>
					<a href='/'>
						<img
							className='items-center'
							// src='/src/assets/window.gif'
							src={windowPic}
							width='450px'
						/>
					</a>
				</Typography>
			</div>
		</>
	);
};

export default FourComponent;
