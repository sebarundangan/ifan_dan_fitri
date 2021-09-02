let br = document.querySelectorAll('.br');
let brd = document.querySelectorAll('.br-d');

let width = window.innerWidth;



if(width >675 ){
	for(let i=0;i<br.length;i++){
		br[i].remove();
	}
}else{
	for(let i=0;i<brd.length;i++){
		brd[i].remove();
	}
}