import { getEmployee } from "@/services/employee.service";
import Link from "next/link";
import { Table } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

import React, { useEffect, useState } from "react";

const Employee = () => {
    const [data, setData] = useState();
    const [pageCount, setPageCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const [limit, setLimit] = useState(3)

    useEffect(() => {
        const getData = async () => {
            const getAllData = await getEmployee(0, limit);
            setData(getAllData);
            setPageCount(Math.ceil(getAllData.total / limit));
        };
        getData();
    }, []);
    console.log(pageCount)
  return (
    <div>
     <div className="emp-bg">
            <div className="my-3">
                <div className="container">
                    <div className="card">
                        <div className="card-header">
                            <div className='d-flex justify-content-between align-items-center'>
                                <div>
                                    <h1 className='display-6 mb-3'>Product List</h1>
                                </div>
                                <div>
                                    <Link className='btn btn-outline-primary btn-sm' href={"/employee/create"}>  Add Product</Link>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className='d-flex justify-content-between my-3'>
                                <div>
                                    <div>
                                        <span className='me-3'> Show</span>
                                        <select onChange={(e) => handleShowItem(e)} className="form-control-sm">
                                            <option value="10">10</option>
                                            <option value="15">15</option>
                                            <option value="20">20</option>
                                            <option value="25">25</option>
                                            <option value="50">50</option>
                                            <option value="100">100</option>
                                        </select>
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="" className='me-3'> Search  </label>
                                    <input type="text" onChange={(e) => handleSearch(e)} name="search" id="" />
                                </div>
                            </div>
                            <div className='emp-table' >
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>Id</th>
                                            <th> Name </th>
                                            <th>Description </th>
                                            <th>Rating </th>
                                            <th>Price </th>
                                            <th>BarCode </th>
                                            <th>Sell Price</th>
                                            <th>Country Id</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                             data?.map((da, index) => {
                                                const actualIndex = index + (currentPage * limit) + 1;
                                                return (
                                                    <tr key={index}>
                                                        <td> {da.id} </td>
                                                        <td> {da.name} </td>

                                                        <td> {da.description} </td>
                                                        <td> {da.rating} </td>

                                                        <td> {da.price} </td>
                                                        <td> {da.barcode} </td>
                                                        <td> {da.sellPrice} </td>
                                                        <td> {da.countryId} </td>
                                                     
                                                        <td>
                                                            <Link href={`emp/edit/${da.id}`} className='btn btn-sm me-3 btn-success'> Edit</Link>
                                                            <Link href={`emp/details/${da.id}`} className='btn btn-sm me-3 btn-primary'> Details </Link>
                                                            <Button
                                                                className='btn btn-sm btn-danger'
                                                                onClick={() => handleDelete(da.id)}
                                                            >
                                                               Delete
                                                            </Button>
                                                        </td>

                                                    </tr>)
                                            }
                                            )
                                        }


                                    </tbody>

                                </Table>
                                {/*
                                <div className="text-end">
                                    <ReactPaginate
                                        previousLabel={"previous"}
                                        nextLabel={"next"}
                                        breakLabel={"..."}
                                        pageCount={pageCount}
                                        marginPagesDisplayed={2}
                                        pageRangeDisplayed={3}
                                        onPageChange={handlePageClick}
                                        containerClassName={"pagination justify-content-end"}
                                        pageClassName={"page-item"}
                                        pageLinkClassName={"page-link"}
                                        previousClassName={"page-item"}
                                        previousLinkClassName={"page-link"}
                                        nextClassName={"page-item"}
                                        nextLinkClassName={"page-link"}
                                        breakClassName={"page-item"}
                                        breakLinkClassName={"page-link"}
                                        activeClassName={"active"}
                                    />
                                </div>
                                    */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Employee;
