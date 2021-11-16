import request from '../utils/request';

export async function getStatisticList(payload) {
  return request(`/stats/requests`, {
    method: 'GET',
    params: payload,
  });
}