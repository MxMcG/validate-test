var goodUserData = {
	email: 'test@mailinator.com',
	phone: '7373737373',
	first_name: 'test',
	last_name: 'testtest',
	address: '123mainstreet',
	zip: '92008',
	dob_month: '03',
	dob_day: '23',
	dob_year: '1990',
	city: 'Carlsbad',
	state: 'CA'
};

var badUserData = {
	email: 'testmailinatorcom',
	phone: '73+737-373073',
	first_name: 't',
	last_name: 't',
	address: '123mainstreet++',
	zip: '9200',
	dob_month: '22',
	dob_day: '2',
	dob_year: '1800',
	city: 'C',
	state: 'CD'
};

module.exports = { good: goodUserData, bad: badUserData };
