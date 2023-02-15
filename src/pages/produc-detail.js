import {Link, useParams} from 'react-router-dom'
function ProductDetailPage (){
    const params = useParams()
    return <><h1>
        Product Detail Page - {params.productId}
    </h1>
    <Link to=".." relative="path">Back</Link>
    </>
}

export default ProductDetailPage;