import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Additem, updateitem } from '../redux/producttable/producttable.actions'

function ProductTable() {

    const [productTitle, setProducttile] = useState()
    const [EditItem, setEditItem] = useState()
    const [searchInput, setsearchInput] = useState("")
    const { productData } = useSelector((state) => state.Products)
    const [filterData, setfilterData] = useState([...productData])
    const dispatch = useDispatch()
    const [formData, setFormdata] = useState({
        productName: "",
        image_url: require("../assests/images/Avocado.jpg"),
        brand: "",
        price: 0,
        quantity: 0,
        total: 0,
        status: "",
    })

    const onChange = (e) => {
        const { name, value } = e.target
        setFormdata({ ...formData, [name]: value })
    }


    const handleSearch = () => {
        setsearchInput(searchInput)
    }

    return (
        <div className='p-3'>
            <div className='d-flex  py-4 justify-content-between'>
                <form className="d-flex ">
                    <input className="form-control me-2" onChange={(e) => { setsearchInput(e.target.value) }} type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-cus" onClick={handleSearch} type="button">Search</button>
                </form>
                <div className='d-flex gap-2'>
                    <button type="button" className=" btn btn-cus2 " data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                        Add item
                    </button>
                </div>
            </div>
            <div>
                <table className="table">
                    <thead className="table-light">
                        <tr>

                            <td>#</td>
                            <td>Product Name</td>
                            <td>Brand</td>
                            <td>Price</td>
                            <td>Quantity</td>
                            <td>Total</td>
                            <td>Status</td>
                            <td>Actions</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            productData.length > 0 ?
                                productData?.filter((item) => {
                                    if (searchInput != "") {
                                        return item.productName.toLowerCase().includes(searchInput.toLowerCase())
                                    } else {
                                        return item
                                    }
                                })?.map((item, index) => {
                                    return (

                                        <tr key={index}>
                                            <td>
                                                <span>
                                                    <img style={{ width: "30px" }} src={item?.image_url} />
                                                </span>
                                            </td>
                                            <td>{item?.productName}</td>
                                            <td>{item?.brand}</td>
                                            <td>${item?.price}</td>
                                            <td>{item?.quantity}</td>
                                            <td>${item?.total}</td>
                                            <td>
                                                {item?.status
                                                    &&
                                                    <span className='status-box' style={item?.status == "Missing - urgent" ? { background: "red" } : {}}>{item?.status}</span>
                                                }
                                            </td>
                                            <td>
                                                <div className='d-flex gap-2'>
                                                    {/* <span> */}
                                                    <span className='pointer' onClick={() => { setProducttile(item) }} data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                        <svg viewBox="0 0 24 24" width="32" height="32"><path d="M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z" fill="rgba(234,27,27,1)"></path></svg>
                                                    </span>
                                                    <span className='pointer' onClick={() => { dispatch(updateitem({ ...item, status: "Approved" })) }}>
                                                        <svg viewBox="0 0 24 24" width="32" height="32"><path d="M10.0007 15.1709L19.1931 5.97852L20.6073 7.39273L10.0007 17.9993L3.63672 11.6354L5.05093 10.2212L10.0007 15.1709Z" fill="rgba(100,205,138,1)"></path></svg>
                                                    </span>
                                                    <span className='pointer' onClick={() => { setEditItem(item.id) }} data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                                        Edit
                                                    </span>
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                })
                                : <p>
                                    Product not found !
                                </p>
                        }
                    </tbody>
                </table>
            </div>

            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Missing Product</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Is '{productTitle?.productName}'Missing - urgent
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn pointer " data-bs-dismiss="modal">No</button>
                            <button type="button" data-bs-dismiss="modal" onClick={() => { dispatch(updateitem({ ...productTitle, status: "Missing - urgent" })) }} className="btn pointer text-gray">Yes</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">{EditItem ? " Edit Item " : "Add new item"}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div class="mb-3">
                                    <input type="text" value={formData.productName} name='productName' onChange={onChange} class="form-control" placeholder="Product Name" />
                                </div>
                                <div class="mb-3">
                                    <input type="number" value={formData.price} name='price' onChange={onChange} class="form-control" placeholder="Price" />
                                </div>
                                <div class="mb-3">
                                    <input type="number" value={formData.quantity} name='quantity' onChange={onChange} class="form-control" placeholder="Quantity" />
                                </div>
                                <div class="mb-3">
                                    <input type="text" value={formData.brand} name='brand' onChange={onChange} class="form-control" placeholder="Brand" />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => { dispatch(Additem({ ...formData, total: Number(formData.price) * Number(formData.quantity) })) }}>Add</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductTable