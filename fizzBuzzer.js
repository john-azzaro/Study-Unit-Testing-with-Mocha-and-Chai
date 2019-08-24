module.exports = function(num) {
	if (typeof num !== 'number') {
		throw Error('`num` must be a number');
	}
	if (num % 15 === 0) {                              // for multiples of 15, return fizzbuzz
		return 'fizz-buzz';
	}
	if (num % 5 === 0) {                               // for multiples of 5, return buzz
		return 'buzz';
	}
	if (num % 3 === 0) {                               // for multiples of 3, return fizz
		return 'fizz';
	}
	else {                                             // for everything else, return the number.
		return num;
	}
}