// let prev= document.querySelectorAll('#prev');
// let next= document.querySelectorAll('#next');

document.getElementById('prev1').addEventListener('click',(event)=>slide('left',"A"));
document.getElementById('next1').addEventListener('click',(event)=>slide('right',"A"));
document.getElementById('prev2').addEventListener('click',(event)=>slide('left',"B"));
document.getElementById('next2').addEventListener('click',(event)=>slide('right',"B"));
function slide(direction,containerId){
	console.log(event.target.id)
	console.log("slider clicked")
    var container = document.getElementById(`slider${containerId}`);
    scrollCompleted = 0;
    var slideVar = setInterval(function(){
        if(direction == 'left'){
            container.scrollLeft -= 80;
        } else {
            container.scrollLeft += 80;
        }
        scrollCompleted += 10;
        if(scrollCompleted >= 100){
            window.clearInterval(slideVar);
        }
    }, 50);
}

