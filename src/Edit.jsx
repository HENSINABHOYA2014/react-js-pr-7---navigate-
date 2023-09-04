import { useEffect, useState } from "react";
import { Link,useNavigate, useParams } from "react-router-dom";

const Edit = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const getRecord = () => {
        let all = JSON.parse(localStorage.getItem('crud'));
        if (all === null) {
            return [];
        } else {
            return all;
        }
    }
    const [record, setRecord] = useState(getRecord);
    const [input, setInput] = useState({
        name: '',
        phone: ''
    })
    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setInput({
            ...input, [name]: value
        })
    }
    const handleSubmit = () => {
        let name = input.name;
        let phone = input.phone;
        let ans = record.map((item) => {
            if (item.id == parseInt(id)) {
                return {
                    ...item,
                    name: name,
                    phone: phone
                }
            }
            return item
        })
        setRecord(ans);
        localStorage.setItem('crud', JSON.stringify(ans));
        alert("Record successfully update");
        navigate('/view')
        setInput({
            name: '',
            phone: ''
        })
    }
    useEffect(() => {
        let ans = record.filter((item) => {
            return item.id == id;
        })
        setInput(ans[0]);
    }, [])


    return (
        <>
        
        <center>

<h1>Add Record</h1>
<div className="container">
    <div className="contact">
        <div className="col-md-4 col-md-offset-3">
            <div className="form-area">
                <form>
                    <br /><br />
                    <div className="group form-group">
                        <input type="text" className="form-control" name="name" onChange={handleChange} value={input.name} />
                        <span className="highlight"></span>
                        <span className="bar"></span>
                        <label>Name</label>
                    </div>
                    <div className="group form-group">
                        <input type="text"  className="form-control" name="phone" onChange={handleChange} value={input.phone} />
                        <span className="highlight"></span>
                        <span className="bar"></span>
                        <label className="text-start">Desciption</label>
                    </div>
            
                    <div className="form-group group">
                        <button type="button"onClick={() => handleSubmit()} value="submit" id="submit" name="submit" className="btn btn-primary col-md-12">Edit Now</button>
                    </div>


                </form>
            </div>
        </div>
    </div>
</div> 
<Link to="/view"><button>View</button></Link>
</center>
        </>
    )
}

export default Edit;
