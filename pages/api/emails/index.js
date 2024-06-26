import { Resend } from 'resend';
import {Welcome} from "../../../emails/Welcome"

export async function POST(req, res){
    const resend = new Resend('re_EBX5ss1T_9n7aStcnsnfBES3TsZdXmiEy');
			
    const { data, error } =  await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'enimofeodujirin@gmail.com',
      subject: 'hello world',
      react: Welcome(),
    });
    if (error) {
        return res.status(400).json(error);
      }
    
      res.status(200).json(data);
}