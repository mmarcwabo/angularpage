//Do write all the validators here

import { AbstractControl, ValidationErrors } from "@angular/forms";
import { rootCertificates } from "tls";

export class UsernameValidators {
   static cannotContainSpaces(control: AbstractControl) {

        if((control.value as string).indexOf(' ')>=0)
            return { cannotContainSpaces: true };

        return null;
    }
    /**
     * 
     * @param control 
     * @returns ValidationErrors | null
     */
    static shouldBeUnique(control: AbstractControl) : ValidationErrors | null{
        //Let's simulate a server call
        if(control.value === 'wabo')
        return { shouldBeUnique: true }
        return null;
    }
}