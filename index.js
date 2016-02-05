function getRoll (pipCount) {
	return Math.floor(Math.random() * pipCount) + 1;
}

var goBottonId = "#go",
	rollsId = "#rolls",
	resultId = "#result",
	howManyId = "#howmany";

	$(goBottonId).click(executeRoller);


function executeRoller () {
	var howManyRolls = parseInt($(howManyId).val(), 10);

	if(isNaN(howManyRolls)) return alert("Please enter a number of die to roll");

	var rolls = getRolls(howManyRolls, 6),
		result = parseRolls(rolls);

		$(rollsId).text(rolls.join(", "));
		$(resultId).text(result);
}

function getRolls (howMany, pips) {
	var rolls = [];

	for (var i = 0; i < howMany; i++) {
		rolls.push(getRoll(pips));
	}

	return rolls;
}

function parseRolls (rolls) {
	var sums = {};
	rolls.forEach(function (val) {
		if(sums[val] === void 0) sums[val] = val;
		else sums[val] += val;
	});

	var highest = 0;

	for(var val in sums){
		if(sums[val] > highest) highest = sums[val];
	}

	return highest;
}