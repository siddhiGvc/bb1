import styles from "./home.module.css"
import ZestQuery from "../../components/zestquery/zestQuery"
import ZestCombo from "../../components/zestCombo/zestcombo"
import VendingIot from "../../components/VendingIot/veding"

export default function Home(){
    return <>
    <div className={styles.container}>
       <div>
        <div>
          <ZestQuery/>
          </div>
          <div>
          <ZestCombo/>
          </div>

       </div>
       <div>

         <VendingIot/>
       </div>
    


    </div>

    
    </>
}