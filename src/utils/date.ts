import moment from 'moment'

function getFullDate(time: number): string {
    return moment(time * 1000).format('DD.MM.YY HH:mm')
}

export {getFullDate}