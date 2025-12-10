import { SendMailDto } from './dto/send-mail.dto';
export declare class MailService {
    sendMail(dto: SendMailDto): Promise<{
        messageId: any;
    }>;
    fetchUserListFromPublicApi(): Promise<any>;
}
