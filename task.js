function Counter(){
    this.count = 0;
    let self = this;
    return{
        increase: function(){
            self.count++;
        },
        current: function(){
            return self.count;
        },
        reset: function(){
            self.count = 0;
        }
    }
}

const product = new Array();
product[0] = {id : 1};
product[1] = {title: 'iPhone 9'};
product[2] = {description: 'An apple mobile which is nothing like apple'};
product[3] = {price: 549};
product[4] = {discountPercentage: 12.96};
product[5] = { rating: 4.69};
product[6] = {stock: 94};
product[7] = {brand: 'Apple'};
product[8] = { category: 'smartphones'};
product[9] = {thumbnail: 'https://cdn.dummyjson.com/product-images/1/thumbnail.jpg'};
product[10] = {image1: 'https://cdn.dummyjson.com/product-images/1/1.jpg'};
product[11] = {image2: 'https://cdn.dummyjson.com/product-images/1/2.jpg'};
product[12] = {image3: 'https://cdn.dummyjson.com/product-images/1/3.jpg'};
product[13] = {image4: 'https://cdn.dummyjson.com/product-images/1/4.jpg'};
product[14] = {image5: 'https://cdn.dummyjson.com/product-images/1/thumbnail.jpg'};

var counter = new Counter();
product.forEach(function (e) {
    this.increase();
    console.log(product);
}, counter);

console.log(counter.current()); 
// console.log(product);