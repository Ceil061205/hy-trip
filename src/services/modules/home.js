import hyRequest from '../request'
export function getHomeHotSuggests() {
  return hyRequest.get({
    url: '/home/hotSuggests'
  }).then(res => {
    return res;
  })
}