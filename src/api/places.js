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

export const getHeatMap = ({lat,lng,radius}) => {
  return new Promise((res, rej) => {
    instance({
      url: "heatmap",
      method: "POST",
      data: {
        lat,lng,radius
      }
    }).then(data => (
      res(data.data)
    )).catch(err => (rej(err)))
  })
}