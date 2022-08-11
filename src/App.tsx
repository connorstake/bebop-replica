import React from "react"
import logo from "./logo.svg"
import {
  Grid,
  Button
} from "@material-ui/core"
import { KeyboardReturn, ArrowDownward, AccountBalanceWallet } from "@material-ui/icons"
import "./App.css"

function App() {
  return (
    <div className="App">
      <Grid container xs={12} style={{paddingBottom:20, height:"100vh", display: "flex", justifyContent: "center", marginBottom:"10px", boxShadow: "0px 16px 16px rgb(112, 144, 176, .20)",border: "solid rgb(112, 144, 176, .20) 1px", backgroundColor:"#001717", backgroundImage: "url(/Bebopbg.png)", backgroundRepeat: "no-repeat", backgroundSize:"120vw" }}>
        <Grid container xs={12} justify="space-between" style={{display: "flex", alignItems: "center", flexWrap: "wrap", marginTop:-50}}>
          <Grid item xs={2} style={{padding:10}}>
            <img style={{height:"75px"}} src="/beboplogo.png"></img>
          </Grid> 
          <Grid container item xs={8} style={{display: "flex", justifyContent: "flex-end", fontSize:"14px", alignItems: "center"}}>
            <Grid xs={1} style={{color:"white"}}>
              FAQs
            </Grid>
            <Grid xs={1} style={{color:"white"}}>
              Discord
            </Grid>
            <Grid xs={2} style={{color:"white"}}>
              <div style={{borderRadius:"25px", backgroundColor:"#334545", padding:10, width:"50%", display: "flex", justifyContent: "flex-end", fontSize:"14px", alignItems: "center"}}>
                <AccountBalanceWallet style={{paddingRight:4, fontSize:"20px"}}/> 
                ...B45C
              </div>
            
            </Grid>  
            <Grid item xs={3}/>
          </Grid> 
        </Grid>

        <Grid item xs={4} style={{height:"60vh", borderRadius:20, padding:"20px", backgroundColor:"#192e2e", color:"white", border:"solid #334545 1px"}}>  {/*Trading Widget Start*/}

          <Grid container xs={12}> {/*Trade Header Start*/}
            <Grid item style={{ float:"left", display:"flex"}} xs={2}>
              <KeyboardReturn  style={{color: "#deb305", fontSize:"22px"}}/>
            </Grid>
            <Grid xs={2}/> {/*Extra Space */}
            <Grid item xs={4} style={{fontWeight:"bold"}}>Trade</Grid>    
          </Grid>{/*Trade Header End*/}

          <Grid container xs={12}> 
            <Grid xs={4} style={{ float:"left", display:"flex", fontSize:12, marginTop:10, fontWeight:"bold", marginBottom:"2px"}}>You Pay</Grid>
          </Grid>


          <Grid container xs={12} style={{marginTop:"7px", borderRadius: 12, padding:5, backgroundColor:"#334545"}}>{/*Input Single Token Start*/}
            <Grid xs={12} container justify="space-between" style={{padding:"3px"}}>
              <Grid xs={1} style={{display: "flex", alignItems: "center",justifyContent: "flex-end"}}>
                <img style={{height:"25px"}} src="/usdc.png"></img>
              </Grid>
              <Grid xs={4} style={{textAlign:"left", display: "flex", alignItems: "center",justifyContent: "flex-start", fontWeight:"bold"}}>
                USDC
              </Grid>
              <Grid xs={1}/> {/*Extra Space */}
              <Grid xs={5} style={{display: "flex", alignItems: "center", justifyContent: "flex-end"}}>
                3100
              </Grid>
            </Grid>
            <Grid xs={12} container justify="space-between" style={{fontSize:12, color:"#7d8989", padding:"3px"}}>
              <Grid xs={4} style={{display: "flex", alignItems: "center"}}>
                <AccountBalanceWallet style={{paddingRight:4, fontSize:"14px"}}/> 5135.34323 USDC
              </Grid>
              <Grid xs={3}/> {/*Extra Space */}
              <Grid xs={4} style={{textAlign:"right"}}>
                =$3,100.00
              </Grid>
            </Grid>
          </Grid> {/*Input Single Token End*/}

          <Grid container xs={12} style={{marginTop:"20px", border:"solid #334545 1px"}}>
            <Grid style={{}}>
              <div style={{backgroundColor:"#334545", width:"25px", height:"25px", position:"absolute", textAlign:"center", marginLeft:"auto", marginRight:"auto", left:0, right:0, marginTop:"-13px", borderRadius:"100%", display: "flex", alignItems: "center",justifyContent: "center"}}>
                <ArrowDownward style={{fontSize:"20px"}}/>
              </div>  
            </Grid>
          </Grid>


          <Grid container xs={12}  justify="space-between" style={{marginTop:"20px", fontSize:12}}> {/*Trade Header Start*/}
            <Grid item style={{float:"left", display:"flex", fontWeight:"bold"}} xs={3}>
              You Receive
            </Grid>
            <Grid xs={2}/> {/*Extra Space */}
            <Grid item xs={5} style={{float:"right", textAlign:"right", color:"#deb305"}}>+ Select Tokens</Grid>    
          </Grid>{/*Trade Header End*/}


          <Grid container xs={12} style={{marginTop:"7px", borderRadius: 12, padding:5, backgroundColor:"#334545"}}>{/*Input Single Token Start*/}
            <Grid xs={12} container justify="space-between" style={{padding:"3px"}}>
              <Grid xs={1} style={{display: "flex", alignItems: "center",justifyContent: "flex-end"}}>
                <img style={{height:"25px"}} src="/bnb.png"></img>
              </Grid>
              <Grid xs={4} style={{textAlign:"left", display: "flex", alignItems: "center",justifyContent: "flex-start", fontWeight:"bold"}}>
                BNB
              </Grid>
              <Grid xs={1}/> {/*Extra Space */}
              <Grid xs={5} style={{display: "flex", alignItems: "center", justifyContent: "flex-end"}}>
              1019.16744
              </Grid>
            </Grid>
            <Grid xs={12} container justify="space-between" style={{fontSize:12 , color:"#7d8989", padding:"3px"}}>
              <Grid xs={4} style={{display: "flex", alignItems: "center"}}>
                <AccountBalanceWallet style={{paddingRight:4, fontSize:"14px"}}/>4092.5122 BNB
              </Grid>
              <Grid xs={3}/> {/*Extra Space */}
              <Grid xs={4} style={{textAlign:"right"}}>
                =$1022.71
              </Grid>
            </Grid>
          </Grid> {/*Input Single Token End*/}

          <Grid container xs={12} style={{marginTop:"7px", borderRadius: 12, padding:5, backgroundColor:"#334545"}}>{/*Input Single Token Start*/}
            <Grid xs={12} container justify="space-between" style={{padding:"3px"}}>
              <Grid xs={1} style={{display: "flex", alignItems: "center",justifyContent: "flex-end"}}>
                <img style={{height:"25px"}} src="/matic.png"></img>
              </Grid>
              <Grid xs={4} style={{textAlign:"left", display: "flex", alignItems: "center",justifyContent: "flex-start", fontWeight:"bold"}}>
                MATIC
              </Grid>
              <Grid xs={1}/> {/*Extra Space */}
              <Grid xs={5} style={{display: "flex", alignItems: "center", justifyContent: "flex-end"}}>
              1749.36196
              </Grid>
            </Grid>
            <Grid xs={12} container justify="space-between" style={{fontSize:12 , color:"#7d8989", padding:"3px"}}>
              <Grid xs={4}  style={{display: "flex", alignItems: "center"}}>
                <AccountBalanceWallet style={{paddingRight:4, fontSize:"14px"}}/> 3420.021 MATIC
              </Grid>
              <Grid xs={3}/> {/*Extra Space */}
              <Grid xs={4} style={{textAlign:"right"}}>
                =$1022.71
              </Grid>
            </Grid>
          </Grid> {/*Input Single Token End*/}

          <Grid container xs={12} style={{marginTop:"7px", borderRadius: 12, padding:5, backgroundColor:"#334545"}}>{/*Input Single Token Start*/}
            <Grid xs={12} container justify="space-between" style={{padding:"3px"}}>
              <Grid xs={1} style={{display: "flex", alignItems: "center",justifyContent: "flex-end"}}>
                <img style={{height:"25px"}} src="/sol.png"></img>
              </Grid>
              <Grid xs={4} style={{textAlign:"left", display: "flex", alignItems: "center",justifyContent: "flex-start", fontWeight:"bold"}}>
              SOL
              </Grid>
              <Grid xs={1}/> {/*Extra Space */}
              <Grid xs={5} style={{display: "flex", alignItems: "center", justifyContent: "flex-end"}}>
              35.51699
              </Grid>
            </Grid>
            <Grid xs={12} container justify="space-between" style={{fontSize:12, color:"#7d8989", padding:"3px"}}>
              <Grid xs={4}  style={{display: "flex", alignItems: "center"}}>
                <AccountBalanceWallet style={{paddingRight:4, fontSize:"14px"}}/>42.11229 SOL
              </Grid>
              <Grid xs={3}/> {/*Extra Space */}
              <Grid xs={4} style={{textAlign:"right"}}>
                =$1022.71
              </Grid>
            </Grid>
          </Grid> {/*Input Single Token End*/}


          <Grid container xs={12} style={{marginTop:"20px", border:"solid #334545 1px"}} />

          <Grid xs={12} container justify="space-between"  style={{display: "flex", alignItems: "center",justifyContent: "center", marginTop:10}}>
            <div style={{height:7.5, width:50, borderTopLeftRadius:15, borderBottomLeftRadius:15, marginRight:2, backgroundColor:"#86c5b1"}}></div>
            <div style={{height:7.5, width:50, marginRight:2, backgroundColor:"#5e6d6d"}}></div>
            <div style={{height:7.5, width:50, marginRight:2, backgroundColor:"#5e6d6d"}}></div>
            <div style={{height:7.5, width:50, borderTopRightRadius:15, borderBottomRightRadius:15, backgroundColor:"#5e6d6d"}}></div>
          </Grid>

          <Grid container xs={12}   style={{display: "flex", alignItems: "center",justifyContent: "center", marginTop:10}} justify="space-between">
            <Button style={{backgroundColor: "#01b04c", width:"100%", borderRadius:20, color:"white", fontSize:12}}>
                Review Order
            </Button>
          </Grid>
        </Grid>{/*Trading Widget End*/}

      </Grid>
    </div>
  )
}

export default App
