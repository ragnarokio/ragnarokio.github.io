class monster(){
	constructor(name,evopaths,image){
		this.name = name;
		this.evopaths = evopaths;
		this.image = image;
	}
}

class mondatabase(){
	constructor(){
		var slime = new monster('slime',[[[100,0,0,0,0,0],'kau'],[[0,100,0,0,0,0],'wolf']],'slime.png');
		var kau = new monster('kau',[[[1000,0,0,0,0,0],'kaubell']],'kau.png');
		var wolf = new monster('wolf',[[[0,1000,0,0,0,0],'warg']],'wolf.png');
		var kaubell = new monster('kaubell',[],'kaubell.png');
		var warg = new monster('warg',[],'warg.png');
		this.mons = [slime,kau,wolf,kaubell,warg];
	}
	getMon(name){
		for(i = 0;i < this.mons.length;i++){
			if(this.mons[i].name == name){
				return(this.mons[i]);
			}
		}
	}
	
}
