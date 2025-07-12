import { useState } from "react"
import axios from "axios"

function Form() {
    //Submit value add the empty arry
    const [inputone, setInputone] = useState([]);

    //useState set name,area,gender is empty string
    const [inputdata, setInputdata] = useState({ id:null,name: "", area: "", gender: "" })

    //Using spread operator Destructure the array
    function changehandle(event) {
        setInputdata({ ...inputdata, [event.target.name]: event.target.value })
    }
//Json file get 
    const jsonGetSubmitForm = () =>{
        axios.get('')
        .then((response)=>setInputone(response.data))
        .catch((error)=>console.log(error))
    }

    const jsonPostSubmitForm  =()=>{
        if(inputdata.id){
            jsonPutSubmitForm(inputdata.id,inputdata)
        }else{
            axios.post('',inputdata)
            .then((response)=>{
                setInputone([...inputone,response.data])
                setInputdata({id:null,name: "", area: "", gender: ""});
                jsonGetSubmitForm()
            })
        }
    }

    const jsonDeleteSubmitForm =()=>{
        axios.delete("" +id)
        .then(()=>{
            const updatedTable = inputone.filter((element)=> element.id !== id);
            setInputone(updatedTable);
            setInputdata({id:null,name: "", area: "", gender: ""});
          

        })
        .catch((error) => console.log(error))
    }
    const jsonPutSubmitForm =(id,updatedValues) =>{
             axios.put("" +id,updatedValues)
             .then((response)=>{
                console.log(response)
            const updatedTable = inputone.map((element)=>{
                if(element.id === id){
                    return{
                        ...element,
                        ...updatedValues
                    };
                }
                return element;
            });
            setInputone(updatedTable);
              setInputdata({id:null,name: "", area: "", gender: ""});

             })
             .catch((error)=>{console.log(error)})
    }
    const  edit = (element) => {
        setInputdata(element);
    }
    // //submit function
    // let { name, area, gender } = inputdata
    // function add() {

    //     if (name === "" || area === "" || gender === "")
    //         alert(" ! Please Enter a Value")
    //     // else if(name==="" && area ==="text" && gender==="text")
    //     // alert(" ! Please Enter a Value")
    //     else {
    //         const duplicateEntry = inputone.find(
    //             repeat => repeat.name === name && repeat.area === area && repeat.gender === gender
    //         );
    //         if (duplicateEntry) {
    //             alert("Entry with the same values already exists");
    //         }
    //         else {
    //             setInputone([...inputone, { name, area, gender }])
    //             console.log(inputone)
    //             console.log(inputdata)
    //             setInputdata({ name: "", area: "", gender: "" })

    //         }
    //     }
    

//     //delete value using splice function
//     function deleteValue(i) {
//         let btn = [...inputone]
//         btn.splice(i, 1)
//         setInputone(btn)
//     }

//     //Edit data using 
//     const [update, setupdate] = useState(false)
//     function submit(i) {
//         document.getElementById("inp1").focus()
//         let { name, area, gender } = inputone[i]
//         setInputdata({ name, area, gender })
//         setupdate(true)
//         setIntex(i)
//         //    console.log(updateValue)
//     }


//     const [index, setIntex] = useState()
//     function updateinfo() {
//         const duplicateEntry = inputone.find(
//             repeat => repeat.name === name && repeat.area === area && repeat.gender === gender 
//         );
//     if (duplicateEntry) {
//         alert("Entry with the same dupicateValue");
//     }
//     else{
//         let btn = [...inputone]
//         btn.splice(index, 1, { name, area, gender })
//         setInputone(btn)
//         setupdate(false)
//         setInputdata({ name: "", area: "", gender: "" })
//        // console.log(updateinfo)
//     }
// }


    return (
        <>


            <div className="first" >

                <div className='second'>
                    <div style={{ fontSize: '20px', fontWeight: 'bolder' }}>Form</div><br></br>
                    <div>
                        Name <br />
                        <input
                            id="inp1"
                            type="text"
                            placeholder="Enter a Name"
                            autofocus="autofocus"
                            required
                            name="name"
                            value={inputdata.name}
                            onChange={changehandle}></input>
                    </div>
                    <div>
                        Area <br />
                        <input id="inp1"
                            type="text"
                            placeholder="Enter a Area"
                            required
                            name="area"
                            value={inputdata.area}
                            onChange={changehandle}></input>
                    </div>
                    <div>
                        Gender<br />
                        <input id="inp1"
                            type="text"
                            placeholder="Enter a Gender"
                            required
                            name="gender"
                            value={inputdata.gender}
                            onChange={changehandle}></input>
                    </div><br />


                    {/* <button className="submit" onClick={!update ? add : updateinfo}>{!update ? 'submit' : 'submit'}</button> */}
                    <button className="submit" onClick={jsonPostSubmitForm}>Submit</button>
                </div>
            </div>


            <div style={{ width: '80%', marginLeft: '10%' }} >

            <h3 style={{ textAlign: 'center' }}>Table</h3> 
                {inputone.length > 0 && 
                
                <div style={{ display: 'flex' }} >
                    
                
                    <div className="style">Name</div>
                    <div className="style">Area</div>
                    <div className="style">Gender</div>
                    <div className="style">Action</div>
                </div>
                }


                {

                    inputone.map(
                        (info, i) => {
                            return (
                                <div style={{ display: 'flex' }} key={i}>
                                    <div className="style1">{info.name}</div>
                                    <div className="style1">{info.area}</div>
                                    <div className="style1">{info.gender}</div>
                                    <div className="style1"><button className="edit" onClick={() => edit (info)}>{info.edit}Edit</button>
                                        <button className="delete" onClick={() => jsonDeleteSubmitForm(info.id)}>{info.delete}Delete</button></div>
                                </div>
                            )
                        }
                    )
                }

            </div>



        </>
    )



            }
export default Form;