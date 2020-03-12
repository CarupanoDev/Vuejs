var vm = new Vue({
	el : '#app',
	data : {
		product : 'Stocks',
		image : 'images/greensocks.jpg',
		link : '',
		altText: 'A pair of socks',
		inStock: false,
		onSale : true,
		details: ["80% cotton", "20% polyester", "Gender-neutral"],
		sizes: ["Small", "Medium", "Large"],
		variants: [
			{
				variantId : 2234,
				variantColor : 'green',
				variantImage : 'images/greensocks.jpg'
			},
			{
				variantId : 2235,
				variantColor : 'blue',
				variantImage : 'images/bluesocks.jpg'
			}
		],
		cart:0 
	},
	methods:{
		addToCart: function(){
			this.cart += 1
		},
		substractToCart: function()
		{
			if(this.cart > 0)
			{
				this.cart -= 1

			}

		},
		updateProduct(variantImage)
		{
			this.image = variantImage
		}
	}
})