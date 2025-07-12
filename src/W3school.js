import React from "react";
import './style.css';
import { useState } from "react";

 
const CourceComponent = () => {

    const array = useState([
            {Name:'HTML', Amount:'3000'},
            {Name:'CSS' , Amount:'2000'},
            {Name:'JS' , Amount:'7000'},
            {Name:'PYTHON' , Amount:'6000'},
            {Name:'SQL' , Amount:'5000' }
        ]
    )
     const [selectedCourse, setSelectedCourse] = useState([]);
  

    const handleAddhtml = () => {
        if (selectedCourse.some((course) => course.Name === 'HTML')) {  //Using Some 
            alert('HTML course has already been added!');
        }
        else {
            setSelectedCourse([...selectedCourse, array[0][0]])

        }
    };

    const handleAddcss = () => {
        if (selectedCourse.some((course) => course.Name === 'CSS')) {
            alert('CSS course has already been added!');
        }
        else {
            setSelectedCourse([...selectedCourse, array[0][1]])
        }
    };

    const handleAddjs = () => {
        if (selectedCourse.some((course) => course.Name === 'JS')) {
            alert('JS course has already been added!');
        }
        else {
            setSelectedCourse([...selectedCourse, array[0][2]])
        }
    };


    const handleAddpython = () => {
        if (selectedCourse.some((course) => course.Name === 'PYTHON')) {
            alert('Python course has already been added!');
        }
        else {
            setSelectedCourse([...selectedCourse, array[0][3]])
        }
    };

    const handleAddsql = () => {
        if (selectedCourse.some((course) => course.Name === 'SQL')) {
            alert('Sql course has already been added!');
        }
        else {
            setSelectedCourse([...selectedCourse, array[0][4]])
        }
    };

       //delete Value
       function deleteValue(i) {
        let btn = [...selectedCourse]
        btn.splice(i,1,0)
        setSelectedCourse(btn)
    }
    //deleter all value
    function deletedValue(i) {
        let btn = [...selectedCourse]
        btn.splice(i,5)
        setSelectedCourse(btn)
    }

    
//REmove the amount and cource
    const handleRemovehtml = () => {
        setSelectedCourse(selectedCourse.filter(course => course.Name !== 'HTML' ));
      };

      const handleRemovecss = () => {
        setSelectedCourse(selectedCourse.filter(course => course.Name !== 'CSS' ));
      };
      const handleRemovejs = () => {
        setSelectedCourse(selectedCourse.filter(course => course.Name !== 'JS' ));
      };
      const handleRemovepython = () => {
        setSelectedCourse(selectedCourse.filter(course => course.Name !== 'PYTHON' ));
      };
      const handleRemovesql = () => {
        setSelectedCourse(selectedCourse.filter(course => course.Name !== 'SQL' ));
      };

    const htmlfunc = () => {
    return(
            <>
            
                <div className="path2" >
                    <div className="sub1"><h1>HTML</h1>
                        <h2>The language for building web pages</h2>

                        <button id="learn" onClick={handleAddhtml} > Add HTML</button>
                        <button id="tuto" onClick={handleRemovehtml}>Remove HTML</button>
                    </div>
                    <div className="element1">
                        <div class="htmleg">
                            <div class="exam"><b>HTML Example:</b></div>
                            <div class="doc"></div>
                            <button class="try">Try it Yourself</button>
                        </div>
                    </div>
                </div> 

                </>
          )  }

 const cssfunc = () => {
    return(
    <>
                <div className="path3">
                    <div className="sub2"><h1>CSS</h1>
                        <h2>The language for building web pages</h2>
                        <button id="learn" onClick={handleAddcss}> Add CSS</button>
                        <button id="tuto1" onClick={handleRemovecss}>Remove CSS</button>
                    </div>
                    <div className="element2">
                        <div class="htmleg1">
                            <div class="exam"><b>CSS Example:</b></div>
                            <div class="doc"></div>
                            <button class="try">Try it Yourself</button>
                        </div>
                    </div>
                </div>
        </>
    )}

    const jsfunc = () => {
        return( 
            <>
                
                <div className="path4">
                    <div className="sub3"><h1>JavaScript</h1>
                        <h2>The language for programming web pages</h2>
                        <button id="learn" onClick={handleAddjs}> Add JavaScript</button>
                        <button id="tuto2" onClick={handleRemovejs}>Remove JavaScript</button>
                    </div>
                    <div className="element3">
                        <div class="htmleg2">
                            <div class="exam"><b>JavaScript Example:</b></div>
                            <div class="doc"></div>
                            <button class="try">Try it Yourself</button>
                        </div>
                    </div>
                </div>
            </>
        )}

        const pythonfunc = () => {
            return(
                <>
                
                <div className="path5">
                    <div className="sub4"><h1>Python</h1>
                        <h2>A popular programming language</h2>
                        <button id="learn" onClick={handleAddpython} > Add Python</button>
                        <button id="tuto3" onClick={handleRemovepython}>Remove Python</button>
                    </div>
                    <div className="element4">
                        <div class="htmleg3">
                            <div class="exam"><b>Python Example:</b></div>
                            <div class="doc"></div>
                            <button class="try">Try it Yourself</button>
                        </div>
                    </div>
                </div>

            </>
            )}

            const sqlfunc = () => {

                return(
                    <>
                
                <div className="path6">
                    <div className="sub5 "><h1>SQL</h1>
                        <h2>A language for accessing databases</h2>
                        <button id="learn"  onClick={handleAddsql}> Add SQL</button>
                        <button id="tuto4"onClick={handleRemovesql} >Remove SQL</button>
                    </div>
                    <div className="element5">
                        <div class="htmleg4">
                            <div class="exam"><b>SQL Example:</b></div>
                            <div class="doc"></div>
                            <button class="try">Try it Yourself</button>
                        </div>
                    </div>
                </div>
               </>
                )}

    const head = (i) => {

        return (
            <>
            <div className="toptable">
                <div style={{height:50,padding:5 , marginTop:"30%" , fontSize:16}}><b>Cource Information and Total Fess Amount</b>
                <button style={{float:"right"}} onClick={()=>deletedValue(i)}>X</button>
                </div>
                <div style={{padding:10,textAlign:"center"}}>
                <br />
               {bodytable()}
               </div>
               <div>{footer()}</div> 
                </div>
                
              
            
            </>
        )
    }

    const bodytable=() => {
        return(
            <>
            <div className="headtable1">
            <div className="headtable">
                <div className="table">Courses</div>
                <div className="table">Amount</div>
                <div className="table">Remove</div>
                
            </div>
            
         
            <div>{bottomtable()}</div>
            
          
           
            </div>
            
            </>

        )
    }
    const footer=() => {
        let totalAmount = 0;
        selectedCourse.forEach((ele) => {
            totalAmount += parseInt(ele.Amount); // Add course amount to totalAmount
          });
        
          const gstPercentage = 10; // Assuming a GST percentage of 10%
          const gstAmount = (totalAmount * gstPercentage) / 100; // Calculate the GST amount
          const totalAmountWithGST = totalAmount + gstAmount;
        return(
            <>
            <div style={{position:"relative"}}>
                <hr></hr>
           
           <div style={{ }}><br></br><b>Total Amount:</b> {totalAmount}</div>
           <div className="gstAmount">GST ({gstPercentage}%): {gstAmount}</div><br></br>
        <div className="totalAmountWithGST"><b>Total Amount with GST: </b>{totalAmountWithGST}</div>
            

            </div>
            
            </>
        )
    }

    const bottomtable=(i) => {
        return selectedCourse && selectedCourse.map((ele,ind)=>{
        return(
            <>
            <div key={"mytb1" +ind} style={{display:"flex",textAlign:"center" }} >
                  <div className="table">{ele.Name}</div>
                  <div className="table">{ele.Amount}</div>
                  <div className="table">
                    <button onClick={()=>deleteValue(i)}>-</button>
                  </div>
                  

            </div>
           
            
            </>
        )
        })

    }
    return (
        <>
        <div>
            <div className={selectedCourse.length>0? "headtitlesmall" : "headtitle"}>Cource Fees Structure</div>
            <div style={{display:'flex'}}>
                <div className={selectedCourse.length>0? "homefirst" : "homeside"}>
                    {htmlfunc()}
                    {cssfunc()}
                    {jsfunc()}
                    {pythonfunc()}
                    {sqlfunc()}
                </div>
                <div className="homesecond">{selectedCourse.length>0 && head()}</div>
               
            </div>
        </div>
        </>
    )
  
        }

export default CourceComponent;