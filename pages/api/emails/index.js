import { Resend } from 'resend';
import {Welcome} from "../../../emails/Welcome"

export async function POST(){
    const resend = new Resend('re_EBX5ss1T_9n7aStcnsnfBES3TsZdXmiEy');
			
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'enimofeodujirin@gmail.com',
      subject: 'hello world',
      react: Welcome(),
    });

}