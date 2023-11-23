import http from "~/modules/common/util/http";

class TripService {
  static async getTrips() {
    return await http.get('/trips')
  }
}

export default TripService