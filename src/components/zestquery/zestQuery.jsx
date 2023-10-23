
import styles from "./zestquery.module.css"
import Button from '@mui/material/Button';
import { TextField } from "@mui/material";

export default function ZestQuery(){
    


    return <>
    <div className={styles.container}>
        <div className={styles.header}> 
        <p>Query</p>
        </div>
        <div className={styles.buttonBox}>
        <Button variant="contained" sx={{backgroundColor:'#0094CE',position:"static",width:"100%",margin:"auto",height:"40px",fontSize:"100%",fontWeight:"400"}}>QUERY</Button>
        </div>
        <div className={styles.rowContainer}>
           <div className={styles.row}>
              <p style={{fontSize:"100%"}}>Query Form</p>
              <h4>03960</h4>
           </div>
           <div className={styles.row}>
              <p style={{fontSize:"100%"}}>Min A</p>
              <h4>03960</h4>
           </div>
           <div className={styles.row}>
              <p style={{fontSize:"100%"}}>Max A</p>
              <h4>03960</h4>
           </div>
           <div className={styles.row}>
              <p style={{fontSize:"100%"}}>Min B</p>
              <h4>03960</h4>
           </div>
           <div className={styles.row}>
              <p style={{fontSize:"100%"}}>Max B</p>
              <h4>03960</h4>
           </div>
           <div className={styles.row}>
              <p style={{fontSize:"100%"}}>Door Count</p>
              <h4>03960</h4>
           </div>
           <div className={styles.row}>
              <p style={{fontSize:"100%"}}>Process Time</p>
              <h4>03960</h4>
           </div>
           <div className={styles.row}>
              <p style={{fontSize:"100%"}}>Alert Time</p>
              <h4>03960</h4>
           </div>
           <div className={styles.row}>
              <p style={{fontSize:"100%"}}>Price</p>
              <h4>03960</h4>
           </div>
           <TextField
          Primary
          id="standard-error"
          label="Serial *"
          focused
          variant="standard"
        />
            <div className={styles.row}>
              <p style={{fontSize:"100%"}}>Packet</p>
              <h4>03960</h4>
           </div>


        </div>
      



    </div>
    
    
    </>
}