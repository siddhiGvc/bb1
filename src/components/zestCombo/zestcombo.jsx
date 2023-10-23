import styles from "./zestcombo.module.css"
import Button from '@mui/material/Button';
import { TextField } from "@mui/material";


export default function ZestCombo(){
    return <>
    <div className={styles.mainContainer}>
    <div className={styles.container}>
        <div className={styles.header}> 
        <p>Values</p>
        </div>
     
        <div className={styles.rowContainer}>
        <div className={styles.row}>
              <p style={{fontSize:"100%"}}>Serial Number</p>
              <h4>03960</h4>
           </div>
        <TextField
          id="standard-multiline-flexible"
          label="Price"
          multiline
          maxRows={4}
          variant="standard"
        /> 
          <TextField
          id="standard-multiline-flexible"
          label="Min Time Secondary"
          multiline
          maxRows={4}
          variant="standard"
        />
         <TextField
          id="standard-multiline-flexible"
          label="Max Temp Secondary"
          multiline
          maxRows={4}
          variant="standard"
        />
         <TextField
          id="standard-multiline-flexible"
          label="Min Temp Primary"
          multiline
          maxRows={4}
          variant="standard"
        />
         <TextField
          id="standard-multiline-flexible"
          label="Max Temp Primary"
          multiline
          maxRows={4}
          variant="standard"
        />
         <TextField
          id="standard-multiline-flexible"
          label="Door Count For Auto Burning"
          multiline
          maxRows={4}
          variant="standard"
        />
         <TextField
          id="standard-multiline-flexible"
          label="Maximum Burning Time"
          multiline
          maxRows={4}
          variant="standard"
        />
         <TextField
          id="standard-multiline-flexible"
          label="Auto Burn Time"
          multiline
          maxRows={4}
          variant="standard"
        />
         <TextField
          id="standard-multiline-flexible"
          label="Model"
          multiline
          maxRows={4}
          variant="standard"
        />
         <TextField
          id="standard-multiline-flexible"
          label="Manufacture"
          multiline
          maxRows={4}
          variant="standard"
        />
       
          


        </div>
      



    </div>
    {/* second box */}


    <div className={styles.container}>
        <div className={styles.header}> 
        <p>Save In Devices</p>
        </div>
       
        <div className={styles.rowContainer}>
        <div className={styles.buttonBox}>
        <Button variant="contained" sx={{backgroundColor:'#0094CE',position:"static",width:"100%",margin:"auto",height:"100px",fontSize:"100%",fontWeight:"400"}}>QUERY</Button>
        </div>
        <div className={styles.buttonBox}>
        <Button variant="contained" sx={{backgroundColor:'#0094CE',position:"static",width:"100%",margin:"auto",height:"200px",fontSize:"100%",fontWeight:"400"}}>QUERY</Button>
        </div>
        <div className={styles.buttonBox}>
        <Button variant="contained" sx={{backgroundColor:'#0094CE',position:"static",width:"100%",margin:"auto",height:"150px",fontSize:"100%",fontWeight:"400"}}>QUERY</Button>
        </div>
        <div className={styles.buttonBox}>
        <Button variant="contained" sx={{backgroundColor:'#0094CE',position:"static",width:"100%",margin:"auto",height:"40px",fontSize:"100%",fontWeight:"400"}}>QUERY</Button>
        </div>
        <div className={styles.buttonBox}>
        <Button variant="contained" sx={{backgroundColor:'#0094CE',position:"static",width:"100%",margin:"auto",height:"40px",fontSize:"100%",fontWeight:"400"}}>QUERY</Button>
        </div>
        <div className={styles.buttonBox}>
        <Button variant="contained" sx={{backgroundColor:'#0094CE',position:"static",width:"100%",margin:"auto",height:"40px",fontSize:"100%",fontWeight:"400"}}>QUERY</Button>
        </div>
         


        </div>
      



    </div>



    </div>


    
    
    </>
}