import {instance} from "./index"

export const getPlaces = ({address}) => {
  return new Promise((res, rej) => {
    instance({
      url: "places",
      method: "POST",
      data: {
        type: "кафе",
        address: address,
        topk: 10,
      }
    }).then(data => (
      res(data.data)
    )).catch(err => (rej(err)))
  })
}