import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './View.css';
const View = () => {
    let all = localStorage.getItem('crud') ? JSON.parse(localStorage.getItem('crud')) : [];

    const [search, setSearch] = useState("");
    const [sortdata, setSortData] = useState("");
    const [record, setRecord] = useState(all); // Initialize with all data

    const deleteData = (id) => {
        let ans = record.filter((item) => {
            return item.id !== id;
        });
        setRecord(ans);
        alert("Record successfully deleted");
    }

    useEffect(() => {
        let namesearch = all.filter((item) => {
            return item.name.toLowerCase().includes(search.toLowerCase());
        })
        setRecord(namesearch);
    }, [search]);

    useEffect(() => {
        let option = [...record];
        if (sortdata === "ase") {
            setRecord(option.sort((a, b) => a.name.localeCompare(b.name)));
        } else if (sortdata === "dse") {
            setRecord(option.sort((a, b) => b.name.localeCompare(a.name)));
        } else if (sortdata === "all") {
            setRecord([...all]);
        }
    }, [sortdata]);

    return (
        <center>
            <div className="body-content flex flex-column">
                <header className="flex gap-2 items-center justify-between">

                </header>

                <main className="flex flex-column gap-3 grow">
                    <section className="flex gap-2 items-center justify-between">
                        <div id="bulkActions" className="bulk-actions hidden items-center">
                            <i className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                                    <path
                                        d="M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z"
                                    ></path>
                                </svg>
                            </i>

                            <small id="labelItemsSelected">0 items selected</small>

                            <i className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256">
                                    <path
                                        d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"
                                    ></path>
                                </svg>
                            </i>
                        </div>

                        <h1 id="title" className="leading-none">TO DO LIST</h1>

                        <div className="flex gap-1 items-center">
                            <div class="form-group has-search" type="text"
                                placeholder="Search by name or phone"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}>
                                <span class="fa fa-search form-control-feedback"></span>
                                <input type="text" class="form-control" placeholder="Search" />
                            </div>
                            <select className="my-select selectpicker p-1" data-container="body" value={sortdata} onChange={(e) => setSortData(e.target.value)}>
                                <option value="ase">Ascending</option>
                                <option value="dse">Descending</option>
                                <option value="all">All</option>
                            </select>
                        </div>
                    </section>

                    <section className="flex flex-column gap-2">
                        <table>
                            <tr className="no-hover">
                                <table border={1}>
                                    <thead>
                                        <tr>
                                            <td className="h3">Id</td>
                                            <td className="h3">Name</td>
                                            <td className="h3">Description</td>
                                            <td className="h3">Action
                                            </td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            record.map((val) => {
                                                const { id, name, phone } = val;
                                                return (
                                                    <tr key={id}>
                                                        <td>{id}</td>
                                                        <td>{name}</td>
                                                        <td>{phone}</td>
                                                        <td>
                                                            <button onClick={() => deleteData(id)}>Delete</button> ||
                                                            <button><Link to={`/edit/${id}`}>Edit</Link></button>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </tr>
                        </table>

                    </section>
                </main>
            </div>

            {/* <table border={1}>
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Name</td>
                        <td>Phone</td>
                        <td>Action
                            <select value={sortdata} onChange={(e) => setSortData(e.target.value)}>
                                <option value="ase">Ascending</option>
                                <option value="dse">Descending</option>
                                <option value="all">All</option>

                            </select>
                        </td>
                    </tr>
                </thead>
                <tbody>
                    {
                        record.map((val) => {
                            const { id, name, phone } = val;
                            return (
                                <tr key={id}>
                                    <td>{id}</td>
                                    <td>{name}</td>
                                    <td>{phone}</td>
                                    <td>
                                        <button onClick={() => deleteData(id)}>Delete</button> ||
                                        <button><Link to={`/edit/${id}`}>Edit</Link></button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table> */}
            <Link to="/"><button>Add</button></Link>
        </center>
    )
}

export default View;
