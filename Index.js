const horScroll = (isLeft) => {
	document.getElementById('carouselId').scrollLeft += (isLeft * document.getElementById('carouselId').offsetWidth)
}

const navBarLeftOpen = () => {
	document.getElementById('navBarLeftId').style.left = 0;
	document.getElementById('overlay').style.display = 'block';
}

const navBarLeftClose = () => {
	document.getElementById('navBarLeftId').style.left = window.innerWidth <= 600 ? '-80%' : '-60%';
	document.getElementById('overlay').style.display = 'none';
}

const navBarRightOpen = () => {
	document.getElementById('navBarRightId').style.right = 0;
	document.getElementById('overlay').style.display = 'block';
}

const navBarRightClose = () => {
	document.getElementById('navBarRightId').style.right = '-60%';
	document.getElementById('overlay').style.display = 'none';
}

const locationClick = () => {
	document.getElementById('mapId').scrollIntoView();
}
const aboutClick = () => {
	document.getElementById('aboutBottomId').scrollIntoView();
}

const reloadFunc = () => {

}