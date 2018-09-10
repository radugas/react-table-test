import React from 'react';

const Button = ({loadData, chooseData, value, title}) => {
	return (
		<button 
	 		value={value}	 		
	 		className='btn-primary btn-lg'	 		
			type='submit'
			onClick = {loadData}
			chooseData={chooseData}>

			{title}

		</button>	 	
	);
}

export default Button;
