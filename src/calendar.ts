import { getDaysInMonth, isWeekend } from 'date-fns'
import { range } from 'ramda'

type Period = {
  readonly starts: Date
  readonly ends: Date
  readonly checked: boolean
}

type Day = {
  readonly am: Period
  readonly pm: Period
}

type Month = {
  readonly [day: string]: Day
}

function monthData (year: number, month: number): Day[] {
  const daysInMonth = getDaysInMonth(new Date(year, month - 1))

  return range(1, daysInMonth + 1)
    .map((day) => {
      const date = new Date(year, month - 1, day)
      const checked = !isWeekend(date)
      return {
        am: {
          starts: new Date(date.setHours(9, 0)),
          ends: new Date(date.setHours(13, 0)),
          checked
        },
        pm: {
          starts: new Date(date.setHours(14, 0)),
          ends: new Date(date.setHours(17, 30)),
          checked
        }
      }
    })
}

function addKeys (month: Day[]): Month {
  return month.reduce<Month>((acc, day, idx) => ({ ...acc, [`${idx + 1}`]: day }), {})
}

export function defaultMonthData (year: number, month: number): Month {
  return addKeys(monthData(year, month))
}