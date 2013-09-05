NGT (No Gap Tile)
=========

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
	onResize : null
});
</pre>

<img src="https://raw.github.com/DQvsRA/nogaptile/master/examples/images/nogaptiles_algorithm_1.jpg">


License

NGT (No Gap Tile) may be used in commercial projects and applications with the one-time purchase of a commercial license.

Open source license
For non-commercial, personal, or open source projects and applications, you may use NGT (No Gap Tile) under the terms of the MIT License. You may use NGT (No Gap Tile) for free.

What is commercial considered?
If you are paid to do your job, and part of your job is implementing NGT (No Gap Tile), a commercial license is required.

Commercial licensing

Purchasing accepts most credit cards and takes seconds. Once purchased, you’ll receive a commercial license PDF and you will be all set to use NGT (No Gap Tile) in your commercial applications.

With the purchase of a commercial license:

You may use NGT (No Gap Tile) in as many commercial applications you like.
You may use NGT (No Gap Tile) in your own commercial applications and products. For example: premium WordPress, Tumblr, or other CMS themes, plugins and templates.
Customers and users of your products do not need to purchase their own license – so long as they are not developing their own commercial products with NGT (No Gap Tile).
