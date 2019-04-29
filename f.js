class Drawing {
	constructor(x,y,img,name){
		this.x = x;
		this.y = y;
		this.img = img;
		this.name = name;
	}
}

function find(arr, key){
	x = 0
	while (x < arr.length){
		if (arr[x] == key){
			return x
		}
		x++
	}
	}

