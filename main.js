const dayjs = require('dayjs')

function birthday(date) {
  const birthday = dayjs(date)
  const today = dayjs()
  const ageInyears = today.diff(birthday, 'year')
  const nextBirthday = birthday.add(ageInyears + 1, 'year')
  const daysToNextBirthday = nextBirthday.diff(today, 'day') + 1

  console.log()
  console.log(`Data de hoje: ${today.format('DD/MM/YYYY')}`)
  console.log(`Idade: ${ageInyears}`)
  console.log(`Próximo aniversário: ${nextBirthday.format('DD/MM/YYYY')}`)
  console.log(
    `Dias até completar ${ageInyears + 1} anos: ${daysToNextBirthday}`
  )
}
birthday('1966-03-21')
birthday('1974-09-24')
birthday('1996-12-27')
