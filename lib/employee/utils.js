const utils = {
    addZero: (num) => {
        return num.toString().length === 1 ? '0' + num : num;
    },
    convertDateToISO: (d) => {    /* DD/MM/YYY */
        if (d && typeof d === "string") {
            const [day, month, year] = d.split('/');
            return new Date(`${year}-${utils.addZero(month)}-${utils.addZero(day)}`);
        }
    }
}

module.exports = utils;