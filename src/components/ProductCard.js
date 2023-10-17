import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ProductCard = ({ product }) => {

    const price = product.discount.isDiscount ? (
        <span>
            <s>{product.price}</s>
            <span className='ms-1'>{Math.floor(product.price * product.discount.rate)}</span>
        </span>
    ) : <span>{product.price}</span>;

    // 回傳 react-bootstrap 的 Card 元件
    return (
        <div className="col-lg-4 col-md-6">
            <Card className="mb-4">
                <Card.Img variant="top" src={product.image} />
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>
                        <span>$</span> {price}
                    </Card.Text>
                    <Card.Text>
                        {product.description}
                    </Card.Text>
                    <Button
                        variant="primary"
                        disabled={!product.isAvailable}
                    >
                        Add to cart
                    </Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default ProductCard;