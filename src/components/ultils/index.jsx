const formatPrice = (number) => number.toLocaleString('it-IT', {style : 'currency', currency : 'VND'});

const ultils = {
	formatPrice,
};

export default ultils;
