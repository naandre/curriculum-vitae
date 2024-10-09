import { Certificate } from "./certificate";
import { Contact } from "./contact";
import { Experience } from "./experience";
import { Language } from "./languague";
import { Study } from "./study";

export interface Curriculum {
    name?: string;
    contact?: Contact;
    languages?: Language[];
    about?: string;
    experience?: Experience[];
    studies?: Study[];
    certificates?: Certificate[];
}