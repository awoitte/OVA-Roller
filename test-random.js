//run in node to test random function

function getRoll (pipCount) {
	return Math.floor(Math.random() * pipCount) + 1;
}

var counts = 10000,
	outcomes = {};

for (var i = 0; i < counts; i++) {
	var roll = getRoll(6);
	if(outcomes[roll] === void 0) outcomes[roll] = 1;
	else outcomes[roll] += 1;
}

console.log(outcomes);