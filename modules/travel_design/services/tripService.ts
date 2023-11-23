import http from "~/modules/common/util/http";
import config from "tailwindcss/defaultConfig";

const url = config.public.flightsApiUrl;

type OriginDestination = {
  id: string;
  originLocationCode: string;
  destinationLocationCode: string;
  departureDateTimeRange: { date: string, time: string },
}

type SearchCriteria = {
  maxFlightOffers: number;
}

interface TravelQuery {
  currencyCode: string;
  originDestinations: OriginDestination[];
  travelers: { id: string, travelerType: string }[]
  sources: string[];
  searchCriteria: SearchCriteria;
}

class TripService {
  static async getTrips(query: TravelQuery) {
    return await $fetch(url, {
      method: "POST",
      body: JSON.stringify(query)
    })
  }
}

export default TripService