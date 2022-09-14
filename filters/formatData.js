import Vue from "vue"
import { DateTime } from 'luxon'

Vue.filter('formatData', function (date, formatType) {
  switch (formatType) {
    case 'fullData':
      return DateTime.fromISO(new Date(date).toISOString())
        .setLocale('ru')
        .toLocaleString(DateTime.DATE_FULL)

    case 'toFormat':
      return DateTime.fromISO(new Date(date).toISOString()).setLocale('ru').toFormat('dd MMMM, EEEE')

    default: return false
  }
})