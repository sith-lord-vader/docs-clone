var editor = document.getElementById('editor');

var bold;
var italics;
var underline;
var ulList;
var olList;
var justifyLeft;
var justifyCenter;
var justifyRight;
var justifyFull;
var font;
var size;

var boldButton = document.getElementById('bold');
var italicButton = document.getElementById('italic');
var underlineButton = document.getElementById('underline');
var ulListButton = document.getElementById('ul-list');
var olListButton = document.getElementById('ol-list');
var justifyLeftButton = document.getElementById('justify-left');
var justifyCenterButton = document.getElementById('justify-center');
var justifyRightButton = document.getElementById('justify-right');
var justifyFullButton = document.getElementById('justify-full');
var fontSelect = document.getElementById('input-font');
var sizeSelect = document.getElementById('fontSize');

window.onload = () => {
	if (localStorage.getItem('abhishek-doc')) {
		let myObj = JSON.parse(localStorage.getItem('abhishek-doc'));
		editor.innerHTML = myObj.doc;
		bold = myObj.bold;
		italics = myObj.italics;
		underline = myObj.underline;
		ulList = myObj.ulList;
		olList = myObj.olList;
		justifyLeft = myObj.justifyLeft;
		justifyCenter = myObj.justifyCenter;
		justifyRight = myObj.justifyRight;
		justifyFull = myObj.justifyFull;
		font = myObj.font;
		size = myObj.size;
	} else {
		bold = false;
		italics = false;
		underline = false;
		ulList = false;
		olList = false;
		justifyLeft = false;
		justifyCenter = false;
		justifyRight = false;
		justifyFull = false;
		font = 'Arial';
		size = '1';
	}

	if (bold) {
		boldButton.classList.add('active');
	}
	if (italics) {
		italicButton.classList.add('active');
	}
	if (underline) {
		underlineButton.classList.add('active');
	}
	if (ulList) {
		ulListButton.classList.add('active');
	}
	if (olList) {
		olListButton.classList.add('active');
	}
	if (justifyLeft) {
		justifyLeftButton.classList.add('active');
	}
	if (justifyCenter) {
		justifyCenterButton.classList.add('active');
	}
	if (justifyRight) {
		justifyRightButton.classList.add('active');
	}
	if (justifyFull) {
		justifyFullButton.classList.add('active');
	}
	if (font != 'Arial') {
		fontSelect.value = font;
		document.execCommand('fontName', false, font);
	}
	if (size != '1') {
		sizeSelect.value = size;
		document.execCommand('fontSize', false, size);
	}
};

function format(command, value) {
	document.execCommand(command, false, value);
	switch (command) {
		case 'bold':
			if (bold) {
				boldButton.classList.remove('active');
			} else {
				boldButton.classList.add('active');
			}
			bold = !bold;
			break;
		case 'italic':
			if (italics) {
				italicButton.classList.remove('active');
			} else {
				italicButton.classList.add('active');
			}
			italics = !italics;
			break;
		case 'underline':
			if (underline) {
				underlineButton.classList.remove('active');
			} else {
				underlineButton.classList.add('active');
			}
			underline = !underline;
			break;
		case 'justifyLeft':
			if (justifyLeft) {
				justifyLeftButton.classList.remove('active');
			} else {
				justifyLeftButton.classList.add('active');
			}
			justifyLeft = !justifyLeft;
			break;
		case 'justifyRight':
			if (justifyRight) {
				justifyRightButton.classList.remove('active');
			} else {
				justifyRightButton.classList.add('active');
			}
			justifyRight = !justifyRight;
			break;
		case 'justifyCenter':
			if (justifyCenter) {
				justifyCenterButton.classList.remove('active');
			} else {
				justifyCenterButton.classList.add('active');
			}
			justifyCenter = !justifyCenter;
			break;
		case 'justifyFull':
			if (justifyFull) {
				justifyFullButton.classList.remove('active');
			} else {
				justifyFullButton.classList.add('active');
			}
			justifyFull = !justifyFull;
			break;
		case 'ulList':
			if (ulList) {
				ulListButton.classList.remove('active');
			} else {
				ulListButton.classList.add('active');
			}
			ulList = !ulList;
			break;
		case 'olList':
			if (olList) {
				olListButton.classList.remove('active');
			} else {
				olListButton.classList.add('active');
			}
			olList = !olList;
			break;
		default:
			console.log('default');
	}
}

function changeFont() {
	const Font = document.getElementById('input-font').value;
	document.execCommand('fontName', false, Font);
	font = Font;
}

function changeSize() {
	const size1 = document.getElementById('fontSize').value;
	document.execCommand('fontSize', false, size1);
	size = size1;
}

function changeColor(some) {
	const color = some.value;
	document.execCommand('color', false, size);
}

setInterval(() => {
	let myObj = new Object();
	myObj['doc'] = editor.innerHTML;
	myObj['bold'] = bold;
	myObj['italics'] = italics;
	myObj['underline'] = underline;
	myObj['ulList'] = ulList;
	myObj['olList'] = olList;
	myObj['justifyLeft'] = justifyLeft;
	myObj['justifyCenter'] = justifyCenter;
	myObj['justifyRight'] = justifyRight;
	myObj['justifyFull'] = justifyFull;
	myObj['font'] = font;
	myObj['size'] = size;
	localStorage.setItem('abhishek-doc', JSON.stringify(myObj));
}, 1000);

editor.addEventListener('click', () => {
	document.execCommand('fontName', false, font);
	document.execCommand('fontSize', false, size);
});
