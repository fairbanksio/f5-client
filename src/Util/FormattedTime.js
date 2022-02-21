import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en.json'

export const timeAgoShort = (timestamp) =>{
  TimeAgo.addDefaultLocale(en)
  const timeAgo = new TimeAgo('en-US')
  return timeAgo.format(new Date(timestamp*1000), 'twitter')
}
