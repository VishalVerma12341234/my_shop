import { useState} from 'react';
const Category  = ()=>{
    const [cname,setcname] = useState();
    const [pic,setpic] = useState();
    const savecat = async() =>{
        var fdata = newFormdata();
        fdata.append("catname",cname);
        fdata.append("cpic",pic);
        const r = await fetch("http://localhost:7000/category",{
            method:"POST",
            body:fdata
        });
        const rdata = await r.json();
        alert(rdata.msg);
    }
    return(
        <>
        {/* jsx start */}
            <div className="container-fluide bg-primary text-light">
                <div className="row">
                    <div className="col-6">
                        <h1>MyShop</h1>
                        <ul>
                            <li>Category</li>
                            <li>Subcategory</li>
                            <li>Product</li>
                            <li>View</li>
                        </ul>
                    </div>
                    <div className="col-6">
                        <div className="Text-end p-2">LogOut</div>
                        <div className="Text-end p-2">
                            <button className="btn btn-dark p-2" data-bs-toggle="modal" data-bs-target="#mycat" >
                            New Category
                            </button>
                        </div>
                        <table className="table table-">
                            <thead>
                                <tr>
                                    <th>Category Name</th>
                                    <th>Pic</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Fruits</td>
                                    <td>Pic</td>
                                    <td>Action</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            {/* Modal start */}
                <div className="modal" id = "mycat" >
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4>New Category</h4>
                                <button className="btn-close-"data-bs-dismiss="modal" > </button>
                            </div>
                            <div className="modal-body">
                                 <div className="form-group">
                                <label>Category Name</label>
                                <input type="text" className="form-group" onChange={(e)=>{setcname(e.target.value)}} />
                                <label>Pic</label>
                                <input type="file" className="form-control"  onChange={(e)=>{setpic(e.target.files[0])}}/>
                            </div>
                                </div>
                                </div>
                                <div className="modal-footer ">
                                    <button className="btn btn-dark bg-primary" onClick={savecat}>
                                        save
                                    </button>
                                </div>
                        </div>
                    </div>
            {/* Modal end */}
        </>
    );
}
export default Category