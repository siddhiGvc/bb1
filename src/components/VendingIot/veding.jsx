import styles from "./vending.module.css"
import Button from '@mui/material/Button';
import { TextField } from "@mui/material";

export default function VendingIot(){


    return <>
      <div className={styles.mainContainer}>

      <div className={styles.container}>
        <div className={styles.header}> 
        <p>Incinerator Info</p>
        </div>
    
        <div className={styles.rowContainer}>
           <div className={styles.row}>
              <p style={{fontSize:"100%"}}>Door Count</p>
              <h4>0</h4>
           </div>
           <div className={styles.row}>
              <p style={{fontSize:"100%"}}>Total Napkins Burnt</p>
              <h4>0</h4>
           </div>
           <div className={styles.row}>
              <p style={{fontSize:"100%"}}>Burn Cycle</p>
              <h4></h4>
           </div>
           <div className={styles.row}>
              <p style={{fontSize:"100%"}}>Burn Cycles Errors</p>
              <h4></h4>
           </div>
           <div className={styles.row}>
              <p style={{fontSize:"100%"}}>Primary Temperature</p>
              <h4></h4>
           </div>
           <div className={styles.row}>
              <p style={{fontSize:"100%"}}>Secondary Temperature</p>
              <h4></h4>
           </div>
           <div className={styles.buttonBox}>
        <Button variant="contained" sx={{backgroundColor:'black',position:"static",width:"100%",margin:"auto",height:"40px",fontSize:"100%",fontWeight:"400"}}>QUERY</Button>
        </div>
           <div className={styles.row}>
              <p style={{fontSize:"100%"}}>@</p>
              <h4>{Date.now()}</h4>
           </div>
         

        </div>
      



    </div>

    {/* second box */}

    <div className={styles.container}>
        <div className={styles.header}> 
        <p>Vending Information</p>
        </div>
     
        <div className={styles.rowContainer}>
           <div className={styles.row}>
              <p style={{fontSize:"100%"}}>Serial Number</p>
              <h4>03960</h4>
           </div>
           <div className={styles.row}>
              <p style={{fontSize:"100%"}}>Stock Status</p>
              <h4>03960</h4>
           </div>
           <div className={styles.row}>
              <p style={{fontSize:"100%"}}>Napkins Vend</p>
              <h4>03960</h4>
           </div>
           <div className={styles.row}>
              <p style={{fontSize:"100%"}}>Cash</p>
              <h4>03960</h4>
           </div>
           <div className={styles.row}>
              <p style={{fontSize:"100%"}}>Cash Collected</p>
              <h4>03960</h4>
           </div>
           <div className={styles.buttonBox}>
        <Button variant="contained" sx={{backgroundColor:'#0094CE',position:"static",width:"100%",margin:"auto",height:"40px",fontSize:"100%",fontWeight:"400"}}>QUERY</Button>
        </div>
         
           <TextField
          Primary
          id="standard-error"
          label="Serial *"
          focused
          variant="standard"
        />
         
        </div>
      



    </div>

    {/* third box  */}

    <div className={styles.container}>
        <div className={styles.header}> 
        <p>Time</p>
        </div>
       
        <div className={styles.rowContainer}>
           <div className={styles.row}>
              <p style={{fontSize:"100%"}}>Power On @</p>
              <h4>03960</h4>
           </div>
           <div className={styles.row}>
              <p style={{fontSize:"100%"}}>Last Vend @</p>
              <h4>03960</h4>
           </div>
           <div className={styles.row}>
              <p style={{fontSize:"100%"}}>On Till @</p>
              <h4>03960</h4>
           </div>
           <div className={styles.buttonBox}>
        <Button variant="contained" sx={{backgroundColor:'red',position:"static",width:"100%",margin:"auto",height:"40px",fontSize:"100%",fontWeight:"400"}}>QUERY</Button>
        </div>
           


        </div>
      



    </div>





      </div>
    
    
    </>
}