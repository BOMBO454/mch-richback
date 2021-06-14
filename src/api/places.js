import { instance } from "./index"

export const getPlaces = ({address, type, filter}) => {
  return new Promise((res, rej) => {
    instance({
      url: "places",
      method: "POST",
      data: {
        type: type,
        address: address,
        topk: 10,
        from_price: filter.from_price,
        to_price: filter.to_price,
        from_area: filter.from_area,
        to_area: filter.to_area,
      },
    }).then(data => (
      res(data.data)
    )).catch(err => (rej(err)))
  })
}

export const getHeatMap = ({lat, lng, radius}) => {
  return new Promise((res, rej) => {
    instance({
      url: "heatmap",
      method: "POST",
      data: {
        lat, lng, radius
      }
    }).then(data => (
      res(data.data)
    )).catch(err => (rej(err)))
  })
}