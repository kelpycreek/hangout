
export function stringifyWhenWhere(when: string, where:string) {
    let result = "\n";
    if (when) {
        result = result + "**When:** " + when + "\n"
    }
    if (where) {
        result = result + "**Where:** " + where + "\n"
    }
    return result
}

export function stringifyList(list: string[]) {
    return list.reduce((result, item )=>{
        return result + "- " + item + "\n";
    }, "\n")
}