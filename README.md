NGT (No Gap Tile)
=========

At current version you need to specify tile "data-size" attribute like this:  
<code>
	<div data-size="2x2"> ... </div>
</code>
<pre>
new NGT("content", {
	sizes : [
		{ min:0,     max:380,   cols: 1,    fixed: true },
		{ min:380,   max:760,   cols: 2,    fixed: true },
		{ min:760,   max:1000,  cols: 4  },
		{ min:1000,  max:1280,  cols: 6  },
		{ min:1280,  max:1600,  cols: 8  },
		{ min:1600,  max:1920,  cols: 10 },
		{ min:1920,  max:2680,  cols: 12 }
	],
	max_width_dimension : 2,
	max_height_dimension : 2,
	static_proportion : false, // "1x1"
	insequense : false, // fit last tile in row to cell width 
	squarescale : true, // scale tiles proportionally when resize
	makegap	: true, // append gap to layout
	gap_markup : "", // gap markup (inner html if string or module if element)
	gap_backgound : "#ccc", // gap background-color
	gap_extend : true, // merge gap with each others while they less then considition (max_width_dimension and max_height_dimension)
	mergewithgap : true, // merge gap with around tile that match gap size and condition (max_width_dimension and max_height_dimension)
	movelastcelltoclosegap : true, // move last tile to gap if mergewithgap do not solve them
	onResize : null,
	onLayoutChanged : null
});
</pre>

The pictures below show you example of using different algorithm. First image has no optimization at all and work like <a href="http://isotope.metafizzy.co/" target="_blank">izotope</a>. Second image show you simple optimization where last tile close gaps.
<img src="https://raw.github.com/DQvsRA/nogaptile/master/examples/images/nogaptiles_algorithm_1.jpg">

That images show you one trick for close gaps inside the layout by merging them with surrounding tile if the size of that gap plus size of tile less or equal max available width and height (max_width_dimension, max_height_dimension)
<img src="https://raw.github.com/DQvsRA/nogaptile/master/examples/images/nogaptiles_algorithm_2.jpg">


License

NGT (No Gap Tiles) may be used in commercial projects and applications with the one-time purchase of a commercial license.

Open source license
For non-commercial, personal, or open source projects and applications, you may use NGT (No Gap Tiles) under the terms of the MIT License. You may use NGT (No Gap Tiles) for free.

What is commercial considered?
If you are paid to do your job, and part of your job is implementing NGT (No Gap Tiles), a commercial license is required.

Commercial licensing

Purchasing accepts most credit cards and takes seconds. Once purchased, you’ll receive a commercial license PDF and you will be all set to use NGT (No Gap Tiles) in your commercial applications.

With the purchase of a commercial license:

You may use NGT (No Gap Tiles) in as many commercial applications you like.
You may use NGT (No Gap Tiles) in your own commercial applications and products. For example: premium WordPress, Tumblr, or other CMS themes, plugins and templates.
Customers and users of your products do not need to purchase their own license – so long as they are not developing their own commercial products with NGT (No Gap Tiles).
