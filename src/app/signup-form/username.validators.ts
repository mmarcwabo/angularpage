//Do write all the validators here

import { AbstractControl, ValidationErrors } from "@angular/forms";

export class UsernameValidators {
    static cannotContainSpaces(control: AbstractControl): ValidationErrors | null {

        if ((control.value as string).indexOf(' ') >= 0)
            return { cannotContainSpaces: true };

        return null;
    }
    /**
     * 
     * @param control 
     * @returns ValidationErrors | null
     */
    static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors | null> {

        return new Promise((resolve, reject)=>{
            setTimeout(() => {
                if (control.value === 'wabo')
                    resolve({ shouldBeUnique: true });
                else resolve(null);
            }, 2000);
        });
    }
}