export default function RecentProducts(recentProducts) {
    console.log(recentProducts.products)
    return (
        
        <div className="grid grid-cols-4 text-[#222]">
            {recentProducts.products.map(product => (
                <div className="h-60 flex flex-col justify-center p-8">
                    <h2 className="text-sm">{product.title}</h2>
                    <img src={product.images[0]} className="max-h-[140px] max-w-[100px]"/>
                </div>
            ))}

        </div>
    )

}