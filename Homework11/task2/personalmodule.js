const todayDate = new Date();
module.exports.date = todayDate;

module.exports.showMessage = function (name) {
    let time = todayDate.getHours();

    switch (true) {
        case (time >= 23 && time < 5):
            return `Good night! ${name}`;
        case (time >= 5 && time < 11):
            return `Good morning! ${name}`;
        case (time >= 11 && time < 17):
            return `Good afternoon! ${name}`;
        case (time >= 17 && time < 23):
            return `Good evening! ${name}`;
    }
}



