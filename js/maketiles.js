function MakeTiles (contentID, quantity, basesize, dw, dh) {
	var content = document.getElementById(contentID);
	var basesize = Math.random() * basesize + basesize;
	var tile, tilePropX, tilePropY, tileWidth, tileHeight;
	while(quantity > 0) {
		tilePropX = Math.ceil(Math.random()*dw);
		tilePropY = Math.ceil(Math.random()*dh);
		tileWidth = tilePropX*basesize;
		tileHeight = tilePropY*basesize;
		tile = document.createElement("article");
		tile.setAttribute("style", "width:" + tileWidth + "px;height:"+tileHeight+"px;background-color:" + getRandomColor());
		tile.dataset.size = tilePropX + "x" + tilePropY;
		tile.innerText = quantity;
		content.appendChild(tile);
		quantity--;
	}
	function getRandomColor () { return '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6) }
}