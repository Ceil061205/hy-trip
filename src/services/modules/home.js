import hyRequest from '@/services/request/index.js';
export function getHomeHotSuggesst() {
  return hyRequest.get({ url: '/suggest/hotwords' }).then(res => {
    return res.data;
  })
}