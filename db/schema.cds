namespace Attachment;

using {
    cuid,
    managed
} from '@sap/cds/common';


entity college {
    key id:String;
    name:String;  
}

entity Files: cuid,managed {
    @Core.MediaType: mediaType   //logo
    content: LargeBinary;
    @Core.IsMediaType: true     //file type  
    mediaType : String;
    fileName: String;
    size: Integer;
    url: String;
}
