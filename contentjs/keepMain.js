function getHeight(element){
	return element.clientHeight;
}

function indexMax(list){
	let index = 0;
	for(let i=0; i<list.length; i++){
		if(list[i] > list[index])
			index = i;
	}
	return index
}


let children = (document.querySelectorAll('div')[1].children);
let divs = [];

for(let i=0; i<children.length; i++){
	if(children[i].tagName == 'DIV')
		divs.push(children[i]);
}

console.log(divs)

let heights = [];
for(const i of divs){
	heights.push(getHeight(i));
}

console.log(heights);

let maxIndex = indexMax(heights);

for(let i=0; i<divs.length; i++){
	if(i != maxIndex)
		divs[i].outerHTML = "";
}