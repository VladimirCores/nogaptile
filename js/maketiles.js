function MakeTiles (contentID, quantity, basesize, dw, dh) {
	var content = document.getElementById(contentID);
	var tile, tilePropX, tilePropY, tileWidth, tileHeight;
	quantity = quantity || 35;
	dw = dw || 2;
	dh = dh || 2;
	basesize = basesize || 150;
	basesize = Math.random() * basesize + basesize;
	while(quantity > 0) {
		tilePropX = Math.ceil(Math.random()*dw);
		tilePropY = Math.ceil(Math.random()*dh);
		tileWidth = tilePropX*basesize;
		tileHeight = tilePropY*basesize;
		tile = document.createElement("article");
		tile.setAttribute("style", "width:" + tileWidth + "px;height:"+tileHeight+"px;"); //background-color:" + (bg || getRandomColor()));
		tile.dataset.size = tilePropX + "x" + tilePropY;
		tile.innerText = quantity;
		content.appendChild(tile);
		quantity--;
	}
	function getRandomColor () { return '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6) }
}