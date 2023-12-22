function sleep (ms) {
	return new Promise(
		resolve => { setTimeout(() => resolve(true), ms); }
	);
}

async function handleClick () {
	await sleep(5000);
	return 'batata';
}