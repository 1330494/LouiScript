class Body{
	
	static ThemeColor(color="black"){
		document.body.backgroundColor = color;
	}

	static put(item){
		document.body.appendChild(item);
	}

	static push(container, item){
		container.appendChild(item);
	}
}