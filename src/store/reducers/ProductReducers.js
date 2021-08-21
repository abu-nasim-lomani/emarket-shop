const initState={
    products:[
        {
            id:1,
            name:'Men T-Shirt summer season',
            image:'1.jpg',
            image2:'2.jpg',
            image3:'3.jpg',
            price:20,
            discount:2,
            discountPrice: (20-2/100*20),
            qty:1,
            categoty:'laptop',
            des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, harum similique. Esse ratione, sequi, ipsam molestiae delectus consequuntur labore quas sapiente eius doloribus, quisquam facere non cupiditate tempore quasi dolores."
        },
        {
            id:2,
            name:'Men T-Shirt summer season',
            image:'2.jpg',
            image2:'1.jpg',
            image3:'3.jpg',
            price:20,
            discount:2,
            discountPrice: (20-2/100*20),
            qty:1,
            categoty:'laptop',
            des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, harum similique. Esse ratione, sequi, ipsam molestiae delectus consequuntur labore quas sapiente eius doloribus, quisquam facere non cupiditate tempore quasi dolores."
        },
        {
            id:3,
            name:'Men T-Shirt summer season',
            image:'3.jpg',
            image2:'2.jpg',
            image3:'3.jpg',
            price:20,
            discount:2,
            discountPrice: (20-2/100*20),
            qty:1,
            categoty:'tshirt',
            des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, harum similique. Esse ratione, sequi, ipsam molestiae delectus consequuntur labore quas sapiente eius doloribus, quisquam facere non cupiditate tempore quasi dolores."
        },
        {
            id:4,
            name:'Men T-Shirt summer season',
            image:'4.jpg',
            image2:'2.jpg',
            image3:'3.jpg',
            price:20,
            discount:2,
            discountPrice: (20-2/100*20),
            qty:1,
            categoty:'laptop',
            des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, harum similique. Esse ratione, sequi, ipsam molestiae delectus consequuntur labore quas sapiente eius doloribus, quisquam facere non cupiditate tempore quasi dolores."
        },
        {
            id:5,
            name:'Men T-Shirt summer season',
            image:'5.jpg',
            image2:'2.jpg',
            image3:'3.jpg',
            price:20,
            discount:2,
            discountPrice: (20-2/100*20),
            qty:1,
            categoty:'laptop',
            des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, harum similique. Esse ratione, sequi, ipsam molestiae delectus consequuntur labore quas sapiente eius doloribus, quisquam facere non cupiditate tempore quasi dolores."
        },
        {
            id:6,
            name:'Men T-Shirt summer season',
            image:'6.jpg',
            image2:'2.jpg',
            image3:'3.jpg',
            price:20,
            discount:2,
            discountPrice: (20-2/100*20),
            qty:1,
            categoty:'laptop',
            des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, harum similique. Esse ratione, sequi, ipsam molestiae delectus consequuntur labore quas sapiente eius doloribus, quisquam facere non cupiditate tempore quasi dolores."
        },
        {
            id:7,
            name:'Men T-Shirt summer season',
            image:'7.jpg',
            image2:'2.jpg',
            image3:'3.jpg',
            price:20,
            discount:2,
            discountPrice: (20-2/100*20),
            qty:1,
            categoty:'computer',
            des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, harum similique. Esse ratione, sequi, ipsam molestiae delectus consequuntur labore quas sapiente eius doloribus, quisquam facere non cupiditate tempore quasi dolores."
        },
        {
            id:8,
            name:'Men T-Shirt summer season',
            image:'8.jpg',
            image2:'2.jpg',
            image3:'3.jpg',
            price:20,
            discount:2,
            discountPrice: (20-2/100*20),
            qty:1,
            categoty:'computer',
            des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, harum similique. Esse ratione, sequi, ipsam molestiae delectus consequuntur labore quas sapiente eius doloribus, quisquam facere non cupiditate tempore quasi dolores."
        },
        {
            id:9,
            name:'Men T-Shirt summer season',
            image:'9.jpg',
            image2:'2.jpg',
            image3:'3.jpg',
            price:20,
            discount:2,
            discountPrice: (20-2/100*20),
            qty:1,
            categoty:'computer',
            des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, harum similique. Esse ratione, sequi, ipsam molestiae delectus consequuntur labore quas sapiente eius doloribus, quisquam facere non cupiditate tempore quasi dolores."
        },
        {
            id:10,
            name:'Men T-Shirt summer season',
            image:'10.jpg',
            image2:'2.jpg',
            image3:'3.jpg',
            price:20,
            discount:2,
            discountPrice: (20-2/100*20),
            qty:1,
            categoty:'tshirt',
            des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, harum similique. Esse ratione, sequi, ipsam molestiae delectus consequuntur labore quas sapiente eius doloribus, quisquam facere non cupiditate tempore quasi dolores."
        }
    ],
    product:{}
}

const ProductReducers=(state=initState, action)=>{
    switch(action.type) {
        case "PRODUCT": 
            return {...state, product:state.products.find(pd => pd.id === parseInt(action.id))};
        default:
            return state;
    }
}
export default ProductReducers;