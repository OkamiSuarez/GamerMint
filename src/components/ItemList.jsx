import Item from "./Item";

const ItemList = ({ products }) => {

    return (
        <>
            {products.map((p) => {
                return (
                    <Item
                        key={p.id}
                        id={p.id}
                        category={p.category}
                        thumbnails={p.pictureUrl}
                        title={p.title}
                        description={p.description}
                        price={p.price}
                    />
                )
            })
            }
        </>
    );
};

export default ItemList;
