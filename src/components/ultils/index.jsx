const formatPrice = (number, lng) => {
switch (lng) {
case "en": {
	return (number/process.env.REACT_APP_DOLLAR_TO_VND).toLocaleString('en-US', {style : 'currency', currency : 'USD'});
}
default:
	return number.toLocaleString('it-IT', {style : 'currency', currency : 'VND'});
}
};

const ultils = {
formatPrice,
};

export default ultils;
