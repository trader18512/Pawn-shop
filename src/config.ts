import { ICollectionType, IConfig } from "./lib/app/types";

const CONFIG: IConfig = {
    coinDenom: "uandr",
    name: "Pawn Shop",
    chainId: "galileo-4",
    createdDate: "2024-10-26T11:16:45.048Z",
    modifiedDate: "2024-10-26T11:18:35.153Z",
    id: "pawnshop",
    collections: [
        {
            auction:
                "andr1tcd0a7rypnpyg0akdlc33axc794ymhcf06a85avf63rlg05er6kq034cxt",
            cw721: "andr1jwxn6wn2rqakp3ywqh6qnv8k54qnuvtpqww3446045wjq2hvfy4sq3cdsq",
            name: "Pawn",
            type: ICollectionType.AUCTION,
            id: "auction",
            featured: "ANDR1"
        },
        {
            marketplace:
                "andr16htx6sq7q67q09cwqhg8x6rw2er0rlzeldtx4l5glwr79c2u7nrqe5z3vs",
            cw721: "andr1jwxn6wn2rqakp3ywqh6qnv8k54qnuvtpqww3446045wjq2hvfy4sq3cdsq",
            name: "Defaulted Pawn",
            type: ICollectionType.MARKETPLACE,
            id: "marketplace",
        },
        
    ],
};

export default CONFIG;
