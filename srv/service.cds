using Attachment as attach from '../db/schema';

service AttachService {

    entity college as projection on attach.college;
    entity Files as projection on attach.Files;

}