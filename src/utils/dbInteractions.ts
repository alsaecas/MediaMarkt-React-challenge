import parcelsInfo from "../../assets/db/parcels_mm.json";
export const parseCarriexDB = (data: any) => {
  let arrayParcel: any = [];
  data.forEach((parcel: any) => {
    const indexParcel = arrayParcel.findIndex(
      (el: any) => el.date === parcel.date
    );
    const items =
      parcelsInfo.find((x) => x.id.$oid === parcel.parcel).itemsCount || 0;
    if (indexParcel === -1) {
      arrayParcel.push({
        date: parcel.date,
        parcels: 1,
        carriers: 1,
        items: items,
      });
    } else {
      arrayParcel[indexParcel].parcels += 1;
      arrayParcel[indexParcel].carriers += 1;
      arrayParcel[indexParcel].items += items;
    }
  });
  console.log(arrayParcel);
  return arrayParcel;
};
