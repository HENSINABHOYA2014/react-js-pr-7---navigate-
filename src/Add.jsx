import { useEffect, useState } from "react";
import './Style.css';
import { Link, useNavigate } from "react-router-dom";
const Add = () => {
    const navigate = useNavigate();
    const [input, setInput] = useState({
        name: '',
        phone: ''
    })
    const [record, setRecord] = useState([]);
    const handleChange = (e) => {
        const { name, value } = e.target
        setInput({
            ...input, [name]: value
        })
    }
    const handleSubmit = () => {
        let obj = {
            id: Math.floor(Math.random() * 10000),
            name: input.name,
            phone: input.phone
        }
        let data = [...record, obj];
        localStorage.setItem('crud', JSON.stringify(data));
        setRecord(data);
        setInput({
            name: '',
            phone: ''
        })
        alert("Record successfully insert");
        navigate('/view')
    }
    useEffect(() => {
        let data = JSON.parse(localStorage.getItem('crud'));
        if (data === null) {
            setRecord([]);
        } else {
            setRecord(data);
        }
    }, []);

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
                                        <button type="button"onClick={() => handleSubmit()} value="submit" id="submit" name="submit" className="btn btn-primary col-md-12">Send Message</button>
                                    </div>


                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <table border={1}>
                    <tbody>
                        <tr>
                            <td>Name :- </td>
                            <td><input type="text" name="name" onChange={handleChange} value={input.name} /></td>
                        </tr>
                        <tr>
                            <td>Phone :- </td>
                            <td><input type="text" name="phone" onChange={handleChange} value={input.phone} /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <input type="button" onClick={() => handleSubmit()} value="submit" />
                            </td>
                        </tr>
                    </tbody>
                </table> */}
                <Link to="/view"><button>View</button></Link>
            </center>
        </>
    )
}


export default Add;