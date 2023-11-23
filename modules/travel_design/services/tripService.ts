import config from "tailwindcss/defaultConfig";

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

interface TokenResponse {
  type: string;
  username: string;
  application_name: string;
  client_id: string;
  token_type: string;
  access_token: string;
  expires_in: number;
  state: string;
  scope: string;
}

class TripService {
  static async getTrips(
      origin: string,
      destination: string,
      departureDate: string,
      returnDate: string,
      adults: number,
      children: number,
      babies: number,
      token: string
  ) {
    return await $fetch("https://test.api.amadeus.com/v2/shopping/flight-offers", {
      method: "POST",
      headers: {
        'Authorization': `Bearer ${token}`,
      },
      body: {
        currencyCode: "USD",
        originDestinations: [
          {
            "id": "1",
            "originLocationCode": origin,
            "destinationLocationCode": destination,
            "departureDateTimeRange": {
              "date": departureDate,
              "time": "9:00:00"
            }
          },
          {
            "id": "2",
            "originLocationCode": destination,
            "destinationLocationCode": origin,
            "departureDateTimeRange": {
              "date": returnDate,
              "time": "17:00:00"
            }
          }
        ],
        travelers: [
          {
            "id": "1",
            "travelerType": "ADULT"
          }
        ],
        sources: [
          "GDS"
        ],
        searchCriteria: {
          maxFlightOffers: 10,
          flightFilters: {
            cabinRestrictions: [
              {
                cabin: "ECONOMY",
                coverage: "MOST_SEGMENTS",
                originDestinationIds: [
                  "1"
                ]
              }
            ],
            carrierRestrictions: {
              excludedCarrierCodes: [
                "AA",
                "TP",
                "AZ"
              ]
            }
          }
        }
      }
    })
  }

  static async generateToken() {
    const requestData = new URLSearchParams();
    requestData.append("grant_type", "client_credentials");
    requestData.append("client_id", "ZdQjuruaTsta1t0tAxO4PLErPTDRD53S");
    requestData.append("client_secret", "HCgZ6BsRWxhCizQl");

    return await $fetch<TokenResponse>("https://test.api.amadeus.com/v1/security/oauth2/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: requestData
    })
  }
}

export default TripService