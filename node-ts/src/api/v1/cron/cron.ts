import cron from 'node-cron';
import config from "../config/index";
import { job1 } from './job1';
import { job2 } from './job2';




export default function cronJob() {
  cron.schedule('*/10 * * * *', async () => {

    // job1()
    
  });
  cron.schedule('* * * * * *', async () => {

    // job2()
    
  });
  
  
}
