import { ApiProperty } from "@nestjs/swagger";
import { Contact, SocialNetwork, WebPageConfiguration } from "../class";
import { IsArray, IsObject, IsString, IsUrl } from "class-validator";

export class CreateConfigurationDto {

    @ApiProperty({
        type: Contact
    })
    @IsObject()
    contact:Contact;

    @ApiProperty({
        type: SocialNetwork,
        isArray:true
    })
    @IsArray()
    socialNetwork: SocialNetwork[];

    @ApiProperty({
        type: WebPageConfiguration
    })
    @IsObject()
    webPage: WebPageConfiguration;

    @ApiProperty()
    @IsUrl({},{ each: true })
    @IsArray()
    carousel: string[];
}
