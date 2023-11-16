import React from 'react'

function Breadcrumb({ Breadcrumbpaths }) {
    return (
        <nav className='breadcrumb-cus' style={{ "--bs-breadcrumb-divider": "url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='currentColor'/%3E%3C/svg%3E&#34;)" }} aria-label="breadcrumb">
            <ol className="breadcrumb pt-4">
                {
                    Breadcrumbpaths?.map((item, index) => {
                        console.log(Breadcrumbpaths.length ,index);
                        return (
                            <>
                                {
                                    Breadcrumbpaths.length == index +1?
                                    <li className="breadcrumb-item active" aria-current="page">{item.title}</li>: 
                                    <li className="breadcrumb-item"><a href={item.path}>{item.title}</a></li>

                                }
                            </>
                        )

                    })
                }
            </ol>
            <div className='d-flex  justify-content-between'>
                <h2>Order 238471</h2>
                <div className='d-flex gap-2'>
                    <button className="btn-cus btn ">
                        Back
                    </button>
                    <button className="btn-cus btn">
                        Approve Order
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Breadcrumb