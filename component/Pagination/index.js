import React, { useEffect, useState } from 'react'
import './style.css'

function Pagination() {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0)
    const fetchProducts = async () => {
        // const res = await fetch(`https://dummyjson.com/products?limit=100`);
        const res = await fetch(`https://dummyjson.com/products?limit=10&skip=${page*10 -10}`)
        const data = await res.json()

        console.log(data);

        if (data && data.products) {
            setProducts(data.products)
            setTotalPage(data.total )
        }
    }

    const selectPageHandler = (selectedPage) => {
        // if (selectedPage >= 1 && selectedPage <= products.length / 10 && selectedPage !== page) {
                    if (selectedPage >= 1 && selectedPage <= totalPage && selectedPage !== page) {

            

            setPage(selectedPage)
        }
    }
    // useEffect(() => {
    //     fetchProducts()
    // }, [])

    useEffect(() => { fetchProducts()}, [page]);

    return (
        <div>
            {products.length > 0 && (
                <div className="products">

                    {/* {products.slice(page * 10 - 10, page * 10).map((prod) => (
                        <div className="products__single" key={prod.id}>
                            <img src={prod.thumbnail} alt={prod.title} /> 
                            <span>{prod.title}</span>
                        </div>
                    ))} */}

                    {products.map((prod) => (
                        <div className="products__single" key={prod.id}>
                            <img src={prod.thumbnail} alt={prod.title} />
                            <span>{prod.title}</span>
                        </div>
                    ))}
                </div>
            )}
            {products.length > 0 && <div className="pagination">

                <span onClick={() => selectPageHandler(page - 1)} className={page > 1 ? "" : "pagination__disable"}>◀</span>
                {/* {[...Array(products.length / 10)].map((_, i) => {
                    return <span key={i} className={page === i + 1 ? "pagination__selected" : ""} onClick={() => selectPageHandler(i + 1)}>{i + 1}</span>
                })} */}
                  {[...Array(totalPage / 10)].map((_, i) => {
                    return <span key={i} className={page === i + 1 ? "pagination__selected" : ""} onClick={() => selectPageHandler(i + 1)}>{i + 1}</span>
                })}
                <span onClick={() => selectPageHandler(page + 1)} className={page < totalPage / 10 ? "" : "pagination__disable"}>▶</span>

            </div>
            }

        </div>

    )
}

export default Pagination;