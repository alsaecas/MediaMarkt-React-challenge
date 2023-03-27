import { Parcel } from "./Parcel.type";

type Carrier = {
  id: { $oid: string };
  companyName: string;
  driver: string;
  licensePlate: string;
  centerAdress: string;
};

export type Carriex = {
  id: { $oid: string };
  date: string;
  parcel: Parcel;
  carrier: Carrier;
};
