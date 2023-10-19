import {getSingleProduct } from '@/services/employee.service';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';



const Details = () => {
    const [data, setData] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const router = useRouter()
    const id = router.query.id;
    useEffect(() => {
        const getData = async (id) => {
            try {
                const getAllData = await getSingleProduct(id);
                setData(getAllData);
                setIsLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        if (id !== undefined) {
            getData(id);
        }
    }, [id]);
    return (
        <div className=''>
            {
                isLoading ? <p>Loading...</p> :
                    <div className="emp-bg">
                        <div className="container">
                            <div class="card">
                                <div class="card-header">
                                    <div class="d-flex justify-content-between">
                                        <h3 class="card-title">Product Details</h3>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-8">
                                            <dl class="row">
                                                <dt class="col-md-3">
                                                    Product Name
                                                </dt>
                                                <dd class="col-md-9">
                                                    {data.name}
                                                </dd>
                                                <dt class="col-md-3">
                                                    Description
                                                </dt>
                                                <dd class="col-md-9">
                                                    {data.description}
                                                </dd>
                                                <dt class="col-md-3">
                                                    Rating
                                                </dt>
                                                <dd class="col-md-9">
                                                    {data.rating}
                                                </dd>
                                                <dt class="col-md-3">
                                                    Price
                                                </dt>
                                                <dd class="col-md-9">
                                                    {data.price}
                                                </dd>
                                                <dt class="col-md-3">
                                                    Barcode
                                                </dt>
                                                <dd class="col-md-9">
                                                    {data.barcode}
                                                </dd>
                                                <dt class="col-md-3">
                                                    Sell Price
                                                </dt>
                                                <dd class="col-md-9">
                                                    {data.sellPrice}
                                                </dd>
                                                <dt class="col-md-3">
                                                    Country Id
                                                </dt>
                                                <dd class="col-md-9">
                                                    {data.countryId}
                                                </dd>
                                               

                                                
                                            </dl>
                                        </div>
                                       
                                    </div>
                                </div>
                                <div class="card-footer">
                                    <div class="d-flex justify-content-end">

                                        <Link class="btn btn-outline-danger btn-sm me-3" href="/employee">
                                             Cancel
                                        </Link>
                                        <Link class="btn btn-outline-primary btn-sm me-3" href={`/employee/edit/${id}`}>
                                            Edit
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </div>
    );
};

export default Details;