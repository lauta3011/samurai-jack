export const shortenLabel = (str: string) => {
    let ret: string;

    if(str.length >= 20) {
        ret = str.slice(0, 20).trim() + '...';
    } else {
        ret = str;
    }
    return ret;
}