let button1 = document.getElementById("btn");

button1.addEventListener("click", myFunction);

function myFunction(){
let numberStart = document.getElementById("ip").value;
	return new Promise((resolve)=> {
		setTimeout(()=> {
			document.getElementById("output").innerHTML = `Result: ${numberStart}`;
		resolve();
		}, 2000)
	})
	.then(()=> {
		return new Promise((resolve)=> {
			let multiply = numberStart * 2;
			setTimeout(()=> {
				document.getElementById("output").innerHTML = `Result: ${multiply}`;
				resolve(multiply)
			}, 2000)
		})
	})
	.then((num)=> {
		return new Promise((resolve)=> {
			let subtract = num - 3;
			setTimeout(()=> {
				document.getElementById("output").innerHTML = `Result: ${subtract}`;
				resolve(subtract);
			}, 1000)
		});
	})
	.then((data)=> {
		return new Promise((resolve)=> {
			let divide = data / 2;
			setTimeout(()=> {
				document.getElementById("output").innerHTML = `Result: ${divide}`;
				resolve(divide);
			}, 1000)
		});
	})
	.then((data)=> {
		return new Promise((resolve)=> {
			let divide = data + 10;
			setTimeout(()=> {
				document.getElementById("output").innerHTML = `Result: ${divide}`;
				resolve(divide);
			}, 1000)
		});
	})
}
