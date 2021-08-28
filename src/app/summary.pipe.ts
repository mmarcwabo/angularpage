import { Pipe, PipeTransform } from "@angular/core";

//Adding pipe decoration function
@Pipe({
    name: "summary",
})
export class SummaryPipe implements PipeTransform{

    transform(value: string, limit?: any){

        if(!value)
        return null;
        //Set the default value (50) if the limit is not passed
        //as a param to the pipe
        let actualLimit = (limit) ? limit : 50;

        return value.substr(0, actualLimit) + "...";

    }

}